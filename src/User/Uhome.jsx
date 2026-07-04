import React from 'react';

const featuredBooks = [
  { title: 'The Silent Orchard', author: 'Mina Cole', price: '$18' },
  { title: 'Future of Light', author: 'Eli Hart', price: '$22' },
  { title: 'Moonlit Maps', author: 'Jules Rivera', price: '$16' }
];

const categories = ['Fiction', 'Science', 'Biography', 'Children'];

function Uhome() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #0f766e, #2563eb)', color: '#fff', borderRadius: '20px', padding: '32px 24px', marginBottom: '24px' }}>
        <h1 style={{ marginTop: 0, marginBottom: '8px', fontSize: '32px' }}>Find your next favorite book</h1>
        <p style={{ margin: 0, maxWidth: '650px', lineHeight: 1.6 }}>Explore featured titles, discover new categories, and enjoy a smooth shopping experience.</p>
      </section>

      <section style={{ marginBottom: '24px' }}>
        <h2 style={{ marginBottom: '12px' }}>Featured books</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {featuredBooks.map((book) => (
            <div key={book.title} style={{ background: '#fff', borderRadius: '14px', padding: '16px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
              <div style={{ fontWeight: 700 }}>{book.title}</div>
              <div style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>{book.author}</div>
              <div style={{ marginTop: '8px', color: '#2563eb', fontWeight: 700 }}>{book.price}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#fff', borderRadius: '14px', padding: '20px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
        <h2 style={{ marginTop: 0 }}>Recommended categories</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {categories.map((category) => (
            <span key={category} style={{ padding: '8px 12px', borderRadius: '999px', background: '#ecfeff', color: '#0f766e', fontWeight: 600 }}>
              {category}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Uhome;
