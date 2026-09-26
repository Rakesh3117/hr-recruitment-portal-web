import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Briefcase, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronDown,
  Search,
  ShieldCheck,
  Building2,
  FileCheck2,
  Handshake
} from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnerDropdownOpen, setPartnerDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
    setPartnerDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPartnerDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Company', path: '/company' },
    { name: 'Services', path: '/services' },
    { name: 'Trust & Verification', path: '/verification', isSpecial: true },
    { name: 'Domain Specialities', path: '/domain-specialities' },
    { name: 'Diversity & Inclusion', path: '/diversity-inclusion' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border' 
          : 'bg-white/80 backdrop-blur-sm border-b border-border/60'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 2xl:gap-3 group shrink-0 whitespace-nowrap">
            <div className="w-10 h-10 2xl:w-11 2xl:h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Briefcase className="w-5 h-5 2xl:w-6 2xl:h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg 2xl:text-xl font-bold tracking-tight text-navy font-sans">
                  Acuity
                </span>
                <span className="text-[10px] 2xl:text-xs font-semibold px-1.5 py-0.5 rounded bg-lavender-soft text-primary">
                  GLOBAL
                </span>
              </div>
              <span className="text-[10px] 2xl:text-[11px] font-medium text-grey uppercase tracking-wider">
                Recruitment & Staffing
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-2.5 2xl:gap-5 shrink-0">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] 2xl:text-sm font-medium transition-colors duration-150 relative py-1 px-1 flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                    active 
                      ? 'text-primary font-semibold' 
                      : 'text-navy/80 hover:text-primary'
                  }`}
                >
                  {link.isSpecial && (
                    <ShieldCheck className="w-3.5 h-3.5 text-success shrink-0" />
                  )}
                  <span>{link.name}</span>
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Dual CTAs (Client vs Candidate) */}
          <div className="hidden md:flex items-center gap-2.5 2xl:gap-3 shrink-0">
            
            {/* Partner With Us (Teal Dropdown - Spec Section 0.2) */}
            <div className="relative shrink-0" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setPartnerDropdownOpen(!partnerDropdownOpen)}
                className="inline-flex items-center gap-1.5 2xl:gap-2 px-3.5 py-2 2xl:px-4 2xl:py-2.5 rounded-lg text-xs 2xl:text-sm font-semibold text-white bg-teal hover:bg-teal-hover transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap shrink-0"
                aria-expanded={partnerDropdownOpen}
              >
                <Handshake className="w-4 h-4 text-teal-light shrink-0" />
                <span>Partner With Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${partnerDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {partnerDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white shadow-dropdown border border-border p-2 z-dropdown animate-fadeIn">
                  
                  {/* Path 1: Submit a Requirement (quick, one-off) */}
                  <Link
                    to="/employers"
                    onClick={() => setPartnerDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-teal-subtle transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-teal-subtle group-hover:bg-teal text-teal group-hover:text-white transition-colors shrink-0">
                      <FileCheck2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy group-hover:text-teal transition-colors">
                        Submit a Requirement
                      </div>
                      <div className="text-[11px] text-grey leading-tight mt-0.5">
                        Quick, self-serve single role or small-batch hiring ask
                      </div>
                    </div>
                  </Link>

                  {/* Path 2: Become a Hiring Partner (enterprise/MNC ongoing) */}
                  <Link
                    to="/partner-with-us"
                    onClick={() => setPartnerDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-lavender-light transition-colors group mt-1"
                  >
                    <div className="p-2 rounded-lg bg-lavender-soft group-hover:bg-primary text-primary group-hover:text-white transition-colors shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy group-hover:text-primary transition-colors flex items-center gap-1">
                        <span>Become a Hiring Partner</span>
                        <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-primary/10 text-primary">
                          MNC
                        </span>
                      </div>
                      <div className="text-[11px] text-grey leading-tight mt-0.5">
                        Strategic RPO, embedded squads & ongoing enterprise collaboration
                      </div>
                    </div>
                  </Link>

                </div>
              )}
            </div>

            {/* Find a Job (Indigo - Candidate side) */}
            <Link
              to="/jobs"
              className="inline-flex items-center gap-1.5 2xl:gap-2 px-3.5 py-2 2xl:px-4 2xl:py-2.5 rounded-lg text-xs 2xl:text-sm font-semibold text-white bg-primary hover:bg-primary-hover transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              title="Browse Open Opportunities"
            >
              <Search className="w-4 h-4 text-lavender-light shrink-0" />
              <span>Find a Job</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-navy hover:bg-lavender-light focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-border bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="space-y-1 py-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    active 
                      ? 'bg-lavender-light text-primary font-semibold' 
                      : 'text-navy hover:bg-background-secondary'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isSpecial && <ShieldCheck className="w-4 h-4 text-success" />}
                    <span>{link.name}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-grey" />
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-border mt-3 space-y-2">
            <div className="text-[11px] font-bold text-grey uppercase tracking-wider px-1 mb-1">
              For Employers & Enterprises
            </div>
            <Link
              to="/employers"
              className="flex items-center justify-between p-3 rounded-xl bg-teal-subtle text-teal border border-teal-light text-xs font-bold"
            >
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4" />
                <span>Submit a Requirement (One-Off)</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/partner-with-us"
              className="flex items-center justify-between p-3 rounded-xl bg-teal text-white text-xs font-bold shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Become a Hiring Partner (Enterprise MNC)</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <div className="text-[11px] font-bold text-grey uppercase tracking-wider px-1 pt-2 mb-1">
              For Candidates
            </div>
            <Link
              to="/jobs"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-hover shadow-sm"
            >
              <Search className="w-4 h-4" />
              <span>Find a Job (Candidate Board)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
