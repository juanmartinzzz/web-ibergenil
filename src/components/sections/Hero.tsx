import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const [postalCode, setPostalCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!postalCode) {
      setError('Por favor ingresa tu código postal');
      return;
    }

    if (!/^\d{5}$/.test(postalCode)) {
      setError('Por favor ingresa un código postal válido');
      return;
    }

    // Find the form component and update its state
    const formElement = document.getElementById('solar-form');
    if (formElement) {
      // Dispatch a custom event that MultiStepForm will listen for
      const event = new CustomEvent('setPostalCode', {
        detail: { postalCode, startAtStep: 2 }
      });
      formElement.dispatchEvent(event);
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] flex items-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundPosition: '50% 60%'
        }}
      >
        <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1
            className="font-montserrat font-semibold text-4xl md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Aprovecha el poder de la energía solar para tu hogar
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Muchos no saben si su casa o negocio es compatible con instalaciones solares.
            Te lo chequeamos gratis y sin compromiso!
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin size={20} className="text-gray-400" />
                </div>

                <input
                  type="text"
                  placeholder="Código postal"
                  value={postalCode}
                  onChange={(e) => {
                    setPostalCode(e.target.value);
                    setError('');
                  }}
                  className="w-full pl-12 pr-4 py-4 rounded-md bg-white border-white border-2 bg-opacity-90 text-primary placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary"
                  maxLength={5}
                />
                {error && (
                  <p className="absolute -bottom-6 left-0 text-red-300 text-sm">
                    {error}
                  </p>
                )}
              </div>
              <motion.button
                type="submit"
                className="bg-secondary hover:bg-secondary-dark text-white font-montserrat font-medium px-8 py-4 rounded-md shadow-lg text-lg flex items-center justify-center whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Revisa tu disponibilidad</span>
                <ArrowRight size={20} className="ml-2" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Hero;