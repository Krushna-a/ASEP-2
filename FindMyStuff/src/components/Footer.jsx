import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faQrcode,
  faTags,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const Footer = ({ showRegisterPrompt = false }) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {showRegisterPrompt && (
        <div className="bg-white py-10 px-4 shadow-md rounded-lg max-w-4xl mx-auto my-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Why you should register?</h2>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-blue-500 text-xl">Animation</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-blue-500" />
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              "Your lost items can't yell. NFC tags give them a voice - and you, a lifeline"
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Register
            </Link>
            <Link to="/login" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Login
            </Link>
            <Link to="/found" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors">
              Found pill
            </Link>
          </div>
          
          <div className="flex justify-center gap-6 text-gray-600">
            <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            <Link to="/faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      )}
      
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">FindMyStuff</h3>
              <p className="text-gray-400 mb-4">
                The smart lost-and-found platform that helps people recover lost items using QR codes and NFC tags.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>

            {/* Rest of the footer remains unchanged */}
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link>
                </li>
                <li>
                  <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">Get Tags</Link>
                </li>
                <li>
                  <Link to="/scan" className="text-gray-400 hover:text-white transition-colors">Scan Tag</Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faQrcode} className="text-blue-400" />
                  <span>QR Code Tags</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <FontAwesomeIcon icon={faTags} className="text-blue-400" />
                  <span>NFC Tags</span>
                </li>
                <li>
                  <Link to="/business" className="text-gray-400 hover:text-white transition-colors">Business Solutions</Link>
                </li>
                <li>
                  <Link to="/custom-tags" className="text-gray-400 hover:text-white transition-colors">Custom Tags</Link>
                </li>
                <li>
                  <Link to="/premium" className="text-gray-400 hover:text-white transition-colors">Premium Features</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-blue-400 mt-1" />
                  <span className="text-gray-400">VIT Bibwewadi Pune</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-400" />
                  <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">+1 (123) 456-7890</a>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
                  <a href="mailto:support@findmystuff.com" className="text-gray-400 hover:text-white transition-colors">support@findmystuff.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} FindMyStuff. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
