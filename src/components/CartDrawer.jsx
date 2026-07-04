import React, { useState } from 'react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const [loading, setLoading] = useState(false);
  const [orderResult, setOrderResult] = useState(null);

  if (!isOpen) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckoutClick = async () => {
    setLoading(true);
    try {
      const res = await onCheckout();
      setOrderResult(res);
    } catch (err) {
      alert(`Checkout error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOrderResult(null);
    onClose();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div onClick={handleClose} style={styles.overlay}></div>

      {/* Cart Container */}
      <div style={styles.drawer}>
        <div style={styles.header}>
          <h2 style={styles.title}>Your Shopping Cart 🛒</h2>
          <button onClick={handleClose} style={styles.closeBtn}>×</button>
        </div>

        {/* Dynamic Cart Content */}
        <div style={styles.content}>
          {orderResult ? (
            /* Order confirmation state */
            <div style={styles.confirmContainer}>
              <span style={styles.confirmIcon}>🎉</span>
              <h3 style={styles.confirmTitle}>Order Placed!</h3>
              <p style={styles.confirmText}>Thank you for choosing AuraBooks. Your order is being processed.</p>
              
              <div style={styles.confirmReceipt}>
                <div style={styles.receiptRow}>
                  <span>Order ID:</span>
                  <strong style={styles.receiptValue}>{orderResult.orderId}</strong>
                </div>
                <div style={styles.receiptRow}>
                  <span>Total Amount:</span>
                  <strong style={styles.receiptValue}>${orderResult.total.toFixed(2)}</strong>
                </div>
                <div style={styles.receiptRow}>
                  <span>Items Count:</span>
                  <span>{orderResult.itemsCount}</span>
                </div>
              </div>

              <button onClick={handleClose} className="btn btn-primary" style={styles.continueShoppingBtn}>
                Explore More Books 📚
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty state */
            <div style={styles.emptyContainer}>
              <span style={styles.emptyIcon}>🛍️</span>
              <p style={styles.emptyText}>Your cart is currently empty.</p>
              <button onClick={handleClose} className="btn btn-secondary" style={styles.continueBtn}>
                Continue Shopping
              </button>
            </div>
          ) : (
            /* List of items */
            <div style={styles.itemsList}>
              {cartItems.map((item) => (
                <div key={item.id} style={styles.cartItem}>
                  <div style={{ ...styles.itemCover, background: item.coverGradient }}>
                    📚
                  </div>
                  <div style={styles.itemDetails}>
                    <h4 style={styles.itemTitle}>{item.title}</h4>
                    <p style={styles.itemAuthor}>by {item.author}</p>
                    <div style={styles.itemMeta}>
                      <span style={styles.itemPrice}>${item.price.toFixed(2)}</span>
                      <div style={styles.quantityControls}>
                        <button 
                          disabled={loading}
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          style={styles.quantityBtn}
                        >
                          -
                        </button>
                        <span style={styles.quantityNum}>{item.quantity}</span>
                        <button 
                          disabled={loading}
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          style={styles.quantityBtn}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button 
                    disabled={loading}
                    onClick={() => onRemoveItem(item.id)} 
                    style={styles.deleteBtn} 
                    title="Remove Item"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Summary */}
        {!orderResult && cartItems.length > 0 && (
          <div style={styles.footer}>
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Total:</span>
              <span style={styles.totalPrice}>${total.toFixed(2)}</span>
            </div>
            <button 
              disabled={loading}
              onClick={handleCheckoutClick}
              className="btn btn-primary" 
              style={styles.checkoutBtn}
            >
              {loading ? 'Processing Order...' : 'Proceed to Checkout 💳'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    backdropFilter: 'blur(4px)',
    zIndex: 1000,
    animation: 'fadeIn 0.2s ease-out',
  },
  drawer: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '400px',
    maxWidth: '100%',
    height: '100%',
    backgroundColor: '#111827',
    borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: 'var(--shadow-lg)',
    zIndex: 1001,
    display: 'flex',
    flexDirection: 'column',
    animation: 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  header: {
    padding: '24px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'var(--text-secondary)',
    fontSize: '28px',
    cursor: 'pointer',
    transition: 'var(--transition-fast)',
    ':hover': {
      color: '#ffffff',
    }
  },
  content: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '24px',
  },
  emptyContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
    textAlign: 'center',
  },
  emptyIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  emptyText: {
    color: 'var(--text-secondary)',
    fontSize: '15px',
    marginBottom: '24px',
  },
  continueBtn: {
    padding: '10px 20px',
    fontSize: '14px',
  },
  itemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  cartItem: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    background: '#1b2336',
    padding: '12px',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  itemCover: {
    width: '45px',
    height: '60px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
  },
  itemDetails: {
    flexGrow: 1,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  itemTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#ffffff',
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  itemAuthor: {
    fontSize: '11px',
    color: 'var(--text-secondary)',
    margin: 0,
  },
  itemMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '6px',
  },
  itemPrice: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#ffffff',
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    background: '#131926',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '6px',
    padding: '2px',
  },
  quantityBtn: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    transition: 'var(--transition-fast)',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    }
  },
  quantityNum: {
    fontSize: '12px',
    fontWeight: '600',
    minWidth: '20px',
    textAlign: 'center',
  },
  deleteBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '6px',
    borderRadius: '6px',
    transition: 'var(--transition-fast)',
    ':hover': {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    }
  },
  footer: {
    padding: '24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    background: '#131926',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '16px',
  },
  totalLabel: {
    color: 'var(--text-secondary)',
  },
  totalPrice: {
    color: '#ffffff',
  },
  checkoutBtn: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    fontSize: '15px',
    fontWeight: '600',
  },
  confirmContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 0',
    textAlign: 'center',
  },
  confirmIcon: {
    fontSize: '54px',
    marginBottom: '16px',
  },
  confirmTitle: {
    fontSize: '22px',
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: '8px',
  },
  confirmText: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    marginBottom: '24px',
    lineHeight: '1.4',
  },
  confirmReceipt: {
    width: '100%',
    background: '#1b2336',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '14px',
    padding: '16px',
    marginBottom: '32px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    textAlign: 'left',
  },
  receiptRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: 'var(--text-secondary)',
  },
  receiptValue: {
    color: '#ffffff',
  },
  continueShoppingBtn: {
    width: '100%',
    padding: '12px',
    borderRadius: '10px',
  }
};
