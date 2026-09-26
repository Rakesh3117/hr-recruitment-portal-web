import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  Briefcase,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import requirementsData from '../data/requirements.json';
import domainsData from '../data/domains.json';

const Employers = () => {
  const location = useLocation();

  // Parse query parameters (e.g. ?service=... or ?industry=...)
  const queryParams = new URLSearchParams(location.search);
  const initialService = queryParams.get('service') || 'Permanent';
  const initialIndustry = queryParams.get('industry') || '';

  // Form State
  const [formData, setFormData] = useState({
    companyName: '',
    industry: initialIndustry || 'Information Technology',
    contactPerson: '',
    email: '',
    phone: '',
    roleTitle: '',
    openings: 1,
    location: '',
    workMode: 'Hybrid',
    experienceRange: '6 - 10 years',
    budgetCTC: '',
    mustHaveSkills: '',
    niceToHaveSkills: '',
    engagementType: initialService.includes('Staffing') ? 'Contract' : 
                    initialService.includes('RPO') ? 'RPO' : 
                    initialService.includes('GIC') ? 'GIC Build-out' : 'Permanent',
    verificationLevel: 'Standard',
    targetTimeline: '15 - 30 days',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [generatedReqId, setGeneratedReqId] = useState('');

  // Tracker State (V1 Mock)
  const [selectedReq, setSelectedReq] = useState(requirementsData[0]);
  const [searchReqId, setSearchReqId] = useState('');
  const [trackerMessage, setTrackerMessage] = useState('');

  const stages = ['Received', 'Sourcing', 'Verifying', 'Shortlisted', 'Interviewing', 'Closed'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const newReqId = `REQ-${Math.floor(1000 + Math.random() * 9000)}`;

    setTimeout(() => {
      setSubmitting(false);
      setGeneratedReqId(newReqId);
      setSubmitted(true);

      const payload = {
        id: newReqId,
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'Received',
      };

      console.log('Client Hiring Requirement Submitted Payload:', payload);

      // Pre-populate mock tracker with newly generated req
      setSelectedReq({
        id: newReqId,
        company: formData.companyName || 'Your Enterprise',
        roleTitle: formData.roleTitle || 'Executive Mandate',
        openings: Number(formData.openings) || 1,
        location: formData.location || 'Pan-India',
        engagementType: formData.engagementType,
        verificationLevel: formData.verificationLevel,
        status: 'Received',
        submittedDate: 'Today',
        targetDate: '30 Days',
        submittedBy: formData.contactPerson,
        activeCandidates: 0,
        currentStage: 'Intake Calibration Call',
        lastUpdate: 'Requirement received. Senior account manager assigned for kickoff call within 24-48 hours.'
      });
    }, 600);
  };

  const handleTrackSearch = (e) => {
    e.preventDefault();
    if (!searchReqId.trim()) return;

    const found = requirementsData.find(
      r => r.id.toLowerCase() === searchReqId.trim().toLowerCase()
    );

    if (found) {
      setSelectedReq(found);
      setTrackerMessage('');
    } else if (generatedReqId && searchReqId.trim().toLowerCase() === generatedReqId.toLowerCase()) {
      setTrackerMessage('');
    } else {
      setTrackerMessage(`No mandate found for ID "${searchReqId}". Try REQ-8492 or REQ-8104.`);
    }
  };

  // Calculate current stage index for the progress strip
  const getStageIndex = (status) => {
    const idx = stages.indexOf(status);
    return idx >= 0 ? idx : 0;
  };

  const currentStageIndex = getStageIndex(selectedReq?.status);

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO (Spec Section 6: H1 in teal) */}
      <section className="bg-gradient-to-b from-teal-subtle via-lavender-light/40 to-background py-16 lg:py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal/10 text-teal border border-teal-light mb-4">
            FOR MNC CLIENTS & ENTERPRISES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-teal leading-tight">
            Tell us who you need. We'll find them — verified.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-grey leading-relaxed">
            Share your open role or bulk hiring plan and our delivery team takes it from there. Every candidate we shortlist is verified —{' '}
            <Link to="/verification" className="text-teal font-bold underline hover:text-teal-hover transition-colors">
              see how →
            </Link>
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-navy">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-success" />
              100% Verified Candidates
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-success" />
              90-Day Replacement Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal" />
              30+ Years of Delivery
            </span>
          </div>
        </div>
      </section>

      {/* 2. REQUIREMENT INTAKE FORM (Spec Section 6) */}
      <section id="intake-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Reassurance Strip (repeat near the form for conversion) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3.5 px-6 bg-white/90 backdrop-blur-xs rounded-2xl border border-border text-xs font-bold text-navy shadow-xs mb-8">
          <div className="flex items-center gap-1.5 text-navy">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span>100% Verified Candidates</span>
          </div>
          <span className="text-grey-light hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-navy">
            <ShieldCheck className="w-4 h-4 text-success" />
            <span>90-Day Replacement Guarantee</span>
          </div>
          <span className="text-grey-light hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5 text-navy">
            <CheckCircle2 className="w-4 h-4 text-teal" />
            <span>30+ Years of Delivery</span>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-border shadow-card relative overflow-hidden">
          
          <div className="border-b border-border pb-6 mb-8">
            <div className="flex items-center gap-2.5 text-teal mb-1">
              <Briefcase className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Hiring Mandate Intake</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Submit Your Hiring Requirement
            </h2>
            <p className="text-xs sm:text-sm text-grey mt-1">
              Fill out the parameters below. A dedicated account manager will review and calibrate your mandate within 24–48 hours.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-subtle text-teal">
                  Tracking ID: {generatedReqId}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy">
                  Thanks — a dedicated account manager will reach out within 24–48 hours.
                </h3>
                <p className="text-sm text-grey max-w-lg mx-auto">
                  We have registered your requirement for <strong className="text-navy">{formData.roleTitle || 'Open Position'}</strong> at <strong className="text-navy">{formData.companyName || 'your enterprise'}</strong>.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-lavender-light border border-lavender-soft max-w-md mx-auto text-left text-xs text-navy space-y-2">
                <div className="font-bold text-primary text-sm mb-1">Assigned SLA Commitments:</div>
                <div className="flex items-center justify-between">
                  <span className="text-grey">Kickoff & Calibration:</span>
                  <span className="font-semibold text-navy">Within 24 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-grey">Initial Talent Shortlist:</span>
                  <span className="font-semibold text-teal">48 – 72 Hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-grey">Lead Account Manager:</span>
                  <span className="font-semibold text-navy">Senior Sector Practice Head</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    const trackerEl = document.getElementById('tracker-section');
                    if (trackerEl) trackerEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-teal hover:bg-teal-hover transition-colors shadow-sm"
                >
                  View in Requirement Tracker Below ↓
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      companyName: '',
                      industry: 'Information Technology',
                      contactPerson: '',
                      email: '',
                      phone: '',
                      roleTitle: '',
                      openings: 1,
                      location: '',
                      workMode: 'Hybrid',
                      experienceRange: '6 - 10 years',
                      budgetCTC: '',
                      mustHaveSkills: '',
                      niceToHaveSkills: '',
                      engagementType: 'Permanent',
                      targetTimeline: '15 - 30 days',
                    });
                  }}
                  className="px-6 py-3 rounded-xl text-xs font-bold text-navy bg-background-secondary hover:bg-border transition-colors"
                >
                  Submit Another Mandate
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Company & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Acme Global Technologies"
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Industry Sector *
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    {domainsData.map((d) => (
                      <option key={d.id} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Contact Person, Email, Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Official Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@acmeglobal.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Phone / Direct Line *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 3: Role Title & Openings */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Role Title(s) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.roleTitle}
                    onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                    placeholder="e.g. Lead Cloud Architect or 5x Senior Java Developers"
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Number of Openings
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={formData.openings}
                    onChange={(e) => setFormData({ ...formData, openings: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 4: Location & Work Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Target Location(s) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Bengaluru, Whitefield or Mumbai BKC"
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Work Mode
                  </label>
                  <select
                    value={formData.workMode}
                    onChange={(e) => setFormData({ ...formData, workMode: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="Hybrid">Hybrid (2-3 days office)</option>
                    <option value="Onsite">100% Onsite</option>
                    <option value="Remote">100% Remote / Distributed</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Experience & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Experience Range
                  </label>
                  <select
                    value={formData.experienceRange}
                    onChange={(e) => setFormData({ ...formData, experienceRange: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="3 - 6 years">3 - 6 years (Mid-Level)</option>
                    <option value="6 - 10 years">6 - 10 years (Senior Specialist)</option>
                    <option value="10 - 15 years">10 - 15 years (Principal / Lead)</option>
                    <option value="15+ years">15+ years (Director / VP / C-Suite)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Target Budget (CTC or Rate)
                  </label>
                  <input
                    type="text"
                    value={formData.budgetCTC}
                    onChange={(e) => setFormData({ ...formData, budgetCTC: e.target.value })}
                    placeholder="e.g. ₹28 - ₹35 LPA or $150k USD"
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 6: Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Must-Have Skills / Core Requirements *
                  </label>
                  <textarea
                    rows="2"
                    required
                    value={formData.mustHaveSkills}
                    onChange={(e) => setFormData({ ...formData, mustHaveSkills: e.target.value })}
                    placeholder="e.g. Kubernetes, Terraform, AWS, Golang, distributed architecture..."
                    className="w-full px-4 py-2 text-sm rounded-xl border border-border text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Nice-to-Haves / Certifications
                  </label>
                  <textarea
                    rows="2"
                    value={formData.niceToHaveSkills}
                    onChange={(e) => setFormData({ ...formData, niceToHaveSkills: e.target.value })}
                    placeholder="e.g. FinOps certification, prior Tier-1 banking experience..."
                    className="w-full px-4 py-2 text-sm rounded-xl border border-border text-navy focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>
              </div>

              {/* Row 7: Engagement Type & Verification Level */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Engagement Type *
                  </label>
                  <select
                    value={formData.engagementType}
                    onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="Permanent">Permanent (Contingency / Executive Search)</option>
                    <option value="Contract">Contract / Staffing Deployment</option>
                    <option value="RPO">Recruitment Process Outsourcing (RPO)</option>
                    <option value="GIC Build-out">GIC / Captive Center Build-out</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy mb-1.5">
                    Verification Level Needed *
                  </label>
                  <select
                    value={formData.verificationLevel}
                    onChange={(e) => setFormData({ ...formData, verificationLevel: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="Standard">Standard (Identity, Education, Employment & 2 References)</option>
                    <option value="Standard + Background Check">Standard + Background Check (Criminal & Address BGV)</option>
                    <option value="Custom">Custom Enterprise Verification Protocol</option>
                  </select>
                </div>
              </div>

              {/* Row 8: Target Hiring Timeline */}
              <div>
                <label className="block text-xs font-semibold text-navy mb-1.5">
                  Target Hiring Timeline
                </label>
                <select
                  value={formData.targetTimeline}
                  onChange={(e) => setFormData({ ...formData, targetTimeline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                >
                  <option value="Immediate">Immediate (Within 15 days)</option>
                  <option value="15 - 30 days">15 - 30 days (Standard)</option>
                  <option value="30 - 60 days">30 - 60 days (Leadership search)</option>
                  <option value="Flexible">Flexible / Pipeline building</option>
                </select>
                <p className="text-[11px] text-grey mt-1.5">
                  Need an ongoing enterprise collaboration instead of a single mandate?{' '}
                  <Link to="/partner-with-us" className="text-teal font-semibold hover:underline">
                    Explore Partner With Us →
                  </Link>
                </p>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-border">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Registering Mandate...' : 'Submit Requirement'}</span>
                </button>
                <p className="text-[11px] text-grey text-center mt-2.5">
                  🔒 Strictly confidential. Handled under Non-Disclosure Agreements (NDA).
                </p>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 3. WHAT HAPPENS AFTER YOU SUBMIT (6-Step Numbered Pipeline - Spec Section 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Delivery Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            What Happens After You Submit
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            A transparent 6-step fulfillment pipeline designed to eliminate hiring friction and guarantee verified retention.
          </p>
        </div>

        {/* 6-step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: '1',
              title: 'Requirement Review',
              desc: 'A dedicated account manager reviews your intake within 24–48 hours and reaches out to clarify scope, technical benchmarks, and cultural fit.',
              timeframe: 'Day 1–2'
            },
            {
              step: '2',
              title: 'Sourcing Strategy',
              desc: 'The team maps the role against our talent database and active vertical network, and defines a targeted search plan.',
              timeframe: 'Day 3–4'
            },
            {
              step: '3',
              title: 'Screening & Verification',
              desc: 'Candidates are screened for skills and experience, then run through our full verification pipeline before shortlisting.',
              timeframe: 'Day 5–7'
            },
            {
              step: '4',
              title: 'Verified Shortlist Delivered',
              desc: 'A shortlist with verification summaries attached is shared for your review — no unverified profiles are ever sent.',
              timeframe: 'Day 7–9'
            },
            {
              step: '5',
              title: 'Interview Coordination',
              desc: 'We schedule and coordinate interviews — optionally running first-round evaluations as Interview-as-a-Service.',
              timeframe: 'Day 10–16'
            },
            {
              step: '6',
              title: 'Offer, Onboarding & Guarantee',
              desc: 'We support offer negotiation and onboarding. Our 90-day replacement guarantee applies from day one.',
              timeframe: 'Day 17–90'
            }
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-border hover:border-teal/50 shadow-card hover:shadow-card-hover transition-all duration-200 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-teal-subtle text-teal font-extrabold flex items-center justify-center text-sm border border-teal-light">
                    {item.step}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-background-secondary text-grey">
                    {item.timeframe}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy group-hover:text-teal transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-grey leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-teal">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Standard SLA Governed</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRACK YOUR REQUIREMENT (Spec Section 6: Status strip) */}
      <section id="tracker-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-8 border border-navy-muted">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                Client Portal Preview (V1 Demo)
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Track Your Requirement
              </h3>
              <p className="text-xs sm:text-sm text-grey-light mt-1">
                Real-time visibility into sourcing funnels, candidate shortlists, and verification statuses.
              </p>
            </div>

            {/* Quick search input */}
            <form onSubmit={handleTrackSearch} className="flex items-center gap-2">
              <input
                type="text"
                value={searchReqId}
                onChange={(e) => setSearchReqId(e.target.value)}
                placeholder="Enter Req ID (e.g. REQ-8492)"
                className="px-3.5 py-2 text-xs rounded-xl bg-white/10 border border-white/20 text-white placeholder-grey-light focus:outline-none focus:ring-2 focus:ring-teal"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-bold rounded-xl bg-teal hover:bg-teal-hover text-white transition-colors"
              >
                Track
              </button>
            </form>
          </div>

          {trackerMessage && (
            <div className="p-3 rounded-xl bg-danger/20 border border-danger/30 text-xs text-red-200">
              {trackerMessage}
            </div>
          )}

          {/* Sample Selectors */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-grey-light font-medium">Sample Requirements:</span>
            {requirementsData.map((req) => (
              <button
                key={req.id}
                type="button"
                onClick={() => {
                  setSelectedReq(req);
                  setSearchReqId(req.id);
                  setTrackerMessage('');
                }}
                className={`text-xs px-3 py-1 rounded-lg transition-all ${
                  selectedReq?.id === req.id
                    ? 'bg-teal text-white font-bold ring-1 ring-white/30'
                    : 'bg-white/10 text-grey-light hover:bg-white/20 hover:text-white'
                }`}
              >
                {req.id} — {req.roleTitle.slice(0, 20)}...
              </button>
            ))}
          </div>

          {/* Active Requirement Card */}
          {selectedReq && (
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-teal font-semibold mb-1">
                    <span>{selectedReq.company}</span>
                    <span>•</span>
                    <span>{selectedReq.location}</span>
                    <span>•</span>
                    <span className="text-white/80">{selectedReq.engagementType}</span>
                    {selectedReq.verificationLevel && (
                      <>
                        <span>•</span>
                        <span className="text-success font-medium">🛡️ {selectedReq.verificationLevel}</span>
                      </>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {selectedReq.roleTitle}
                  </h4>
                </div>

                <div className="text-right sm:text-right text-xs">
                  <div className="text-grey-light">Tracking Reference:</div>
                  <div className="text-base font-extrabold text-teal">{selectedReq.id}</div>
                </div>
              </div>

              {/* Status Strip: Received → Sourcing → Verifying → Shortlisted → Interviewing → Closed */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-grey-light mb-4 uppercase tracking-wider">
                  Mandate Progression:
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 text-center">
                  {stages.map((stg, sIdx) => {
                    const isPassed = sIdx <= currentStageIndex;
                    const isCurrent = sIdx === currentStageIndex;

                    return (
                      <div key={stg} className="space-y-2">
                        {/* Progress Bar Segment */}
                        <div className={`h-2.5 rounded-full transition-all duration-300 ${
                          isPassed 
                            ? 'bg-teal' 
                            : 'bg-white/10'
                        }`} />
                        
                        <div className={`text-[11px] sm:text-xs font-semibold transition-colors ${
                          isCurrent 
                            ? 'text-teal font-bold' 
                            : isPassed 
                            ? 'text-white' 
                            : 'text-grey-light'
                        }`}>
                          {stg}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Status Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
                <div className="p-3 rounded-xl bg-white/5">
                  <span className="text-grey-light block mb-1">Current Active Stage:</span>
                  <span className="font-bold text-teal text-sm">{selectedReq.currentStage}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <span className="text-grey-light block mb-1">Vetted Profiles in Play:</span>
                  <span className="font-bold text-white text-sm">{selectedReq.activeCandidates} Candidates</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5">
                  <span className="text-grey-light block mb-1">Last Update:</span>
                  <span className="font-medium text-white">{selectedReq.lastUpdate}</span>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      {/* Enterprise Partnership Cross-Link */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-subtle via-lavender-light to-white border border-teal-light rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Looking for ongoing enterprise collaboration?
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-navy">
              Become an Enterprise Hiring Partner
            </h3>
            <p className="text-xs sm:text-sm text-grey max-w-xl">
              For MNCs requiring dedicated account teams, volume SLAs, standing talent pipelines, and multi-location deployment.
            </p>
          </div>
          <Link
            to="/partner-with-us"
            className="shrink-0 px-6 py-3.5 rounded-xl text-xs font-bold text-white bg-teal hover:bg-teal-hover transition-colors shadow-sm flex items-center gap-2"
          >
            <span>Explore Enterprise Partnership</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Employers;
