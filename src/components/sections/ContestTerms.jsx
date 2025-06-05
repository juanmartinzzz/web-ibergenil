import { useState, useEffect } from 'react';
import { getContestData } from '../../integrations/supabase';
import { ChevronDown } from 'lucide-react';

const ContestTerms = () => {
  const [contestData, setContestData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const data = await getContestData();
        if (data?.data) {
          setContestData(data.data);
        }
      } catch (error) {
        console.error('Error fetching contest data:', error);
      }
    };

    fetchContestData();
  }, []);

  if (!contestData) return null;

  return (
    <div className="bg-gray-50 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left group transition-all duration-300"
          >
            <div className="flex justify-between items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-gray-900">Términos y condiciones de nuestro concurso</h2>
              <ChevronDown
                className={`w-8 h-8 text-yellow-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </div>
          </button>

          {isExpanded && (
            <div className="mt-6 space-y-6 text-lg text-gray-700 bg-white rounded-lg p-8 shadow-md">
              <div className="space-y-2">
                <p className="font-medium">Fecha de inicio: <span className="text-gray-900">{new Date(contestData.startDate).toLocaleDateString()}</span></p>
                <p className="font-medium">Fecha de fin: <span className="text-gray-900">{new Date(contestData.endDate).toLocaleDateString()}</span></p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gray-900">Descripción del premio</h4>
                <p className="leading-relaxed">{contestData.prizeDescription}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gray-900">Términos y condiciones</h4>
                <p className="whitespace-pre-line leading-relaxed">{contestData.termsAndConditions}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold text-gray-900">Información adicional</h4>
                <p className="whitespace-pre-line leading-relaxed">{contestData.expandedInfo}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestTerms;