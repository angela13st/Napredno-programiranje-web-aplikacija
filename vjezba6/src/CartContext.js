// CartProvider.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // eslint-disable-next-line no-case-declarations
      const existingProductIndex = state.findIndex(item => item.name === action.payload.name);

      if (existingProductIndex !== -1) {
        // Product already exists in cart, update quantity
        const updatedCart = [...state];
        updatedCart[existingProductIndex].quantity += action.payload.quantity || 1;
        return updatedCart;
      } else {
        // Product doesn't exist in cart, add it
        return [...state, { ...action.payload, quantity: action.payload.quantity || 1 }];
      }
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };
