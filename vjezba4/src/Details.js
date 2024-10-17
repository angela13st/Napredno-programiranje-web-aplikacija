import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { type, subType, productName } = useParams();
  const [igrackaDetails, setIgrackaDetails] = useState(null);

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

  return (
    <div>
      <h2>Detalji igracke</h2>
      {igrackaDetails && (
        <div>
          <h3>{igrackaDetails.name}</h3>
          <p>{igrackaDetails.description}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
