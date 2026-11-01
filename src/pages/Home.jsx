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
      icon: <Users className="w-5 h-5 text-secondary" />,
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
      badge: 'Talent Acquisition'
    },
    {
      id: 'executive-search',
      title: 'Executive Search & Leadership',
      desc: 'Confidential executive search mapping industry leaders and CXOs to steer enterprise transformation.',
      icon: <UserCheck className="w-5 h-5 text-secondary" />,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      badge: 'Leadership Mandates'
    },
    {
      id: 'training-development',
      title: 'Training & Skill Development',
      desc: 'Targeted corporate readiness and domain skill workshops that prepare candidates for day-one productivity.',
      icon: <GraduationCap className="w-5 h-5 text-gold" />,
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
      badge: 'Upskilling'
    },
    {
      id: 'contract-staffing',
      title: 'Contract Staffing & Compliance',
      desc: 'Agile workforce deployment with 100% statutory, labor code, PF/ESIC, and payroll management.',
      icon: <Briefcase className="w-5 h-5 text-secondary" />,
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
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

      {/* 2. CORE SERVICES WITH VISUAL IMAGERY (LIGHT THEME) */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>What We Offer</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            Our Core Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Comprehensive business, training, and workforce management services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coreServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-secondary hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Full-width image header - vivid, clear, no washed-out milky overlay */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-black/30 pointer-events-none" />

                {/* Service Category Badge & Icon Floating on top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/95 text-primary shadow-md backdrop-blur-xs border border-slate-100">
                    {service.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/95 border border-slate-100 text-secondary shadow-md backdrop-blur-xs flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Matter written cleanly on crisp white card surface with maximum legibility */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4 bg-white">
                <div className="space-y-2.5">
                  <h3 className="text-xl sm:text-2xl font-black text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-secondary shadow-xs hover:shadow-md transition-all group/btn"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-white" />
                    <span>Explore Service</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "We are at VM HRM" SIGNATURE SECTION (LIGHT THEME & BOARD DETAILS) */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-50 border border-slate-200 text-slate-800 p-8 sm:p-12 shadow-xs relative overflow-hidden">
          
          {/* Decorative Background Accents */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                We are at VM HRM Private Limited
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-primary">
                Empowering Business Growth Through <span className="text-secondary">Innovation</span>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {company.legalName} specializes in executive recruitment, corporate training, and comprehensive workforce staffing solutions. Dedicated to driving business growth through strategic workforce management and verified talent pipelines. Our expert team collaborates closely with clients to optimize staffing and achieve sustainable success.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center hover:border-secondary hover:shadow-xs transition-all">
                  <h4 className="text-xs sm:text-sm font-bold text-primary">Best Planning</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Custom Strategy</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center hover:border-secondary hover:shadow-xs transition-all">
                  <h4 className="text-xs sm:text-sm font-bold text-secondary">Expert Team</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Certified Mentors</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-center hover:border-gold hover:shadow-xs transition-all">
                  <h4 className="text-xs sm:text-sm font-bold text-gold">100% Trusted</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">CIN Compliant</p>
                </div>
              </div>

              {/* Contact strip */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-secondary" />
                  <span>Email: <strong className="text-primary">{contactInfo.email}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>Call: <strong className="text-primary">{contactInfo.displayPhone}</strong></span>
                </div>
              </div>
            </div>

            {/* Right: Company Board Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-slate-200 p-6 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Company Board Details
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-white font-bold">
                    Official Board
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Company Legal Name</span>
                    <strong className="text-sm text-primary block">{company.legalName}</strong>
                    <span className="text-xs font-semibold text-gold">Recruit. Train. Place. Grow.</span>
                  </div>

                  <div className="pt-1">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Corporate ID (CIN)</span>
                    <span className="font-mono text-xs font-bold text-secondary">{contactInfo.cin}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-semibold">PAN</span>
                      <span className="text-primary font-bold">{contactInfo.pan}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-semibold">TAN</span>
                      <span className="text-primary font-bold">{contactInfo.tan}</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Registered Address</span>
                    <span className="text-slate-600 text-[11px] leading-relaxed block">{contactInfo.address.full}</span>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            Our Proud Milestones
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.slice(0, 4).map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 text-center space-y-1 shadow-xs hover:border-secondary hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-black text-primary">
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
          
          {/* Left Column: Get Set, Launch (Light Design) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-ice/40 border border-slate-200 text-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
            
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Corporate Office"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-5 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Reach Out
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-primary">
                Get Set, Launch – <span className="text-secondary">We’ll Handle the Start!</span>
              </h3>

              <div className="space-y-4 pt-4 border-t border-slate-200 text-xs sm:text-sm">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-secondary hover:shadow-xs transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-ice flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Email Us</span>
                    <span className="font-semibold text-primary break-all">{contactInfo.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${contactInfo.phones[0]}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-secondary hover:shadow-xs transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-ice flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Call Us</span>
                    <span className="font-semibold text-primary">{contactInfo.displayPhone}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-ice flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Headquarters</span>
                    <span className="text-slate-600 text-xs leading-relaxed block">
                      {contactInfo.address.full}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 text-[11px] text-slate-500 font-mono relative z-10 flex items-center justify-between">
              <span>Corporate ID:</span>
              <span className="font-bold text-primary">{contactInfo.cin}</span>
            </div>
          </div>

          {/* Right Column: Dream Big, Start Today Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-extrabold text-primary">
                  Dream Big, Start Today
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your requirements below and our team will get in touch promptly.
                </p>
              </div>

              {inquirySubmitted ? (
                <div className="p-6 rounded-xl bg-ice border border-secondary/30 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-primary">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you. The VM HRM team has received your message and will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-primary mb-1">
                      Select service
                    </label>
                    <select
                      value={inquiryData.service}
                      onChange={(e) => setInquiryData({ ...inquiryData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-primary focus:ring-2 focus:ring-secondary focus:outline-none bg-slate-50"
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
                      <label className="block text-xs font-bold text-primary mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-secondary focus:outline-none bg-slate-50"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-primary mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-secondary focus:outline-none bg-slate-50"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-primary mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-secondary focus:outline-none bg-slate-50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-primary mb-1">
                      Message
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Your inquiry or requirements..."
                      value={inquiryData.message}
                      onChange={(e) => setInquiryData({ ...inquiryData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-secondary focus:outline-none bg-slate-50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg text-sm font-bold text-white bg-secondary hover:bg-secondary-hover transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs hover:shadow-md"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-white" />
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
