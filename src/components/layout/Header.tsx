import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

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
            <Sun size={32} className={`${isScrolled ? 'text-secondary' : 'text-primary'}`} />
            <span className="font-montserrat font-semibold text-xl">Ibergenil Energy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-secondary transition-colors">
              Inicio
            </Link>
            <Link to="#benefits" className="font-medium hover:text-secondary transition-colors">
              Beneficios
            </Link>
            <Link to="#testimonials" className="font-medium hover:text-secondary transition-colors">
              Testimonios
            </Link>
            <motion.a
              href="tel:+34900123456"
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
              <X size={24} className={isScrolled ? 'text-white' : 'text-primary'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-white' : 'text-primary'} />
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
              <Link
                to="/"
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="#benefits"
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                to="#testimonials"
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Testimonios
              </Link>
              <motion.a
                href="tel:+34900123456"
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