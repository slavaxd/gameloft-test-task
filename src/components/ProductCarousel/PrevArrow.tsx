import PrevArrowIcon from '@/assets/icons/prevArrow.svg?react';

interface Props {
  onClick?: () => void;
}

export const PrevArrow = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10
       text-blue-600 group-hover:text-blue-900 bg-white/90 hover:bg-white shadow-lg
        rounded-full p-3 transition-all hover:scale-110 cursor-pointer"
      type="button"
      aria-label="Previous"
    >
      <PrevArrowIcon className="size-6" />
    </button>
  );
};
