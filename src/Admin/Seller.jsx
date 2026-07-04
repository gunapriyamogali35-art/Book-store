import React from 'react';

const sellers = [
  { id: 1, name: 'Bright Pages', email: 'seller1@bookstore.com', status: 'Approved' },
  { id: 2, name: 'Northwind Books', email: 'seller2@bookstore.com', status: 'Pending' },
  { id: 3, name: 'Evergreen Press', email: 'seller3@bookstore.com', status: 'Blocked' }
];

function Seller() {
  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>Seller management</h1>
      <div style={{ display: 'grid', gap: '12px' }}>
        {sellers.map((seller) => (
          <div key={seller.id} style={{ background: '#fff', borderRadius: '14px', padding: '16px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 700 }}>{seller.name}</div>
              <div style={{ color: '#6b7280', fontSize: '14px' }}>{seller.email}</div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 10px', borderRadius: '999px', background: '#e0f2fe', color: '#0369a1', fontSize: '13px' }}>{seller.status}</span>
              <button style={actionButton}>Approve</button>
              <button style={{ ...actionButton, background: '#f59e0b' }}>Block</button>
              <button style={{ ...actionButton, background: '#64748b' }}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const actionButton = { padding: '8px 10px', border: 'none', borderRadius: '8px', background: '#2563eb', color: '#fff', cursor: 'pointer' };

export default Seller;
