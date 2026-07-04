import React, { useState } from 'react';

function Ssignup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Seller account created for ${form.email}`);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', background: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}>
      <h1 style={{ marginTop: 0 }}>Create seller account</h1>
      <p style={{ color: '#6b7280', marginBottom: '20px' }}>Register as a seller to start listing books.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} style={inputStyle} />
        <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} style={inputStyle} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Create Account</button>
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
  background: '#0f766e',
  color: '#fff',
  fontWeight: 600,
  cursor: 'pointer'
};

export default Ssignup;
