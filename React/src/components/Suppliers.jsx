import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    axios.get('https://votre-backend-url.com/suppliers')
      .then(response => {
        setSuppliers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Suppliers</h1>
      <ul>
        {suppliers.map((supplier) => (
          <li key={supplier.id}>{supplier.name}</li>
        ))}
      </ul>
    </div>
  );
}