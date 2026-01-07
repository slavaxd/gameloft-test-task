import { useState } from 'react';
import { Header, ProductCarousel, ShoppingCart } from '@/components';
import { CartItem, Product } from '@/types';
import { products } from '@/mocks';

export const App = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleOpenCart = () => {
    setIsCartOpened(true);
  };

  const handleCloseCart = () => {
    setIsCartOpened(false);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: Product['id']) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: Product['id'], quantity: number) => {
    if (quantity < 1) {
      handleRemoveFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header handleOpenCart={handleOpenCart} totalCartItems={totalCartItems} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to the Magic Store
          </h2>

          <p className="text-lg text-gray-600">
            Discover our exclusive collection of magical products.
          </p>
        </div>

        <ProductCarousel products={products} onAddToCart={handleAddToCart} />

        {isCartOpened && (
          <ShoppingCart
            cart={cart}
            onCloseCart={handleCloseCart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
          />
        )}
      </main>
    </div>
  );
};
