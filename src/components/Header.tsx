// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          E-Commerce
        </Link>
        <nav className="flex space-x-4">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
