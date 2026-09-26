import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import statsData from '../../data/stats.json';
import logoImg from '../../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const hqOffice = statsData.offices.find(o => o.isHeadquarters) || statsData.offices[0];

  return (
    <footer className="bg-navy text-white pt-16 pb-12 border-t border-navy-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Corporate Office Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white p-0.5 flex items-center justify-center shadow-md overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-200">
                <img src={logoImg} alt="HR ANAND Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  HR ANAND
                </span>
                <p className="text-xs text-lavender-soft/70">
                  Global Executive Search & Staffing
                </p>
              </div>
            </Link>

            <p className="text-sm text-grey-light leading-relaxed max-w-sm">
              Partnering with marquee MNCs and ambitious enterprises for over 30 years to architect resilient leadership and agile tech workforces.
            </p>

            <div className="pt-2 space-y-2.5 text-sm text-grey-light">
              <div className="font-semibold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal" />
                <span>Corporate Headquarters</span>
              </div>
              <p className="pl-6 text-xs text-grey-light leading-relaxed">
                {hqOffice.address}<br />
                {hqOffice.city} — {hqOffice.pincode}
              </p>
              
              <div className="flex items-center gap-2.5 pl-6 pt-1 text-xs">
                <Phone className="w-3.5 h-3.5 text-teal" />
                <a href={`tel:${hqOffice.phone}`} className="hover:text-white transition-colors">
                  {hqOffice.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pl-6 text-xs">
                <Mail className="w-3.5 h-3.5 text-teal" />
                <a href="mailto:info@hranand.com" className="hover:text-white transition-colors">
                  info@hranand.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-lavender-soft">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-grey-light">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/company" className="hover:text-white transition-colors">Company / About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/verification" className="hover:text-white text-success transition-colors flex items-center gap-1 font-medium">
                  <span>Trust & Verification</span>
                </Link>
              </li>
              <li>
                <Link to="/domain-specialities" className="hover:text-white transition-colors">Domain Specialities</Link>
              </li>
              <li>
                <Link to="/diversity-inclusion" className="hover:text-white transition-colors">Diversity & Inclusion</Link>
              </li>
              <li>
                <Link to="/success-stories" className="hover:text-white transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Hubs</Link>
              </li>
            </ul>
          </div>

          {/* Dual Audience Actions */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-lavender-soft">
              Audience Portals
            </h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-teal/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-semibold text-teal-light mb-1">
                  <span>FOR EMPLOYERS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-teal" />
                </div>
                <p className="text-xs text-grey-light mb-2">
                  Submit one-off mandates or explore enterprise partnerships.
                </p>
                <div className="flex flex-col gap-1">
                  <Link 
                    to="/employers" 
                    className="text-xs font-semibold text-teal hover:text-white underline underline-offset-2"
                  >
                    Submit Requirement (One-Off) →
                  </Link>
                  <Link 
                    to="/partner-with-us" 
                    className="text-xs font-semibold text-teal-light hover:text-white underline underline-offset-2"
                  >
                    Become a Hiring Partner (MNC) →
                  </Link>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between text-xs font-semibold text-lavender-soft mb-1">
                  <span>FOR CANDIDATES</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-secondary" />
                </div>
                <p className="text-xs text-grey-light mb-2">
                  Browse vetted roles across 25+ global industry verticals.
                </p>
                <Link 
                  to="/jobs" 
                  className="text-xs font-semibold text-secondary hover:text-white underline underline-offset-2"
                >
                  Find a Job →
                </Link>
              </div>
            </div>
          </div>

          {/* Locations & Trust */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-lavender-soft">
              Operating Hubs
            </h4>
            <p className="text-xs text-grey-light">
              Pan-India execution centers with cross-border search capabilities:
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Mumbai', 'Bengaluru', 'Delhi NCR', 'Pune', 'Hyderabad', 'Chennai', 'Singapore'].map((city) => (
                <span 
                  key={city} 
                  className="px-2 py-1 text-[11px] rounded bg-white/5 text-grey-light border border-white/10 hover:text-white"
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <div className="flex items-center gap-2 text-xs text-grey-light">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span>ISO 9001:2015 Certified Operations</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-grey-light mt-1">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Strict GDPR & DPDP Compliant</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Links, Social */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-grey-light">
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center md:text-left">
            <span>© {currentYear} HR ANAND. All rights reserved.</span>
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Candidate Charter</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <span className="text-grey-light hidden sm:inline">Connect:</span>
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-grey-light hover:text-white hover:bg-primary transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-grey-light hover:text-white hover:bg-accent transition-all"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* Twitter / X */}
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-grey-light hover:text-white hover:bg-teal transition-all"
              aria-label="Twitter / X"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* YouTube */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-grey-light hover:text-white hover:bg-danger transition-all"
              aria-label="YouTube"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
