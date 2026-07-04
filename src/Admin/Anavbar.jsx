import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/users', label: 'Users' },
  { to: '/sellers', label: 'Sellers' },
  { to: '/items', label: 'Books' }
];

function Anavbar() {
  return (
    <nav style={{ background: '#111827', color: '#fff', padding: '16px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '20px', fontWeight: 700 }}>BookStore Admin</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} style={({ isActive }) => ({ color: isActive ? '#fff' : '#cbd5e1', textDecoration: 'none', fontWeight: 600 })}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/login" style={({ isActive }) => ({ color: isActive ? '#fff' : '#cbd5e1', textDecoration: 'none', fontWeight: 600 })}>Login</NavLink>
          <NavLink to="/signup" style={({ isActive }) => ({ color: isActive ? '#fff' : '#cbd5e1', textDecoration: 'none', fontWeight: 600 })}>Signup</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Anavbar;
