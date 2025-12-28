import Slider from 'react-slick';
import { ProductCard } from '@/components';
import { Product } from '@/types';
import PrevArrow from '@/assets/icons/prevArrow.svg?react';
import NextArrow from '@/assets/icons/nextArrow.svg?react';

type ProductCarouselProps = {
  products: Product[];
};

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow2 = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
      aria-label="Previous"
    >
      <PrevArrow className="size-6 text-blue-600 group-hover:text-blue-900 transition-colors" />
    </button>
  );
};
const NextArrow2 = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
      aria-label="Next"
    >
      <NextArrow className="size-6 text-blue-600 group-hover:text-blue-900 transition-colors" />
    </button>
  );
};

export const ProductCarousel = ({ products }: ProductCarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow2 />,
    nextArrow: <NextArrow2 />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative px-8">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
