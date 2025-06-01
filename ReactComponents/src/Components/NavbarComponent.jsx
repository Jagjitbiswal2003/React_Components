import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const menuItems = ['Home', 'About', 'Products'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return ( 
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600">MyLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <NavItem key={item} item={item} />
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={toggleMenu} />
    </nav>
  );
};

const NavItem = ({ item }) => (
  <a
    href="#"
    className="text-gray-700 hover:text-blue-600 font-medium transition"
  >
    {item}
  </a>
);

const MobileMenu = ({ isOpen, onClose }) => (
  <>
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <div className="text-xl font-bold text-blue-600">Menu</div>
        <button
          onClick={onClose}
          className="text-gray-800 focus:outline-none"
          aria-label="Close Menu"
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
      </div>
      <div className="flex flex-col p-4 space-y-4">
        {menuItems.map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-700 hover:text-blue-600 text-lg transition"
            onClick={onClose}
          >
            {item}
          </a>
        ))}
      </div>
    </div>

    {/* Overlay */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black opacity-30 z-40"
        onClick={onClose}
      />
    )}
  </>
);

export default Navbar;