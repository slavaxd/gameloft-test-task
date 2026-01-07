import CartIcon from '@/assets/icons/cart.svg?react';

type Props = {
  handleOpenCart: () => void;
  totalCartItems: number;
};

export const Header = ({ handleOpenCart, totalCartItems }: Props) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">
            Magic Store
          </h1>

          <button
            onClick={handleOpenCart}
            className="relative flex items-center space-x-1 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
            type="button"
            name="cart-button"
            aria-label="Cart"
          >
            <CartIcon className="size-6" />
            <span className="text-xl">Cart</span>

            {!!totalCartItems && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
