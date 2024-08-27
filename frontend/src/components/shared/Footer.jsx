// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">JobHunt</h2>
            <p className="text-gray-400 mb-4">Your gateway to finding the perfect job.</p>
            <address className="text-gray-400">
              <p className="mb-1">123 JobHunt Street</p>
              <p className="mb-1">Suite 456</p>
              <p className="mb-1">City, State, 12345</p>
              <p className="mb-1">Phone: (123) 456-7890</p>
              <p>Email: <a href="mailto:info@jobhunt.com" className="text-blue-400 hover:underline">info@jobhunt.com</a></p>
            </address>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul>
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/jobs" className="hover:text-blue-400">Jobs</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} JobHunt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
