import React from 'react';

const orders = [
  { id: 2001, title: 'The Silent Orchard', status: 'Delivered', tracking: 'In transit' },
  { id: 2002, title: 'Moonlit Maps', status: 'Processing', tracking: 'Packed' }
];

function MyOrders() {
  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>My orders</h1>
      <div style={{ display: 'grid', gap: '12px' }}>
        {orders.map((order) => (
          <div key={order.id} style={{ background: '#fff', borderRadius: '14px', padding: '16px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
            <div style={{ fontWeight: 700 }}>{order.title}</div>
            <div style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>Order #{order.id}</div>
            <div style={{ marginTop: '8px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 10px', borderRadius: '999px', background: '#e0f2fe', color: '#0369a1', fontSize: '13px' }}>{order.status}</span>
              <span style={{ padding: '6px 10px', borderRadius: '999px', background: '#f3f4f6', color: '#374151', fontSize: '13px' }}>{order.tracking}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
