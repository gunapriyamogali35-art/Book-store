import React from 'react';

const stats = [
  { label: 'Active Users', value: '12,480', change: '+8.2%' },
  { label: 'Books Listed', value: '3,812', change: '+3.1%' },
  { label: 'Pending Sellers', value: '27', change: '+4' },
  { label: 'Revenue', value: '$84k', change: '+12.4%' }
];

const quickActions = [
  'Review pending seller requests',
  'Approve featured books',
  'Monitor refund tickets',
  'Send system update notice'
];

const recentActivity = [
  { title: 'New seller registration', detail: 'Ava Books joined the marketplace', time: '10 min ago' },
  { title: 'Inventory updated', detail: '30 titles were added by the editorial team', time: '35 min ago' },
  { title: 'User report resolved', detail: 'A payment issue was handled successfully', time: '1 hr ago' }
];

function Ahome() {
  return (
    <div>
      <section style={{ marginBottom: '24px' }}>
        <h1 style={{ margin: '0 0 8px', fontSize: '32px' }}>Admin dashboard</h1>
        <p style={{ margin: 0, color: '#6b7280' }}>Monitor your bookstore operations and keep the platform running smoothly.</p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {stats.map((item) => (
          <div key={item.label} style={{ background: '#fff', borderRadius: '14px', padding: '18px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
            <div style={{ color: '#6b7280', fontSize: '14px' }}>{item.label}</div>
            <div style={{ fontSize: '24px', fontWeight: 700, margin: '8px 0' }}>{item.value}</div>
            <div style={{ color: '#16a34a', fontSize: '13px' }}>{item.change} from last week</div>
          </div>
        ))}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '20px' }}>
        <div style={{ background: '#fff', borderRadius: '14px', padding: '20px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
          <h2 style={{ marginTop: 0 }}>Quick actions</h2>
          <ul style={{ paddingLeft: '18px', color: '#374151', lineHeight: '1.8' }}>
            {quickActions.map((action) => (
              <li key={action}>{action}</li>
            ))}
          </ul>
        </div>

        <div style={{ background: '#fff', borderRadius: '14px', padding: '20px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
          <h2 style={{ marginTop: 0 }}>Recent activity</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {recentActivity.map((item) => (
              <div key={item.title} style={{ border: '1px solid #e5e7eb', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontWeight: 600 }}>{item.title}</div>
                <div style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>{item.detail}</div>
                <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '6px' }}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ahome;
