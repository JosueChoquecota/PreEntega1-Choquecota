import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderID, setOrderID] = useState(null);
  const [orderDate, setOrderDate] = useState(null);

  const addToCart = (item) => {
    const itemExistenteIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (itemExistenteIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemExistenteIndex].quantity += item.quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, item]);
    }
  };
  

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clearItem = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearItem, isInCart, orderID, setOrderID, orderDate, setOrderDate }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
