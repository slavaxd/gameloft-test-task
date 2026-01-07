import NextArrowIcon from '@/assets/icons/nextArrow.svg?react';

interface Props {
  onClick?: () => void;
}

export const NextArrow = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10
       text-blue-600 group-hover:text-blue-900 bg-white/90 hover:bg-white shadow-lg
        rounded-full p-3 transition-all hover:scale-110 cursor-pointer"
      aria-label="Next"
    >
      <NextArrowIcon className="size-6" />
    </button>
  );
};
