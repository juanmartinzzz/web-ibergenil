import React from 'react';
import { motion } from 'framer-motion';
import { FormData } from '../../types';
import { CheckCircle2, Calendar, Phone } from 'lucide-react';

interface ConfirmationProps {
  formData: FormData;
}

const Confirmation: React.FC<ConfirmationProps> = ({ formData }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8 flex justify-center">
        <div className="bg-green-100 p-5 rounded-full">
          <CheckCircle2 size={64} className="text-green-500" />
        </div>
      </div>

      <h3 className="font-montserrat font-semibold text-2xl text-primary mb-4">
        Gracias, {formData.name}!
      </h3>

      <p className="text-gray-600 mb-8">
        Tu solicitud para una evaluación solar gratuita ha sido enviada exitosamente.
        Estamos emocionados de ayudarte a comenzar tu viaje hacia la energía solar!
      </p>

      <div className="bg-primary bg-opacity-5 rounded-lg p-6 mb-8">
        <h4 className="font-montserrat font-medium text-lg mb-4 text-primary">
          ¿Qué pasa a continuación?
        </h4>

        <div className="space-y-4 text-left">
          <div className="flex items-start">
            <Phone size={24} className="text-secondary mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-800">Nos pondremos en contacto contigo pronto</p>
              <p className="text-sm text-gray-600">
                Un representante de Ibergenil te llamará dentro de 24-48 horas para discutir tus necesidades de energía solar.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <Calendar size={24} className="text-secondary mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-800">Programa tu evaluación</p>
              <p className="text-sm text-gray-600">
                Nos pondremos en contacto contigo pronto para programar una visita gratuita a tu propiedad para evaluar tus necesidades de energía solar.
              </p>
            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="tel:+34900123456"
        className="inline-flex items-center justify-center space-x-2 bg-secondary text-white py-3 px-6 rounded-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone size={18} />
        <span>Llámanos ahora</span>
      </motion.a>

      <p className="mt-4 text-sm text-gray-500">
        ¿Tienes preguntas? Contacta a nuestro equipo de soporte en info@ibergenil.com
      </p>
    </motion.div>
  );
};

export default Confirmation;