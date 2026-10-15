import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Employers from './pages/Employers';
import JobSeekers from './pages/JobSeekers';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import JobDetails from './pages/JobDetails';

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
            {/* 1. Home */}
            <Route path="/" element={<Home />} />

            {/* 2. About Us */}
            <Route path="/about" element={<Company />} />
            <Route path="/company" element={<Company />} />

            {/* 3. Our Services */}
            <Route path="/services" element={<Services />} />

            {/* 4. Industries We Serve */}
            <Route path="/industries" element={<Industries />} />
            <Route path="/domain-specialities" element={<Industries />} />

            {/* 6. For Employers (Hire Talent) */}
            <Route path="/employers" element={<Employers />} />
            <Route path="/partner-with-us" element={<Employers />} />

            {/* 7. For Job Seekers (Find a Job) */}
            <Route path="/job-seekers" element={<JobSeekers />} />
            <Route path="/jobs" element={<JobSeekers />} />
            <Route path="/jobs/:slug" element={<JobDetails />} />

            {/* 9. Careers */}
            <Route path="/careers" element={<Careers />} />

            {/* 10. Contact Us */}
            <Route path="/contact" element={<Contact />} />

            {/* Fallback to Home */}
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