import React from 'react';
import '../styles/HomePage.css'; // Import CSS for styling


function HomePage() {

  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to our Ecommerce Store</h1>
        <p>Discover a world of amazing products.</p>
      </header>

      <section className="home-content">
        <h2>Featured Products</h2>
        <ul>
          <li>Product 1: High-quality clothing</li>
          <li>Product 2: Trendy accessories</li>
          <li>Product 3: Cutting-edge electronics</li>
          <li>Product 4: Stylish footwear</li>
          <li>Product 5: Home decor items</li>
        </ul>
      </section>
      <section className="home-promotions">
        <h2>Special Promotions</h2>
        <ul>
          <li>Get 20% off on all clothing items</li>
          <li>Free shipping on orders above $50</li>
          <li>Buy 2, Get 1 free on selected accessories</li>
        </ul>
      </section>
      <footer className="home-footer">
        <p>© 2024 Our Ecommerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;