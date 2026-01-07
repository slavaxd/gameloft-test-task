import type { CartItem } from '@/types';
import MinusIcon from '@/assets/icons/minus.svg?react';
import PlusIcon from '@/assets/icons/plus.svg?react';
import TrashBinIcon from '@/assets/icons/trashBin.svg?react';
import {
  calculateFinalItemPrice,
  calculateItemDiscount,
  calculateItemTotal,
} from '@/components/ShoppingCart/helpers';

type Props = {
  data: CartItem;
  onUpdateQuantity: (id: CartItem['id'], quantity: number) => void;
  onRemoveItem: (id: CartItem['id']) => void;
};

export const ShoppingCartItem = ({
  data,
  onUpdateQuantity,
  onRemoveItem,
}: Props) => {
  const itemTotal = calculateItemTotal(data.price, data.quantity);
  const discountAmount = calculateItemDiscount(data.price, data.quantity);
  const itemFinalPrice = calculateFinalItemPrice(data.price, data.quantity);

  const hasDiscount = discountAmount > 0;

  return (
    <div className="flex gap-4 flex-wrap bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
      <img
        src={data.image}
        alt={data.name}
        className="w-full h-32 sm:w-24 sm:h-24 object-cover rounded-lg"
      />

      <div className="flex-1">
        <h3 className="sm:text-xl font-bold text-gray-800 mb-1">{data.name}</h3>
        <p className="text-blue-600 mb-3">${data.price.toFixed(2)}</p>

        <div className="flex justify-around sm:justify-start items-center gap-3">
          <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200">
            <button
              onClick={() =>
                onUpdateQuantity(data.id, Math.max(1, data.quantity - 1))
              }
              type="button"
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              <MinusIcon className="w-4 h-4" />
            </button>

            <span className="px-3 text-gray-800">{data.quantity}</span>

            <button
              onClick={() => onUpdateQuantity(data.id, data.quantity + 1)}
              type="button"
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => onRemoveItem(data.id)}
            type="button"
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
            aria-label="Remove item"
          >
            <TrashBinIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 text-right">
        {hasDiscount ? (
          <>
            <p className="text-gray-400 line-through text-sm">
              ${itemTotal.toFixed(2)}
            </p>

            <span className="py-1 px-2 text-white bg-red-500 text-sm rounded-full">
              -${discountAmount.toFixed(2)}
            </span>

            <p className="text-gray-800">${itemFinalPrice.toFixed(2)}</p>
          </>
        ) : (
          <p className="text-gray-800">${itemTotal.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};
