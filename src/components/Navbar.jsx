import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false); // PRODUCTS dropdown state
  const [toolsOpen, setToolsOpen] = useState(false); // TOOLS dropdown state
  const [mediaOpen, setMediaOpen] = useState(false); // MEDIA dropdown state
  const [aboutOpen, setAboutOpen] = useState(false); // ABOUT dropdown state

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

            {/* PRODUCTS Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer inline-flex items-center">PRODUCTS <FaAngleDown className="ml-1" /></span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-black rounded shadow-md z-50 w-40">
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/product1">Product 1</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/product2">Product 2</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/products/product3">Product 3</Link></li>
              </ul>
            </li>

            <li><Link to="/live-news" className="inline-flex items-center">LIVE NEWS <MdArrowOutward className="ml-1" /></Link></li>

            {/* ABOUT Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer inline-flex items-center">ABOUT <FaAngleDown className="ml-1" /></span>
              <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white text-black rounded shadow-md z-50 w-40">
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/aboutus">About</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/aboutus/contactus">Contact Us</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link to="/aboutus/careers">Careers</Link></li>                
              </ul>
            </li>
          </ul>
        </div>

        {/* Right: Sign In & Sign Up buttons */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/signin" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100 transition">Sign In</Link>
          <Link to="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition">Sign Up Now</Link>
        </div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl cursor-pointer">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu - Only Visible When Menu is Open */}
        {menuOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full bg-blue-500 p-4">
            <ul className="flex flex-col space-y-4">
              <li><Link to="/who-we-are" className="cursor-pointer">WHO WE ARE?</Link></li>

              {/* PRODUCTS Dropdown for Mobile */}
              <li>
                <button onClick={() => setProductsOpen(!productsOpen)} className="flex items-center cursor-pointer">
                  PRODUCTS <FaAngleDown className="ml-2" />
                </button>
                {productsOpen && (
                  <ul className="mt-2 bg-blue-600 p-2 rounded">
                    <li><Link to="/products/product1" className="cursor-pointer">Product 1</Link></li>
                    <li><Link to="/products/product2" className="cursor-pointer">Product 2</Link></li>
                    <li><Link to="/products/product3" className="cursor-pointer">Product 3</Link></li>
                  </ul>
                )}
              </li>

              {/* ABOUT Dropdown for Mobile */}
              <li>
                <button onClick={() => setAboutOpen(!aboutOpen)} className="flex items-center cursor-pointer">
                  ABOUT <FaAngleDown className="ml-2" />
                </button>
                {aboutOpen && (
                  <ul className="mt-2 bg-blue-600 p-2 rounded">
                    <li><Link to="/aboutus" className="cursor-pointer">About</Link></li>
                    <li><Link to="/aboutus/contactus" className="cursor-pointer">Contact Us</Link></li>
                    <li><Link to="/aboutus/careers" className="cursor-pointer">Careers</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/support" className="cursor-pointer">SUPPORT</Link></li>
              <li><Link to="/signin" className="cursor-pointer">Sign In</Link></li>
              <hr/>
              <Link to="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition w-full text-center cursor-pointer">
                Sign Up Now
              </Link>
            </ul>
          </div>
)}

      </div>

      {/* Mobile Menu - Only Visible When Menu is Open */}
      {menuOpen && (
      <div className="sm:hidden absolute top-16 left-0 w-full bg-blue-500 p-4">
        <ul className="flex flex-col space-y-4">
          <li><Link to="/who-we-are">WHO WE ARE?</Link></li>

          {/* PRODUCTS Dropdown for Mobile */}
          <li>
            <button 
              onClick={() => setProductsOpen(!productsOpen)} 
              className="flex items-center cursor-pointer" // ✅ Added cursor-pointer
            >
              PRODUCTS <FaAngleDown className="ml-2" />
            </button>
            {productsOpen && (
              <ul className="mt-2 bg-blue-600 p-2 rounded">
                <li><Link to="/products/product1" className="cursor-pointer">Product 1</Link></li>
                <li><Link to="/products/product2" className="cursor-pointer">Product 2</Link></li>
                <li><Link to="/products/product3" className="cursor-pointer">Product 3</Link></li>
              </ul>
            )}
          </li>

          {/* TOOLS Dropdown for Mobile */}
          <li>
            <button 
              onClick={() => setToolsOpen(!toolsOpen)} 
              className="flex items-center cursor-pointer" // ✅ Added cursor-pointer
            >
              TOOLS <FaAngleDown className="ml-2" />
            </button>
            {toolsOpen && (
              <ul className="mt-2 bg-blue-600 p-2 rounded">
                <li><Link to="/tools/tool1" className="cursor-pointer">Tool 1</Link></li>
                <li><Link to="/tools/tool2" className="cursor-pointer">Tool 2</Link></li>
                <li><Link to="/tools/tool3" className="cursor-pointer">Tool 3</Link></li>
              </ul>
            )}
          </li>

          {/* MEDIA Dropdown for Mobile */}
          <li>
            <button 
              onClick={() => setMediaOpen(!mediaOpen)} 
              className="flex items-center cursor-pointer" // ✅ Added cursor-pointer
            >
              MEDIA <FaAngleDown className="ml-2" />
            </button>
            {mediaOpen && (
              <ul className="mt-2 bg-blue-600 p-2 rounded">
                <li><Link to="/media/news" className="cursor-pointer">News</Link></li>
                <li><Link to="/media/reports" className="cursor-pointer">Reports</Link></li>
                <li><Link to="/media/blogs" className="cursor-pointer">Blogs</Link></li>
              </ul>
            )}
          </li>

          {/* ABOUT Dropdown for Mobile */}
          <li>
            <button 
              onClick={() => setAboutOpen(!aboutOpen)} 
              className="flex items-center cursor-pointer" // ✅ Added cursor-pointer
            >
              ABOUT <FaAngleDown className="ml-2" />
            </button>
            {aboutOpen && (
              <ul className="mt-2 bg-blue-600 p-2 rounded">
                <li><Link to="/about" className="cursor-pointer">About</Link></li>
                <li><Link to="/about/community" className="cursor-pointer">Community</Link></li>
                <li><Link to="/about/contact-us" className="cursor-pointer">Contact Us</Link></li>
                <li><Link to="/about/careers" className="cursor-pointer">Careers</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/support">SUPPORT</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <hr/>
          <Link to="/signup" className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition w-full text-center">
            Sign Up Now
          </Link>
        </ul>
      </div>
      )}

    </nav>
  );
};

export default Navbar;
