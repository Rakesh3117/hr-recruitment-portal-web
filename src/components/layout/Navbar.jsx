import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  Home, 
  Building2, 
  Briefcase, 
  Users, 
  PhoneCall 
} from 'lucide-react';
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

  // Focused, important navigation links with relevant Lucide icons
  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Building2 },
    { name: 'Our Services', path: '/services', icon: Briefcase },
    { name: 'Careers', path: '/careers', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: PhoneCall },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/about') return location.pathname === '/about' || location.pathname === '/company';
    if (path === '/services') return location.pathname === '/services';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-header w-full shadow-xs">
      {/* 1. TOP CONTACT STRIP */}
      <div className="bg-primary text-white/80 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 hidden md:block">
        <div className="max-w-content mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${contactInfo.phones[0]}`} 
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-secondary" />
              <span>{contactInfo.displayPhone}</span>
            </a>

            <a 
              href={`mailto:${contactInfo.email}`} 
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>{contactInfo.email}</span>
            </a>

            <div className="flex items-center gap-1.5 text-white/70">
              <MapPin className="w-3.5 h-3.5 text-secondary" />
              <span>Bachupally, Hyderabad - 500090</span>
            </div>
          </div>

          <div className="text-[11px] text-white/70 font-mono">
            CIN: <span className="text-gold font-semibold">{contactInfo.cin}</span>
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

            {/* Desktop Navigation with Icons */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors py-2 px-3.5 rounded-lg ${
                      active 
                        ? 'text-secondary bg-secondary-light' 
                        : 'text-primary hover:text-secondary hover:bg-slate-50'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 transition-transform group-hover:scale-110 ${active ? 'text-secondary' : 'text-secondary/80 group-hover:text-secondary'}`} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button: Contact Us with Icon */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-secondary hover:bg-secondary-hover shadow-sm hover:shadow transition-all group"
              >
                <PhoneCall className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/contact"
                className="sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-secondary"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Contact</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-primary hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-primary" />}
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
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold ${
                    active ? 'bg-secondary-light text-secondary' : 'text-primary'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <IconComponent className={`w-4 h-4 ${active ? 'text-secondary' : 'text-secondary/80'}`} />
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <a
              href={`tel:${contactInfo.phones[0]}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-bold text-primary bg-slate-100"
            >
              <Phone className="w-3.5 h-3.5 text-secondary" />
              <span>Call: {contactInfo.displayPhone}</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold text-white bg-secondary hover:bg-secondary-hover transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
