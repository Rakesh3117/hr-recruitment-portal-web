import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Search 
} from 'lucide-react';
import domainsData from '../data/domains.json';

const DomainSpecialities = () => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-lavender-light via-lavender-soft/30 to-background py-16 lg:py-24 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-primary border border-lavender-soft shadow-xs">
                Industry Verticals & Practices
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
                Specialized Domain Expertise Across <span className="text-primary">9 Critical Verticals.</span>
              </h1>
              <p className="text-base sm:text-lg text-grey leading-relaxed max-w-2xl">
                Our recruitment consultants aren't generalists. Each practice group is led by former industry executives with direct, insider networks and deep technical fluency.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-navy font-semibold border-t border-border/60">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal" /> 1.1L+ Industry Placements
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal" /> Dedicated Sector Leads
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal" /> Pan-India & Cross-Border Mandates
                </span>
              </div>
            </div>

            {/* Visual Hero Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-lavender-soft group">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="Industry practice leaders strategizing on executive mandates"
                  loading="lazy"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-lavender-soft shadow-md flex items-center gap-2 text-xs font-bold text-navy">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal animate-pulse" />
                  <span>Practicing Subject Matter Experts</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-navy">Sector Immersion</span>
                    <span className="font-extrabold text-primary text-[11px] bg-lavender-light px-2 py-0.5 rounded-md">
                      9 Distinct Verticals
                    </span>
                  </div>
                  <p className="text-[11px] text-grey leading-tight">
                    From EV powertrain engineering to algorithmic quantitative finance and captive GCCs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Domain Cards Grid (Spec Section 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domainsData.map((domain) => (
            <div
              key={domain.id}
              className="bg-white rounded-3xl p-7 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Domain Cover Image */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 shadow-xs">
                  <img
                    src={domain.image}
                    alt={domain.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-xs text-primary flex items-center justify-center shadow-xs">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full bg-teal text-white shadow-2xs">
                    {domain.placementsCount} Placements
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors mb-2">
                  {domain.name}
                </h3>

                <p className="text-xs sm:text-sm text-grey leading-relaxed mb-5">
                  {domain.description}
                </p>

                {/* Sample Roles Placed */}
                <div className="bg-background-secondary rounded-2xl p-4 mb-5 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-navy">
                    Sample Placed Roles:
                  </div>
                  <ul className="space-y-1.5">
                    {domain.sampleRoles.map((role, rIdx) => (
                      <li key={rIdx} className="text-xs text-grey-dark flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="line-clamp-1">{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Insight */}
                <p className="text-xs text-navy font-medium italic border-l-2 border-teal pl-3 mb-6">
                  "{domain.highlights}"
                </p>
              </div>

              {/* Actions: Candidate View Jobs & Employer Submit Requirement */}
              <div className="pt-4 border-t border-border flex items-center gap-2">
                <Link
                  to={`/jobs?industry=${encodeURIComponent(domain.industryQuery)}`}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-hover transition-colors text-center inline-flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>View Jobs</span>
                </Link>

                <Link
                  to={`/employers?industry=${encodeURIComponent(domain.industryQuery)}`}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-teal bg-teal-subtle hover:bg-teal hover:text-white transition-colors text-center inline-flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Hire Here</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Cross-Domain Custom Search CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-lavender-light rounded-3xl p-8 sm:p-12 border border-lavender-soft max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Cross-Sector & Emerging Industries
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
            Operating in a niche or hybrid sector?
          </h3>
          <p className="text-sm text-grey max-w-xl mx-auto">
            From DeepTech & Quantum Computing to Defense Aerostructures and Sustainable AgTech, our research teams map bespoke talent across uncharted markets.
          </p>
          <div className="pt-2">
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-md"
            >
              <span>Consult Our Practice Heads</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DomainSpecialities;
