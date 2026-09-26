import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import DomainSpecialities from './pages/DomainSpecialities';
import Employers from './pages/Employers';
import PartnerWithUs from './pages/PartnerWithUs';
import Verification from './pages/Verification';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import SuccessStories from './pages/SuccessStories';
import DiversityInclusion from './pages/DiversityInclusion';
import Contact from './pages/Contact';

// Scroll to top automatically when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-navy font-sans antialiased selection:bg-primary selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/domain-specialities" element={<DomainSpecialities />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:slug" element={<JobDetails />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/diversity-inclusion" element={<DiversityInclusion />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  );
};

export default App;