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
    },
    {
      title: 'Structured, Bias-Aware Screening Criteria',
      desc: 'Blind resume initial evaluations, standardized interview scorecards, and objective skill rubrics that eliminate unconscious hiring biases.',
      icon: <ShieldCheck className="w-6 h-6 text-teal" />,
    },
    {
      title: 'Reporting on Pipeline Diversity for Hiring Teams',
      desc: 'Transparent representation analytics at every stage of the funnel — from initial talent mapping to final interview panel ratios.',
      icon: <BarChart3 className="w-6 h-6 text-accent" />,
    },
    {
      title: 'Partnerships with Diversity-Focused Networks',
      desc: 'Formal alliances with return-to-work initiatives, affirmative action educational trusts, and accessible workplace advocacy organizations.',
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
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
              className="bg-white rounded-3xl p-8 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-200 space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-navy">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-grey leading-relaxed">
                {pillar.desc}
              </p>
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
