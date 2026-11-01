import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle2, 
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  UserCheck,
  ChevronRight,
  Send,
  Sparkles
} from 'lucide-react';
import statsData from '../data/stats.mocks.js';
import HeroCarousel from '../components/common/HeroCarousel.jsx';

const Home = () => {
  const { contactInfo, company, milestones } = statsData;

  // 4 Core HR & Staffing Services
  const coreServices = [
    {
      id: 'recruitment-staffing',
      title: 'Recruitment & Staffing',
      desc: 'Connecting companies with vetted professionals through permanent, direct-hire, and volume workforce solutions.',
      icon: <Users className="w-5 h-5 text-[#159FB4]" />,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      badge: 'Talent Acquisition'
    },
    {
      id: 'executive-search',
      title: 'Executive Search & Leadership',
      desc: 'Confidential executive search mapping industry leaders and CXOs to steer enterprise transformation.',
      icon: <UserCheck className="w-5 h-5 text-[#0D274A]" />,
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80',
      badge: 'Leadership Mandates'
    },
    {
      id: 'training-development',
      title: 'Training & Skill Development',
      desc: 'Targeted corporate readiness and domain skill workshops that prepare candidates for day-one productivity.',
      icon: <GraduationCap className="w-5 h-5 text-[#C59B4B]" />,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
      badge: 'Upskilling'
    },
    {
      id: 'contract-staffing',
      title: 'Contract Staffing & Compliance',
      desc: 'Agile workforce deployment with 100% statutory, labor code, PF/ESIC, and payroll management.',
      icon: <Briefcase className="w-5 h-5 text-[#159FB4]" />,
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      badge: 'Workforce Solutions'
    }
  ];

  // Quick Service Inquiry Form State
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Recruitment & Staffing',
    message: ''
  });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryData({
        name: '',
        email: '',
        phone: '',
        service: 'Recruitment & Staffing',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 overflow-hidden">
      
      {/* 1. HERO CAROUSEL WITH MULTI-SLIDES, CONTROLS & ANIMATIONS */}
      <HeroCarousel />

      {/* 2. CORE SERVICES WITH VISUAL IMAGERY */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
            <span>What We Offer</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A] tracking-tight">
            Our Core Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Comprehensive business, training, and workforce management services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#159FB4] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Service Preview Image */}
              <div className="h-40 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0D274A]/20 group-hover:bg-[#0D274A]/10 transition-colors" />
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#0D274A] shadow-xs">
                  {service.badge}
                </span>
              </div>

              {/* Service Details */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#F0F8FA] flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-base font-bold text-[#0D274A] group-hover:text-[#159FB4] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#159FB4] group-hover:text-[#0D274A] transition-colors"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "We are at VM HRM" SIGNATURE SECTION WITH HR TEAM IMAGE & BOARD DETAILS */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0D274A] via-[#091D38] to-[#0D274A] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          
          {/* Decorative Background Accents */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#159FB4]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
                We are at VM HRM Private Limited
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Empowering Business Growth Through <span className="text-[#159FB4]">Innovation</span>
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                {company.legalName} specializes in executive recruitment, corporate training, and comprehensive workforce staffing solutions. Dedicated to driving business growth through strategic workforce management and verified talent pipelines. Our expert team collaborates closely with clients to optimize staffing and achieve sustainable success.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <h4 className="text-xs sm:text-sm font-bold text-white">Best Planning</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Custom Strategy</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <h4 className="text-xs sm:text-sm font-bold text-[#159FB4]">Expert Team</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Certified Mentors</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  <h4 className="text-xs sm:text-sm font-bold text-[#C59B4B]">100% Trusted</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">CIN Compliant</p>
                </div>
              </div>

              {/* Contact strip */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#159FB4]" />
                  <span>Email: <strong className="text-white">{contactInfo.email}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C59B4B]" />
                  <span>Call: <strong className="text-white">{contactInfo.displayPhone}</strong></span>
                </div>
              </div>
            </div>

            {/* Right: Company Board Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-6 backdrop-blur-md space-y-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
                    Company Board Details
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#159FB4] text-white font-bold">
                    Official Board
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase">Company Legal Name</span>
                    <strong className="text-sm text-white block">{company.legalName}</strong>
                    <span className="text-xs font-semibold text-[#C59B4B]">Recruit. Train. Place. Grow.</span>
                  </div>

                  <div className="pt-1">
                    <span className="text-slate-400 block text-[10px] uppercase">Corporate ID (CIN)</span>
                    <span className="font-mono text-xs font-bold text-[#159FB4]">{contactInfo.cin}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">PAN</span>
                      <span className="text-white font-bold">{contactInfo.pan}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase">TAN</span>
                      <span className="text-white font-bold">{contactInfo.tan}</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <span className="text-slate-400 block text-[10px] uppercase">Registered Address</span>
                    <span className="text-slate-200 text-[11px] leading-relaxed block">{contactInfo.address.full}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR PROUD MILESTONES WITH HOVER ELEVATION */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A]">
            Our Proud Milestones
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.slice(0, 4).map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-1 shadow-xs hover:border-[#159FB4] hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#0D274A]">
                {item.number}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-700">
                {item.label}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* 5. "Get Set, Launch" & "Dream Big, Start Today" */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Get Set, Launch */}
          <div className="lg:col-span-5 bg-[#0D274A] text-white rounded-2xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
            
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Office"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-5 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
                Reach Out
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Get Set, Launch – <span className="text-[#159FB4]">We’ll Handle the Start!</span>
              </h3>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs sm:text-sm">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#C59B4B] shrink-0" />
                  <span className="font-semibold text-white break-all">{contactInfo.email}</span>
                </a>

                <a
                  href={`tel:${contactInfo.phones[0]}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#159FB4] shrink-0" />
                  <span className="font-semibold text-white">{contactInfo.displayPhone}</span>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <MapPin className="w-5 h-5 text-[#159FB4] shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs leading-relaxed">
                    {contactInfo.address.full}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 text-[11px] text-slate-400 font-mono relative z-10">
              CIN: {contactInfo.cin}
            </div>
          </div>

          {/* Right Column: Dream Big, Start Today Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-extrabold text-[#0D274A]">
                  Dream Big, Start Today
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your requirements below and our team will get in touch promptly.
                </p>
              </div>

              {inquirySubmitted ? (
                <div className="p-6 rounded-xl bg-[#F0F8FA] border border-[#159FB4]/30 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#159FB4] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0D274A]">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you. The VM HRM team has received your message and will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#0D274A] mb-1">
                      Select service
                    </label>
                    <select
                      value={inquiryData.service}
                      onChange={(e) => setInquiryData({ ...inquiryData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-[#0D274A] focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                      required
                    >
                      <option value="Recruitment & Staffing">Recruitment & Staffing</option>
                      <option value="Executive Search & Leadership">Executive Search & Leadership</option>
                      <option value="Training & Skill Development">Training & Skill Development</option>
                      <option value="Contract Staffing & Compliance">Contract Staffing & Compliance</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#0D274A] mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0D274A] mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D274A] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D274A] mb-1">
                      Message
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Your inquiry or requirements..."
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[#0D274A] hover:bg-[#081B34] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-[#159FB4]" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
