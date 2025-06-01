import React, { useState, useEffect } from 'react';
import { getContestData } from '../../integrations/supabase';

interface ContestData {
  startDate: string;
  endDate: string;
  prizeDescription: string;
  termsAndConditions: string;
  expandedInfo: string;
}

const ContestTerms: React.FC = () => {
  const [contestData, setContestData] = useState<ContestData | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const data = await getContestData();
        if (data?.data) {
          setContestData(data.data as ContestData);
        }
      } catch (error) {
        console.error('Error fetching contest data:', error);
      }
    };

    fetchContestData();
  }, []);

  if (!contestData) return null;

  return (
    <div className="bg-gray-50 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left text-sm text-gray-600 hover:text-gray-900"
          >
            <div className="flex justify-between items-center">
              <span>Términos y condiciones de nuestro concurso</span>
              <span>{isExpanded ? '▼' : '▶'}</span>
            </div>
          </button>

          {isExpanded && (
            <div className="mt-4 space-y-4 text-sm text-gray-600">
              <div>
                <p>Fecha de inicio: {new Date(contestData.startDate).toLocaleDateString()}</p>
                <p>Fecha de fin: {new Date(contestData.endDate).toLocaleDateString()}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Descripción del premio</h4>
                <p>{contestData.prizeDescription}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Términos y condiciones</h4>
                <p className="whitespace-pre-line">{contestData.termsAndConditions}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Información adicional</h4>
                <p className="whitespace-pre-line">{contestData.expandedInfo}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestTerms;