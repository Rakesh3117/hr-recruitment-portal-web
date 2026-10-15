import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Briefcase } from 'lucide-react';
import logoImg from '../../assets/logo.jpg';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Employers', path: '/employers' },
    { name: 'Job Seekers', path: '/job-seekers' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/about') return location.pathname === '/about' || location.pathname === '/company';
    if (path === '/industries') return location.pathname === '/industries' || location.pathname === '/domain-specialities';
    if (path === '/job-seekers') return location.pathname === '/job-seekers' || location.pathname === '/jobs';
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`sticky top-0 z-header transition-all duration-normal ${
        scrolled 
          ? 'bg-surface/95 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-surface/85 backdrop-blur-sm border-b border-border/70'
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-surface border border-border p-0.5 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-fast shrink-0 overflow-hidden">
              <img src={logoImg} alt="HR ANAND Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-navy">
                  HR ANAND
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-lavender-soft text-primary">
                  SOLUTIONS
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-grey uppercase tracking-wider">
                Recruitment & Staffing
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Home | About Us | Services | Industries | Employers | Job Seekers | Careers | Contact) */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2 2xl:gap-3.5 shrink-0">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs 2xl:text-sm font-medium transition-colors duration-fast relative py-1.5 px-2.5 rounded-md whitespace-nowrap ${
                    active 
                      ? 'text-primary font-semibold bg-lavender-light' 
                      : 'text-navy hover:text-primary hover:bg-background-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Highlighted CTA: Hire Talent */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs 2xl:text-sm font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-fast shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-primary-light shrink-0" />
              <span>Hire Talent</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/employers"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-primary hover:bg-primary-hover shadow-xs"
            >
              <span>Hire Talent</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-navy hover:bg-background-secondary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-border bg-surface px-4 pt-3 pb-6 shadow-dropdown animate-fadeIn">
          <div className="space-y-1 py-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-fast ${
                    active 
                      ? 'bg-lavender-light text-primary font-semibold' 
                      : 'text-navy hover:bg-background-secondary'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-grey-light" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Highlighted Hire Talent Button */}
          <div className="pt-4 border-t border-border mt-3 space-y-2">
            <Link
              to="/employers"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors duration-fast"
            >
              <Briefcase className="w-4 h-4 text-primary-light" />
              <span>Hire Talent (Submit Requirement)</span>
            </Link>

            <Link
              to="/job-seekers"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-primary bg-primary-light hover:bg-lavender-soft transition-colors duration-fast"
            >
              <span>Find a Job / Submit Resume</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
