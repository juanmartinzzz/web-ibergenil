import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MapPin, Sun } from 'lucide-react';

const CustomerGallery: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Carmen Rodríguez",
      location: "Granada",
      comment: "Cambiar a la energía solar con Ibergenil fue la mejor decisión para nuestra casa. La instalación fue rápida y profesional, y nuestras facturas de energía han disminuido significativamente!",
      imageSrc: "https://images.pexels.com/photos/9800027/pexels-photo-9800027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      id: 2,
      name: "Miguel Sánchez",
      location: "Granada",
      comment: "Como dueño de un negocio, buscaba formas de reducir los costos operativos. El equipo de Ibergenil proporcionó una excelente solución con su instalación comercial de energía solar.",
      imageSrc: "https://images.pexels.com/photos/4506224/pexels-photo-4506224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Martínez",
      location: "Granada",
      comment: "Me sorprendió lo sencillo que fue todo el proceso. Desde la consulta inicial hasta la instalación, todo fue manejado de manera profesional y eficiente.",
      imageSrc: "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4
    },
    {
      id: 4,
      name: "Javier López",
      location: "Granada",
      comment: "El conocimiento y la experiencia del equipo de Ibergenil son impresionantes. Respondieron todas mis preguntas y diseñaron un sistema que perfectamente cumple con las necesidades de energía de mi hogar.",
      imageSrc: "https://images.pexels.com/photos/9393860/pexels-photo-9393860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-semibold text-3xl md:text-4xl text-primary mb-4">
            Tus vecinos ya están cambiando a la energía solar
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Escucha a nuestros clientes satisfechos sobre su experiencia con Ibergenil Energy <Sun size={24} className="inline-block text-secondary" />
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Gallery Grid - Desktop */}
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={testimonial.imageSrc}
                    alt={`${testimonial.name}'s solar installation`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < testimonial.rating ? "#f7931e" : "none"}
                        stroke={i < testimonial.rating ? "#f7931e" : "#d1d5db"}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-montserrat font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-secondary text-white px-4 py-2 rounded-md text-sm"
                    >
                      Get Started
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel - Mobile */}
          <div className="md:hidden">
            <motion.div
              key={testimonials[currentIndex].id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={testimonials[currentIndex].imageSrc}
                  alt={`${testimonials[currentIndex].name}'s solar installation`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < testimonials[currentIndex].rating ? "#f7931e" : "none"}
                      stroke={i < testimonials[currentIndex].rating ? "#f7931e" : "#d1d5db"}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonials[currentIndex].comment}"</p>
                <div>
                  <h4 className="font-montserrat font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    {testimonials[currentIndex].location}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-secondary text-white py-2 rounded-md text-sm"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                className="p-2 rounded-full bg-white shadow-md"
                onClick={prevTestimonial}
              >
                <ChevronLeft size={24} className="text-primary" />
              </button>
              <button
                className="p-2 rounded-full bg-white shadow-md"
                onClick={nextTestimonial}
              >
                <ChevronRight size={24} className="text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerGallery;