import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import heroBg1 from '../../assets/images/heroBg1.jpg';
import heroBg2 from '../../assets/images/heroBg2.jpg';

const RenderAListOfImagesInElementBackgroundEveryNSecondsAndBlurTheElementBetweenEachImage = ({imageUrls, intervalInMilliseconds, blurAmount}: {imageUrls: string[], intervalInMilliseconds: number, blurAmount: number}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shouldBlur, setShouldBlur] = useState(false);
  const [shouldBeTransparent, setShouldBeTransparent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);

      setShouldBlur(true);
      setShouldBeTransparent(true);
      setTimeout(() => {
        setShouldBlur(false);
      }, 800);
      setTimeout(() => {
        setShouldBeTransparent(false);
      }, 1900);
    }, intervalInMilliseconds);

    return () => clearInterval(interval);
  }, [imageUrls, intervalInMilliseconds]);

  return (
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{
        filter: `blur(${shouldBlur ? blurAmount : 0}px)`,
        transition: 'filter 0.6s ease-out',
        backgroundImage: `url(${imageUrls[currentImageIndex]})`
      }}
    >
      <div className="absolute inset-0 bg-primary" style={{ filter: `opacity(${shouldBeTransparent ? 0 : 0.7})`, transition: 'filter 1.9s ease-in' }}></div>
    </div>
  );
};

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
    <section id="hero" className="relative h-[80vh] flex items-center">
      <RenderAListOfImagesInElementBackgroundEveryNSecondsAndBlurTheElementBetweenEachImage
        imageUrls={[heroBg1, heroBg2]}
        intervalInMilliseconds={8000}
        blurAmount={12}
      />

      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <motion.h1
            className="font-montserrat font-semibold text-4xl md:text-5xl lg:text-6xl mb-6 text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Aprovecha el poder de la energía solar para tu hogar o negocio
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-100 text-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Muchos no saben si su casa o negocio es compatible con instalaciones solares.
            Te ayudaremos sin ningún compromiso!
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="grow relative">
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
                  className="w-full pl-12 pr-4 py-4 rounded-md bg-white border-white border-2 opacity-90 text-primary placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-secondary"
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