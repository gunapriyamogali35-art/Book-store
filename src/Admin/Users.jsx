import React from 'react';

const users = [
  { id: 1, name: 'Emma Stone', email: 'emma@example.com', status: 'Active' },
  { id: 2, name: 'Noah Lee', email: 'noah@example.com', status: 'Pending' },
  { id: 3, name: 'Mia Chen', email: 'mia@example.com', status: 'Suspended' }
];

function Users() {
  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>User management</h1>
      <div style={{ display: 'grid', gap: '12px' }}>
        {users.map((user) => (
          <div key={user.id} style={{ background: '#fff', borderRadius: '14px', padding: '16px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 700 }}>{user.name}</div>
              <div style={{ color: '#6b7280', fontSize: '14px' }}>{user.email}</div>
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ padding: '6px 10px', borderRadius: '999px', background: '#dcfce7', color: '#166534', fontSize: '13px' }}>{user.status}</span>
              <button style={actionButton}>Manage</button>
              <button style={{ ...actionButton, background: '#64748b' }}>History</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const actionButton = { padding: '8px 10px', border: 'none', borderRadius: '8px', background: '#2563eb', color: '#fff', cursor: 'pointer' };

export default Users;
