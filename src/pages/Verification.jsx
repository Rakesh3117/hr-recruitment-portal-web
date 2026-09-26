import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  ChevronDown, 
  PhoneCall, 
  Lock
} from 'lucide-react';
import VerifiedBadge from '../components/common/VerifiedBadge';
import candidatesData from '../data/candidates.json';

const Verification = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeCandidateIndex, setActiveCandidateIndex] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const activeCandidate = candidatesData[activeCandidateIndex] || candidatesData[0];

  const pipelineSteps = [
    {
      step: '1',
      title: 'Identity Verification',
      desc: 'Government-issued ID (Passport, Aadhaar, National ID) cross-checked and photo confirmed against application biometric records to prevent proxy candidates.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
    },
    {
      step: '2',
      title: 'Education Verification',
      desc: 'Degree, institution, and graduation year confirmed directly with the issuing university registrar or accredited background verification agency.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'
    },
    {
      step: '3',
      title: 'Employment History Check',
      desc: 'Past employers, tenure dates, official designations, and exit clearances validated directly with HR records — never relying on unverified resume claims.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80'
    },
    {
      step: '4',
      title: 'Reference Checks',
      desc: 'A minimum of two independent managerial and peer references interviewed regarding work quality, reliability, ethics, and team collaboration.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      step: '5',
      title: 'Skill & Technical Assessment',
      desc: 'Role-specific live coding tests, system architecture evaluations, or domain rubrics scored by our practicing subject matter expert panels.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80'
    },
    {
      step: '6',
      title: 'Final Quality Review',
      desc: 'A senior sector practice consultant conducts the final sanity check and signs off on the digital verification summary before client submission.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const faqs = [
    {
      q: "How do you verify a candidate's identity and documents?",
      a: "We utilize multi-factor identity authentication. Candidates submit government-issued identification which is verified against official database registries alongside automated document tamper-detection algorithms."
    },
    {
      q: "What happens if a candidate misrepresents their experience?",
      a: "We enforce zero tolerance for fabricated credentials or employment gaps disguised as active tenure. Any profile flagged during verification is immediately removed from the candidate pool and blacklisted across our network. Furthermore, our 90-day replacement guarantee protects clients against post-placement misrepresentation."
    },
    {
      q: "Do you run criminal background checks?",
      a: "Yes. For clients requiring comprehensive compliance (such as BFSI, Healthcare, or Defense), we conduct formal criminal record and court-registry verification through certified third-party verification partners where legally permissible."
    },
    {
      q: "What is your Genuineness & Replacement Guarantee?",
      a: "If any candidate placed through HR ANAND exits, underperforms, or is found to have misrepresented verified information within 90 calendar days of joining, we source and place an equivalent replacement at zero additional recruitment cost."
    },
    {
      q: "How fast can you deliver verified candidate shortlists?",
      a: "Our standard turnaround delivers the first batch of calibrated, fully verified candidate profiles within 5 to 7 business days of mandate intake."
    }
  ];

  const handleDownloadCertificate = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO (Spec Section 5) */}
      <section className="bg-gradient-to-b from-success/5 via-lavender-light/40 to-background py-16 lg:py-24 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-success border border-success/30 shadow-xs text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span>The HR ANAND Trust Standard</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
                100% Genuine.<br />
                <span className="text-success">100% Verified.</span>
              </h1>
              <p className="text-base sm:text-lg text-grey leading-relaxed max-w-2xl">
                Every candidate we present has been checked, confirmed and quality-assured — so your hiring managers make offers with confidence, not hope.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/employers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-md hover:shadow-lg transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Verified Shortlist</span>
                </Link>
                <a
                  href="#verification-pipeline"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-navy bg-white hover:bg-lavender-light border border-border shadow-xs transition-colors"
                >
                  <span>Explore 6-Step Pipeline</span>
                  <ChevronDown className="w-4 h-4 text-grey" />
                </a>
              </div>

              {/* Quick trust metrics */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-grey font-medium border-t border-border/60">
                <span className="flex items-center gap-1.5 text-navy font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-success" /> Zero Document Tampering
                </span>
                <span className="flex items-center gap-1.5 text-navy font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-success" /> Direct HR Desk Confirmation
                </span>
                <span className="flex items-center gap-1.5 text-navy font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-success" /> Multi-Source Biometric Check
                </span>
              </div>
            </div>

            {/* Visual Hero Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-success/30 group">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80"
                  alt="Enterprise Credential Audit & Background Verification Session"
                  loading="lazy"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                
                {/* Floating Status Badges */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-success/40 shadow-md flex items-center gap-2 text-xs font-bold text-navy">
                  <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                  <span>ISO 27001 & BGV Passed</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/60 shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-navy flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-success" />
                      Multi-Tier Authentication Active
                    </span>
                    <span className="font-extrabold text-success text-[11px] bg-success/10 px-2 py-0.5 rounded-md">
                      100% Genuine
                    </span>
                  </div>
                  <p className="text-[11px] text-grey leading-tight">
                    All candidate degrees, tenure records, and criminal disclosures digitally validated before client submission.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STATS STRIP (Spec Section 5: green accent) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-success/30 shadow-card">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-success">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-navy mt-1">Identity Verified</div>
              <p className="text-xs text-grey mt-1">Cross-checked against official records before shortlist.</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-success">2+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-navy mt-1">References Checked</div>
              <p className="text-xs text-grey mt-1">Independent managerial reviews contacted directly.</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-success">Zero</div>
              <div className="text-xs font-bold uppercase tracking-wider text-navy mt-1">Tolerance Policy</div>
              <p className="text-xs text-grey mt-1">Immediate disqualification for fabricated experience.</p>
            </div>
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-success">90 Days</div>
              <div className="text-xs font-bold uppercase tracking-wider text-navy mt-1">Replacement Guarantee</div>
              <p className="text-xs text-grey mt-1">Risk-free protection on every candidate placed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE VERIFICATION PIPELINE (Spec Section 5: 6-step numbered process) */}
      <section id="verification-pipeline" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Rigorous Due Diligence
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Our 6-Step Verification Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            How we eliminate resume inflation, fraudulent proxy interviews, and credential misrepresentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pipelineSteps.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl overflow-hidden border border-border hover:border-success/50 shadow-card hover:shadow-card-hover transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Visual Step Image Banner */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/30 to-transparent" />
                  
                  {/* Step Badge */}
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-success text-white font-extrabold flex items-center justify-center text-xs shadow-md">
                    {step.step}
                  </div>

                  <span className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-success shadow-xs">
                    Stage {step.step} Audit
                  </span>

                  <div className="absolute bottom-2.5 left-3.5 right-3.5">
                    <h3 className="text-base font-bold text-white drop-shadow-xs">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs sm:text-sm text-grey leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-border/60 flex items-center gap-1.5 text-xs font-semibold text-success">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Tolerance Standard</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CANDIDATE SHORTLIST CARD MOCKUP — WHAT CLIENT ACTUALLY SEES (Spec Section 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl space-y-8 border border-navy-muted">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                Client Portal Experience
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Candidate Shortlist Card — What You Actually See
              </h3>
              <p className="text-xs sm:text-sm text-grey-light mt-1">
                Every shortlisted profile arrives with pre-authenticated credentials, assessment scores, and verified reference logs.
              </p>
            </div>

            {/* Candidate Selector Tabs */}
            <div className="flex items-center gap-2">
              {candidatesData.map((cand, idx) => (
                <button
                  key={cand.id}
                  type="button"
                  onClick={() => setActiveCandidateIndex(idx)}
                  className={`text-xs px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                    activeCandidateIndex === idx
                      ? 'bg-teal text-white shadow-sm ring-1 ring-white/30'
                      : 'bg-white/10 text-grey-light hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {cand.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Candidate Shortlist Card */}
          <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/15 space-y-6">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={activeCandidate.avatar}
                  alt={activeCandidate.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-teal shadow-md"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-bold text-white">
                      {activeCandidate.name}
                    </h4>
                    <VerifiedBadge variant="compact" />
                  </div>
                  <div className="text-xs text-grey-light mt-0.5">
                    {activeCandidate.roleAppliedFor} • {activeCandidate.experience} Experience • {activeCandidate.location}
                  </div>
                </div>
              </div>

              <div className="text-right sm:text-right">
                <span className="text-xs text-grey-light block">Calibrated Match:</span>
                <span className="text-2xl font-extrabold text-teal">{activeCandidate.roleFitScore} Role Fit</span>
              </div>
            </div>

            {/* Multi-point verification checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-grey-light">Identity Verification:</span>
                <span className="text-success font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ID Verified
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-grey-light">Degree & Education:</span>
                <span className="text-success font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-grey-light">Employment Tenure:</span>
                <span className="text-success font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> HR Cleared
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-grey-light">Independent References:</span>
                <span className="text-teal font-bold">
                  {activeCandidate.verification.referencesChecked} Checked & Documented
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-grey-light">Technical SME Assessment:</span>
                <span className="text-teal font-bold">
                  Scored {activeCandidate.verification.skillAssessmentScore}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-grey-light">Verification Signoff:</span>
                <span className="text-white font-medium truncate max-w-[150px]" title={activeCandidate.verification.verifiedBy}>
                  {activeCandidate.verification.verifiedBy.split('(')[0]}
                </span>
              </div>
            </div>

            {/* Candidate Badges List */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-grey-light uppercase tracking-wider block mb-2">
                Certified Verification Points:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeCandidate.verifiedBadges?.map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="text-xs px-3 py-1 rounded-lg bg-success/15 text-green-300 border border-success/30 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Shortlist actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap">
              <div className="text-xs text-grey-light flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-teal" />
                <span>Verified on {activeCandidate.verification.verifiedOn} by HR ANAND Enterprise Desk</span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  to="/employers"
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-teal hover:bg-teal-hover text-white transition-colors"
                >
                  Request Similar Profile
                </Link>
                <button
                  type="button"
                  onClick={handleDownloadCertificate}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{downloadSuccess ? 'Downloaded!' : 'Download Summary'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. CANDIDATE VERIFICATION CERTIFICATE (Spec Section 5) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-success/30 shadow-card space-y-6 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-success flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-success" />
                Digital Verification Summary
              </span>
              <h3 className="text-2xl font-bold text-navy mt-1">
                The HR ANAND Verification Certificate
              </h3>
              <p className="text-xs text-grey mt-0.5">
                Included with every candidate profile shared with client hiring authorities.
              </p>
            </div>

            <button
              type="button"
              onClick={handleDownloadCertificate}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-navy bg-background-secondary hover:bg-lavender-soft border border-border transition-colors cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4 text-teal" />
              <span>{downloadSuccess ? 'Sample Certificate Downloaded' : 'Download Sample Certificate (PDF)'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-background border border-border/60 space-y-2">
              <div className="font-bold text-navy flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Identity & Biometrics Verified</span>
              </div>
              <p className="text-grey leading-relaxed">
                National ID / Passport verified via official registry with facial photo validation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60 space-y-2">
              <div className="font-bold text-navy flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Education & Degrees Confirmed</span>
              </div>
              <p className="text-grey leading-relaxed">
                Degrees, enrollment tenure, and graduation honors authenticated directly with issuing institutions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60 space-y-2">
              <div className="font-bold text-navy flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>Employment & HR History Checked</span>
              </div>
              <p className="text-grey leading-relaxed">
                Designations, tenure start/end dates, and performance standing documented with past employer HR desks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-background border border-border/60 space-y-2">
              <div className="font-bold text-navy flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success" />
                <span>2+ Professional References Logged</span>
              </div>
              <p className="text-grey leading-relaxed">
                Written transcripts of independent peer and managerial reference interviews appended to file.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REPLACEMENT GUARANTEE (Spec Section 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Open-source backdrop photo with gradient overlay */}
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
            alt="Corporate executive consultation and placement guarantee"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-primary/85" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-teal-light">
              100% Client Protection
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Our Genuineness & 90-Day Replacement Guarantee
            </h2>
            <p className="text-sm sm:text-base text-lavender-soft/90 leading-relaxed">
              If a placed candidate exits, underperforms, or is found to have misrepresented verified information within <strong>90 days</strong> of joining, we source and place a qualified replacement at no additional recruitment cost.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-grey-light">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" /> Zero Replacement Fees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" /> Priority Search Allocation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" /> Contractually Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ (Spec Section 5: Trust-focused) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Trust & Verification FAQs
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-1">
            Common questions from MNC talent leaders regarding our verification methodology.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-border shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-navy hover:text-primary transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-grey shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-grey leading-relaxed border-t border-border/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-lavender-soft/60 border border-lavender-soft flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h3 className="text-2xl font-bold text-navy">
              Ready to hire genuine, verified professionals?
            </h3>
            <p className="text-xs sm:text-sm text-grey">
              Submit your open role or talk to our practice team about bulk verified staffing.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/employers"
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-md"
            >
              Submit Requirement →
            </Link>
            <Link
              to="/partner-with-us"
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-primary bg-white hover:bg-lavender-light border border-border"
            >
              Enterprise Partnership
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Verification;
