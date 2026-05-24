import ProductCard from '@/components/ProductCard';

// Sample products - will be replaced with API call
const allProducts = [
  { id: 1, name: 'Premium Product A', price: 99.99, image: '/products/product1.jpg', description: 'High-quality product' },
  { id: 2, name: 'Deluxe Product B', price: 149.99, image: '/products/product2.jpg', description: 'Luxury edition' },
  { id: 3, name: 'Standard Product C', price: 49.99, image: '/products/product3.jpg', description: 'Best value' },
  { id: 4, name: 'Elite Product D', price: 199.99, image: '/products/product4.jpg', description: 'Top tier quality' },
  { id: 5, name: 'Professional Product E', price: 249.99, image: '/products/product5.jpg', description: 'Professional grade' },
  { id: 6, name: 'Budget Product F', price: 29.99, image: '/products/product6.jpg', description: 'Affordable option' },
];

export const metadata = {
  title: 'Products - Maverick Enterprises',
  description: 'Browse all products from Maverick Enterprises',
};

export default function ProductsPage() {
  return (
    <section className="products-section">
      <div className="container">
        <h1>All Products</h1>
        <div className="products-grid">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
