'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [cartCount] = useState(0);

  return (
    <header>
      <div className="container">
        <h1>🚀 Maverick Enterprises</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart ({cartCount})</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
