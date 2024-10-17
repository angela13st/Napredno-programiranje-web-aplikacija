import React, { useState, useEffect } from 'react';
import Result from './Result';

const MockDataService = 'http://demo3356886.mockable.io/';

const SearchParams = () => {
  const [flowerTypes, setFlowerTypes] = useState([]);
  const [selectedFlowerType, setSelectedFlowerType] = useState('');
  const [subTypes, setSubTypes] = useState([]);

  useEffect(() => {
    getFlowerTypes();
  }, []);

  useEffect(() => {
    if (selectedFlowerType) {
      getSubTypes(selectedFlowerType);
    }
  }, [selectedFlowerType]);

  const getFlowerTypes = async () => {
    try {
      const response = await fetch(`${MockDataService}vrstaIgracke`);
      const data = await response.json();
      setFlowerTypes(data.types);
    } catch (error) {
      console.error('Error fetching flower types:', error);
    }
  };

  const getSubTypes = async (selectedType) => {
    try {
      const response = await fetch(`${MockDataService}vrstaIgracke/${selectedType}`);
      const data = await response.json();
      setSubTypes(data.subTypes);
    } catch (error) {
      console.error('Error fetching subtypes:', error);
    }
  };

  return (
    <div className="App">
      <h1>Odabir igrački</h1>
      <div>
        <label htmlFor="flowerType">Odaberi vrstu igračke: </label>
        <select
          id="flowerType"
          value={selectedFlowerType}
          onChange={(e) => setSelectedFlowerType(e.target.value)}
        >
          <option value="" disabled>Odaberi vrstu igračke</option>
          {flowerTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="subType">Odaberi igračku: </label>
        <select id="subType">
          <option value="" disabled>Odaberi igračku</option>
          {subTypes.map((subType) => (
            <option key={subType} value={subType}>{subType}</option>
          ))}
        </select>
      </div>
      <Result data={subTypes} />
    </div>
  );
};

export default SearchParams;
