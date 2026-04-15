import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/abax_no_bg.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="z-50">
          <img
            src={logo}
            alt="logo"
            className="h-14 md:h-16 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav
          className={`hidden md:flex items-center gap-10 transition-colors duration-300 ${
            scrolled ? "text-gray-800 font-semibold" : "text-white font-medium"
          }`}
        >
          <NavLink to="/" className="hover:text-blue-600 transition">
            Home
          </NavLink>

          {/* ABOUT DROPDOWN */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition flex items-center gap-1">
              About
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 min-w-[200px]">
              <Link
                to="/about"
                className="block px-5 py-3 hover:bg-gray-100 whitespace-nowrap"
              >
                About Us
              </Link>
              <Link
                to="/team"
                className="block px-5 py-3 hover:bg-gray-100 whitespace-nowrap"
              >
                Our Team
              </Link>
              <Link
                to="/faqs"
                className="block px-5 py-3 hover:bg-gray-100 whitespace-nowrap"
              >
                FAQs
              </Link>
            </div>
          </div>

          <NavLink to="/servicepage" className="hover:text-blue-600 transition">
            Services
          </NavLink>

          {/* BLOGS DROPDOWN (NOT CLICKABLE) */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition flex items-center gap-1">
              Blogs
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            <div className="absolute top-full left-0 mt-2 bg-white text-gray-800 shadow-lg rounded-md overflow-hidden opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 min-w-[220px]">
              <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                Publications & News
              </div>
              <div className="px-5 py-3 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                Image Gallery
              </div>
            </div>
          </div>

          <NavLink to="/contact" className="hover:text-blue-600 transition">
            Contact
          </NavLink>
        </nav>
        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 z-50"
        >
          <span
            className={`absolute w-8 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "rotate-45 top-4" : "top-2"}`}
          />
          <span
            className={`absolute w-8 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "opacity-0 top-4" : "top-4"}`}
          />
          <span
            className={`absolute w-8 h-0.5 transition-all duration-300 ${
              scrolled ? "bg-black" : "bg-white"
            } ${mobileOpen ? "-rotate-45 top-4" : "top-6"}`}
          />
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center text-lg font-semibold transform transition-transform duration-500 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="py-4 w-4/5 text-center border-b"
        >
          Home
        </Link>

        {/* ABOUT */}
        <div className="w-4/5 border-b text-center">
          <button
            onClick={() => toggleDropdown("about")}
            className="w-full py-4 flex justify-center items-center gap-2"
          >
            About
            <span
              className={`transition-transform duration-300 ${
                openDropdown === "about" ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </button>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
              openDropdown === "about"
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block py-3 border-t"
            >
              About Us
            </Link>
            <Link
              to="/team"
              onClick={closeMobileMenu}
              className="block py-3 border-t"
            >
              Our Team
            </Link>
            <Link
              to="/faqs"
              onClick={closeMobileMenu}
              className="block py-3 border-t"
            >
              FAQs
            </Link>
          </div>
        </div>

        <Link
          to="/servicepage"
          onClick={closeMobileMenu}
          className="py-4 w-4/5 text-center border-b"
        >
          Services
        </Link>

        {/* BLOGS */}
        <div className="w-4/5 border-b text-center">
          <button
            onClick={() => toggleDropdown("blogs")}
            className="w-full py-4 flex justify-center items-center gap-2"
          >
            Blogs
            <span
              className={`transition-transform duration-300 ${
                openDropdown === "blogs" ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </button>

          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
              openDropdown === "blogs"
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-3 border-t">Publications & News</div>
            <div className="py-3 border-t">Image Gallery</div>
          </div>
        </div>

        <Link
          to="/contact"
          onClick={closeMobileMenu}
          className="py-4 w-4/5 text-center border-b"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
