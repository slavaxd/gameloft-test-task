import { useState } from 'react';
import { CartItem, Product } from '@/types';
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
} from '@/helpers/shoppingCart';

export const useShoppingCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => addToCart(prev, product));
  };

  const handleRemoveFromCart = (productId: Product['id']) => {
    setCart((prev) => removeFromCart(prev, productId));
  };

  const handleUpdateQuantity = (productId: Product['id'], quantity: number) => {
    setCart((prev) => updateCartItemQuantity(prev, productId, quantity));
  };

  return {
    cart,
    addToCart: handleAddToCart,
    removeFromCart: handleRemoveFromCart,
    updateQuantity: handleUpdateQuantity,
  };
};
