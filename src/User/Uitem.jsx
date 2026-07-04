import React from 'react';

function Uitem({ title, author, price, category }) {
  return (
    <div style={{ background: '#fff', borderRadius: '14px', padding: '16px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>{author}</div>
      <div style={{ marginTop: '8px', color: '#2563eb', fontWeight: 700 }}>{price}</div>
      <div style={{ marginTop: '6px', color: '#64748b', fontSize: '13px' }}>{category}</div>
    </div>
  );
}

export default Uitem;
