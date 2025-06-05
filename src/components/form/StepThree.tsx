import React from 'react';
import { motion } from 'framer-motion';
import { FormData, FormErrors } from '../../types';
import { Home, Building2, MapPin, ArrowLeft } from 'lucide-react';

interface StepThreeProps {
  formData: FormData;
  errors: FormErrors;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleBack: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({
  formData,
  errors,
  handleInputChange,
  handleSubmit,
  handleBack
}) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Dirección
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Ingresa tu dirección"
            value={formData.address}
            onChange={handleInputChange}
            className={`
              w-full py-3 pl-10 pr-3 border rounded-md focus:outline-hidden focus:ring-2
              ${errors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-secondary focus:ring-opacity-50'}
            `}
          />
        </div>
        {errors.address && (
          <p className="mt-1 text-sm text-red-500">{errors.address}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          Ciudad/Municipio
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Building2 size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Ingresa tu ciudad"
            value={formData.city}
            onChange={handleInputChange}
            className={`
              w-full py-3 pl-10 pr-3 border rounded-md focus:outline-hidden focus:ring-2
              ${errors.city ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-secondary focus:ring-opacity-50'}
            `}
          />
        </div>
        {errors.city && (
          <p className="mt-1 text-sm text-red-500">{errors.city}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Número de casa/departamento
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Home size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            id="houseNumber"
            name="houseNumber"
            placeholder="Ingresa tu número de casa/departamento"
            value={formData.houseNumber}
            onChange={handleInputChange}
            className={`
              w-full py-3 pl-10 pr-3 border rounded-md focus:outline-hidden focus:ring-2
              ${errors.houseNumber ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-secondary focus:ring-opacity-50'}
            `}
          />
        </div>
        {errors.houseNumber && (
          <p className="mt-1 text-sm text-red-500">{errors.houseNumber}</p>
        )}
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
          type="submit"
          onClick={handleSubmit}
          className="flex-1 bg-secondary text-white py-3 rounded-md"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Enviar solicitud
        </motion.button>
      </div>
    </div>
  );
};

export default StepThree;