import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare
} from 'lucide-react';
import statsData from '../../data/stats.mocks.js';
import BrandLogo from '../common/BrandLogo.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contactInfo, company } = statsData;

  return (
    <footer className="bg-[#0D274A] text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <BrandLogo variant="light" />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {company.legalName} is dedicated to empowering business growth through innovation, IT consulting, and expert recruitment and staffing solutions.
            </p>

            <div className="pt-1 flex items-center gap-3">
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#159FB4] hover:bg-[#118496] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${contactInfo.phones[0]}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-white/10 hover:bg-white/15 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#159FB4]" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Board Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
              Registered Office
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#159FB4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {contactInfo.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#159FB4] shrink-0" />
                <a href={`tel:${contactInfo.phones[0]}`} className="hover:text-white transition-colors font-medium">
                  {contactInfo.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C59B4B] shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-400 font-mono space-y-0.5 border-t border-white/10">
              <div>CIN: <span className="text-[#159FB4]">{contactInfo.cin}</span></div>
              <div>PAN: <span className="text-slate-200">{contactInfo.pan}</span> | TAN: <span className="text-slate-200">{contactInfo.tan}</span></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright (Exact EduRun style) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            Copyright © {currentYear} || <span className="text-white font-medium">{company.legalName}</span>. All rights reserved.
          </p>

          <span className="text-xs font-medium text-slate-300">
            Recruit. Train. Place. <strong className="text-[#C59B4B]">Grow.</strong>
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
