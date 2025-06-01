import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ManageContest from './screens/ManageContest';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background font-inter text-primary">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin/manage-contest-9183ng10b204h920h5" element={<ManageContest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;