import React, { useState } from 'react';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User account created for ${form.email}`);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', background: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}>
      <h1 style={{ marginTop: 0 }}>Create account</h1>
      <p style={{ color: '#6b7280', marginBottom: '20px' }}>Join BookStore to discover new books and place orders.</p>
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

export default Signup;
