import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Briefcase,
  Code2,
  Landmark,
  HeartPulse,
  Factory,
  Truck,
  ShoppingBag,
  UtensilsCrossed,
  Headphones,
  TrendingUp,
  Wrench
} from 'lucide-react';
import industriesData from '../data/industries.mocks.js';

const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const getIndustryIcon = (id) => {
    switch (id) {
      case 'it-ites': return <Code2 className="w-6 h-6 text-primary" />;
      case 'banking-financial-services': return <Landmark className="w-6 h-6 text-teal" />;
      case 'healthcare': return <HeartPulse className="w-6 h-6 text-accent" />;
      case 'manufacturing': return <Factory className="w-6 h-6 text-primary" />;
      case 'logistics-warehousing': return <Truck className="w-6 h-6 text-teal" />;
      case 'retail-ecommerce': return <ShoppingBag className="w-6 h-6 text-accent" />;
      case 'hospitality': return <UtensilsCrossed className="w-6 h-6 text-primary" />;
      case 'bpo-customer-support': return <Headphones className="w-6 h-6 text-teal" />;
      case 'sales-marketing': return <TrendingUp className="w-6 h-6 text-accent" />;
      case 'engineering': return <Wrench className="w-6 h-6 text-primary" />;
      default: return <Building2 className="w-6 h-6 text-primary" />;
    }
  };

  const filteredIndustries = selectedIndustry === 'all' 
    ? industriesData 
    : industriesData.filter(ind => ind.id === selectedIndustry);

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-lavender-light via-surface to-background py-14 sm:py-20 lg:py-24 border-b border-border/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface text-primary border border-border shadow-xs">
              Sectors & Practices
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
              Industries <span className="text-primary">We Serve</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-grey leading-relaxed font-normal">
              Instead of generic searches, we build dedicated recruitment capabilities tailored to the distinct operational and skill requirements of your sector.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/employers"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors duration-fast"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire for Your Industry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRY FILTER PILLS */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-4">
          <button
            type="button"
            onClick={() => setSelectedIndustry('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-fast cursor-pointer ${
              selectedIndustry === 'all'
                ? 'bg-primary text-white shadow-xs'
                : 'bg-surface text-navy hover:bg-background-secondary border border-border'
            }`}
          >
            All 10 Sectors
          </button>
          {industriesData.map((ind) => (
            <button
              key={ind.id}
              type="button"
              onClick={() => setSelectedIndustry(ind.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-fast cursor-pointer ${
                selectedIndustry === ind.id
                  ? 'bg-primary text-white shadow-xs'
                  : 'bg-surface text-navy hover:bg-background-secondary border border-border'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>
      </section>

      {/* 3. 10 TARGET INDUSTRIES CARDS */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredIndustries.map((industry) => (
            <div
              key={industry.id}
              id={industry.id}
              className="bg-surface rounded-3xl p-6 sm:p-8 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-normal flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-background-secondary flex items-center justify-center group-hover:scale-105 transition-transform duration-fast">
                    {getIndustryIcon(industry.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy group-hover:text-primary transition-colors duration-fast">
                      {industry.name}
                    </h3>
                    <span className="text-xs font-medium text-teal">
                      Specialized Sourcing Practice
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-grey leading-relaxed">
                  {industry.description}
                </p>

                {/* Sample Roles Covered */}
                <div className="pt-3 border-t border-border/70 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                    Common Roles We Source:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-grey-dark">
                    {industry.sampleRoles?.map((role, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="p-3 rounded-xl bg-background-secondary text-xs text-grey leading-relaxed">
                  <span className="font-semibold text-navy">Sector Capability: </span>
                  {industry.highlights}
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-border">
                <Link
                  to={`/employers?industry=${encodeURIComponent(industry.name)}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group-hover:translate-x-1 transition-all duration-fast"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Hire {industry.name} Talent</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM ACTION */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy text-white p-8 sm:p-12 text-center space-y-5 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Don't See Your Specific Industry?
          </h3>
          <p className="text-xs sm:text-sm text-grey-light max-w-xl mx-auto leading-relaxed">
            Our search methodology adapts to niche cross-functional roles across emerging sectors. Reach out to discuss your specific mandate.
          </p>
          <div className="pt-2">
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-navy bg-white hover:bg-background-secondary shadow-md transition-colors duration-fast"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Discuss Your Requirement</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Industries;
