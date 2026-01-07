import type { CartItem } from '@/types';
import CrossIcon from '@/assets/icons/cross.svg?react';
import CartIcon from '@/assets/icons/cart.svg?react';
import { ShoppingCartItem } from './ShoppingCartItem';
import { DISCOUNT_RATE, DISCOUNT_THRESHOLD } from './constants';
import { useEffect } from 'react';

type Props = {
  cart: CartItem[];
  onCloseCart: () => void;
  onRemoveItem: (id: CartItem['id']) => void;
  onUpdateQuantity: (id: CartItem['id'], quantity: number) => void;
};

export const ShoppingCart = ({
  cart,
  onCloseCart,
  onRemoveItem,
  onUpdateQuantity,
}: Props) => {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discount = cart.reduce((sum, item) => {
    if (item.quantity > DISCOUNT_THRESHOLD) {
      return sum + item.price * item.quantity * DISCOUNT_RATE;
    }
    return sum;
  }, 0);
  const total = subtotal - discount;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseCart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseCart]);

  return (
    <div
      onClick={onCloseCart}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col"
      >
        {/* Cart Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <CartIcon className="size-6 text-blue-600" />
            <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
          </div>
          <button
            onClick={onCloseCart}
            className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            type="button"
            aria-label="Close cart"
          >
            <CrossIcon className="size-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length ? (
            <div className="space-y-4">
              {cart.map((item) => (
                <ShoppingCartItem
                  key={item.id}
                  data={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemoveItem={onRemoveItem}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <CartIcon className="size-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
              <p className="text-gray-400">Add some magical items!</p>
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {!!cart.length && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-800">
                <span>Items total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-red-500">
                  <span>Items discount (10%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-gray-800 pt-2 border-t border-gray-300">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full rounded-full py-3 text-white bg-blue-600 hover:bg-blue-700 transition-colors cursor-pointer"
              aria-label="Proceed to checkout"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
