import { Settings } from 'react-slick';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';

export const productCarouselSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1023,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 767,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 479,
      settings: { slidesToShow: 1, arrows: false },
    },
  ],
};
