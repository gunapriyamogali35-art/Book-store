import React from 'react';

function OrderItem({ title, status, tracking }) {
  return (
    <div style={{ background: '#fff', borderRadius: '14px', padding: '14px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
      <div style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>{status}</div>
      <div style={{ color: '#64748b', fontSize: '13px', marginTop: '6px' }}>{tracking}</div>
    </div>
  );
}

export default OrderItem;
