import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Result = ({ igracka, type, subType }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { dispatch } = useCart();

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: selectedProduct });
  };

  return (
    <div>
      <h2>Rezultati</h2>
      <ul>
        {igracka.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <button onClick={() => handleProductClick(item)}>Detalji</button>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <>
          <button onClick={handleAddToCart}>Dodaj u košaricu</button>
          <Link to={`/details/${type}/${subType}/${encodeURIComponent(selectedProduct.name)}`}>Detalji</Link>
        </>
      )}
    </div>
  );
};

export default Result;
