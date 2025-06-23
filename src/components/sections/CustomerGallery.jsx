import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MapPin, Sun } from 'lucide-react';
import HashLink from '../interaction/HashLink';

const CustomerGallery = () => {
  const testimonials = [
    {
      id: 1,
      name: "Pablo",
      location: "Granada",
      comment: 'Pablo ya tiene energía solar en su casa en Andalucía! "Estupendamente" nos dice Pablo, después de que su instalación quedó completada.',
      // imageSrc: "https://images.pexels.com/photos/9800027/pexels-photo-9800027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      youtubeEmbedUrl: "https://www.youtube.com/embed/1Oh-WoE_pcQ",
    },
    {
      id: 2,
      name: "Juan Manuel Gonzalez Fernandez",
      location: "Granada",
      comment: "Yo recomiendo a ibergenil , porque dan buen servicio despues de la venta y me ayudaron mucho a bajar la mi factura de luz y la instalación se quedó perfecta",
      // imageSrc: "https://images.pexels.com/photos/4506224/pexels-photo-4506224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      googleReviewUrl: "https://maps.app.goo.gl/gd2W4wVpFVVNH3p3A",
    },
    {
      id: 3,
      name: "Mari Unica",
      location: "Granada",
      comment: "Mi experiencia ha sido muy positiva , responden a cualquier duda y mi factura de la luz ha bajado casi a cero los recomiendo al 100% y después les encargué  la batería 👌👌👌",
      // imageSrc: "https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
      googleReviewUrl: "https://maps.app.goo.gl/TfcMN7QHzBo2Pgo78",
    },
    {
      id: 4,
      name: "Monica Lopez Ruiz",
      location: "Granada",
      comment: "Me sorprendió gratamente la calidad de los productos y la profesionalidad del equipo de instalación. Mi factura de electricidad ha disminuido significativamente gracias a sus placas solares,recomiendo 100% esta empresa.",
      // imageSrc: "https://images.pexels.com/photos/9393860/pexels-photo-9393860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
      googleReviewUrl: "https://maps.app.goo.gl/TfcMN7QHzBo2Pgo78",
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
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 md:max-w-3xl gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={'relative aspect-[9/16]'}>
                  {testimonial.youtubeEmbedUrl && (
                    <iframe
                      src={testimonial.youtubeEmbedUrl}
                      title={`${testimonial.name}'s testimonial`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}

                  {testimonial.imageSrc && (
                    <img
                      src={testimonial.imageSrc}
                      alt={`${testimonial.name}'s solar installation`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  )}

                  {testimonial.googleReviewUrl && (
                    <div className='pt-[256px]'>
                      <a href={testimonial.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Reviews" className="w-full px-4 -rotate-24" />

                        <div className="text-gray-400 font-bold text-3xl text-center -rotate-24">Reviews</div>
                      </a>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < testimonial.rating ? "#f7931e" : "none"}
                        stroke={i < testimonial.rating ? "#f7931e" : "#d1d5db"}
                        className="mr-0.5"
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.comment}"</p>

                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-montserrat font-semibold text-primary">
                          {testimonial.name}
                        </h4>

                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin size={14} className="mr-1" />

                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    <HashLink to="solar-form">
                      <button
                        className="w-full bg-secondary text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-secondary/90"
                      >
                        Solicitar visita
                      </button>
                    </HashLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel - Mobile */}
          <div className="md:hidden hidden">
            <motion.div
              key={testimonials[currentIndex].id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                {testimonials[currentIndex].youtubeEmbedUrl ? (
                  <iframe
                    src={testimonials[currentIndex].youtubeEmbedUrl}
                    title={`${testimonials[currentIndex].name}'s testimonial`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={testimonials[currentIndex].imageSrc}
                    alt={`${testimonials[currentIndex].name}'s solar installation`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < testimonials[currentIndex].rating ? "#f7931e" : "none"}
                      stroke={i < testimonials[currentIndex].rating ? "#f7931e" : "#d1d5db"}
                      className="mr-0.5"
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonials[currentIndex].comment}"</p>
                <div>
                  <h4 className="font-montserrat font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin size={14} className="mr-1" />
                    {testimonials[currentIndex].location}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-secondary text-white py-3 rounded-lg text-sm font-medium transition-colors hover:bg-secondary/90"
                  >
                    Solicitar Presupuesto
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-6 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white shadow-lg"
                onClick={prevTestimonial}
              >
                <ChevronLeft size={24} className="text-primary" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white shadow-lg"
                onClick={nextTestimonial}
              >
                <ChevronRight size={24} className="text-primary" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerGallery;