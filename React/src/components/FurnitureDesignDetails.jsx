import React from 'react';

export default function FurnitureDesignDetails({ design }) {
  return (
    <div>
      <h2>{design.name}</h2>
      <p>{design.description}</p>
    </div>
  );
}