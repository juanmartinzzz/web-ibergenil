import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-xl mb-4">Ibergenil Energy</h3>
            <p className="text-gray-300 mb-4">
              Liderando el camino en soluciones de energía solar para hogares y negocios en España.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Conócenos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Nuestros servicios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Nuestros servicios</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Energía solar para hogares
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Energía solar para negocios
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Almacenamiento de energía solar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Mantenimiento de sistemas solares
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-secondary transition-colors">
                  Consultas energéticas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contáctanos</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mt-1 mr-2 text-secondary" />

                <p className="text-gray-300">
                  Avenida del sur 17 planta 0 bajo 2
                  <br />
                  CP: 18014, Granada
                </p>
              </div>

              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-secondary" />

                <a href="tel:+34602038945" className="text-gray-300 hover:text-secondary transition-colors">
                  +34 602 038 945
                </a>
              </div>

              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-secondary" />

                <a href="mailto:info@ibergenil.com" className="text-gray-300 hover:text-secondary transition-colors">
                  info@ibergenil.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Ibergenil - Todos los derechos reservados.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-secondary transition-colors">Política de privacidad</a>
              <a href="#" className="hover:text-secondary transition-colors">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;