import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  ArrowRight,
  Briefcase,
  UserCheck,
  ShieldCheck
} from 'lucide-react';
import statsData from '../../data/stats.mocks.js';
import logoImg from '../../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contactInfo } = statsData;

  return (
    <footer className="bg-navy text-white pt-14 pb-10 border-t border-navy-muted">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-navy-muted/60">
          
          {/* Brand & Introduction Column */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-surface p-0.5 flex items-center justify-center shadow-md overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-fast">
                <img src={logoImg} alt="HR ANAND Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  HR ANAND
                </span>
                <p className="text-xs text-lavender-soft/80">
                  Recruitment & Staffing Solutions
                </p>
              </div>
            </Link>

            <p className="text-sm text-grey-light leading-relaxed">
              We connect businesses with skilled and reliable talent through professional recruitment, staffing and workforce solutions tailored to your requirements.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <Link
                to="/employers"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-primary hover:bg-primary-hover text-white transition-colors duration-fast"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Hire Talent</span>
              </Link>
              <Link
                to="/job-seekers"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-surface/10 hover:bg-surface/20 text-white border border-white/15 transition-colors duration-fast"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>Find a Job</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-lavender-soft">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-grey-light">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-fast">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-fast">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-fast">Our Services</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors duration-fast">Industries We Serve</Link>
              </li>
              <li>
                <Link to="/employers" className="hover:text-white transition-colors duration-fast">For Employers</Link>
              </li>
              <li>
                <Link to="/job-seekers" className="hover:text-white transition-colors duration-fast">For Job Seekers</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors duration-fast">Careers With Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-fast">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-wider uppercase text-lavender-soft">
              Recruitment Services
            </h4>
            <ul className="space-y-2 text-sm text-grey-light">
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-fast">Permanent Recruitment</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-fast">Contract Staffing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-fast">Bulk & Volume Hiring</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-fast">IT & Technical Recruitment</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-fast">Executive & Professional Hiring</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-fast">Custom Workforce Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & WhatsApp */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold tracking-wider uppercase text-lavender-soft">
              Get In Touch
            </h4>
            
            <div className="space-y-2.5 text-xs text-grey-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <span>
                  {contactInfo.address.line1}, {contactInfo.address.line2}, {contactInfo.address.city} — {contactInfo.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                <div className="space-y-0.5 text-[11px]">
                  <div>Mon–Fri: 9:00 AM – 6:30 PM</div>
                  <div>Sat: 9:30 AM – 2:00 PM</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-teal hover:bg-teal-hover transition-colors shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Values */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-grey-light">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-center sm:text-left">
            <span>© {currentYear} HR ANAND. All rights reserved.</span>
            <span>Building Teams. Creating Opportunities.</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-grey-light">
            <ShieldCheck className="w-4 h-4 text-success" />
            <span>Dedicated & Transparent Recruitment</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
