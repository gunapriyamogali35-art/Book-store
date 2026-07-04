import React from 'react';

const books = [
  { id: 1, title: 'The Silent Orchard', author: 'Mina Cole', stock: 24, price: '$18' },
  { id: 2, title: 'Future of Light', author: 'Eli Hart', stock: 7, price: '$22' },
  { id: 3, title: 'Moonlit Maps', author: 'Jules Rivera', stock: 15, price: '$16' }
];

function Items() {
  return (
    <div>
      <h1 style={{ marginBottom: '16px' }}>Book inventory</h1>
      <div style={{ background: '#fff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead style={{ background: '#f9fafb' }}>
            <tr>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Author</th>
              <th style={thStyle}>Stock</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td style={tdStyle}>{book.title}</td>
                <td style={tdStyle}>{book.author}</td>
                <td style={tdStyle}>{book.stock}</td>
                <td style={tdStyle}>{book.price}</td>
                <td style={tdStyle}>
                  <button style={actionButton}>Edit</button>
                  <button style={{ ...actionButton, background: '#ef4444', marginLeft: '8px' }}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = { padding: '12px 14px', textAlign: 'left', borderBottom: '1px solid #e5e7eb' };
const tdStyle = { padding: '12px 14px', borderBottom: '1px solid #e5e7eb' };
const actionButton = { padding: '8px 10px', border: 'none', borderRadius: '8px', background: '#2563eb', color: '#fff', cursor: 'pointer' };

export default Items;
