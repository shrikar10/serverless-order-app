import React from 'react';
import '../styles/HomePage.css'; // Optional: Import CSS for styling

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to MyApp</h1>
        <p>Your one-stop solution for all your needs.</p>
      </header>
      <section className="home-content">
        <h2>Features</h2>
        <ul>
          <li>Feature 1: User-friendly interface</li>
          <li>Feature 2: Fast and reliable</li>
          <li>Feature 3: Secure and scalable</li>
        </ul>
      </section>
      <footer className="home-footer">
        <p>© 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
