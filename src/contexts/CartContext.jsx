import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const handleDecrease = () => setCount((prev) => Math.max(prev - 1, 0));
  const handleIncrease = () => setCount((prev) => prev + 1);
  const handleAddToCart = () => setCartItems(count);

  return (
    <CartContext.Provider
      value={{
        count,
        handleDecrease,
        handleIncrease,
        cartItems,
        handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
