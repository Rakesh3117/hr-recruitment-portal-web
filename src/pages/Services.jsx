import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  UserCheck, 
  Code2, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Clock,
  ChevronRight,
  FileCheck
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
      id: 'it-tech-staffing',
      category: 'tech',
      badge: 'Technical & Engineering',
      title: 'IT Services & Tech Talent Solutions',
      tagline: 'Full-stack developers, cloud architects, and QA engineers',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
      description: 'From niche full-stack engineers to devops and data specialists, we deliver pre-assessed technical professionals who can immediately push production code and integrate into agile sprints.',
      highlights: [
        'Pre-evaluated on modern stacks (React, Node, Java, Python, AWS, Azure)',
        'Live technical problem solving and code quality audits',
        'Rapid 24-48 hour turnaround on qualified engineering resumes',
        'Flexible engagement: contract-to-hire, direct hire, or dedicated pods'
      ],
      metrics: { metric: '94%', label: 'First-Round Interview Acceptance' },
      icon: Code2
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
      <section className="relative bg-[#0D274A] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 overflow-hidden">
        
        {/* Background Architecture Image (Dedicated photo-1486406146926-c627a92ad1ab) */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
            alt="Corporate Skylines"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D274A]/90 via-[#0D274A]/95 to-[#0D274A]" />
        </div>

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          
          <div className="flex items-center justify-center gap-2">
            <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">Home</Link>
            <span className="text-xs text-slate-500">/</span>
            <span className="text-xs font-bold text-[#159FB4]">Our Services</span>
            <span className="ml-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 text-[#C59B4B] border border-white/15">
              <Sparkles className="w-3 h-3 text-[#C59B4B]" />
              <span>Full-Stack Workforce Portfolio</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Comprehensive <span className="text-[#159FB4]">Talent</span>, <span className="text-[#C59B4B]">Training</span> & Staffing Capabilities
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From specialized IT engineering and executive search to scalable contract staffing and domain training — built for dependable business execution.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'recruitment', label: 'Executive Search' },
              { id: 'tech', label: 'IT & Tech Staffing' },
              { id: 'training', label: 'Training & Upskilling' },
              { id: 'staffing', label: 'Contract Staffing' },
              { id: 'compliance', label: 'HR Compliance & Payroll' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#159FB4] text-white shadow-md shadow-[#159FB4]/30'
                    : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/80 via-transparent to-transparent" />
                    
                    {/* Floating Metric Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/50 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#159FB4] block">
                          Demonstrated Performance
                        </span>
                        <strong className="text-base sm:text-lg font-black text-[#0D274A]">
                          {service.metrics.metric}
                        </strong>
                      </div>
                      <span className="text-xs text-slate-600 font-semibold max-w-[150px] text-right">
                        {service.metrics.label}
                      </span>
                    </div>
                  </div>

                  {/* Decorative Border Dot */}
                  <div className="hidden sm:block absolute -top-3 -right-3 w-12 h-12 rounded-2xl bg-[#C59B4B]/15 -z-10 pointer-events-none" />
                </div>
              </div>

              {/* Content Column (Odd: Right on desktop, Even: Left on desktop) */}
              <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 text-xs font-bold text-[#0D274A]">
                    <ServiceIcon className="w-4 h-4 text-[#159FB4]" />
                    <span>{service.badge}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A] tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-[#159FB4]">
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
                      <CheckCircle2 className="w-4 h-4 text-[#159FB4] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#0D274A] hover:bg-[#081B34] transition-all shadow-md"
                  >
                    <span>Inquire for this Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#159FB4]" />
                  </Link>
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#159FB4] hover:text-[#0D274A] transition-colors"
                  >
                    <span>View Related Openings</span>
                    <ChevronRight className="w-3.5 h-3.5" />
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
              Structured Execution SLA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A]">
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
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-[#159FB4] transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-2xl font-black text-[#159FB4]">
                    {step.num}
                  </span>
                  <h3 className="text-sm font-bold text-[#0D274A]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase">
                  <span>Step {step.num}</span>
                  <Clock className="w-3 h-3 text-[#C59B4B]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ENTERPRISE ASSURANCE GUARANTEE BANNER */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0D274A] via-[#091D38] to-[#0D274A] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C59B4B]">
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
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#159FB4] hover:bg-[#118496] shadow-lg transition-all"
            >
              <span>Schedule a Call</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
