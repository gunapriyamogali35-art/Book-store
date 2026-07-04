import React, { useState } from 'react';

const books = [
  { id: 1, title: 'The Silent Orchard', author: 'Mina Cole', price: '$18', category: 'Fiction' },
  { id: 2, title: 'Future of Light', author: 'Eli Hart', price: '$22', category: 'Science' },
  { id: 3, title: 'Moonlit Maps', author: 'Jules Rivera', price: '$16', category: 'Adventure' }
];

function Products() {
  const [filter, setFilter] = useState('All');

  const visibleBooks = filter === 'All' ? books : books.filter((book) => book.category === filter);

  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>Browse books</h1>
      <div style={{ marginBottom: '16px' }}>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} style={{ padding: '10px 12px', borderRadius: '10px', border: '1px solid #d1d5db' }}>
          <option value="All">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Adventure">Adventure</option>
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {visibleBooks.map((book) => (
          <div key={book.id} style={{ background: '#fff', borderRadius: '14px', padding: '16px', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
            <div style={{ fontWeight: 700 }}>{book.title}</div>
            <div style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>{book.author}</div>
            <div style={{ marginTop: '8px', color: '#2563eb', fontWeight: 700 }}>{book.price}</div>
            <div style={{ marginTop: '6px', color: '#64748b', fontSize: '13px' }}>{book.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
