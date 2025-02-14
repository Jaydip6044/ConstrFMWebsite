import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar z-50 w-full flex justify-between items-center font-medium bg-slate-800 h-26 fixed top-0 left-0 text-white p-4">
      {/* Logo */}
      <div className="logo ml-[100px] bg-amber-500 rounded-2xl p-2 h-full">
        <h1 className="text-xl font-bold">SPHERE</h1>
        <h1 className="text-xl font-bold">CONSTRUCTION</h1>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden mr-[10px]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`md:flex flex-row gap-8 mr-[100px] ${
          isOpen ? "flex-col text-center shadow-md bg-slate-600 p-2 " : "hidden"
        } absolute md:static top-16 left-0 w-full md:w-auto bg-[#202020] md:bg-transparent p-4 md:p-0`}
      >
        <Link
          to="/"
          className="block md:inline-block p-2 hover:text-amber-500 hover:border-b border-white"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block md:inline-block p-2 hover:text-amber-500 hover:border-b border-white"
        >
          About
        </Link>
        <Link
          to="/services"
          className="block md:inline-block p-2 hover:text-amber-500 hover:border-b border-white"
        >
          Services
        </Link>
        <Link
          to="/projects"
          className="block md:inline-block p-2 hover:text-amber-500 hover:border-b border-white"
        >
          Projects
        </Link>
        <Link
          to="/contacts"
          className="block md:inline-block p-2 hover:text-amber-500 hover:border-b border-white"
        >
          Contacts
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
