import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  Globe2, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Send, 
  Award
} from 'lucide-react';
import domainsData from '../data/domains.json';

const PartnerWithUs = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: 'Information Technology',
    companySize: '1,000 - 5,000 employees',
    annualHiringVolume: '50 - 150 hires/year',
    locations: '',
    preferredModel: 'RPO (full pipeline)',
    currentChallenges: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    preferredCallSlot: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log('Enterprise Partnership Request Payload:', {
        ...formData,
        submittedAt: new Date().toISOString(),
        id: `PARTNER-REQ-${Math.floor(1000 + Math.random() * 9000)}`
      });
    }, 600);
  };

  const partnerReasons = [
    {
      title: 'Dedicated Account Team',
      desc: 'A named senior account director, dedicated recruiters, and domain researchers assigned to your account — never a rotating ticket queue.',
      icon: <Users className="w-6 h-6 text-primary" />,
    },
    {
      title: 'Volume Hiring Capability',
      desc: 'Engineered infrastructure to fulfill 10, 50, or 500+ specialized hires per quarter with synchronized interview scheduling.',
      icon: <Layers className="w-6 h-6 text-accent" />,
    },
    {
      title: '100% Verified Candidate Pipeline',
      desc: 'Every candidate pre-checked for identity, education, employment history, and references before interview presentation.',
      icon: <ShieldCheck className="w-6 h-6 text-success" />,
      link: '/verification'
    },
    {
      title: 'Multi-Location Delivery',
      desc: 'Pan-India hubs coupled with offices in Singapore, Qatar, and Dubai, managed through a unified single point of executive contact.',
      icon: <Globe2 className="w-6 h-6 text-teal" />,
    },
    {
      title: 'Flexible Engagement Models',
      desc: 'Tailor-fit commercial structures: Enterprise RPO, dedicated embedded staffing squads, negotiated contingency, or turnkey GIC incubation.',
      icon: <Building2 className="w-6 h-6 text-primary" />,
    },
    {
      title: 'SLA-Backed Delivery & Governance',
      desc: 'Formally contracted time-to-shortlist SLAs, 90-day replacement guarantees, and quarterly executive talent scorecards.',
      icon: <Award className="w-6 h-6 text-accent" />,
    },
  ];

  const models = [
    {
      model: 'RPO (Full Pipeline)',
      bestFor: 'Ongoing, high-volume enterprise hiring across multiple verticals',
      whatYouGet: 'We own sourcing, screening, coordination, ATS administration, through onboarding end-to-end.',
      recommended: true
    },
    {
      model: 'Embedded Staffing Team',
      bestFor: 'Steady but variable headcount needs without increasing internal HR payroll',
      whatYouGet: 'Dedicated recruitment specialists operating seamlessly as an extension of your talent team.',
      recommended: false
    },
    {
      model: 'Contingency / Volume Hiring',
      bestFor: 'Periodic bulk hiring drives and critical specialist leadership searches',
      whatYouGet: 'Pay-per-placement flexibility with volume-discounted fee matrices and SLA commitments.',
      recommended: false
    },
    {
      model: 'GIC / Captive Build-Out',
      bestFor: 'Setting up a new India or regional global capability delivery center',
      whatYouGet: 'Turnkey incubation from leadership core setup to 1,000+ headcount cohort wave delivery.',
      recommended: false
    },
  ];

  const onboardingSteps = [
    {
      step: '1',
      title: 'Discovery Call',
      desc: 'We learn your multi-year hiring goals, cultural nuances, technical standards, and current acquisition pain points.'
    },
    {
      step: '2',
      title: 'Needs Assessment & Proposal',
      desc: 'A customized partnership blueprint, rate cards, SLAs, and dedicated team allocation structure are prepared.'
    },
    {
      step: '3',
      title: 'Commercial Agreement',
      desc: 'MSA and SOW executed; verification tiering, data privacy parameters, and reporting cadences finalized.'
    },
    {
      step: '4',
      title: 'Dedicated Team Kickoff',
      desc: 'A lead account manager, recruiters, and technical assessment panelists are onboarded onto your tooling.'
    },
    {
      step: '5',
      title: 'Ongoing Delivery & Quarterly Reviews',
      desc: 'Continuous pipeline delivery with quarterly scorecards to calibrate quality-of-hire and reduce time-to-fill.'
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO (Spec Section 6A: H1 in teal) */}
      <section className="bg-gradient-to-b from-teal-subtle via-lavender-light/40 to-background py-16 lg:py-24 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal/10 text-teal border border-teal-light mb-4">
            <Building2 className="w-4 h-4 text-teal" />
            <span>ENTERPRISE & MNC COLLABORATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-teal leading-tight">
            Partner With Us. Let's Build Your Talent Pipeline Together.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-grey leading-relaxed">
            For MNCs and large enterprises looking for an ongoing hiring partner — not just a one-time vendor. Dedicated delivery squads, enterprise SLAs, and a 100% verified candidate pipeline.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="#collaboration-form"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-md hover:shadow-lg transition-all"
            >
              <span>Request a Partnership Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-navy bg-white hover:bg-lavender-light border border-border shadow-xs transition-colors"
            >
              <span>Need a Quick One-Off Hire?</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST REINFORCEMENT STRIP (Spec Section 6A) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-card">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="pt-3 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-navy">30+ Years</div>
              <div className="text-xs text-grey mt-1">Enterprise Search Heritage</div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">1.1L+</div>
              <div className="text-xs text-grey mt-1">Total Verified Placements</div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-success">100%</div>
              <div className="text-xs text-grey mt-1">Pre-Checked Candidate Pipeline</div>
            </div>
            <div className="pt-3 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-teal">90 Days</div>
              <div className="text-xs text-grey mt-1">Replacement Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY LARGE COMPANIES PARTNER WITH US (Spec Section 6A: Card grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Enterprise Value Proposition
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Why Large Companies Partner With Us
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            Tailored infrastructure designed to eliminate recruitment bottlenecks and uphold rigorous compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerReasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-lavender-light flex items-center justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-grey leading-relaxed">
                  {reason.desc}
                </p>
              </div>

              {reason.link && (
                <div className="pt-4 mt-4 border-t border-border/60">
                  <Link
                    to={reason.link}
                    className="text-xs font-bold text-success hover:underline inline-flex items-center gap-1"
                  >
                    <span>Learn about our verification pipeline</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. PARTNERSHIP MODELS (Spec Section 6A: Comparison table) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Engagement Frameworks
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Partnership Models Built for Scale
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            Choose the engagement framework that best fits your enterprise growth trajectory and hiring velocity.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-border shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background-secondary/80 border-b border-border text-[11px] font-bold uppercase tracking-wider text-grey">
                  <th className="py-4 px-6">Model</th>
                  <th className="py-4 px-6">Best For</th>
                  <th className="py-4 px-6">What You Get</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-sm">
                {models.map((m, idx) => (
                  <tr key={idx} className="hover:bg-lavender-light/30 transition-colors">
                    <td className="py-5 px-6">
                      <div className="font-bold text-navy flex items-center gap-2">
                        <span>{m.model}</span>
                        {m.recommended && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal text-white">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-5 px-6 text-xs text-grey font-medium max-w-xs leading-relaxed">
                      {m.bestFor}
                    </td>
                    <td className="py-5 px-6 text-xs text-navy leading-relaxed max-w-sm">
                      {m.whatYouGet}
                    </td>
                    <td className="py-5 px-6 text-right">
                      <a
                        href="#collaboration-form"
                        onClick={() => setFormData({ ...formData, preferredModel: m.model })}
                        className="px-4 py-2 text-xs font-bold rounded-xl bg-teal-subtle text-teal hover:bg-teal hover:text-white transition-colors inline-block"
                      >
                        Select Model
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. HOW ENTERPRISE ONBOARDING WORKS (Spec Section 6A: 5-step numbered pipeline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Implementation Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            How Enterprise Onboarding Works
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            From initial discovery to a dedicated, high-velocity recruitment squad in your corner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {onboardingSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-6 border border-border shadow-xs hover:border-teal/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-lavender-soft text-primary font-extrabold flex items-center justify-center text-sm mb-3">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-navy mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-grey leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COLLABORATION REQUEST FORM (Spec Section 6A) */}
      <section id="collaboration-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-card">
          
          <div className="border-b border-border/80 pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Enterprise Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Request a Partnership Discussion
            </h2>
            <p className="text-xs sm:text-sm text-grey mt-1">
              Tell our Enterprise Partnerships Council about your hiring scale, roadmap, and preferred discovery call time.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-navy">
                Thanks — our enterprise partnerships team will reach out within 1 business day to schedule your discovery call.
              </h3>
              <p className="text-xs sm:text-sm text-grey max-w-md mx-auto">
                We've routed your inquiry to our Senior Director of Client Partnerships for <strong className="text-navy">{formData.companyName}</strong>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-teal hover:bg-teal-hover transition-colors"
              >
                Submit Additional Information
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Company Name & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Enterprise / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Novartis Global Business Services"
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Industry Sector *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal"
                  >
                    {domainsData.map((d) => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Company Size & Annual Hiring Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Company Size (Employees)
                  </label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal"
                  >
                    <option value="500 - 1,000 employees">500 - 1,000 employees</option>
                    <option value="1,000 - 5,000 employees">1,000 - 5,000 employees</option>
                    <option value="5,000 - 10,000 employees">5,000 - 10,000 employees</option>
                    <option value="10,000+ employees">10,000+ employees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Estimated Annual Hiring Volume
                  </label>
                  <select
                    value={formData.annualHiringVolume}
                    onChange={(e) => setFormData({ ...formData, annualHiringVolume: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal"
                  >
                    <option value="25 - 50 hires/year">25 - 50 hires/year</option>
                    <option value="50 - 150 hires/year">50 - 150 hires/year</option>
                    <option value="150 - 300 hires/year">150 - 300 hires/year</option>
                    <option value="300+ hires/year">300+ hires/year</option>
                  </select>
                </div>
              </div>

              {/* Locations of Operation & Preferred Model */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Locations of Operation (Current & Planned) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.locations}
                    onChange={(e) => setFormData({ ...formData, locations: e.target.value })}
                    placeholder="e.g. Bengaluru, Hyderabad & Singapore"
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Preferred Partnership Model
                  </label>
                  <select
                    value={formData.preferredModel}
                    onChange={(e) => setFormData({ ...formData, preferredModel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal"
                  >
                    <option value="RPO (full pipeline)">RPO (Full Pipeline Ownership)</option>
                    <option value="Embedded Staffing Team">Embedded Staffing Team</option>
                    <option value="Contingency / Volume Hiring">Contingency / Volume Hiring</option>
                    <option value="GIC / Captive Build-Out">GIC Build-out</option>
                    <option value="Not sure yet">Not sure yet / Needs consultation</option>
                  </select>
                </div>
              </div>

              {/* Current Hiring Challenges */}
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">
                  Current Hiring Challenges & Objectives
                </label>
                <textarea
                  rows="3"
                  value={formData.currentChallenges}
                  onChange={(e) => setFormData({ ...formData, currentChallenges: e.target.value })}
                  placeholder="e.g. Sourcing verified niche AI/cloud talent, reducing candidate ghosting, or establishing an India capability hub..."
                  className="w-full px-4 py-2 text-sm rounded-xl border border-border text-navy focus:outline-none focus:ring-2 focus:ring-teal"
                />
              </div>

              {/* Decision-Maker Contact: Name, Designation, Email, Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-border">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-border text-navy focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. VP Talent Acquisition"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-border text-navy focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@company.com"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-border text-navy focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1">
                    Direct Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-border text-navy focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                </div>
              </div>

              {/* Preferred Discovery Call Slot */}
              <div>
                <label className="block text-xs font-semibold text-navy mb-1">
                  Preferred Discovery Call Slot (Date & Time)
                </label>
                <input
                  type="datetime-local"
                  value={formData.preferredCallSlot}
                  onChange={(e) => setFormData({ ...formData, preferredCallSlot: e.target.value })}
                  className="w-full sm:w-auto px-4 py-2 text-sm rounded-xl border border-border text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Submitting Proposal Request...' : 'Request a Partnership Discussion'}</span>
                </button>
                <p className="text-[11px] text-grey text-center mt-2.5">
                  🔒 Enterprise submissions are governed under mutual Non-Disclosure Agreements (NDA).
                </p>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 7. CROSS-LINK (Spec Section 6A) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-6 rounded-2xl bg-lavender-light border border-lavender-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs text-grey">
            <span className="font-bold text-navy block text-sm">Not ready for a full enterprise partnership yet?</span>
            Submit an individual requirement for quick fulfillment.
          </div>
          <Link
            to="/employers"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-teal bg-white hover:bg-teal-subtle border border-border shadow-xs shrink-0"
          >
            Submit a One-Off Requirement →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PartnerWithUs;
