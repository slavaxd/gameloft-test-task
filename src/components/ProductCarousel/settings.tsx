import { Settings } from 'react-slick';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';

export const productCarouselSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
