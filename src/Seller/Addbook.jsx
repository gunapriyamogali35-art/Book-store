import React, { useState } from 'react';

function Addbook() {
  const [form, setForm] = useState({ title: '', author: '', price: '', stock: '', image: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Book submitted: ${form.title}`);
  };

  return (
    <div style={{ maxWidth: '560px', margin: '32px auto', background: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}>
      <h1 style={{ marginTop: 0 }}>Add a new book</h1>
      <p style={{ color: '#6b7280', marginBottom: '20px' }}>List a new title for your bookstore catalog.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input name="title" placeholder="Book title" value={form.title} onChange={handleChange} style={inputStyle} />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} style={inputStyle} />
        <input name="price" placeholder="Price" value={form.price} onChange={handleChange} style={inputStyle} />
        <input name="stock" placeholder="Stock quantity" value={form.stock} onChange={handleChange} style={inputStyle} />
        <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Publish Book</button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '12px 14px',
  borderRadius: '10px',
  border: '1px solid #d1d5db',
  fontSize: '15px'
};

const buttonStyle = {
  padding: '12px 14px',
  borderRadius: '10px',
  border: 'none',
  background: '#2563eb',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer'
};

export default Addbook;
