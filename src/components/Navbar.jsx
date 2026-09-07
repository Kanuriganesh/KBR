import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}

          <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center">
            <img
              src="/logo.jpeg"
              alt="KBR Accountants Logo"
              className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full border-2 border-yellow-500 shadow-sm transition-transform duration-300 hover:scale-105"
            />
          </Link>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-900 font-semibold px-3 py-2 rounded-md transition-colors">Home</Link>
            <Link to="/services" className="text-gray-800 hover:text-blue-900 font-semibold px-3 py-2 rounded-md transition-colors">Services</Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-900 font-semibold px-3 py-2 rounded-md transition-colors">About Us</Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded shadow transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-blue-900 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900 rounded p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close (X) Icon
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              to="/"
              onClick={closeMenu}
              className="block text-gray-800 hover:text-blue-900 hover:bg-blue-50 font-semibold px-3 py-3 rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="block text-gray-800 hover:text-blue-900 hover:bg-blue-50 font-semibold px-3 py-3 rounded-md transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block text-gray-800 hover:text-blue-900 hover:bg-blue-50 font-semibold px-3 py-3 rounded-md transition-colors"
            >
              About Us
            </Link>

            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded shadow transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;