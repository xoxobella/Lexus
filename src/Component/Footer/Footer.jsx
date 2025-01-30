import React from 'react';
import { Facebook, Instagram, Twitter } from 'react-feather';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Footer = () => {
  const footerLinks = {
    support: {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
    products: {
      title: 'Products',
      links: [
        { name: 'Mattresses', href: '#' },
        { name: 'Bed Bases', href: '#' },
        { name: 'Pillows', href: '#' },
        { name: 'Furniture', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
    },
    connect: {
      title: 'Connect',
      links: [
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'Twitter', href: '#', icon: Twitter },
      ],
    },
  };

  return (
    <motion.footer
      className="bg-white border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Newsletter Section */}
      <motion.div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-12" variants={fadeInVariants}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-4xl font-bold mb-3 text-secondary font-serif">Stay in the loop</h3>
            <p className="text-primary">Subscribe to our newsletter for exclusive offers and sleep tips.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4 sm:gap-2 md:gap-4 w-full">
            <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border border-gray-300 rounded-md" />
            <button className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-serif rounded-md hover:bg-gray-200 hover:text-gray-800 transition">Subscribe</button>
          </form>
        </div>
      </motion.div>

      {/* Footer Links */}
      <motion.div className="border-t border-gray-200 " variants={fadeInVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-lg mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-600 hover:text-black transition flex items-center gap-2">
                        {link.icon && React.createElement(link.icon, { size: 18 })}
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </motion.footer>

  );
};

export default Footer;
