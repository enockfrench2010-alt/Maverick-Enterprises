'use client';

import useStore from '@/lib/store';

export default function CartPage() {
  const { cart, clearCart } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div style={{ marginTop: '20px' }}>
            {cart.map((item, index) => (
              <div key={index} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <p>{item.name} - ${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px', fontSize: '1.2rem' }}>
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <button
            onClick={clearCart}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
