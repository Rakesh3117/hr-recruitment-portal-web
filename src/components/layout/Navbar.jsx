import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import statsData from '../../data/stats.mocks.js';
import BrandLogo from '../common/BrandLogo.jsx';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { contactInfo } = statsData;

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focused, important navigation links exactly like edurungroup.in
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/about') return location.pathname === '/about' || location.pathname === '/company';
    if (path === '/services') return location.pathname === '/services';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-header w-full shadow-xs">
      {/* 1. TOP CONTACT STRIP (Clean & Minimal like EduRun) */}
      <div className="bg-[#0D274A] text-white/80 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-content mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${contactInfo.phones[0]}`} 
              className="flex items-center gap-1.5 hover:text-[#159FB4] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#159FB4]" />
              <span>{contactInfo.displayPhone}</span>
            </a>

            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex items-center gap-1.5 hover:text-[#159FB4] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C59B4B]" />
              <span>{contactInfo.email}</span>
            </a>

            <div className="flex items-center gap-1.5 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-[#159FB4]" />
              <span>Bachupally, Hyderabad - 500090</span>
            </div>
          </div>

          <div className="text-[11px] text-white/70 font-mono">
            CIN: <span className="text-[#C59B4B] font-semibold">{contactInfo.cin}</span>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div 
        className={`transition-all duration-200 ${
          scrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5' 
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <Link to="/" className="shrink-0">
              <BrandLogo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-semibold transition-colors py-2 px-3.5 rounded-lg ${
                      active 
                        ? 'text-[#159FB4] bg-[#EBF7F9]' 
                        : 'text-[#0D274A] hover:text-[#159FB4] hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button: Contact Us */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#159FB4] hover:bg-[#118496] shadow-sm hover:shadow transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/contact"
                className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#159FB4]"
              >
                Contact
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#0D274A] hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0D274A]" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 py-4 shadow-xl animate-fadeIn space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold ${
                    active ? 'bg-[#EBF7F9] text-[#159FB4]' : 'text-[#0D274A]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href={`tel:${contactInfo.phones[0]}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold text-[#0D274A] bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5 text-[#159FB4]" />
              <span>Call: {contactInfo.displayPhone}</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center justify-center w-full py-2.5 rounded-lg text-sm font-bold text-white bg-[#159FB4]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
