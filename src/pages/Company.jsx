import { Link } from 'react-router-dom';
import { 
  Users, 
  ShieldCheck, 
  Heart, 
  Target, 
  ArrowRight,
  Quote
} from 'lucide-react';
import StatStrip from '../components/common/StatStrip';
import statsData from '../data/stats.json';

const Company = () => {
  const milestones = [
    {
      year: '1996',
      title: 'Founded with a Purpose',
      desc: 'Established in Mumbai as a boutique leadership search practice serving India\'s nascent private banking and manufacturing titans.'
    },
    {
      year: '2005',
      title: 'Pan-India Footprint Expansion',
      desc: 'Opened physical delivery hubs across Bengaluru, Delhi NCR, and Pune to power the high-growth IT and ITES revolution.'
    },
    {
      year: '2015',
      title: 'Cross-Border & Specialized Practices',
      desc: 'Expanded into Singapore and the Middle East, pioneering specialized sector verticals in Automotive EV, Clean Energy, and Global Supply Chain.'
    },
    {
      year: 'Today',
      title: 'AI-Enabled Enterprise Recruitment',
      desc: '1.1L+ lifetime placements, serving 25+ industry verticals with proprietary Interview-as-a-Service, RPO, and GIC incubation solutions.'
    }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: 'Client-First Delivery',
      desc: 'We calibrate searches to your organizational DNA, providing curated shortlists that reduce time-to-hire by over 45%.'
    },
    {
      icon: <Heart className="w-6 h-6 text-accent" />,
      title: 'Candidate Advocacy',
      desc: 'We champion candidates as long-term career partners, ensuring total transparency, interview coaching, and zero ghosting.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-teal" />,
      title: 'Integrity in Every Search',
      desc: 'Discreet, rigorous background verifications, conflict-free searches, and strict confidentiality adhering to global data standards.'
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: 'Long-Term Relationships Over Transactions',
      desc: 'Interns we placed decades ago are today senior corporate executives — relationships that continue to generate enduring value.'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-lavender-light via-lavender-soft/30 to-background py-16 lg:py-24 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white text-primary border border-lavender-soft mb-4">
            About Acuity Talent Partners
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight">
            Building Leadership & Human Capital That Endures
          </h1>
          <p className="mt-4 text-base sm:text-lg text-grey leading-relaxed">
            For more than three decades, Acuity has served as the strategic talent partner for Fortune 500 MNCs, high-growth technology enterprises, and leading Indian conglomerates.
          </p>

          <div className="mt-10 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-card border border-lavender-soft relative">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
              alt="Acuity Corporate Headquarters" 
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 text-white text-left">
              <span className="text-xs uppercase font-bold tracking-wider text-teal-light">Corporate Headquarters & Search Delivery</span>
              <h3 className="text-lg font-bold">BKC Center of Excellence, Mumbai</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Footprint 4-up Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <StatStrip />
      </section>

      {/* Our Story & Interactive Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Our Story: From Boutique Practice to Global Partner
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            Three decades of agility, market resilience, and unwavering focus on high-impact talent outcomes.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item) => (
            <div 
              key={item.year}
              className="bg-white rounded-2xl p-6 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-200 relative group"
            >
              <div className="inline-block px-3 py-1 rounded-lg text-sm font-extrabold bg-lavender-light text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {item.year}
              </div>
              <h3 className="text-base font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-grey leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team / Culture Quote Block (Spec Section 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy via-navy-muted to-[#1E1B4B] rounded-3xl p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" 
            alt="People & Culture" 
            className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay" 
            loading="lazy" 
          />
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <Quote className="w-12 h-12 text-teal mx-auto opacity-70" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-white leading-relaxed">
              "A passion for people, for building and nurturing relationships. It's helped us stay with our clients over the long term and truly deliver tangible value."
            </blockquote>
            <div className="pt-2">
              <div className="font-bold text-white text-base tracking-wide">
                Leadership Council
              </div>
              <div className="text-xs text-lavender-soft/70">
                Acuity Talent Partners Global Board
              </div>
            </div>
          </div>
          {/* Subtle background flair */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-teal/20 blur-2xl" />
        </div>
      </section>

      {/* Mission & Values (Spec Section 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-teal">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Mission & Core Values
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            The values that anchor every executive search, client consultation, and candidate placement.
          </p>
        </div>

        {/* Mission Banner */}
        <div className="bg-lavender-light rounded-2xl p-6 sm:p-8 border border-lavender-soft mb-10 max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            OUR MISSION
          </span>
          <p className="text-base sm:text-lg font-bold text-navy mt-2 leading-relaxed">
            To empower visionary enterprises by sourcing and nurturing world-class leadership and technical teams, while actively advancing transparent, meritocratic, and inclusive career opportunities.
          </p>
        </div>

        {/* 4 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl p-6 border border-border shadow-card hover:border-primary/40 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-background-secondary flex items-center justify-center mb-4">
                {v.icon}
              </div>
              <h3 className="text-base font-bold text-navy mb-2">
                {v.title}
              </h3>
              <p className="text-xs sm:text-sm text-grey leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Footprint & Operating Hubs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-card space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                National & Global Presence
              </span>
              <h3 className="text-2xl font-bold text-navy mt-1">
                7 Major Operating Hubs
              </h3>
              <p className="text-xs sm:text-sm text-grey mt-1">
                Offices situated directly in key commercial and technological nerve centers.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
            >
              <span>Contact Local Hubs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {statsData.offices.map((office) => (
              <div 
                key={office.city}
                className="bg-white rounded-3xl overflow-hidden border border-border/80 hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={office.image}
                      alt={`${office.city} Office Hub`}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                    {office.isHeadquarters ? (
                      <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-primary text-white shadow-xs">
                        Global Headquarters
                      </span>
                    ) : (
                      <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-navy shadow-xs">
                        Regional Hub
                      </span>
                    )}
                    <div className="absolute bottom-2.5 left-3.5 right-3.5">
                      <span className="font-bold text-base text-white drop-shadow-xs">{office.city}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <p className="text-xs text-grey leading-relaxed line-clamp-2">
                      {office.address}
                    </p>
                    <div className="text-xs font-semibold text-teal pt-1 border-t border-border/60">
                      <div>{office.phone}</div>
                      <div className="text-grey font-normal text-[11px]">{office.email}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-lavender-soft/60 border border-lavender-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-navy">
              Ready to collaborate with our recruitment leads?
            </h3>
            <p className="text-xs sm:text-sm text-grey mt-1">
              Explore our bespoke service lines or submit a role mandate directly.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/employers"
              className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-sm"
            >
              Submit Mandate
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-xl text-sm font-bold text-primary bg-white hover:bg-lavender-light border border-border"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Company;
