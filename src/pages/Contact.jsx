import { useState } from 'react';
import { Link } from 'react-router-dom';
import {  
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock,
  Sparkles,
  Building,
  ShieldCheck
} from 'lucide-react';
import statsData from '../data/stats.mocks.js';

const Contact = () => {
  const { contactInfo, company } = statsData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Recruitment & Staffing',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Recruitment & Staffing',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="space-y-16 pb-16 overflow-hidden">
      
      {/* 1. DISTINCTIVE HERO HEADER WITH HYDERABAD OFFICE PHOTOGRAPHY */}
      <section className="relative bg-[#0D274A] text-white py-16 sm:py-24 overflow-hidden">
        
        {/* Background Image with Dark Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate Location"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D274A] via-[#0D274A]/95 to-[#0D274A]/80" />
        </div>

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Home</Link> / <span className="text-[#159FB4]">Contact Us</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-[#C59B4B] border border-white/15">
              <Sparkles className="w-3 h-3 text-[#C59B4B]" />
              <span>Get in Touch</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Let’s Connect & <span className="text-[#159FB4]">Build Together</span>
          </h1>

          <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Reach out directly to discuss talent requirements, IT software consulting, or customized corporate training programs.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              <Building className="w-4 h-4 text-[#159FB4]" />
              <span>Bachupally, Hyderabad, Telangana</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#C59B4B]" />
              <span className="font-mono">CIN: {contactInfo.cin}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM GRID */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Reach out to us at & Find us at */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-5">
              <div>
                <h3 className="text-lg font-bold text-[#0D274A]">
                  Reach out to us at
                </h3>
                <div className="mt-3 space-y-3 text-xs sm:text-sm">
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-slate-700 hover:text-[#159FB4] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C59B4B] shrink-0" />
                    <span className="font-semibold break-all">{contactInfo.email}</span>
                  </a>

                  <div className="flex items-center gap-3 text-slate-700">
                    <Phone className="w-4 h-4 text-[#159FB4] shrink-0" />
                    <div className="flex flex-col">
                      <a href={`tel:${contactInfo.phones[0]}`} className="font-semibold hover:text-[#159FB4] transition-colors">
                        {contactInfo.phones[0]}
                      </a>
                      <a href={`tel:${contactInfo.phones[1]}`} className="font-semibold hover:text-[#159FB4] transition-colors">
                        {contactInfo.phones[1]}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h3 className="text-lg font-bold text-[#0D274A]">
                  Find us at
                </h3>
                <div className="mt-2.5 flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-[#159FB4] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {contactInfo.address.full}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-start gap-3 text-xs text-slate-600">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0D274A] block">Business Hours:</span>
                  <p>Monday – Friday: 9:00 AM – 6:30 PM</p>
                  <p>Saturday: 9:30 AM – 2:00 PM</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#159FB4] hover:bg-[#118496] transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Statutory Info Card */}
            <div className="p-5 rounded-2xl bg-[#0D274A] text-white space-y-1.5 text-xs shadow-md">
              <span className="text-[10px] uppercase font-bold text-[#159FB4] tracking-wider block">
                Statutory Registration
              </span>
              <p className="font-bold text-sm">{company.legalName}</p>
              <p className="font-mono text-[#C59B4B]">CIN: {contactInfo.cin}</p>
              <p className="font-mono text-slate-300">PAN: {contactInfo.pan} | TAN: {contactInfo.tan}</p>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 h-48 sm:h-56 shadow-xs">
              <iframe
                title="Office Location Map"
                src={contactInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

          {/* Right Column: Keep In Touch Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#F0F8FA] text-[#159FB4] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0D274A]">Thank You!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Your message has been sent to VM Human Resource Management Private Limited. We will get back to you shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-[#0D274A]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0D274A]">
                  Keep In Touch
                </h2>

                <div>
                  <label className="block text-xs font-bold text-[#0D274A] mb-1">
                    Select Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0D274A] focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                  >
                    <option value="Recruitment & Staffing">Recruitment & Staffing</option>
                    <option value="Training & Skill Development">Training & Skill Development</option>
                    <option value="IT Services & Consulting">IT Services & Consulting</option>
                    <option value="Software Development">Software Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D274A] mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D274A] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D274A] mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D274A] mb-1">
                    Text / Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[#0D274A] hover:bg-[#081B34] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-70"
                >
                  <span>Submit</span>
                  <Send className="w-4 h-4 text-[#159FB4]" />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
