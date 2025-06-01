import { useForm } from 'react-hook-form';
import remote from '../integrations/supabase';
import React, { useState, useEffect } from 'react';

interface ContestFormData {
  startDate: string;
  endDate: string;
  prizeDescription: string;
  termsAndConditions: string;
  expandedInfo: string;
}

const ManageContest: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContestFormData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await remote.getContestData();
        if (data?.data) {
          reset(data.data as ContestFormData);
        }
      } catch (error) {
        console.error('Error fetching contest data:', error);
        setMessage('Error loading contest data');
      }
    };

    fetchData();
  }, [reset]);

  const onSubmit = async (formData: ContestFormData) => {
    setIsLoading(true);
    setMessage('');

    try {
      await remote.upsertContestData({contestData: formData});
      setMessage('Contest data updated successfully');
    } catch (error) {
      console.error('Error updating contest data:', error);
      setMessage('Error updating contest data');
    } finally {
      setIsLoading(false);
    }
  };

  const labelsClassName = 'block text-lg font-bold text-primary';
  const inputsClassName = 'block w-full border border-highlight px-2 py-4 field-sizing-content';
  const textareasClassName = 'block w-full border border-highlight px-2 py-4 field-sizing-content';

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">Gestionar concurso</h1>

      {message && (
        <div className={`p-4 mb-4 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 p-6 rounded-lg md:grid-cols-2">
        <div className="grid grid-cols-1 gap-4">
          <label className={labelsClassName}>Fecha de inicio</label>

          <input
            type="date"
            {...register('startDate', { required: 'Start date is required' })}
            className={inputsClassName}
          />
          {errors.startDate && <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>}
        </div>

        <div className="grid grid-cols-1 gap-4">
          <label className={labelsClassName}>Fecha de fin</label>

          <input
            type="date"
            {...register('endDate', { required: 'End date is required' })}
            className={inputsClassName}
          />
          {errors.endDate && <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>}
        </div>

        <div className="col-span-2">
          <label className={labelsClassName}>Descripción del premio</label>

          <textarea
            {...register('prizeDescription', { required: 'Prize description is required' })}
            className={textareasClassName}
          />
          {errors.prizeDescription && <p className="mt-1 text-sm text-red-600">{errors.prizeDescription.message}</p>}
        </div>

        <div className="col-span-2">
          <label className={labelsClassName}>Términos y condiciones</label>

          <textarea
            {...register('termsAndConditions', { required: 'Terms and conditions are required' })}
            rows={6}
            className={textareasClassName}
          />
          {errors.termsAndConditions && <p className="mt-1 text-sm text-red-600">{errors.termsAndConditions.message}</p>}
        </div>

        <div className="col-span-2">
          <label className={labelsClassName}>Información adicional</label>

          <textarea
            {...register('expandedInfo', { required: 'Additional information is required' })}
            rows={4}
            className={textareasClassName}
          />
          {errors.expandedInfo && <p className="mt-1 text-sm text-red-600">{errors.expandedInfo.message}</p>}
        </div>

        <div className="col-span-2">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-sm text-white bg-secondary disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? 'Guardando...' : 'Guardar cambios'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageContest;