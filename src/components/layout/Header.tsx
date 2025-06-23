import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HashLink from '../interaction/HashLink';
import { Menu, X, Sun, Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-primary text-white shadow-md' : 'bg-transparent text-primary'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Sun size={32} className='text-secondary' />
            <span className="font-montserrat font-semibold text-xl">Ibergenil Energy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="font-medium hover:text-secondary transition-colors cursor-pointer">
              <HashLink to="hero">Inicio</HashLink>
            </div>

            <div className="font-medium hover:text-secondary transition-colors cursor-pointer">
              <HashLink to="benefits">Beneficios</HashLink>
            </div>

            <div className="font-medium hover:text-secondary transition-colors cursor-pointer">
              <HashLink to="testimonials">Testimonios</HashLink>
            </div>

            <motion.a
              href="tel:+34602038945"
              className={`flex items-center space-x-2 px-5 py-2 rounded-md ${
                isScrolled ? 'bg-secondary text-white' : 'bg-primary text-white'
              } hover:opacity-90 transition-all`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={18} />

              <span>Llámanos ahora</span>
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className='text-secondary' />
            ) : (
              <Menu size={24} className='text-secondary' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <div
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <HashLink to="hero">Inicio</HashLink>
              </div>

              <div
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <HashLink to="benefits">Beneficios</HashLink>
              </div>

              <div
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <HashLink to="testimonials">Testimonios</HashLink>
              </div>

              <motion.a
                href="tel:+34602038945"
                className="flex items-center justify-center space-x-2 bg-secondary text-white py-3 rounded-md mt-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} />
                <span>Llámanos ahora</span>
              </motion.a>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;