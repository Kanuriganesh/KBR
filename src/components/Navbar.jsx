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

  const navLinkClasses =
    "text-[#1B2430]/80 hover:text-[#0F2A47] font-medium px-3 py-2 transition-colors";

  return (
    <nav className="bg-[#F7F4EE]/95 backdrop-blur-sm border-b border-[#0F2A47]/10 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <Link to="/" onClick={closeMenu} className="flex-shrink-0 flex items-center gap-3">
            <img
              src="/logo.jpeg"
              alt="KBR Accountants Logo"
              className="h-11 w-11 md:h-12 md:w-12 object-cover rounded-sm border border-[#C99A3B]/60"
            />
            <span className="hidden sm:block font-[Fraunces,serif] text-xl text-[#0F2A47] tracking-tight">
              KBR
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={navLinkClasses}>Home</Link>
            <Link to="/services" className={navLinkClasses}>Services</Link>
            <Link to="/about" className={navLinkClasses}>About us</Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-[#0F2A47] hover:bg-[#0F2A47]/90 text-white font-medium py-2.5 px-6 rounded-sm shadow-[0_1px_0_0_#C99A3B] transition-colors"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#0F2A47] hover:text-[#0F2A47]/70 focus:outline-none focus:ring-2 focus:ring-[#C99A3B] rounded-sm p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close (X) Icon
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#F7F4EE] border-t border-[#0F2A47]/10 shadow-lg absolute w-full left-0">
          <div className="px-6 pt-2 pb-6 space-y-1">
            <Link
              to="/"
              onClick={closeMenu}
              className="block text-[#1B2430]/80 hover:text-[#0F2A47] hover:bg-[#0F2A47]/[0.04] font-medium px-3 py-3 rounded-sm transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="block text-[#1B2430]/80 hover:text-[#0F2A47] hover:bg-[#0F2A47]/[0.04] font-medium px-3 py-3 rounded-sm transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block text-[#1B2430]/80 hover:text-[#0F2A47] hover:bg-[#0F2A47]/[0.04] font-medium px-3 py-3 rounded-sm transition-colors"
            >
              About us
            </Link>

            <div className="pt-4 mt-2 border-t border-[#0F2A47]/10">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center bg-[#0F2A47] hover:bg-[#0F2A47]/90 text-white font-medium py-3 px-6 rounded-sm shadow-[0_1px_0_0_#C99A3B] transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
