import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/Welcome';
import FurnitureDesigns from './components/FurnitureDesigns';
import Materials from './components/Materials';
import Suppliers from './components/Suppliers';

ReactDOM.render(
  <React.StrictMode>
    <Welcome />
    <FurnitureDesigns />
    <Materials />
    <Suppliers />
  </React.StrictMode>,
  document.getElementById('root')
);