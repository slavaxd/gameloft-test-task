import { useState } from 'react';
import { Header, ProductCarousel, ShoppingCart } from '@/components';
import { products } from '@/mocks';
import { getTotalCartItems } from '@/helpers/shoppingCart';
import { useShoppingCart } from '@/hooks/useShoppingCart';

export const App = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } = useShoppingCart();
  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleOpenCart = () => setIsCartOpened(true);
  const handleCloseCart = () => setIsCartOpened(false);

  const totalCartItems = getTotalCartItems(cart);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header handleOpenCart={handleOpenCart} totalCartItems={totalCartItems} />

      <main className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to the Magic Store
          </h2>

          <p className="text-lg text-gray-600">
            Discover our exclusive collection of magical products.
          </p>
        </div>

        <ProductCarousel products={products} onAddToCart={addToCart} />

        {isCartOpened && (
          <ShoppingCart
            cart={cart}
            onCloseCart={handleCloseCart}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
          />
        )}
      </main>
    </div>
  );
};
