# Maverick Enterprises E-Commerce Website

A modern, full-featured e-commerce platform built with Next.js for Maverick Enterprises.

## Features

- 🛍️ Product Catalog & Browsing
- 🛒 Shopping Cart Management
- 💳 Checkout Process
- 👤 User Authentication
- 📦 Order Management
- 🔍 Product Search & Filtering
- 📱 Responsive Design

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/enockfrench2010-alt/Maverick-Enterprises.git
cd Maverick-Enterprises
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── products/          # Products pages
│   ├── cart/              # Shopping cart
│   └── checkout/          # Checkout process
├── components/            # Reusable components
│   ├── Header.js
│   ├── Footer.js
│   ├── ProductCard.js
│   ├── ShoppingCart.js
│   └── ...
├── lib/                   # Utilities and helpers
│   ├── store.js          # Zustand store
│   └── api.js            # API calls
├── public/               # Static assets
├── styles/               # Global styles
└── package.json          # Dependencies
```

## Build & Deploy

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel:
1. Push to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Deploy automatically

## API Endpoints (To be implemented)

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product details
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order details

## Technologies Used

- **Next.js 14** - React framework
- **Zustand** - State management
- **Axios** - HTTP client
- **CSS Modules** - Styling

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

Proprietary - Maverick Enterprises

## Support

For support, please contact: support@maverickenterprises.com
