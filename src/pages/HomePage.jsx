import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import QuickQuiz from '../components/sections/QuickQuiz';
import LinksToSocials from '../components/LinksToSocials';
import MultiStepForm from '../components/form/MultiStepForm';
import ContestTerms from '../components/sections/ContestTerms';
import TermsOfService from '../components/sections/TermsOfService';
import CustomerGallery from '../components/sections/CustomerGallery';

const HomePage = () => {
  return (
    <div>
      <Hero />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <MultiStepForm />
          </div>

          <div className="lg:col-span-5">
            <QuickQuiz />
          </div>
        </div>
      </div>

      <LinksToSocials />

      <CustomerGallery />

      <Benefits />

      <TermsOfService />

      <ContestTerms />
    </div>
  );
};

export default HomePage;