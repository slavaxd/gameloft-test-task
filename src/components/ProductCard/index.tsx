import { Product } from '@/types';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div className="h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-grey-800 mb-2">{product.name}</h3>
        <p className="text-grey-600 mb-4">{product.description}</p>

        <div className="flex justify-between items-center">
          <span className="text-blue-600">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
