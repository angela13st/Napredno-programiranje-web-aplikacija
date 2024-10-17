import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Result = ({ igracka, type, subType }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <ul>
        {igracka.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <button onClick={() => handleProductClick(item)}>Detalji</button>
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <Link to={`/${type}/${subType}/details/${encodeURIComponent(selectedProduct.name)}`}>
          Detalji
        </Link>
      )}
    </div>
  );
};

export default Result;
