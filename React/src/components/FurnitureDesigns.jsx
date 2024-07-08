import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FurnitureDesignDetails from './FurnitureDesignDetails';

export default function FurnitureDesigns() {
  const [furnitureDesigns, setFurnitureDesigns] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState(null);

  useEffect(() => {
    axios.get('https://votre-backend-url.com/furniture-designs')
     .then(response => {
        setFurnitureDesigns(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDesignClick = (design) => {
    setSelectedDesign(design);
  };

  return (
    <div>
      <h1>Furniture Designs</h1>
      <ul>
        {furnitureDesigns.map((design) => (
          <li key={design.id}>
            <a href="#" onClick={() => handleDesignClick(design)}>
              {design.name}
            </a>
          </li>
        ))}
      </ul>
      {selectedDesign && (
        <FurnitureDesignDetails design={selectedDesign} />
      )}
    </div>
  );
}