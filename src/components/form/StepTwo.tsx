import React from 'react';
import { motion } from 'framer-motion';
import { FormData, FormErrors } from '../../types';
import { User, Phone, ArrowRight, ArrowLeft, Info } from 'lucide-react';

interface StepTwoProps {
  formData: FormData;
  errors: FormErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
  handleBack: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({
  formData,
  errors,
  handleInputChange,
  handleNext,
  handleBack
}) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre completo"
            value={formData.name}
            onChange={handleInputChange}
            className={`
              w-full py-3 pl-10 pr-3 border rounded-md focus:outline-hidden focus:ring-2
              ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-secondary focus:ring-opacity-50'}
            `}
          />
        </div>
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Número de teléfono
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone size={18} className="text-gray-400" />
          </div>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Ingresa tu número de teléfono"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`
              w-full py-3 pl-10 pr-3 border rounded-md focus:outline-hidden focus:ring-2
              ${errors.phoneNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-secondary focus:ring-opacity-50'}
            `}
            maxLength={9}
          />
        </div>
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
        )}
      </div>

      <div className="mb-6">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consentGiven"
              name="consentGiven"
              type="checkbox"
              checked={formData.consentGiven}
              onChange={handleInputChange}
              className="h-4 w-4 text-secondary border-gray-300 rounded-sm focus:ring-secondary"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="consentGiven" className="text-sm text-gray-600">
              Acepto el procesamiento de mis datos personales para recibir información sobre productos y servicios de energía solar.*
            </label>
            {errors.consentGiven && (
              <p className="mt-1 text-sm text-red-500">{errors.consentGiven}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <motion.button
          type="button"
          onClick={handleBack}
          className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-md flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft size={18} />
          <span>Atrás</span>
        </motion.button>
        <motion.button
          type="button"
          onClick={handleNext}
          className="flex-1 bg-secondary text-white py-3 rounded-md flex items-center justify-center space-x-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Continuar</span>
          <ArrowRight size={18} />
        </motion.button>
      </div>

      <div className="mt-6 flex items-start p-4 bg-blue-50 rounded-md">
        <Info size={20} className="text-primary mt-0.5 mr-3 shrink-0" />
        <p className="text-sm text-gray-600">
          Tus datos están seguros y solo serán utilizados para contactarte sobre soluciones de energía solar. Nunca compartiremos tus datos con terceros.
        </p>
      </div>
    </div>
  );
};

export default StepTwo;