import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Bosh sahifa", path: "/" },
    { name: "Loyihalarim", path: "/loyihalar" },
    { name: "O'zim haqimda", path: "/haqimda" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="mb-11">
      <header className="mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-black font-normal text-2xl sm:text-3xl lg:text-4xl focus:underline">
          <span className="sm:hidden">sh</span>
          <span className="sm:hidden">p</span>
          <span className="hidden sm:block">Shohruhbekning portfoliosi</span>
        </Link>

        {/* Menu button for mobile */}
        <button
          aria-label="Toggle menu"
          className="sm:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-7">
          {navLinks.map(({ name, path }) => (
            <Link key={path} to={path} className="text-black text-[18px] font-normal focus:underline">
              {name}
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          {navLinks.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-black font-normal py-2 px-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
