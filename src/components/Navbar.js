import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.webp"; // Add your logo path here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Circular Logo */}
          <img
            src={Logo}
            alt="Gorakh Sawant Logo"
            className="h-12 w-12 rounded-full mr-3 object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-800 font-poppins">
            GorakhSawant
          </h1>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex items-center space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link to="/" className="text-gray-800 text-lg font-medium hover:text-blue-500 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 text-lg font-medium hover:text-blue-500 transition duration-300">
            About
          </Link>
          <Link to="/projects" className="text-gray-800 text-lg font-medium hover:text-blue-500 transition duration-300">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-800 text-lg font-medium hover:text-blue-500 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
