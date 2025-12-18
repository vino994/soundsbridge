import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">SOUNDSBRIDGE</h2>
          <p className="mb-2">123 Main Street, Suite 100</p>
          <p className="mb-2">Los Angeles, CA 90001</p>
          <p className="mb-2">Phone: +1 (123) 456-7890</p>
          <p>Email: info@soundsbridge.com</p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-blue-500 transition">About Us</a></li>
            <li><a href="/careers" className="hover:text-blue-500 transition">Careers</a></li>
            <li><a href="/consulting" className="hover:text-blue-500 transition">Consulting</a></li>
            <li><a href="/products" className="hover:text-blue-500 transition">Products</a></li>
            <li><a href="/services" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="/terms" className="hover:text-blue-500 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3: Contact / Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Stay Connected</h3>
          <p className="mb-4">Subscribe to our newsletter for the latest updates:</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 bg-white"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition">
              Subscribe
            </button>
          </form>
        </div>

        {/* Column 4: Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <p className="mb-4">Connect with us on social media:</p>
          <div className="flex space-x-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SOUNDSBRIDGE. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
