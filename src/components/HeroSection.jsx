import React from 'react';

export default function HeroSection({ onExploreClick }) {
  return (
    <div style={styles.hero}>
      {/* Background glow effects */}
      <div style={styles.glowLeft}></div>
      <div style={styles.glowRight}></div>
      
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <div style={styles.tag}>✨ Editor's Choice of the Month</div>
          <h1 style={styles.title}>
            Discover Stories That <br />
            <span style={styles.gradientText}>Ignite Your Mind</span>
          </h1>
          <p style={styles.subtitle}>
            Explore our curated collections of bestsellers, tech literature, science fiction, and biographies. Expand your bookshelves with beautiful stories.
          </p>
          <div style={styles.btnGroup}>
            <button onClick={onExploreClick} className="btn btn-primary" style={styles.exploreBtn}>
              Explore Collection 🚀
            </button>
            <a href="#featured" className="btn btn-secondary" style={styles.learnBtn}>
              Featured Book 📖
            </a>
          </div>
        </div>
        
        {/* Featured Book Showcase Card */}
        <div style={styles.showcase}>
          <div style={styles.book3DCard}>
            <div style={styles.bookCover}>
              <div style={styles.bookHeader}>BESTSELLER</div>
              <div style={styles.bookTitle}>THE ART OF CODING</div>
              <div style={styles.bookAuthor}>by Alex Mercer</div>
            </div>
            <div style={styles.bookDetails}>
              <div style={styles.detailsRow}>
                <span style={styles.genre}>Technology</span>
                <span style={styles.rating}>⭐ 4.9 (1.2k reviews)</span>
              </div>
              <p style={styles.detailsText}>
                Mastering modern software craftsmanship, clean architecture, and agentic code paradigms.
              </p>
              <div style={styles.detailsFooter}>
                <span style={styles.price}>$24.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    position: 'relative',
    padding: '80px 24px 60px',
    background: 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.05), transparent 60%)',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  glowLeft: {
    position: 'absolute',
    top: '-10%',
    left: '-10%',
    width: '350px',
    height: '350px',
    background: 'rgba(139, 92, 246, 0.15)',
    filter: 'blur(100px)',
    borderRadius: '50%',
    zIndex: 0,
  },
  glowRight: {
    position: 'absolute',
    bottom: '-10%',
    right: '-10%',
    width: '350px',
    height: '350px',
    background: 'rgba(236, 72, 153, 0.15)',
    filter: 'blur(100px)',
    borderRadius: '50%',
    zIndex: 0,
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '60px',
    position: 'relative',
    zIndex: 1,
    flexWrap: 'wrap',
  },
  textContainer: {
    flex: '1 1 500px',
    textAlign: 'left',
  },
  tag: {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: '99px',
    background: 'rgba(139, 92, 246, 0.15)',
    color: '#a78bfa',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '20px',
    border: '1px solid rgba(139, 92, 246, 0.25)',
  },
  title: {
    fontSize: '52px',
    fontWeight: '800',
    lineHeight: '1.15',
    letterSpacing: '-1.5px',
    marginBottom: '20px',
    color: '#ffffff',
  },
  gradientText: {
    background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '17px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    marginBottom: '36px',
    maxWidth: '520px',
  },
  btnGroup: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  exploreBtn: {
    padding: '14px 28px',
    borderRadius: '14px',
    fontSize: '15px',
    boxShadow: 'var(--shadow-accent)',
  },
  learnBtn: {
    padding: '14px 28px',
    borderRadius: '14px',
    fontSize: '15px',
  },
  showcase: {
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
    perspective: '1000px',
  },
  book3DCard: {
    width: '320px',
    background: 'rgba(19, 25, 38, 0.7)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    transform: 'rotateY(-10deg) rotateX(5deg)',
    transition: 'transform 0.5s ease',
    ':hover': {
      transform: 'rotateY(0deg) rotateX(0deg) scale(1.02)',
    }
  },
  bookCover: {
    height: '240px',
    background: 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '24px',
    position: 'relative',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  },
  bookHeader: {
    fontSize: '11px',
    letterSpacing: '2px',
    fontWeight: '700',
    color: '#a78bfa',
    position: 'absolute',
    top: '20px',
  },
  bookTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: '0.5px',
    marginTop: '10px',
  },
  bookAuthor: {
    fontSize: '13px',
    color: '#9ca3af',
    marginTop: '8px',
  },
  bookDetails: {
    padding: '20px',
    textAlign: 'left',
  },
  detailsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  genre: {
    fontSize: '12px',
    color: '#a78bfa',
    fontWeight: '600',
  },
  rating: {
    fontSize: '12px',
    color: '#fbbf24',
  },
  detailsText: {
    fontSize: '13px',
    lineHeight: '1.4',
    color: 'var(--text-secondary)',
    marginBottom: '14px',
  },
  detailsFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
  }
};
