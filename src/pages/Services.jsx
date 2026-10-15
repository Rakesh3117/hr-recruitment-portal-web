import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Briefcase, 
  UserCheck, 
  Users, 
  Layers, 
  Code2, 
  Building2, 
  PhoneCall
} from 'lucide-react';
import servicesData from '../data/services.mocks.js';

const Services = () => {
  // Mapping service icons
  const getServiceIcon = (id) => {
    switch(id) {
      case 'permanent-recruitment': return <UserCheck className="w-6 h-6 text-primary" />;
      case 'contract-staffing': return <Users className="w-6 h-6 text-teal" />;
      case 'bulk-hiring': return <Layers className="w-6 h-6 text-accent" />;
      case 'it-technical-recruitment': return <Code2 className="w-6 h-6 text-primary" />;
      case 'executive-professional-hiring': return <Briefcase className="w-6 h-6 text-teal" />;
      default: return <Building2 className="w-6 h-6 text-secondary" />;
    }
  };

  const processStages = [
    { num: '01', title: 'Understand', text: "We understand the client's job requirement, skills, experience and workforce needs." },
    { num: '02', title: 'Source', text: 'Our recruitment team identifies suitable candidates through multiple sourcing channels.' },
    { num: '03', title: 'Screen', text: 'Candidates are screened according to the role requirements.' },
    { num: '04', title: 'Shortlist', text: 'Qualified candidates are presented to the client for consideration.' },
    { num: '05', title: 'Interview', text: 'We coordinate interviews between candidates and employers.' },
    { num: '06', title: 'Selection & Joining', text: 'We support the candidate and client through the final selection and joining process.' }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-lavender-light via-surface to-background py-14 sm:py-20 lg:py-24 border-b border-border/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface text-primary border border-border shadow-xs">
              Recruitment Solutions
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
              Comprehensive Staffing & <span className="text-primary">Recruitment Services</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-grey leading-relaxed font-normal">
              Structured hiring support designed for growing enterprises, high-volume requirements, and specialized talent mandates.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/employers"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors duration-fast"
              >
                <Briefcase className="w-4 h-4" />
                <span>Submit Hiring Requirement</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-navy bg-surface hover:bg-background-secondary border border-border transition-colors duration-fast"
              >
                <PhoneCall className="w-4 h-4 text-teal" />
                <span>Talk to a Recruiter</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 6 FOUNDATIONAL SERVICES GRID */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-surface rounded-3xl p-6 sm:p-8 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-normal flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header & Icon */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-background-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-fast">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-lavender-light text-primary">
                    {service.badge || 'Recruitment'}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors duration-fast">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-teal mt-0.5">
                    {service.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-grey leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-3 border-t border-border/70 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-grey-dark">
                    {service.deliverables?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="p-3 rounded-xl bg-background-secondary text-xs text-grey leading-relaxed">
                  <span className="font-semibold text-navy">Ideal for: </span>
                  {service.idealFor}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-border">
                <Link
                  to={`/employers?service=${encodeURIComponent(service.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-primary bg-lavender-light hover:bg-primary hover:text-white transition-all duration-fast"
                >
                  <span>Request {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR RECRUITMENT WORKFLOW (SECTION 5) */}
      <section className="bg-background-secondary py-16 sm:py-20 border-y border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal">
              Delivery Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
              Our 6-Step Recruitment Process
            </h2>
            <p className="text-sm sm:text-base text-grey leading-relaxed">
              Every mandate follows a proven lifecycle to guarantee quality matches and reliable onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processStages.map((stage) => (
              <div 
                key={stage.num}
                className="bg-surface rounded-2xl p-6 sm:p-7 border border-border shadow-xs hover:shadow-card transition-all duration-normal"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl font-extrabold text-primary/30">
                    {stage.num}
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-lavender-light text-primary">
                    Step {stage.num.replace('0', '')}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-navy mb-1.5">
                  {stage.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-grey leading-relaxed">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM ACTION BANNER */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need a Customized Staffing Solution?
            </h3>
            <p className="text-xs sm:text-sm text-grey-light leading-relaxed">
              Our recruitment specialists can tailor a solution blending permanent, contract, or volume hiring based on your specific requirements.
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-3">
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-navy bg-white hover:bg-background-secondary shadow-md transition-colors duration-fast"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Submit Requirement</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
