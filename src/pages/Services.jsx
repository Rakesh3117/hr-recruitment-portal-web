import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  UserCheck, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Clock,
  ChevronRight,
  FileCheck,
  Layers,
  Send,
  PhoneCall,
  Users
} from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const detailedServices = [
    {
      id: 'executive-search',
      category: 'recruitment',
      badge: 'Executive & Leadership',
      title: 'Executive Search & Leadership Hiring',
      tagline: 'Identifying and securing CXO, VP, and Director-level leaders',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
      description: 'We execute confidential, high-touch executive searches to map industry leaders who possess the visionary leadership and technical acumen required to navigate modern enterprise transformation.',
      highlights: [
        'Confidential candidate mapping across global and pan-India talent pools',
        'Direct compensation negotiation and strategic alignment',
        'Multi-stage leadership competency assessments',
        '90-day placement assurance and onboarding governance'
      ],
      metrics: { metric: '21 Days', label: 'Avg. CXO Shortlist Time' },
      icon: UserCheck
    },
    {
      id: 'training-development',
      category: 'training',
      badge: 'Corporate Readiness',
      title: 'Corporate Training & Skill Development',
      tagline: 'Preparing candidates for day-one operational effectiveness',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
      description: 'Bridging the academia-to-industry gap through rigorous role-specific workshops, technical bootcamps, and professional grooming designed to reduce enterprise training ramp-up times.',
      highlights: [
        'Customized corporate training roadmaps aligned with enterprise stacks',
        'Soft skills, client communication, and cross-functional teamwork',
        'Hands-on capstone projects mimicking live enterprise workflows',
        'Continuous performance assessment and readiness scoring'
      ],
      metrics: { metric: '80%', label: 'Ramp-Up Time Reduction' },
      icon: GraduationCap
    },
    {
      id: 'contract-staffing',
      category: 'staffing',
      badge: 'Flexible Workforce',
      title: 'Contract Staffing & High-Volume Hiring',
      tagline: 'Agile workforce deployment for scaling projects and seasonal peaks',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
      description: 'Scale up or down without administrative overhead. We manage contract talent sourcing, attendance, payroll processing, and regulatory compliance with zero friction for your HR team.',
      highlights: [
        'Rapid deployment for multi-seat technology or operational projects',
        'Full statutory compliance: PF, ESIC, Professional Tax, and GST',
        'Transparent weekly/monthly invoicing and dedicated account manager',
        'Seamless transition option to permanent roles upon contract completion'
      ],
      metrics: { metric: '500+', label: 'Monthly Contract Resources' },
      icon: Briefcase
    },
    {
      id: 'hr-compliance',
      category: 'compliance',
      badge: 'Statutory & Payroll',
      title: 'HR Consulting, Payroll & Compliance Management',
      tagline: 'Zero-penalty statutory peace of mind for expanding businesses',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
      description: 'Navigating evolving labor laws and corporate filings requires diligence. We offer structured HR audit, payroll computation, background check verification, and statutory advisory services.',
      highlights: [
        'Comprehensive background verification (criminal, academic, past employment)',
        'Statutory audit covering Indian Labor Codes, MCA, and local shops act',
        'Automated payroll structuring, payslip disbursement, and tax filings',
        'Standardized HR policy creation and employee handbook development'
      ],
      metrics: { metric: '100%', label: 'Audit & Compliance Track Record' },
      icon: FileCheck
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? detailedServices
    : detailedServices.filter(s => s.category === activeCategory);

  const deliverySteps = [
    { num: '01', title: 'Requirement Scope', desc: 'Understanding technical stack, team culture, timeline, and exact budget parameters.' },
    { num: '02', title: 'Targeted Sourcing', desc: 'Active candidate mapping through verified networks, premium ATS, and domain databases.' },
    { num: '03', title: 'Pre-Assessment', desc: 'Rigorous vetting covering technical expertise, communication fluency, and background credentials.' },
    { num: '04', title: 'Interview & Offer', desc: 'Coordinated interview rounds, offer negotiations, and statutory onboarding alignment.' },
    { num: '05', title: 'Retention SLA', desc: 'Post-placement 90-day retention guarantee and continuous HR support for both parties.' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden bg-white">
      
      {/* 1. DISTINCT HEADER BANNER WITH SKYSCRAPER OVERLAY & INTERACTIVE JUMP BAR */}
      <section className="relative bg-primary text-white pt-16 pb-20 sm:pt-20 sm:pb-24 overflow-hidden">
        
        {/* Background Architecture Image (Dedicated photo-1486406146926-c627a92ad1ab) */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate Skylines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/95 to-primary" />
        </div>

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-gold border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Full-Stack Workforce Portfolio</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Comprehensive <span className="text-secondary">Talent</span>, <span className="text-gold">Training</span> & Staffing Capabilities
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From executive search and permanent hiring to scalable contract staffing, payroll compliance, and corporate upskilling — built for dependable business execution.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {[
              { id: 'all', label: 'All Services', icon: Layers },
              { id: 'recruitment', label: 'Executive Search', icon: UserCheck },
              { id: 'training', label: 'Training & Upskilling', icon: GraduationCap },
              { id: 'staffing', label: 'Contract Staffing', icon: Briefcase },
              { id: 'compliance', label: 'HR Compliance & Payroll', icon: FileCheck }
            ].map(tab => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-secondary text-white shadow-md shadow-secondary/30'
                      : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10'
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. ALTERNATING ZIG-ZAG SERVICE FEATURE BLOCKS (HIGH IMPACT STORYLINE LAYOUT) */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {filteredServices.map((service, index) => {
          const isEven = index % 2 === 1;
          const ServiceIcon = service.icon;

          return (
            <div 
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                isEven ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Frame (Odd: Left on desktop, Even: Right on desktop) */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative group">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-900 group-hover:shadow-2xl transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    
                    {/* Floating Metric Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-secondary block">
                          Demonstrated Performance
                        </span>
                        <strong className="text-base sm:text-lg font-black text-primary">
                          {service.metrics.metric}
                        </strong>
                      </div>
                      <span className="text-xs text-slate-600 font-semibold max-w-[150px] text-right">
                        {service.metrics.label}
                      </span>
                    </div>
                  </div>

                  {/* Decorative Border Dot */}
                  <div className="hidden sm:block absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-gold/15 -z-10 pointer-events-none" />
                </div>
              </div>

              {/* Content Column (Odd: Right on desktop, Even: Left on desktop) */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 text-xs font-bold text-primary">
                    <ServiceIcon className="w-4 h-4 text-secondary" />
                    <span>{service.badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-secondary">
                    {service.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Checklist of deliverables */}
                <div className="space-y-2.5 pt-1">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-hover transition-all shadow-md group"
                  >
                    <Send className="w-3.5 h-3.5 text-secondary" />
                    <span>Inquire for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-primary transition-colors group"
                  >
                    <Users className="w-3.5 h-3.5 text-secondary" />
                    <span>View Related Openings</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>
          );
        })}
      </section>

      {/* 3. SLA DELIVERY ROADMAP (5-STEP PROCESS) */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">
              Structured Execution SLA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              How We Fulfill Client Mandates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear timelines, zero surprises, and rigorous candidate qualification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {deliverySteps.map((step) => (
              <div 
                key={step.num}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-secondary transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-2xl font-black text-secondary">
                    {step.num}
                  </span>
                  <h3 className="text-sm font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase">
                  <span>Step {step.num}</span>
                  <Clock className="w-3 h-3 text-gold" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE ASSURANCE GUARANTEE BANNER */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-primary via-navy-deep to-primary text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold">
              <ShieldCheck className="w-4 h-4" />
              <span>Service Level Commitment</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Ready to Accelerate Your Hiring or Corporate Upskilling?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Partner with VM Human Resource Management Private Limited for verified, day-one productive professionals.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-secondary hover:bg-secondary-hover shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4 text-white" />
              <span>Schedule a Call</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
