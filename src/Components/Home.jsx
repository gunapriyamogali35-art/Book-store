import React from 'react';
import Footer from './Footer';

const highlights = [
  { title: 'Curated Collections', text: 'Browse handpicked titles for every taste.' },
  { title: 'Fast Checkout', text: 'Enjoy a smooth purchasing experience across all devices.' },
  { title: 'Seller Tools', text: 'Help publishers manage inventory and reach buyers.' }
];

const categories = ['Fiction', 'Non-fiction', 'Children', 'Science', 'Biography'];

function Home() {
  return (
    <div>
      <section style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)', color: '#fff', borderRadius: '20px', padding: '36px 28px', marginBottom: '24px' }}>
        <h1 style={{ margin: '0 0 10px', fontSize: '36px' }}>Welcome to BookStore</h1>
        <p style={{ margin: 0, fontSize: '18px', maxWidth: '680px', lineHeight: 1.6 }}>
          Discover your next favorite read, explore trending books, and manage your store from one welcoming experience.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {highlights.map((item) => (
          <div key={item.title} style={{ background: '#fff', borderRadius: '14px', padding: '18px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
            <h3 style={{ marginTop: 0 }}>{item.title}</h3>
            <p style={{ marginBottom: 0, color: '#6b7280' }}>{item.text}</p>
          </div>
        ))}
      </section>

      <section style={{ background: '#fff', borderRadius: '14px', padding: '20px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
        <h2 style={{ marginTop: 0 }}>Popular categories</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {categories.map((category) => (
            <span key={category} style={{ padding: '8px 12px', borderRadius: '999px', background: '#eff6ff', color: '#1d4ed8', fontWeight: 600 }}>
              {category}
            </span>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
