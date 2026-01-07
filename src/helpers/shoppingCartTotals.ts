import { CartItem } from '@/types';
import {
  DISCOUNT_RATE,
  DISCOUNT_THRESHOLD,
} from '@/components/ShoppingCart/constants';

export const calculateSubtotal = (cart: CartItem[]) =>
  cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const calculateDiscount = (cart: CartItem[]) =>
  cart.reduce((sum, item) => {
    if (item.quantity > DISCOUNT_THRESHOLD) {
      return sum + item.price * item.quantity * DISCOUNT_RATE;
    }
    return sum;
  }, 0);

export const calculateTotal = (cart: CartItem[]) => {
  const subtotal = calculateSubtotal(cart);
  const discount = calculateDiscount(cart);

  return subtotal - discount;
};
