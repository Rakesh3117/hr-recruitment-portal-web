import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Building, 
  TrendingUp, 
  Award,
  GraduationCap,
  Users,
  Briefcase,
  PhoneCall
} from 'lucide-react';
import statsData from '../data/stats.mocks.js';

const Company = () => {
  const { contactInfo, company, milestones } = statsData;

  const fourPillars = [
    {
      step: '01',
      title: 'Recruit',
      subtitle: 'Precision Talent Sourcing',
      desc: 'Targeted talent mapping, active & passive candidate outreach, and rigorous credential verification across IT and enterprise roles.',
      icon: Users,
      color: '#159FB4'
    },
    {
      step: '02',
      title: 'Train',
      subtitle: 'Industry-Aligned Upskilling',
      desc: 'Custom corporate readiness curriculum, soft-skills grooming, and technology workshops ensuring job-ready capabilities.',
      icon: GraduationCap,
      color: '#0D274A'
    },
    {
      step: '03',
      title: 'Place',
      subtitle: 'Seamless Onboarding',
      desc: 'Structured interview coordination, offer negotiation alignment, background checks, and compliance onboarding.',
      icon: CheckCircle2,
      color: '#C59B4B'
    },
    {
      step: '04',
      title: 'Grow',
      subtitle: 'Sustainable Enterprise Scaling',
      desc: 'Post-placement milestone tracking, dependable talent pipelines, and long-term organizational value creation.',
      icon: TrendingUp,
      color: '#159FB4'
    }
  ];

  const governanceStandards = [
    {
      title: '100% Pre-Screened Verification',
      desc: 'Multi-tiered background and academic verification before any candidate is presented to client hiring managers.'
    },
    {
      title: 'Statutory & Regulatory Rigor',
      desc: 'Strict adherence to Ministry of Corporate Affairs (MCA), labor codes, PF/ESI guidelines, and direct tax compliance.'
    },
    {
      title: 'Transparent Client Engagements',
      desc: 'Honest communication, transparent SLA reporting, and dedicated account managers for every recruitment partner.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden bg-white">
      
      {/* 1. ASYMMETRIC LIGHT EDITORIAL HERO (DISTINCT FROM HOME CAROUSEL & SERVICES) */}
      <section className="relative pt-8 sm:pt-14 pb-12 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Registered Corporate Entity Pill */}
          <div className="mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-secondary/10 text-primary border border-secondary/20">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Incorporated Corporate Entity</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Authoritative Editorial Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">
                  About Our Enterprise
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-primary tracking-tight leading-[1.15]">
                  Strategic Workforce Partners Built on <span className="text-secondary">Precision</span> & <span className="text-gold">Integrity</span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                <strong className="text-primary font-bold">{company.legalName}</strong> is a dedicated recruitment, workforce training, and executive staffing firm incorporated in Telangana. Guided by our motto <span className="font-semibold text-primary italic">“Recruit. Train. Place. Grow.”</span>, we bridge talent gaps for high-growth enterprises and provide ambitious professionals with transformative career pathways.
              </p>

              {/* Fast Facts Tags */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span className="font-bold text-primary">CIN:</span>
                  <span className="font-mono text-slate-600 font-medium">{contactInfo.cin}</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <Building className="w-4 h-4 text-gold" />
                  <span className="font-bold text-primary">Registered at:</span>
                  <span className="text-slate-600">Bachupally, Hyderabad</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover transition-all shadow-md hover:shadow-lg group"
                >
                  <Briefcase className="w-4 h-4 text-secondary" />
                  <span>Our Service Lines</span>
                  <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-primary bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-secondary" />
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Layered Corporate Architectural Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Architectural Glass Showcase Image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                    alt="Corporate Headquarters Architecture"
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                  
                  {/* Floating Live Badge inside Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-secondary tracking-wider block">
                        Government Registered
                      </span>
                      <strong className="text-xs sm:text-sm text-primary block">
                        VM Human Resource Management
                      </strong>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-gold shadow-xs">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Overlapping Small Accent Card (Bottom-Left) */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-sm font-black text-primary block">2000+ Deployed Candidates</span>
                    <span className="text-[11px] text-slate-500 font-medium">Empowering Careers Pan-India</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE OFFICIAL PHYSICAL "COMPANY NAME BOARD" (BRASS & NAVY PLAQUE DESIGN) */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-primary via-primary-hover to-primary text-white p-6 sm:p-10 shadow-2xl border-2 border-gold/30 relative overflow-hidden">
          
          {/* Subtle Brass Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold m-3 pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold m-3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold m-3 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold m-3 pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-6 mb-8">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Statutory Name Board & Corporate Disclosures</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                {company.legalName}
              </h2>
              <p className="text-xs sm:text-sm text-secondary font-semibold tracking-wide">
                Recruit. Train. Place. Grow.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-gold border border-white/15 shrink-0">
              <Award className="w-4 h-4" />
              <span>ROC Telangana Incorporated</span>
            </div>
          </div>

          {/* Plaque Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
            
            {/* Box 1: CIN */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Corporate Identity Number (CIN)
              </span>
              <p className="font-mono text-sm sm:text-base font-bold text-secondary tracking-wider">
                {contactInfo.cin}
              </p>
              <p className="text-[11px] text-slate-300">
                Ministry of Corporate Affairs, Telangana
              </p>
            </div>

            {/* Box 2: PAN & TAN */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Tax Identification Numbers
              </span>
              <div className="font-mono text-xs sm:text-sm space-y-1 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">PAN:</span>
                  <strong className="text-white font-bold">{contactInfo.pan}</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">TAN:</span>
                  <strong className="text-white font-bold">{contactInfo.tan}</strong>
                </div>
              </div>
            </div>

            {/* Box 3: Communications */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                Official Contact Desks
              </span>
              <p className="text-xs text-slate-200 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
                <a href={`tel:${contactInfo.phones[0]}`} className="hover:text-white transition-colors">{contactInfo.displayPhone}</a>
              </p>
              <p className="text-xs text-slate-200 flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors break-all">{contactInfo.email}</a>
              </p>
            </div>

            {/* Box 4: Registered Office Address (Full Span) */}
            <div className="md:col-span-2 lg:col-span-3 p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5 backdrop-blur-xs">
              <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-gold tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Registered Office Address</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                {contactInfo.address.full}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. FOUR-PILLAR METHODOLOGY: RECRUIT, TRAIN, PLACE, GROW */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-secondary">
            Our Operating Model
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
            The 4-Stage Growth Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A battle-tested methodology powering high-velocity workforce scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fourPillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-secondary shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-slate-200 group-hover:text-secondary transition-colors">
                      {pillar.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-secondary/10 flex items-center justify-center transition-colors">
                      <IconComponent className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-primary">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-secondary">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 group-hover:text-primary">
                  <span>Phase {pillar.step}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. MISSION & VISION WITH DISTINCT INDEPENDENT PHOTOGRAPHY */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card (Dedicated Unique Image: photo-1551836022-d5d88e9218df) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Our Purpose & Mission"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white text-secondary flex items-center justify-center shadow-md">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                To deliver tailored recruitment, corporate training, and software staffing solutions that empower organizations to innovate and scale, while preparing professionals for impactful careers through rigorous competency preparation.
              </p>
              
              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Connecting enterprises with thoroughly evaluated, high-integrity candidates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>Bridging industry competency gaps through modern corporate upskilling.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Card (Dedicated Unique Image: photo-1552664730-d307ca884978) */}
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Our Future Vision"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-white text-gold flex items-center justify-center shadow-md">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 space-y-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                To be India’s most dependable and progressive human capital partner, celebrated for ethical recruitment governance, high talent retention rates, and fostering long-term organizational success in a changing global economy.
              </p>

              <ul className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Establishing exemplary benchmarks for corporate talent retention and growth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Building lasting stakeholder relationships grounded in transparency and mutual success.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CORPORATE GOVERNANCE & INTEGRITY */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                Enterprise Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
                Commitment to Ethical Compliance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Operating with transparent corporate accountability, we protect our partner organizations from compliance hazards and ensure candidates receive fair, dignified treatment throughout their placement lifecycle.
              </p>
              
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span>Request Corporate Verification Deck</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              {governanceStandards.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-primary">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. MILESTONES ROW */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {milestones.slice(0, 4).map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-secondary transition-all hover:-translate-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-primary">{item.number}</div>
              <div className="text-xs font-bold text-slate-600 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Company;
