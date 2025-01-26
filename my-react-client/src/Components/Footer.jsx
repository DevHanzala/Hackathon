import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-blue-400">Saylani Welfare Trust</h1>
            <p className="text-gray-400 text-sm mt-2">
              Empowering communities with compassion and dignity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-blue-300">Quick Links</h2>
            <ul className="text-gray-400 text-sm mt-2 space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/reception" className="hover:text-blue-300">
                  Reception
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-blue-300">
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/department" className="hover:text-blue-300">
                  Department
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold text-blue-300">Contact Us</h2>
            <p className="text-gray-400 text-sm mt-2">
              <span className="block">Phone: +92-123-456789</span>
              <span className="block">Email: info@saylani.org</span>
              <span className="block">Address: Karachi, Pakistan</span>
            </p>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Saylani Welfare Trust. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
