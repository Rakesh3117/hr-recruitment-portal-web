import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  UserCheck, 
  Users, 
  Code2, 
  Building2, 
  GraduationCap,
  Layers,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import servicesData from '../data/services.mocks.js';

const Services = () => {
  const getServiceIcon = (id) => {
    switch(id) {
      case 'software-development': return <Code2 className="w-6 h-6 text-[#159FB4]" />;
      case 'it-services-tech-staffing': return <Layers className="w-6 h-6 text-[#0D274A]" />;
      case 'training-skill-development': return <GraduationCap className="w-6 h-6 text-[#C59B4B]" />;
      case 'recruitment-staffing': return <Users className="w-6 h-6 text-[#159FB4]" />;
      case 'permanent-recruitment': return <UserCheck className="w-6 h-6 text-[#0D274A]" />;
      case 'contract-staffing': return <Briefcase className="w-6 h-6 text-[#159FB4]" />;
      default: return <Building2 className="w-6 h-6 text-[#0D274A]" />;
    }
  };

  const getServiceImage = (id) => {
    switch(id) {
      case 'recruitment-staffing':
        return 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80';
      case 'training-skill-development':
        return 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80';
      case 'it-services-tech-staffing':
        return 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80';
      case 'talent-placement-growth':
        return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80';
      case 'permanent-recruitment':
        return 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80';
      case 'contract-staffing':
        return 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80';
      default:
        return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80';
    }
  };

  const processStages = [
    { num: '01', title: 'Recruit', text: 'Targeted sourcing and comprehensive profile verification aligned with role requirements.' },
    { num: '02', title: 'Train', text: 'Domain upskilling, role-readiness, and interview preparation to ensure day-one productivity.' },
    { num: '03', title: 'Place', text: 'Coordinated interviews, offer alignment, background validation, and seamless onboarding.' },
    { num: '04', title: 'Grow', text: 'Ongoing performance alignment and dependable workforce pipelines for sustainable business growth.' }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-16 overflow-hidden">
      
      {/* 1. DISTINCTIVE HERO HEADER WITH TECH & CONSULTING IMAGERY */}
      <section className="relative bg-[#0D274A] text-white py-16 sm:py-24 overflow-hidden">
        
        {/* Background Image with Dark Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
            alt="Technology Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D274A] via-[#0D274A]/95 to-[#0D274A]/80" />
        </div>

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-xs text-slate-400">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link> / <span className="text-[#159FB4]">Services</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-[#159FB4] border border-white/15">
                  <Sparkles className="w-3 h-3 text-[#C59B4B]" />
                  <span>Solutions & Offerings</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Specialized IT, Training & <span className="text-[#159FB4]">Recruitment Services</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                From custom software engineering and IT consulting to domain-focused training and premier talent placement.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#159FB4] hover:bg-[#118496] transition-all shadow-md hover:shadow-lg"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Frame */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Corporate Training & Tech Services"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES GRID WITH INDIVIDUAL SERVICE PREVIEWS */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
            Service Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A]">
            Comprehensive Workforce Solutions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#159FB4] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Banner for Service */}
              <div className="h-44 overflow-hidden relative">
                <img
                  src={getServiceImage(service.id)}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/80 via-[#0D274A]/20 to-transparent" />
                
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#0D274A] shadow-xs">
                  {service.badge}
                </span>

                <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-[#159FB4]">
                    {getServiceIcon(service.id)}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description & Deliverables */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {service.deliverables && (
                    <ul className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#159FB4] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#159FB4] hover:text-[#0D274A] transition-colors"
                  >
                    <span>Inquire About Mandate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOUR STAGE LIFECYCLE: Recruit. Train. Place. Grow. */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A]">
              Recruit. Train. Place. <span className="text-[#C59B4B]">Grow.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage) => (
              <div key={stage.num} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2 hover:border-[#159FB4] transition-colors">
                <span className="text-2xl font-black text-[#159FB4]/40">{stage.num}</span>
                <h4 className="text-base font-bold text-[#0D274A]">{stage.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{stage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0D274A] text-white p-8 sm:p-10 text-center space-y-4 shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Ready to Discuss Your Project or Talent Mandate?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Contact VM Human Resource Management Private Limited today to explore how we can support your business growth.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#159FB4] hover:bg-[#118496] transition-colors shadow-sm"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
