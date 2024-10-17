import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Košarica</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Količina: {item.quantity}</p> {/* Dodano prikazivanje količine */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Košarica je prazna.</p>
      )}
    </div>
  );
};

export default Cart;
