import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MaterialDetails from './MaterialDetails';

export default function Materials() {
  const [materials, setMaterials] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/materials')
     .then(response => {
        setMaterials(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleMaterialClick = (material) => {
    setSelectedMaterial(material);
  };

  return (
    <div>
      <h1>Materials</h1>
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            <a href="#" onClick={() => handleMaterialClick(material)}>
              {material.name}
            </a>
          </li>
        ))}
      </ul>
      {selectedMaterial && (
        <MaterialDetails material={selectedMaterial} />
      )}
    </div>
  );
}