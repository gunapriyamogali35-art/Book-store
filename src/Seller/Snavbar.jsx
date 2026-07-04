import { NavLink } from 'react-router-dom';

const links = [
  { to: '/seller/dashboard', label: 'Dashboard' },
  { to: '/seller/products', label: 'Products' },
  { to: '/seller/orders', label: 'Orders' },
  { to: '/seller/addbook', label: 'Add Book' }
];

function Snavbar() {
  return (
    <nav style={{ background: '#0f172a', color: '#fff', padding: '16px 24px', marginBottom: '24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '20px', fontWeight: 700 }}>Seller Panel</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} style={({ isActive }) => ({ color: isActive ? '#fff' : '#cbd5e1', textDecoration: 'none', fontWeight: 600 })}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/seller/login" style={({ isActive }) => ({ color: isActive ? '#fff' : '#cbd5e1', textDecoration: 'none', fontWeight: 600 })}>Login</NavLink>
          <NavLink to="/seller/signup" style={({ isActive }) => ({ color: isActive ? '#fff' : '#cbd5e1', textDecoration: 'none', fontWeight: 600 })}>Signup</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Snavbar;
