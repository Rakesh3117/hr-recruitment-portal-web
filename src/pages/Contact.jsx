import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  Sparkles,
  ShieldCheck,
  ExternalLink,
  UserCheck,
  TrendingUp,
  GraduationCap,
  Briefcase,
  Users,
  RotateCcw,
  Compass
} from 'lucide-react';
import statsData from '../data/stats.mocks.js';

const Contact = () => {
  const { contactInfo, company } = statsData;

  const [inquiryType, setInquiryType] = useState('Talent Acquisition');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      message: ''
    });
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Bachupally, Qutubullapur, Hyderabad, Telangana 500090'
  )}`;

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden bg-white">
      
      {/* 1. DISTINCT OPERATIONS DESK HERO HEADER (CLEAN ARCHITECTURAL BANNER) */}
      <section className="relative pt-10 sm:pt-14 pb-12 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#159FB4]/10 text-[#0D274A] border border-[#159FB4]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
              <span>Hyderabad Corporate Office</span>
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#159FB4]">
              Direct Engagement & Client Helpdesk
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#0D274A] tracking-tight leading-tight">
              Let’s Connect & <span className="text-[#159FB4]">Accelerate</span> Your Workforce Strategy
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Connect directly with our recruitment consultants, technology staffing specialists, or corporate training team at <strong className="text-[#0D274A] font-bold">{company.legalName}</strong>.
            </p>
          </div>

          {/* Quick Direct Desk Action Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            
            <a 
              href={`tel:${contactInfo.phones[0]}`}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#159FB4] hover:shadow-md transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#159FB4]/10 text-[#159FB4] flex items-center justify-center group-hover:bg-[#159FB4] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Main Desk</span>
                <strong className="text-xs sm:text-sm font-bold text-[#0D274A]">{contactInfo.phones[0]}</strong>
              </div>
            </a>

            <a 
              href={`tel:${contactInfo.phones[1]}`}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#159FB4] hover:shadow-md transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C59B4B]/10 text-[#C59B4B] flex items-center justify-center group-hover:bg-[#C59B4B] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Operations Desk</span>
                <strong className="text-xs sm:text-sm font-bold text-[#0D274A]">{contactInfo.phones[1]}</strong>
              </div>
            </a>

            <a 
              href={`mailto:${contactInfo.email}`}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-[#159FB4] hover:shadow-md transition-all flex items-center gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0D274A]/10 text-[#0D274A] flex items-center justify-center group-hover:bg-[#0D274A] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Corporate Email</span>
                <strong className="text-xs sm:text-sm font-bold text-[#0D274A]">{contactInfo.email}</strong>
              </div>
            </a>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Working Hours</span>
                <strong className="text-xs sm:text-sm font-bold text-[#0D274A]">Mon - Sat: 9am - 6:30pm</strong>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. DUAL-PANE OPERATIONS DESK: CORPORATE HQ PROFILE & INTERACTIVE INQUIRY FORM */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Corporate Headquarters & Statutory Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Photo Card (Dedicated photo-1497215728101-856f4ea42174) */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg group relative">
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
                  alt="VM HRM Reception Lobby"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/90 via-[#0D274A]/30 to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] uppercase font-bold text-[#159FB4] tracking-wider block">
                    Registered Headquarters
                  </span>
                  <h3 className="text-lg font-bold">
                    {company.legalName}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Bachupally, Hyderabad, Telangana
                  </p>
                </div>
              </div>

              {/* Address details */}
              <div className="p-6 bg-white space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0D274A]">
                    <MapPin className="w-4 h-4 text-[#159FB4]" />
                    <span>Official Address:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                    {contactInfo.address.full}
                  </p>
                </div>

                {/* Direct Google Maps Navigation Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#159FB4] hover:text-[#0D274A] transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] font-mono text-slate-400">PIN: 500090</span>
                </div>
              </div>
            </div>

            {/* Official Statutory Plaque Mini-Card */}
            <div className="bg-[#0D274A] text-white rounded-2xl p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C59B4B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
                    Statutory Verification
                  </span>
                </div>
                <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-white">
                  MCA Active
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">CIN</span>
                  <strong className="font-mono text-[#159FB4] text-xs sm:text-sm">{contactInfo.cin}</strong>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">PAN</span>
                    <strong className="text-white">{contactInfo.pan}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">TAN</span>
                    <strong className="text-white">{contactInfo.tan}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Helpdesk Specialist Callout with unique photo (photo-1516321497487-e288fb19713f) */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=300&q=80"
                alt="Talent Desk Support"
                className="w-14 h-14 rounded-xl object-cover shrink-0 border border-slate-300"
              />
              <div className="space-y-0.5">
                <h4 className="text-xs font-bold text-[#0D274A]">Immediate Assistance Required?</h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Our recruitment support coordinators answer calls Monday through Saturday.
                </p>
                <a href={`tel:${contactInfo.phones[0]}`} className="text-xs font-bold text-[#159FB4] hover:underline inline-block mt-0.5">
                  Call {contactInfo.phones[0]}
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4] block">
                Send a Communication
              </span>
              <h2 className="text-2xl font-black text-[#0D274A] mt-1">
                Schedule a Consultation or Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill out the form below. An account manager or practice lead will respond within 24 hours.
              </p>
            </div>

            {/* Category Selector Chips with Icons */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700">Select Purpose of Contact *</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'Talent Acquisition', icon: UserCheck },
                  { label: 'Executive Search & Leadership', icon: TrendingUp },
                  { label: 'Corporate Training', icon: GraduationCap },
                  { label: 'Contract Staffing', icon: Briefcase },
                  { label: 'Statutory Verification', icon: ShieldCheck },
                  { label: 'Candidate Job Inquiry', icon: Users }
                ].map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setInquiryType(item.label)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        inquiryType === item.label
                          ? 'bg-[#0D274A] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      <ItemIcon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-emerald-900">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <em>{inquiryType}</em> has been routed to our Bachupally desk. We will reach you at <strong>{formData.email}</strong> shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0D274A] hover:bg-[#081B34] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Organization / Enterprise (Optional)</label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData(p => ({ ...p, organization: e.target.value }))}
                      placeholder="e.g. Tech Innovations Ltd"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Official Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="ramesh@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Direct Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Requirements / Message *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us about the roles you are looking to hire, training needs, or any specific mandate..."
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#159FB4] hover:bg-[#118496] shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to VM HRM</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-slate-400 text-center pt-1">
                  We respect your privacy. Client and candidate data is strictly protected under enterprise confidentiality agreements.
                </p>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* 3. PHYSICAL OFFICE MAP & DIRECTIONS EMBED SHOWCASE */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4] block">
                Office Location
              </span>
              <h3 className="text-xl font-bold text-[#0D274A] mt-0.5">
                Bachupally, Qutubullapur, Hyderabad
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                K.V.Rangareddy- 500090, Telangana
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0D274A] hover:bg-[#081B34] transition-all shadow-xs"
            >
              <Compass className="w-4 h-4 text-[#C59B4B]" />
              <span>Get Driving Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Styled Map View Frame */}
          <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 relative shadow-inner">
            <iframe
              title="VM HRM Office Location"
              src="https://maps.google.com/maps?q=Bachupally%2C%20Qutubullapur%2C%20Hyderabad%2C%20Telangana%20500090&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
