import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Video, 
  Zap, 
  Users, 
  Building2, 
  Repeat, 
  HeartHandshake, 
  CheckCircle2, 
  PhoneCall, 
  ExternalLink 
} from 'lucide-react';
import servicesData from '../data/services.json';

const serviceIcons = {
  Search: <Search className="w-6 h-6 text-primary" />,
  Video: <Video className="w-6 h-6 text-accent" />,
  Zap: <Zap className="w-6 h-6 text-teal" />,
  Users: <Users className="w-6 h-6 text-primary" />,
  Building2: <Building2 className="w-6 h-6 text-accent" />,
  Repeat: <Repeat className="w-6 h-6 text-teal" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-primary" />
};

const Services = () => {
  const location = useLocation();

  // Scroll to anchor if present in URL
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-lavender-light via-lavender-soft/30 to-background py-16 lg:py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-white text-teal border border-teal-light mb-4">
            Bespoke Talent Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight">
            Tailored Recruitment Architecture for Every Growth Stage
          </h1>
          <p className="mt-4 text-base sm:text-lg text-grey leading-relaxed">
            Each service below is purpose-built to solve specific enterprise hiring challenges — from discreet board searches to large-scale engineering hub incubations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {servicesData.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-navy hover:text-primary hover:bg-lavender-light border border-border shadow-2xs transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List with Dedicated Anchors (Spec Section 3) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {servicesData.map((service, index) => {
          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-28 bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Description Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center shadow-xs">
                      {serviceIcons[service.icon] || <Search className="w-6 h-6 text-primary" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-teal uppercase tracking-wider">
                        Service 3.{index + 1}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="text-sm font-semibold text-primary">
                    {service.tagline}
                  </div>

                  <p className="text-sm sm:text-base text-grey leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-navy">
                      Key Deliverables & Capabilities:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-xs text-grey-dark">
                          <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/employers?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-sm hover:shadow-md transition-all"
                    >
                      <PhoneCall className="w-4 h-4" />
                      <span>Talk to Us About This</span>
                    </Link>

                    {service.link && (
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-sm font-semibold text-primary bg-lavender-soft hover:bg-lavender-light transition-colors"
                      >
                        <span>Learn About D&I Practice</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Context & Value Card */}
                <div className="lg:col-span-5 space-y-4">
                  {service.image && (
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow-xs border border-border/80">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                      <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                        {service.tagline}
                      </span>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 rounded-2xl bg-lavender-light/70 border border-lavender-soft space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Ideal Engagement Scenario
                    </span>
                    <p className="text-xs sm:text-sm text-navy leading-relaxed font-medium">
                      "{service.idealFor}"
                    </p>

                    <div className="pt-4 border-t border-lavender-soft space-y-2">
                      <div className="flex items-center justify-between text-xs text-grey">
                        <span>Fulfillment Timeline:</span>
                        <span className="font-semibold text-navy">Tailored SLA (14–30 Days)</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-grey">
                        <span>Delivery Team:</span>
                        <span className="font-semibold text-navy">Senior Practice Consultant + Researcher</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-grey">
                        <span>Placement Guarantee:</span>
                        <span className="font-semibold text-teal">90-Day Free Replacement</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Closing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-navy text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-2xl font-bold text-white">
              Need a blended recruitment strategy?
            </h3>
            <p className="text-xs sm:text-sm text-grey-light">
              We frequently architect bespoke models combining Executive Search, IaaS, and flexible staffing.
            </p>
          </div>
          <Link
            to="/employers"
            className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-md shrink-0"
          >
            Submit Custom Mandate →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
