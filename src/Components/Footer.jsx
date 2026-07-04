import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#111827', color: '#f9fafb', padding: '24px 20px', marginTop: '32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: '18px', fontWeight: 700 }}>BookStore</div>
          <div style={{ color: '#cbd5e1', fontSize: '14px', marginTop: '4px' }}>Discover books, manage orders, and grow your reading community.</div>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', color: '#cbd5e1', fontSize: '14px' }}>
          <span>About</span>
          <span>Books</span>
          <span>Contact</span>
          <span>Privacy</span>
        </div>
      </div>
      <div style={{ maxWidth: '1200px', margin: '12px auto 0', color: '#9ca3af', fontSize: '13px' }}>
        © 2026 BookStore. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
