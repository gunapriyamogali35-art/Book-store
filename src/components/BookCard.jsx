import React from 'react';

export default function BookCard({ book, onAddToCart }) {
  const { title, author, price, rating, category, coverGradient } = book;

  return (
    <div style={styles.card}>
      {/* Book Cover Visualization */}
      <div style={{ ...styles.cover, background: coverGradient || 'linear-gradient(135deg, #1f2937 0%, #111827 100%)' }}>
        <span style={styles.categoryBadge}>{category}</span>
        <div style={styles.coverTitle}>{title}</div>
        <div style={styles.coverAuthor}>{author}</div>
      </div>

      {/* Info Container */}
      <div style={styles.info}>
        <div style={styles.ratingRow}>
          <span style={styles.stars}>{"★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating))}</span>
          <span style={styles.ratingNum}>{rating}</span>
        </div>
        
        <h3 style={styles.title} title={title}>{title}</h3>
        <p style={styles.author}>by {author}</p>

        <div style={styles.footer}>
          <span style={styles.price}>${price.toFixed(2)}</span>
          <button 
            onClick={() => onAddToCart(book)} 
            className="btn btn-primary" 
            style={styles.addBtn}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: '#131926',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
    height: '380px',
    boxShadow: 'var(--shadow-sm)',
    ':hover': {
      transform: 'translateY(-6px)',
      borderColor: 'var(--accent-light)',
      boxShadow: 'var(--shadow-md)',
    }
  },
  cover: {
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
    color: '#ffffff',
    textAlign: 'center',
    userSelect: 'none',
  },
  categoryBadge: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'rgba(0, 0, 0, 0.6)',
    color: '#ffffff',
    padding: '3px 8px',
    borderRadius: '6px',
    fontSize: '10px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    backdropFilter: 'blur(4px)',
  },
  coverTitle: {
    fontSize: '15px',
    fontWeight: '800',
    marginBottom: '6px',
    maxWidth: '90%',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  coverAuthor: {
    fontSize: '11px',
    opacity: 0.8,
  },
  info: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    textAlign: 'left',
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '8px',
  },
  stars: {
    color: '#fbbf24',
    fontSize: '12px',
  },
  ratingNum: {
    fontSize: '11px',
    color: 'var(--text-secondary)',
  },
  title: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '4px',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  author: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
    marginBottom: '16px',
  },
  footer: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#ffffff',
  },
  addBtn: {
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '12px',
  }
};
