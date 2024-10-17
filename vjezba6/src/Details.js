// Details.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Details = () => {
  const { type, subType, productName } = useParams();
  const [igrackaDetails, setIgrackaDetails] = useState(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchIgrackaDetails = async () => {
      try {
        const response = await fetch(`http://demo3356886.mockable.io/vrstaIgracke/${type}/${subType}`);
        const data = await response.json();

        const selectedIgracka = data.igracka.find((item) => item.name === decodeURIComponent(productName));
        setIgrackaDetails(selectedIgracka);
      } catch (error) {
        console.error('Error fetching igracka details:', error);
      }
    };

    fetchIgrackaDetails();
  }, [type, subType, productName]);

  const handleDodajUKosaricu = () => {
    if (igrackaDetails) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: {
          name: igrackaDetails.name,
          description: igrackaDetails.description,
          quantity: igrackaDetails.quantity || 1,
        },
      });
      alert('Proizvod je dodan u košaricu!');
    }
  };

  return (
    <div>
      <h2>Detalji igracke</h2>
      {igrackaDetails && (
        <div>
          <h3>{igrackaDetails.name}</h3>
          <p>{igrackaDetails.description}</p>
          <button onClick={handleDodajUKosaricu}>Dodaj u košaricu</button>
          <Link to="/cart">Prikaži košaricu</Link>
        </div>
      )}
    </div>
  );
};

export default Details;
