import React from 'react';
import './List.css';

const products = [
  { id: 1, title: 'The Silent Orchard', price: '$18', stock: 24 },
  { id: 2, title: 'Moonlit Maps', price: '$16', stock: 15 }
];

function MyProducts() {
  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>My products</h1>
      <div className="seller-list">
        {products.map((product) => (
          <div key={product.id} className="seller-card">
            <div>
              <div style={{ fontWeight: 700 }}>{product.title}</div>
              <div style={{ color: '#6b7280', fontSize: '14px' }}>Price: {product.price} · Stock: {product.stock}</div>
            </div>
            <div className="seller-actions">
              <button style={{ background: '#2563eb' }}>Edit</button>
              <button style={{ background: '#ef4444' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProducts;
