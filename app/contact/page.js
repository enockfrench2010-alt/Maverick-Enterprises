export const metadata = {
  title: 'Contact Us - Maverick Enterprises',
  description: 'Get in touch with Maverick Enterprises',
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1>Contact Us</h1>
      <div style={{ maxWidth: '600px', marginTop: '30px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
            required
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Send Message
          </button>
        </form>
        <div style={{ marginTop: '40px' }}>
          <h2>Contact Information</h2>
          <p>Email: support@maverick.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Enterprise Dr, City, State 12345</p>
        </div>
      </div>
    </div>
  );
}
