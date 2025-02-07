import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#242424] max-[435px]:h-20 p-4 w-full fixed top-0 left-0 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Albi Zhaku</Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6">
          <Link to="/" className="text-white py-2 hover:bg-gray-700 rounded">Home</Link>
          <Link to="/about" className="text-white py-2 hover:bg-gray-700 rounded">About</Link>
          <Link to="/resume" className="text-white py-2 hover:bg-gray-700 rounded">Resume</Link>
          <Link to="/projects" className="text-white py-2 hover:bg-gray-700 rounded">Projects</Link>
          <Link to="/contact" className="text-white py-2 hover:bg-gray-700 rounded">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-white text-2xl focus:outline-none mr-2"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden flex flex-col bg-[#242424] p-4 space-y-2 transition-all duration-300 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <Link to="/" className="text-white py-2 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" className="text-white py-2 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/resume" className="text-white py-2 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>Resume</Link>
        <Link to="/projects" className="text-white py-2 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" className="text-white py-2 hover:bg-gray-700 rounded" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
