import React from 'react';

const stats = [
  { label: 'Sales', value: '$6,840', change: '+14%' },
  { label: 'Orders', value: '128', change: '+8%' },
  { label: 'Active Listings', value: '42', change: '+3' }
];

function Shome() {
  return (
    <div>
      <h1 style={{ marginBottom: '8px' }}>Seller dashboard</h1>
      <p style={{ color: '#6b7280', marginBottom: '20px' }}>Track your performance and manage your store from one place.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {stats.map((item) => (
          <div key={item.label} style={{ background: '#fff', borderRadius: '14px', padding: '18px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
            <div style={{ color: '#6b7280', fontSize: '14px' }}>{item.label}</div>
            <div style={{ fontSize: '24px', fontWeight: 700, margin: '8px 0' }}>{item.value}</div>
            <div style={{ color: '#16a34a', fontSize: '13px' }}>{item.change} this month</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shome;
