import { DISCOUNT_RATE, DISCOUNT_THRESHOLD } from './constants';

export const calculateItemTotal = (price: number, quantity: number) =>
  Math.max(0, price * quantity);

export const calculateItemDiscount = (price: number, quantity: number) => {
  if (quantity > DISCOUNT_THRESHOLD) {
    return calculateItemTotal(price, quantity) * DISCOUNT_RATE;
  }

  return 0;
};

export const calculateFinalItemPrice = (price: number, quantity: number) => {
  const total = calculateItemTotal(price, quantity);
  const discount = calculateItemDiscount(price, quantity);

  return total - discount;
};
