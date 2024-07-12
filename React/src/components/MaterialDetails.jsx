import React from 'react';

export default function MaterialDetails({ material }) {
  return (
    <div>
      <h2>{material?.name}</h2>
      <p>{material?.description}</p>
    </div>
  );
}