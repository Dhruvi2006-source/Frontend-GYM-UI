import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-100 shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-[80px] flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-2xl font-sans font-extrabold">
          Primal<span className="text-indigo-500">Training</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center font-mono">
          <Link
            to="/"
            className="text-black text-[17px] mx-5 hover:text-indigo-500 transition-colors duration-200"
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="text-black text-[17px] mx-5 hover:text-indigo-500 transition-colors duration-200"
          >
            ABOUT
          </Link>
          <Link
            to="/reserve"
            className="text-white mx-5 bg-indigo-500 px-5 py-2 rounded-md text-[15px] hover:bg-black transition-colors duration-300"
          >
            RESERVE YOUR SPOT
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-100 border-t border-gray-300 shadow-inner">
          <div className="flex flex-col items-center py-4 font-mono">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-black text-[17px] py-2 hover:text-indigo-500 transition"
            >
              HOME
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-black text-[17px] py-2 hover:text-indigo-500 transition"
            >
              ABOUT
            </Link>
            <Link
              to="/reserve"
              onClick={() => setIsOpen(false)}
              className="text-white bg-indigo-500 px-5 py-2 mt-3 rounded-md text-[15px] hover:bg-black transition"
            >
              RESERVE YOUR SPOT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
