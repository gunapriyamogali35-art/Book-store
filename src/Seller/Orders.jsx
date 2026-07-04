import React from 'react';
import './List.css';

const orders = [
  { id: 101, customer: 'Emma Stone', book: 'The Silent Orchard', status: 'Pending' },
  { id: 102, customer: 'Noah Lee', book: 'Moonlit Maps', status: 'Shipped' }
];

function Orders() {
  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>Orders</h1>
      <div className="seller-list">
        {orders.map((order) => (
          <div key={order.id} className="seller-card">
            <div>
              <div style={{ fontWeight: 700 }}>#{order.id} · {order.customer}</div>
              <div style={{ color: '#6b7280', fontSize: '14px' }}>{order.book}</div>
            </div>
            <div className="seller-actions">
              <span style={{ padding: '6px 10px', borderRadius: '999px', background: '#e0f2fe', color: '#0369a1', fontSize: '13px' }}>{order.status}</span>
              <button style={{ background: '#16a34a' }}>Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
