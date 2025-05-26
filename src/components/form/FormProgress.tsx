import React from 'react';
import { FormStep } from '../../types';
import { Check } from 'lucide-react';

interface FormProgressProps {
  currentStep: FormStep;
}

const FormProgress: React.FC<FormProgressProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Código postal' },
    { number: 2, label: 'Contacto' },
    { number: 3, label: 'Dirección' },
    { number: 4, label: 'Confirmación' }
  ];

  return (
    <div className="flex justify-between items-center w-full">
      {steps.map((step) => {
        const isActive = currentStep === step.number;
        const isCompleted = currentStep > step.number;

        return (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`
                flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium mb-1
                ${isActive ? 'bg-secondary text-white' : ''}
                ${isCompleted ? 'bg-green-500 text-white' : ''}
                ${!isActive && !isCompleted ? 'bg-gray-200 text-gray-600' : ''}
                transition-colors duration-300
              `}
            >
              {isCompleted ? <Check size={16} /> : step.number}
            </div>
            <span
              className={`
                text-xs hidden sm:block
                ${isActive ? 'text-secondary font-medium' : ''}
                ${isCompleted ? 'text-green-500' : ''}
                ${!isActive && !isCompleted ? 'text-gray-500' : ''}
              `}
            >
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FormProgress;