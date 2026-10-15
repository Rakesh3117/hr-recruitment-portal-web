import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Briefcase, 
  UserCheck, 
  Users, 
  FileCheck, 
  PhoneCall, 
  Building2, 
  TrendingUp,
} from 'lucide-react';
import statsData from '../data/stats.mocks.js';

const Company = () => {
  const whyChooseUs = statsData.valuePillars || [];

  const values = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: 'Client-Centered Focus',
      desc: 'We dedicate time to understand the unique requirements, team culture, and business goals before commencing each search mandate.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal" />,
      title: 'Integrity & Verification',
      desc: 'Every candidate undergoes objective background screening and skills validation, ensuring honest profiles and verified experience.'
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: 'Candidate Respect',
      desc: 'We advocate for candidate career growth, offering transparent communication, prompt interview feedback, and career guidance.'
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: 'Enduring Partnerships',
      desc: 'We focus on long-term relationships rather than one-time transactions, supporting growing organizations at every scaling phase.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-lavender-light via-surface to-background py-14 sm:py-20 lg:py-24 border-b border-border/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface text-primary border border-border shadow-xs">
              About HR ANAND
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
              Building Teams. <span className="text-primary">Creating Opportunities.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-grey leading-relaxed font-normal">
              We are a professional recruitment and staffing agency dedicated to connecting businesses with the right talent and helping candidates discover meaningful career opportunities.
            </p>

            <div className="pt-2 text-sm sm:text-base text-grey-dark max-w-2xl mx-auto leading-relaxed border-t border-border/70 pt-6">
              Our approach combines industry understanding, candidate screening and client-focused recruitment to deliver dependable hiring solutions.
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/employers"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors duration-fast"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire Talent</span>
              </Link>
              <Link
                to="/job-seekers"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-navy bg-surface hover:bg-background-secondary border border-border transition-colors duration-fast"
              >
                <UserCheck className="w-4 h-4 text-teal" />
                <span>Explore Careers</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR MISSION & VISION */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-border shadow-card hover:shadow-card-hover transition-all duration-normal space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-lavender-soft flex items-center justify-center text-primary">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Purpose & Direction
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-grey leading-relaxed">
              To empower growing organizations with dependable, pre-screened talent while creating transparent, high-impact career pathways for candidates across diverse industry sectors.
            </p>
            <ul className="space-y-2 pt-2 text-xs sm:text-sm text-grey-dark">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>Delivering vetted talent aligned with organizational culture.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>Fostering honest, transparent relationships with candidates.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>Reducing time-to-hire through disciplined screening.</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-surface rounded-3xl p-8 sm:p-10 border border-border shadow-card hover:shadow-card-hover transition-all duration-normal space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-subtle flex items-center justify-center text-teal">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Long-Term Outlook
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-grey leading-relaxed">
              To be the most trusted recruitment partner for businesses seeking dependable hiring solutions, recognized for responsive service, ethical candidate representation, and sector expertise.
            </p>
            <ul className="space-y-2 pt-2 text-xs sm:text-sm text-grey-dark">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>Setting benchmark standards in candidate qualification.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>Providing scalable staffing solutions for dynamic market needs.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                <span>Building enduring partnerships built on delivered promises.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="bg-background-secondary py-16 sm:py-20 border-y border-border">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
              Core Principles
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
              Our Values
            </h2>
            <p className="text-sm sm:text-base text-grey leading-relaxed">
              Every mandate we undertake is guided by our core values of accuracy, ethics, and mutual respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div 
                key={idx}
                className="bg-surface rounded-2xl p-6 sm:p-7 border border-border shadow-xs hover:shadow-card transition-all duration-normal space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-background-secondary flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-navy">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-grey leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (GENUINE VALUE PROPOSITIONS) */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal">
            The Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            Why Choose Us
          </h2>
          <p className="text-sm sm:text-base text-grey leading-relaxed">
            We provide genuine value propositions focused on clarity, screening rigor, and dependability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((pillar, idx) => (
            <div 
              key={idx}
              className="bg-surface rounded-2xl p-6 sm:p-7 border border-border shadow-xs hover:border-primary/40 hover:shadow-card transition-all duration-normal"
            >
              <div className="w-10 h-10 rounded-xl bg-lavender-light text-primary flex items-center justify-center mb-4">
                {idx === 0 && <Target className="w-5 h-5" />}
                {idx === 1 && <FileCheck className="w-5 h-5" />}
                {idx === 2 && <PhoneCall className="w-5 h-5" />}
                {idx === 3 && <Users className="w-5 h-5" />}
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

      {/* 5. BOTTOM CTA */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy text-white p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Discuss Your Talent Requirements?
          </h3>
          <p className="text-sm sm:text-base text-grey-light max-w-2xl mx-auto leading-relaxed">
            Whether you need permanent talent, contract staffing, or high-volume workforce support, our recruitment team is ready to assist.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-navy bg-white hover:bg-background-secondary shadow-md transition-colors duration-fast"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Submit Hiring Requirement</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-surface/10 hover:bg-surface/20 border border-white/20 transition-colors duration-fast"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Company;
