'use client';

import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <span>No image available</span>
        )}
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          style={{
            backgroundColor: isAdded ? '#4caf50' : '#667eea',
          }}
        >
          {isAdded ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
