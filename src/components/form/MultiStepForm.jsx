import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import Confirmation from './Confirmation';
import FormProgress from './FormProgress';
import remote from '../../integrations/supabase';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    postalCode: '',
    name: '',
    phoneNumber: '',
    consentGiven: false,
    address: '',
    city: '',
    houseNumber: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const formElement = document.getElementById('solar-form');
    if (formElement) {
      const handlePostalCode = (event) => {
        const customEvent = event;
        setFormData(prev => ({
          ...prev,
          postalCode: customEvent.detail.postalCode
        }));
        if (customEvent.detail.startAtStep === 2) {
          setCurrentStep(2);
        }
      };

      formElement.addEventListener('setPostalCode', handlePostalCode);
      return () => {
        formElement.removeEventListener('setPostalCode', handlePostalCode);
      };
    }
  }, []);

  const validateStep = (step) => {
    const newErrors = {};
    let isValid = true;

    switch (step) {
      case 1:
        if (!formData.postalCode) {
          newErrors.postalCode = 'El código postal es requerido';
          isValid = false;
        } else if (!/^\d{5}$/.test(formData.postalCode)) {
          newErrors.postalCode = 'Por favor ingresa un código postal válido';
          isValid = false;
        }
        break;

      case 2:
        if (!formData.name) {
            newErrors.name = 'El nombre es requerido';
          isValid = false;
        }

        if (!formData.phoneNumber) {
          newErrors.phoneNumber = 'El número de teléfono es requerido';
          isValid = false;
        } else if (!/^\d{9}$/.test(formData.phoneNumber)) {
          newErrors.phoneNumber = 'Por favor ingresa un número de teléfono válido';
          isValid = false;
        }

        if (!formData.consentGiven) {
          newErrors.consentGiven = 'Debes consentir el uso de tus datos';
          isValid = false;
        }
        break;

      case 3:
        if (!formData.address) {
          newErrors.address = 'La dirección es requerida';
          isValid = false;
        }

        if (!formData.city) {
          newErrors.city = 'La ciudad es requerida';
          isValid = false;
        }

        // if (!formData.houseNumber) {
        //   newErrors.houseNumber = 'El número de casa/departamento es requerido';
        //   isValid = false;
        // }
        break;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => (prev < 4 ? (prev + 1) : prev));
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => (prev > 1 ? (prev - 1) : prev));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        handleNext();
      } else {
        // Store data on remote
        remote.upsertCustomerRequestData({customerRequestData: {data: formData}})

        // Show confirmation message
        handleNext();
      }
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            errors={errors}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            handleBack={handleBack}
          />
        );
      case 4:
        return <Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div id="solar-form" className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="font-montserrat font-semibold text-2xl text-primary mb-2">
        Solicita tu visita gratuita
      </h2>
      <p className="text-gray-600 mb-6">
        Dejanos algunos datos básicos para programar una visita gratuita y sin compromiso
      </p>

      <FormProgress currentStep={currentStep} />

      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit}>
              {renderStep()}
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MultiStepForm;