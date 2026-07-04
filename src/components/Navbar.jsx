import React from 'react';

export default function Navbar({ cartCount, onCartClick, searchQuery, onSearchChange }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        {/* Logo */}
        <div style={styles.logoContainer}>
          <span style={styles.logoIcon}>📚</span>
          <span style={styles.logoText}>Aura<span style={styles.logoHighlight}>Books</span></span>
        </div>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <span style={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search books by title, author..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        {/* Action Items */}
        <div style={styles.actions}>
          <button onClick={onCartClick} style={styles.cartBtn} className="btn">
            <span style={styles.cartIcon}>🛒</span>
            <span style={styles.cartLabel}>Cart</span>
            {cartCount > 0 && (
              <span className="badge" style={styles.badge}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    background: 'rgba(11, 15, 23, 0.8)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  logoIcon: {
    fontSize: '24px',
  },
  logoText: {
    fontSize: '22px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
    color: '#ffffff',
  },
  logoHighlight: {
    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  searchContainer: {
    position: 'relative',
    flex: '0 1 450px',
    display: 'flex',
    alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute',
    left: '14px',
    fontSize: '14px',
    color: 'var(--text-secondary)',
  },
  searchInput: {
    width: '100%',
    padding: '10px 16px 10px 42px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s ease',
    ':focus': {
      border: '1px solid var(--accent)',
      backgroundColor: 'rgba(255, 255, 255, 0.06)',
    }
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  cartBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '12px',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.2s ease',
  },
  cartIcon: {
    fontSize: '16px',
  },
  cartLabel: {
    fontSize: '14px',
    fontWeight: '500',
  },
  badge: {
    marginLeft: '4px',
    minWidth: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 6px',
    fontSize: '11px',
  }
};
