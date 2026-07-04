import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookCard from './components/BookCard';
import CartDrawer from './components/CartDrawer';
import './App.css';

const CATEGORIES = ["All", "Fiction", "Sci-Fi", "Biography", "Technology"];

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch books catalog from Express backend
  useEffect(() => {
    fetch('http://localhost:5000/api/user/books')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load catalog from server.');
        return res.json();
      })
      .then((apiResponse) => {
        // Extract the books array from the API response
        setBooks(apiResponse.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Handle adding book to cart
  const handleAddToCart = (book) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === book.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Process checkout order to backend API
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit order');
      }
      
      const orderData = await response.json();
      setCartItems([]); // Clear the shopping cart
      return orderData;
    } catch (err) {
      console.error('Checkout error:', err);
      throw err;
    }
  };

  // Total items in cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Filter books based on search & category
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scrollToBooks = () => {
    const section = document.getElementById('catalog-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Hero Section */}
      <HeroSection onExploreClick={scrollToBooks} />

      {/* Books Catalog */}
      <main className="container" id="catalog-section" style={{ marginTop: '50px' }}>
        <div style={styles.catalogHeader}>
          <h2 className="section-title">Explore Catalog</h2>
          
          {/* Category Tabs */}
          <div style={styles.tabContainer}>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  ...styles.tabBtn,
                  ...(selectedCategory === category ? styles.tabBtnActive : {}),
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading / Error / Grid States */}
        {loading ? (
          <div style={styles.messageState}>
            <span style={styles.spinner}>🌀</span>
            <p>Loading the latest books from server...</p>
          </div>
        ) : error ? (
          <div style={{ ...styles.messageState, color: '#ef4444' }}>
            <span style={styles.errorIcon}>⚠️</span>
            <p>Error loading catalog: {error}</p>
          </div>
        ) : filteredBooks.length > 0 ? (
          <div className="books-grid">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onAddToCart={handleAddToCart} />
            ))}
          </div>
        ) : (
          <div style={styles.noResults}>
            <span style={styles.noResultsIcon}>🔍</span>
            <p>No books match your criteria. Try searching something else!</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div className="container" style={styles.footerContainer}>
          <div>
            <h3 style={styles.footerBrand}>📚 AuraBooks</h3>
            <p style={styles.footerText}>Your window to a thousand worlds. Curated books with a gorgeous experience.</p>
          </div>
          <div style={styles.footerNewsletter}>
            <h4 style={styles.newsletterTitle}>Newsletter</h4>
            <div style={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" style={styles.newsletterInput} />
              <button className="btn btn-primary" style={styles.newsletterBtn}>Join</button>
            </div>
          </div>
        </div>
        <div style={styles.footerCopyright}>
          <p>&copy; {new Date().getFullYear()} AuraBooks. All rights reserved.</p>
        </div>
      </footer>

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

const styles = {
  catalogHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '16px',
  },
  tabContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  tabBtn: {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    color: 'var(--text-secondary)',
    padding: '8px 16px',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
  },
  tabBtnActive: {
    background: 'var(--accent-gradient)',
    color: '#ffffff',
    borderColor: 'transparent',
    boxShadow: 'var(--shadow-sm)',
  },
  messageState: {
    padding: '100px 24px',
    textAlign: 'center',
    color: 'var(--text-secondary)',
  },
  spinner: {
    fontSize: '40px',
    display: 'inline-block',
    animation: 'spin 1.5s linear infinite',
    marginBottom: '16px',
  },
  errorIcon: {
    fontSize: '40px',
    display: 'block',
    marginBottom: '16px',
  },
  noResults: {
    padding: '80px 24px',
    textAlign: 'center',
    color: 'var(--text-secondary)',
  },
  noResultsIcon: {
    fontSize: '48px',
    display: 'block',
    marginBottom: '16px',
  },
  footer: {
    background: '#131926',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '60px 0 20px',
    marginTop: 'auto',
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    flexWrap: 'wrap',
    textAlign: 'left',
    marginBottom: '40px',
  },
  footerBrand: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '12px',
    color: '#ffffff',
  },
  footerText: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    maxWidth: '300px',
    lineHeight: '1.5',
  },
  footerNewsletter: {
    flex: '0 1 350px',
  },
  newsletterTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#ffffff',
  },
  newsletterForm: {
    display: 'flex',
    gap: '10px',
  },
  newsletterInput: {
    flexGrow: 1,
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    color: '#ffffff',
    fontSize: '14px',
    outline: 'none',
  },
  newsletterBtn: {
    padding: '10px 20px',
    borderRadius: '10px',
  },
  footerCopyright: {
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '20px',
    fontSize: '13px',
    color: 'var(--text-muted)',
    textAlign: 'center',
  }
};

export default App;
