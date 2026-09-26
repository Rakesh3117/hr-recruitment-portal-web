import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  BarChart3 
} from 'lucide-react';

const DiversityInclusion = () => {
  const pillars = [
    {
      title: 'Diversity-Focused Sourcing Channels & Communities',
      desc: 'Proactive engagement across specialized talent networks, women-in-STEM alliances, veteran reintegration programs, and LGBTQIA+ professional forums.',
      icon: <Users className="w-6 h-6 text-primary" />,
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Structured, Bias-Aware Screening Criteria',
      desc: 'Blind resume initial evaluations, standardized interview scorecards, and objective skill rubrics that eliminate unconscious hiring biases.',
      icon: <ShieldCheck className="w-6 h-6 text-teal" />,
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Reporting on Pipeline Diversity for Hiring Teams',
      desc: 'Transparent representation analytics at every stage of the funnel — from initial talent mapping to final interview panel ratios.',
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Partnerships with Diversity-Focused Networks',
      desc: 'Formal alliances with return-to-work initiatives, affirmative action educational trusts, and accessible workplace advocacy organizations.',
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80'
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO (Spec Section 8) */}
      <section className="bg-gradient-to-b from-lavender-light via-lavender-soft/40 to-background py-16 lg:py-24 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-primary border border-lavender-soft mb-4">
            Specialized Practice Area
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-navy leading-tight">
            Building inclusive pipelines, not just filling seats.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-grey leading-relaxed">
            A dedicated D&I practice that helps clients widen and diversify their talent pool with measurable business impact, cultural cohesion, and genuine meritocracy.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/employers"
              className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-md transition-colors"
            >
              Consult Our D&I Practice Leads
            </Link>
          </div>

          <div className="mt-10 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-card border border-lavender-soft relative">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" 
              alt="Diversity and Inclusive Leadership" 
              className="w-full h-64 sm:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 text-white text-left">
              <span className="text-xs uppercase font-bold tracking-wider text-teal-light">Representation with Meritocracy</span>
              <h3 className="text-lg font-bold">Inclusive Talent Pipelines & Executive Search</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT THIS LOOKS LIKE IN PRACTICE (Spec Section 8) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Methodology & Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            What This Looks Like in Practice
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            Actionable frameworks that convert ESG diversity pledges into real-world, high-performing corporate teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                    {pillar.icon}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-base font-bold text-white drop-shadow-xs">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs sm:text-sm text-grey leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diversity Metrics & Impact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <div className="text-4xl font-extrabold text-teal">38%</div>
              <div className="text-sm font-semibold text-white mt-1">Women in Leadership Mandates</div>
              <p className="text-xs text-grey-light mt-1">Consistently delivered across Fortune 500 searches</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-4xl font-extrabold text-teal">2,400+</div>
              <div className="text-sm font-semibold text-white mt-1">Second-Career Returnees Placed</div>
              <p className="text-xs text-grey-light mt-1">Through tailored re-skilling and onboarding cohorts</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-4xl font-extrabold text-teal">100%</div>
              <div className="text-sm font-semibold text-white mt-1">Equal Pay Calibration</div>
              <p className="text-xs text-grey-light mt-1">Transparent compensation parity for all offers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Prompt */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-lavender-light rounded-3xl p-8 sm:p-10 border border-lavender-soft space-y-4">
          <h3 className="text-2xl font-bold text-navy">
            Looking to diversify your candidate pipeline?
          </h3>
          <p className="text-xs sm:text-sm text-grey max-w-lg mx-auto">
            Our practice leads can audit your current job specifications, introduce blind scoring rubrics, and deliver qualified, diverse candidate slates.
          </p>
          <div className="pt-2">
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-sm"
            >
              <span>Schedule D&I Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DiversityInclusion;
