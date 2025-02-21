import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-semibold">CarvanaX</span>
        </div>

        {/* Navigation Links */}

        <nav className="flex space-x-8 text-gray-300 text-lg">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/new" className="hover:text-white transition">New</a>
          <a href="/preowned" className="hover:text-white transition">Pre-Owned</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Social Icons */}

        <div className="flex space-x-6">
          <a href="https://www.instagram.com/the_sonu.nm/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-300 hover:text-white text-3xl transition" />
          </a>
          <a href="https://www.linkedin.com/in/sonunmahto/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-300 hover:text-white text-3xl transition" />
          </a>
          <a href="https://github.com/SonuNM1" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-300 hover:text-white text-3xl transition" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}

      <div className="mt-8 text-center text-gray-400 text-sm">
        © 2025 CarvanaX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
