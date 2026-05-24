import ProductCard from '@/components/ProductCard';
import Hero from '@/components/Hero';

// Sample products - replace with API call
const products = [
  { id: 1, name: 'Premium Product A', price: 99.99, image: '/products/product1.jpg', description: 'High-quality product' },
  { id: 2, name: 'Deluxe Product B', price: 149.99, image: '/products/product2.jpg', description: 'Luxury edition' },
  { id: 3, name: 'Standard Product C', price: 49.99, image: '/products/product3.jpg', description: 'Best value' },
  { id: 4, name: 'Elite Product D', price: 199.99, image: '/products/product4.jpg', description: 'Top tier quality' },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="products-section">
        <div className="container">
          <h1>Featured Products</h1>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
