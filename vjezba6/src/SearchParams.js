import React, { useState, useEffect } from 'react';
import Result from './Result';

const SearchParams = () => {
  const [igrackaTypes, setIgrackaTypes] = useState([]);
  const [selectedIgrackaType, setSelectedIgrackaType] = useState('');
  const [subTypes, setSubTypes] = useState([]);
  const [selectedSubType, setSelectedSubType] = useState('');
  const [igrackaData, setIgrackaData] = useState([]);

  useEffect(() => {
    getIgrackaTypes();
  }, []);

  useEffect(() => {
    setSelectedSubType('');

    if (selectedIgrackaType) {
      getSubTypes(selectedIgrackaType);
    }
  }, [selectedIgrackaType]);

  const getIgrackaTypes = async () => {
    try {
      const response = await fetch(`http://localhost:3001/vrstaIgracke`);
      const data = await response.json();
      setIgrackaTypes(data.types);
    } catch (error) {
      console.error('Error fetching igracka types:', error);
    }
  };

  const getSubTypes = async (selectedType) => {
    try {
      const response = await fetch(`http://localhost:3001/vrstaIgracke/${selectedType}`);
      const data = await response.json();

      if (!data.subTypes) {
        console.error('Subtypes data not available:', data);
        return;
      }

      setSubTypes(data.subTypes);
    } catch (error) {
      console.error('Error fetching subtypes:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedIgrackaType && selectedSubType) {
      try {
        const response = await fetch(`http://localhost:3001/vrstaIgracke/${selectedIgrackaType}/${selectedSubType}`);
        const data = await response.json();

        if (!data.igracka) {
          console.error('Igracka data not available:', data);
          return;
        }

        setIgrackaData(data.igracka);
      } catch (error) {
        console.error('Error fetching igracka data:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="App">
      <h1>Odabir igrački</h1>
      <div>
        <label htmlFor="igrackaType">Odaberi vrstu igračke: </label>
        <select
          id="igrackaType"
          value={selectedIgrackaType}
          onChange={(e) => setSelectedIgrackaType(e.target.value)}
        >
          <option value="" disabled>Odaberi vrstu igračke</option>
          {igrackaTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="subType">Odaberi igračku: </label>
        <select
          id="subType"
          value={selectedSubType}
          onChange={(e) => setSelectedSubType(e.target.value)}
        >
          <option value="" disabled>Odaberi igračku</option>
          {subTypes.map((subType) => (
            <option key={subType} value={subType}>{subType}</option>
          ))}
        </select>
      </div>
      <button type="submit">Pretraži</button>
      {igrackaTypes.length > 0 && selectedSubType && (
        <Result igracka={igrackaData} type={selectedIgrackaType} subType={selectedSubType}/>
      )}
    </form>
  );
};

export default SearchParams;