import React from 'react';
import { motion } from 'framer-motion';
import { FormData, FormErrors } from '../../types';
import { MapPin, ArrowRight } from 'lucide-react';

interface StepOneProps {
  formData: FormData;
  errors: FormErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({
  formData,
  errors,
  handleInputChange,
  handleNext
}) => {
  return (
    <div>
      <div className="mb-6">
        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
          Código postal
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder="Ingresa tu código postal"
            value={formData.postalCode}
            onChange={handleInputChange}
            className={`
              w-full py-3 pl-10 pr-3 border rounded-md focus:outline-none focus:ring-2
              ${errors.postalCode ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-secondary focus:ring-opacity-50'}
            `}
            maxLength={5}
          />
        </div>
        {errors.postalCode && (
          <p className="mt-1 text-sm text-red-500">{errors.postalCode}</p>
        )}
        <p className="mt-2 text-sm text-gray-500">
          Revisaremos si la instalación solar está disponible en tu zona.
        </p>
      </div>

      <motion.button
        type="button"
        onClick={handleNext}
        className="w-full bg-secondary text-white py-3 rounded-md flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span>Continuar</span>
        <ArrowRight size={18} />
      </motion.button>
    </div>
  );
};

export default StepOne;