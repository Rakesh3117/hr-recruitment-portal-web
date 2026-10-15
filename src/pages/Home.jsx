import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  UserCheck, 
  Users, 
  Layers, 
  CheckCircle2, 
  Target, 
  PhoneCall, 
  FileCheck, 
  Building2,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import servicesData from '../data/services.mocks.js';
import industriesData from '../data/industries.mocks.js';
import statsData from '../data/stats.mocks.js';

const Home = () => {
  // Highlight the three key services specified for Home
  const keyServices = [
    servicesData.find(s => s.id === 'permanent-recruitment') || servicesData[0],
    servicesData.find(s => s.id === 'contract-staffing') || servicesData[1],
    servicesData.find(s => s.id === 'bulk-hiring') || servicesData[2],
  ];

  // 6-Step Recruitment Process
  const recruitmentSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: "We understand the client's job requirement, skills, experience and workforce needs."
    },
    {
      step: '02',
      title: 'Source',
      desc: "Our recruitment team identifies suitable candidates through multiple sourcing channels."
    },
    {
      step: '03',
      title: 'Screen',
      desc: "Candidates are screened according to the role requirements."
    },
    {
      step: '04',
      title: 'Shortlist',
      desc: "Qualified candidates are presented to the client for consideration."
    },
    {
      step: '05',
      title: 'Interview',
      desc: "We coordinate interviews between candidates and employers."
    },
    {
      step: '06',
      title: 'Selection & Joining',
      desc: "We support the candidate and client through the final selection and joining process."
    }
  ];

  // 6 Genuine Value Propositions (Why Choose Us)
  const whyChooseUs = statsData.valuePillars || [
    {
      title: "Focused Recruitment",
      description: "We understand your requirements before beginning the search."
    },
    {
      title: "Quality Candidate Screening",
      description: "Candidates are evaluated against the requirements of the role."
    },
    {
      title: "Responsive Support",
      description: "We maintain communication throughout the recruitment process."
    },
    {
      title: "Flexible Staffing",
      description: "Solutions can be structured around permanent, contract and volume hiring requirements."
    },
    {
      title: "Industry Understanding",
      description: "We build recruitment capabilities around the sectors and roles we serve."
    },
    {
      title: "Long-Term Partnership",
      description: "Our objective is to build lasting relationships with both clients and candidates."
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-lavender-light via-surface to-background pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20 border-b border-border/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border shadow-xs text-xs sm:text-sm font-semibold text-primary animate-fadeIn">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span>The Right Talent. The Right Opportunity. The Right Connection.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-[1.15]">
              Recruitment & Staffing Solutions for <span className="text-primary">Growing Businesses</span>
            </h1>

            {/* Description Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-grey leading-relaxed max-w-2xl mx-auto font-normal">
              We connect businesses with skilled and reliable talent through professional recruitment, staffing and workforce solutions tailored to your requirements.
            </p>

            {/* Primary Action Buttons: Hire Talent & Find a Job */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/employers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover transition-all duration-fast shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Briefcase className="w-5 h-5 text-primary-light" />
                <span>Hire Talent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/job-seekers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-navy bg-surface hover:bg-background-secondary border border-border transition-all duration-fast shadow-xs hover:shadow-md hover:-translate-y-0.5"
              >
                <UserCheck className="w-5 h-5 text-teal" />
                <span>Find a Job</span>
              </Link>
            </div>

            {/* Sub-highlights bar */}
            <div className="pt-8 sm:pt-10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-grey-dark font-medium border-t border-border/70">
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>Pre-Screened Candidates</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>Dedicated Recruiter Support</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>Transparent Hiring Workflow</span>
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE KEY SERVICES */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            Our Core Staffing Services
          </h2>
          <p className="text-sm sm:text-base text-grey leading-relaxed">
            Tailored recruitment models structured around your immediate and long-term talent requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {keyServices.map((service, idx) => (
            <div 
              key={service.id || idx}
              className="bg-surface rounded-2xl p-6 sm:p-8 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-normal flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-lavender-soft flex items-center justify-center text-primary group-hover:scale-105 transition-transform duration-fast">
                  {idx === 0 && <UserCheck className="w-6 h-6" />}
                  {idx === 1 && <Users className="w-6 h-6" />}
                  {idx === 2 && <Layers className="w-6 h-6" />}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-background-secondary text-grey-dark">
                    {service.badge || 'Service'}
                  </span>
                  <h3 className="text-xl font-bold text-navy pt-1 group-hover:text-primary transition-colors duration-fast">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-grey leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 pt-2 border-t border-border/70 text-xs text-grey-dark">
                  {service.deliverables?.slice(0, 3).map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-border">
                <Link
                  to={`/employers?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group-hover:translate-x-1 transition-all duration-fast"
                >
                  <span>Request {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-primary bg-lavender-light hover:bg-lavender-soft transition-colors duration-fast"
          >
            <span>Explore All 6 Recruitment Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. OUR 6-STEP RECRUITMENT PROCESS */}
      <section className="bg-background-secondary py-16 sm:py-20 border-y border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal">
              How We Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
              Our Recruitment Process
            </h2>
            <p className="text-sm sm:text-base text-grey leading-relaxed">
              A transparent, structured 6-stage methodology ensuring candidate quality and seamless joining.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {recruitmentSteps.map((step) => (
              <div 
                key={step.step}
                className="bg-surface rounded-2xl p-6 sm:p-7 border border-border shadow-xs hover:shadow-card transition-all duration-normal relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold text-lavender-soft">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-lavender-light flex items-center justify-center text-primary text-xs font-bold">
                    Stage {step.step.replace('0', '')}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-navy mb-2">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-grey leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors duration-fast"
            >
              <Briefcase className="w-4 h-4" />
              <span>Start Your Hiring Mandate</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (GENUINE VALUE PROPOSITIONS) */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
            Our Differentiators
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            Why Partner With Us?
          </h2>
          <p className="text-sm sm:text-base text-grey leading-relaxed">
            Genuine value delivered through dedicated recruitment practices, thorough evaluation, and responsive support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-surface rounded-2xl p-6 sm:p-7 border border-border shadow-xs hover:border-teal/50 hover:shadow-card transition-all duration-normal"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-subtle text-teal flex items-center justify-center mb-4">
                {idx === 0 && <Target className="w-5 h-5" />}
                {idx === 1 && <FileCheck className="w-5 h-5" />}
                {idx === 2 && <PhoneCall className="w-5 h-5" />}
                {idx === 3 && <Layers className="w-5 h-5" />}
                {idx === 4 && <Building2 className="w-5 h-5" />}
                {idx === 5 && <TrendingUp className="w-5 h-5" />}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-navy mb-2">
                {pillar.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-grey leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE OVERVIEW */}
      <section className="bg-gradient-to-b from-background to-background-secondary py-16 sm:py-20 border-t border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
                Target Sectors
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
                Industries We Serve
              </h2>
              <p className="text-sm sm:text-base text-grey leading-relaxed">
                Specialized recruitment capabilities tailored for high-demand functional domains.
              </p>
            </div>

            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover whitespace-nowrap self-start md:self-auto"
            >
              <span>View All 10 Target Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {industriesData.slice(0, 10).map((ind) => (
              <Link
                key={ind.id}
                to={`/industries#${ind.id}`}
                className="bg-surface rounded-xl p-4 sm:p-5 border border-border hover:border-primary/40 hover:shadow-card text-center group transition-all duration-normal"
              >
                <div className="w-10 h-10 mx-auto rounded-lg bg-lavender-light text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-fast">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-navy group-hover:text-primary transition-colors">
                  {ind.name}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DUAL CONVERSION FUNNEL (EMPLOYER vs CANDIDATE) */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* For Employers Card */}
          <div className="rounded-3xl bg-navy text-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-teal-light border border-white/15">
                FOR EMPLOYERS & BUSINESSES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Have a Hiring Requirement?
              </h3>
              <p className="text-sm text-grey-light leading-relaxed">
                Tell us what talent you are looking for, and our recruitment team will help you find suitable candidates with rapid turnaround.
              </p>
            </div>

            <div className="pt-2 relative z-10">
              <Link
                to="/employers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-navy bg-white hover:bg-background-secondary transition-all duration-fast shadow-md"
              >
                <Briefcase className="w-4 h-4 text-primary" />
                <span>Submit Hiring Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* For Job Seekers Card */}
          <div className="rounded-3xl bg-primary text-white p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/20">
                FOR CANDIDATES & PROFESSIONALS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Looking for Your Next Career Opportunity?
              </h3>
              <p className="text-sm text-primary-light leading-relaxed">
                Explore career opportunities and connect with employers looking for talented professionals like you.
              </p>
            </div>

            <div className="pt-2 relative z-10">
              <Link
                to="/job-seekers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-primary bg-white hover:bg-background-secondary transition-all duration-fast shadow-md"
              >
                <UserCheck className="w-4 h-4 text-primary" />
                <span>Submit Your Resume</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
