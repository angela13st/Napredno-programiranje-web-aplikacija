import React, { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = shoppingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedShoppingCart = [...shoppingCart];
      updatedShoppingCart[existingProductIndex].quantity += product.quantity;
      setShoppingCart(updatedShoppingCart);
    } else {
      setShoppingCart([...shoppingCart, product]);
    }

    setShowModal(true);
  };

  const removeFromCart = (productId) => {
    setShoppingCart(shoppingCart.filter((item) => item.id !== productId));
  };

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleViewCart = () => {
    setShowModal(false);
    // Implement navigation to the cart page here
  };

  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, addToCart, removeFromCart }}>
      {children}
      {showModal && (
        <Modal onClose={handleModalClose} onViewCart={handleViewCart} />
      )}
    </ShoppingCartContext.Provider>
  );
};

const Modal = ({ onClose, onViewCart }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Product added to the cart!</p>
        <button onClick={onClose}>Close</button>
        <button onClick={onViewCart}>View Cart</button>
      </div>
    </div>
  );
};

export default ShoppingCartProvider;