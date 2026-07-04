import React, { useState } from 'react';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User login for ${form.email}`);
  };

  return (
    <div style={{ maxWidth: '460px', margin: '40px auto', background: '#fff', borderRadius: '16px', padding: '28px', boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}>
      <h1 style={{ marginTop: 0 }}>User login</h1>
      <p style={{ color: '#6b7280', marginBottom: '20px' }}>Welcome back! Sign in to continue shopping.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} style={inputStyle} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Sign In</button>
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

export default Login;
