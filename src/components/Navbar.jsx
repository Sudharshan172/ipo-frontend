import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Tracks which dropdown is open

  // Disable scrolling when menu is open
  if (menuOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Bluestock Logo" className="h-7 w-auto" />
          </Link>
        </div>

        {/* Center: Large Device Nav Links */}
        <div className="hidden sm:flex flex-1 justify-center">
          <ul className="flex space-x-6 items-center">
            <li><Link to="/IPO">IPO</Link></li>
            <li><Link to="/community">COMMUNITY</Link></li>
            <li className="relative group">
              <span className="cursor-pointer inline-flex items-center">PRODUCTS <FaAngleDown className="ml-1" /></span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-black rounded shadow-md z-50 w-40">
                <li><Link to="/products/product1" className="block px-4 py-2 hover:bg-gray-100">Product 1</Link></li>
                <li><Link to="/products/product2" className="block px-4 py-2 hover:bg-gray-100">Product 2</Link></li>
              </ul>
            </li>
            <li><Link to="/live-news" className="inline-flex items-center">LIVE NEWS <MdArrowOutward className="ml-1" /></Link></li>
            <li className="relative group">
              <span className="cursor-pointer inline-flex items-center">ABOUT <FaAngleDown className="ml-1" /></span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-black rounded shadow-md z-50 w-40">
                <li><Link to="/aboutus" className="block px-4 py-2 hover:bg-gray-100">About Us</Link></li>
                <li><Link to="/aboutus/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</Link></li>
                <li><Link to="/aboutus/contactus" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Right: Sign In & Sign Up buttons */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/signin" className="bg-white text-blue-500 px-2 py-2 rounded hover:bg-gray-100 transition">Sign In</Link>
          <Link to="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition">Sign Up Now</Link>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl cursor-pointer">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Blurred Background Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40"></div>
      )}

      {/* Sidebar Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-[1%] left-[5%] w-[90%] h-7/8 bg-gray-100 text-black shadow-lg p-6 z-50 overflow-y-auto">
          {/* Close Button */}
          <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl text-black">
            <FaTimes />
          </button>

          <ul className="space-y-6 font-medium mt-8">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
            
            {/* IPO Dropdown */}
            <li>
              <button onClick={() => setOpenDropdown(openDropdown === "ipo" ? null : "ipo")} className="flex items-center w-full cursor-pointer">
                IPO <FaAngleDown className="ml-2" />
              </button>
              {openDropdown === "ipo" && (
                <ul className="mt-2 bg-gray-200 p-2 rounded">
                  <li><Link to="/ipo" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>IPO</Link></li>
                  <li><Link to="/ipo/upcoming" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Upcoming IPO</Link></li>
                </ul>
              )}
            </li>

            {/* PRODUCTS Dropdown */}
            <li>
              <button onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")} className="flex items-center w-full cursor-pointer">
                PRODUCTS <FaAngleDown className="ml-2" />
              </button>
              {openDropdown === "products" && (
                <ul className="mt-2 bg-gray-200 p-2 rounded">
                  <li><Link to="/products/product1" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Product 1</Link></li>
                  <li><Link to="/products/product2" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Product 2</Link></li>
                </ul>
              )}
            </li>

            {/* ABOUT Dropdown */}
            <li>
              <button onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")} className="flex items-center w-full cursor-pointer">
                ABOUT <FaAngleDown className="ml-2" />
              </button>
              {openDropdown === "about" && (
                <ul className="mt-2 bg-gray-200 p-2 rounded">
                  <li><Link to="/aboutus" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>About Us</Link></li>
                  <li><Link to="/aboutus/careers" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Careers</Link></li>
                  <li><Link to="/aboutus/contactus" onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}>Contact Us</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/live-news" onClick={() => setMenuOpen(false)}>LIVE NEWS</Link></li>
            <li><Link to="/signin" onClick={() => setMenuOpen(false)}>Sign In</Link></li>
            <hr />
            <Link to="/signup" onClick={() => setMenuOpen(false)} className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition inline-block">
              Sign Up Now
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
