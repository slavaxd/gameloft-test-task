import Slider from 'react-slick';
import type { Product } from '@/types';
import { productCarouselSettings } from './settings';
import { ProductCard } from './ProductCard';

type Props = {
  products: Product[];
  onAddToCart: (product: Product) => void;
};

export const ProductCarousel = ({ products, onAddToCart }: Props) => {
  return (
    <div className="relative px-8">
      <Slider {...productCarouselSettings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
