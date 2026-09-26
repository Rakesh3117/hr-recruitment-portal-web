import { Link } from 'react-router-dom';
import { 
  Quote, 
  ArrowRight, 
  ShieldCheck, 
  Award
} from 'lucide-react';
import VerifiedBadge from '../components/common/VerifiedBadge';
import testimonialsData from '../data/testimonials.json';

const SuccessStories = () => {
  const clientBadges = [
    'Fortune 500 Biopharma',
    'Global Investment Bank',
    'Tier-1 Automotive OEM',
    'Global Logistics Conglomerate',
    'Silicon Valley Cloud Leader',
    'International Hotel Chain'
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO (Spec Section 9) */}
      <section className="bg-gradient-to-b from-lavender-light via-lavender-soft/30 to-background py-16 lg:py-24 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-primary border border-lavender-soft mb-4 shadow-xs">
            <Award className="w-4 h-4 text-accent" />
            <span>PROVEN ENTERPRISE DELIVERABLES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
            Trusted by Leading MNCs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-grey leading-relaxed">
            Real hiring outcomes from marquee clients across IT, BFSI, Automotive, Logistics, and Clean Energy. Verified talent, zero ghosting, and guaranteed retention.
          </p>

          {/* Client Logo Strip */}
          <div className="pt-10">
            <span className="text-[11px] font-bold text-grey uppercase tracking-widest block mb-4">
              Trusted Recruitment Partner To
            </span>
            <div className="flex flex-wrap justify-center items-center gap-3">
              {clientBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white border border-border/80 text-xs font-bold text-navy shadow-xs"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY CARDS (Spec Section 9) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Measurable Outcomes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Featured Enterprise Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            How our verified search capabilities and dedicated delivery squads solve critical hiring challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-bold text-teal uppercase tracking-wider block">
                      {item.industry}
                    </span>
                    <h3 className="text-xl font-bold text-navy mt-0.5">
                      {item.clientCompany}
                    </h3>
                  </div>
                  <VerifiedBadge variant="compact" />
                </div>

                {/* Challenge, Solution, Result Grid */}
                <div className="space-y-4 pt-2 border-t border-border/60 text-xs">
                  <div>
                    <span className="font-bold text-navy uppercase tracking-wider text-[11px] block text-red-600 mb-1">
                      Challenge:
                    </span>
                    <p className="text-grey leading-relaxed">
                      {item.caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="font-bold text-navy uppercase tracking-wider text-[11px] block text-primary mb-1">
                      Solution:
                    </span>
                    <p className="text-grey leading-relaxed">
                      {item.caseStudy.solution}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-teal-subtle border border-teal-light">
                    <span className="font-bold text-teal uppercase tracking-wider text-[11px] block mb-1">
                      Outcome & Result:
                    </span>
                    <p className="text-navy font-semibold leading-relaxed">
                      "{item.caseStudy.result}"
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="mt-6 pt-5 border-t border-border/60">
                  <Quote className="w-6 h-6 text-accent/60 mb-2" />
                  <p className="text-xs text-navy font-medium italic leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="mt-3">
                    <div className="font-bold text-xs text-navy">{item.authorName}</div>
                    <div className="text-[11px] text-grey">{item.authorTitle}</div>
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-border/60">
                <Link
                  to="/employers"
                  className="text-xs font-bold text-primary hover:text-primary-hover flex items-center justify-between"
                >
                  <span>Request Similar Case Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. TESTIMONIAL BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl p-8 sm:p-14 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <ShieldCheck className="w-12 h-12 text-success mx-auto" />
            <blockquote className="text-xl sm:text-2xl font-medium tracking-tight text-white leading-relaxed">
              "Every candidate Acuity sent us had already been through reference and background checks — it cut our internal screening time in half."
            </blockquote>
            <div>
              <div className="font-bold text-white text-base">Sunil Varma</div>
              <div className="text-xs text-lavender-soft/70">Head of Global Talent Acquisition, Amdocs Technology Solutions</div>
            </div>
            <div className="pt-2 flex justify-center gap-3">
              <VerifiedBadge />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING CTA (Spec Section 9) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-lavender-light border border-lavender-soft space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
            Ready to experience predictable hiring results?
          </h3>
          <p className="text-xs sm:text-sm text-grey max-w-lg mx-auto">
            From single critical mandates to full captive build-outs, our verified talent pipelines guarantee retention and speed.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <Link
              to="/employers"
              className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-md"
            >
              Submit Your Requirement →
            </Link>
            <Link
              to="/partner-with-us"
              className="px-7 py-3.5 rounded-xl text-sm font-bold text-primary bg-white hover:bg-lavender-light border border-border shadow-xs"
            >
              Explore Enterprise Partnership
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SuccessStories;
