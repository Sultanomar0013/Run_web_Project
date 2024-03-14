import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-red-700 flex justify-between items-center h-16 px-10">
      <h1 className="text-white text-xl font-bold font-customs">RUN</h1>
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="/" className="text-white hover:text-gray-400 hover:font-bold hover:scale-150 transition-all duration-500">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-400">
            Contact
          </a>
        </li>
      </ul>
      {/* Add a hamburger menu for mobile responsiveness (optional) */}
    </nav>
  );
};

export default Navbar;
