import type { Product } from '@/types';
import { useState } from 'react';

type Props = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export const ProductCard = ({ product, onAddToCart }: Props) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 500);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-bold text-grey-800 mb-2">{product.name}</h3>
        <p className="text-grey-600 mb-4 text-base h-12">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600">${product.price.toFixed(2)}</span>

          <button
            onClick={handleAddToCart}
            className={`px-6 py-2 text-white rounded-full transition-colors ${
              isAdded
                ? 'bg-green-500'
                : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
            }`}
            type="button"
            name="add-to-cart-button"
            disabled={isAdded}
          >
            {isAdded ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};
