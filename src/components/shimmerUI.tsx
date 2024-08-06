// ShimmerItem.js
import React from 'react';
import './shimmer.css';

const ShimmerItem = () => {
  return (
    <div className="shimmer-item">
      <div className="shimmer shimmer-title"></div>
      <div className="shimmer shimmer-temperature"></div>
      <div className="shimmer shimmer-day"></div>
    </div>
  );
};

export default ShimmerItem;
