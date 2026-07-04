import React from 'react';

function Book({ title, author, price, stock }) {
  return (
    <div style={{ background: '#fff', borderRadius: '14px', padding: '16px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div style={{ color: '#6b7280', marginBottom: '6px' }}>By {author}</div>
      <div style={{ fontWeight: 700, marginBottom: '6px' }}>{price}</div>
      <div style={{ color: '#64748b' }}>In stock: {stock}</div>
    </div>
  );
}

export default Book;
