export const getTotalCartAmount = (cart) => {
  if (!cart || cart.length === 0) return 0;
  return cart.reduce((acc, cur) => acc + (cur.product?.price || 0), 0);
};