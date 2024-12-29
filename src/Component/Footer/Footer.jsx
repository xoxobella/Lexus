/* eslint-disable no-unused-vars */
import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-feather';

const Footer = () => {
  const footerLinks = {
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Terms of Service', href: '#' }
      ]
    },
    products: {
      title: 'Products',
      links: [
        { name: 'Mattresses', href: '#' },
        { name: 'Bed Bases', href: '#' },
        { name: 'Pillows', href: '#' },
        { name: 'Furniture', href: '#' },
        { name: 'Accessories', href: '#' }
      ]
    },
    connect: {
      title: 'Connect',
      links: [
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'Twitter', href: '#', icon: Twitter }
      ]
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
            <p className="text-gray-600">
              Subscribe to our newsletter for exclusive offers and sleep tips.
            </p>
          </div>
          <div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                      >
                        {link.icon && <link.icon size={18} />}
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-gray-600">
                © {new Date().getFullYear()} Koala. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-black">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="/path-to-visa.svg" alt="Visa" className="h-6 grayscale hover:grayscale-0 transition-all" />
            <img src="/path-to-mastercard.svg" alt="Mastercard" className="h-6 grayscale hover:grayscale-0 transition-all" />
            <img src="/path-to-amex.svg" alt="American Express" className="h-6 grayscale hover:grayscale-0 transition-all" />
            <img src="/path-to-paypal.svg" alt="PayPal" className="h-6 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
