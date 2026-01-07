import { CartItem, Product } from '@/types';

export const addToCart = (cart: CartItem[], product: Product) => {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    return cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
    );
  }

  return [...cart, { ...product, quantity: 1 }];
};

export const removeFromCart = (cart: CartItem[], productId: Product['id']) => {
  return cart.filter((item) => item.id !== productId);
};

export const updateCartItemQuantity = (
  cart: CartItem[],
  productId: Product['id'],
  quantity: number,
) => {
  if (quantity < 1) {
    return removeFromCart(cart, productId);
  }

  return cart.map((item) =>
    item.id === productId ? { ...item, quantity } : item,
  );
};

export const getTotalCartItems = (cart: CartItem[]): number =>
  cart.reduce((sum, item) => sum + item.quantity, 0);
