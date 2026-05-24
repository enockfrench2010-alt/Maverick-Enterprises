export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h3>About Us</h3>
          <p>Maverick Enterprises delivers premium products and exceptional service to customers worldwide.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Email: support@maverick.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Enterprise Dr, City, State</li>
          </ul>
        </div>
        <div>
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Maverick Enterprises. All rights reserved.</p>
      </div>
    </footer>
  );
}
