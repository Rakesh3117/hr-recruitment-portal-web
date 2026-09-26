import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Users, 
  Share2
} from 'lucide-react';
import jobsData from '../data/jobs.json';
import domainsData from '../data/domains.json';
import ApplyModal from '../components/common/ApplyModal';
import VerifiedBadge from '../components/common/VerifiedBadge';

const JobDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Find job by ID or slug
  const job = jobsData.find((j) => j.id === slug) || jobsData[0];
  const matchingDomain = domainsData.find(
    (d) => d.name.toLowerCase() === job.industry.toLowerCase() || d.id === job.industry.toLowerCase()
  );

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 lg:space-y-16 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* Back Button */}
      <div>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-grey hover:text-primary transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Openings</span>
        </button>
      </div>

      {/* 1. HEADER (Spec Section 7) */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border shadow-card relative overflow-hidden">
        {matchingDomain?.image && (
          <div className="h-36 sm:h-44 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 relative overflow-hidden">
            <img
              src={matchingDomain.image}
              alt={matchingDomain.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
          </div>
        )}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/80">
          
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-lavender-light text-primary border border-lavender-soft">
                {job.industry}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-subtle text-teal border border-teal-light">
                {job.category}
              </span>
              <VerifiedBadge variant="full" />
              <span className="text-xs text-grey">
                Posted {job.postedDate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy">
              {job.title}
            </h1>

            {/* Meta: Client type · Location · Experience · Compensation */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-grey pt-1">
              <span className="flex items-center gap-1.5 font-semibold text-teal">
                <Building2 className="w-4 h-4" />
                {job.clientType}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-navy font-medium">
                <MapPin className="w-4 h-4 text-primary" />
                {job.location} ({job.workMode})
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Briefcase className="w-4 h-4 text-accent" />
                {job.experience}
              </span>
              <span>•</span>
              <span className="font-bold text-teal-dark bg-teal-subtle px-2.5 py-0.5 rounded border border-teal-light">
                {job.compensation}
              </span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex sm:flex-col items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsApplyModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Apply Now
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-grey hover:text-navy border border-border hover:bg-background-secondary transition-colors flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share Role'}</span>
            </button>
          </div>

        </div>

        {/* Mandate Safeguards Strip */}
        <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-grey font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-success" />
            <span>Direct Client Partnership</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-teal" />
            <span>Immediate Consultant Review</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4 text-primary" />
            <span>{job.openings} Open Position(s)</span>
          </div>
        </div>

      </div>

      {/* 2. MAIN CONTENT SECTIONS (Spec Section 7) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Job Details Body */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* About the Role */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-card space-y-3">
            <h2 className="text-xl font-bold text-navy">About the Role</h2>
            <p className="text-sm text-grey leading-relaxed">
              {job.aboutRole}
            </p>
          </div>

          {/* Key Responsibilities */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-card space-y-4">
            <h2 className="text-xl font-bold text-navy">Key Responsibilities</h2>
            <ul className="space-y-3">
              {job.responsibilities?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-grey leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Skills & Experience */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-card space-y-4">
            <h2 className="text-xl font-bold text-navy">Required Skills & Experience</h2>
            <div className="grid grid-cols-1 gap-2.5">
              {job.requiredSkills?.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-background-secondary border border-border/80 text-xs sm:text-sm font-medium text-navy">
                  <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nice to Have */}
          {job.niceToHave?.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-card space-y-4">
              <h2 className="text-xl font-bold text-navy">Nice to Have</h2>
              <div className="grid grid-cols-1 gap-2.5">
                {job.niceToHave.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-lavender-light border border-lavender-soft text-xs sm:text-sm text-navy">
                    <Sparkles className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. CLOSING CTA (Spec Section 7) */}
          <div className="bg-gradient-to-r from-navy to-[#1E1B4B] rounded-3xl p-8 text-white shadow-xl text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Ready to take the next step?
            </h3>
            <p className="text-xs sm:text-sm text-grey-light max-w-md mx-auto">
              Submit your profile directly to our lead recruitment consultant handling this mandate.
            </p>
            <button
              type="button"
              onClick={() => setIsApplyModalOpen(true)}
              className="px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Apply Now
            </button>
          </div>

        </div>

        {/* Right Column: Why Apply Through Us (Spec Section 7) */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          
          {/* Career Consultant Partner Card */}
          <div className="bg-white rounded-3xl p-5 border border-border shadow-card overflow-hidden space-y-3">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
                alt="Senior Executive Talent Partner"
                loading="lazy"
                className="w-full h-44 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <div className="text-xs font-bold">Dedicated Career Partner</div>
                <div className="text-[10px] text-lavender-soft">Assigned upon verified submission</div>
              </div>
            </div>
            <p className="text-xs text-grey leading-relaxed">
              Every applicant to this role is represented directly by our sector practice specialists — offering interview coaching, resume positioning, and compensation guidance.
            </p>
          </div>

          <div className="bg-gradient-to-br from-lavender-light via-white to-teal-subtle rounded-3xl p-6 border border-lavender-soft shadow-card space-y-5">
            <h3 className="text-base font-bold text-navy">
              Why Apply Through Us
            </h3>
            
            <div className="space-y-4 text-xs text-grey">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xs">Direct Line to Hiring Client</h4>
                  <p className="mt-0.5 leading-relaxed">No black-box applications. Direct presentation to executive hiring authorities.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xs">Interview Prep & Feedback</h4>
                  <p className="mt-0.5 leading-relaxed">Personalized briefing regarding client panel expectations and interview feedback.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xs">Offer & Negotiation Advisory</h4>
                  <p className="mt-0.5 leading-relaxed">Expert compensation benchmarking, equity advisory, and smooth onboarding support.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-success text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xs">Reusable Verified Profile</h4>
                  <p className="mt-0.5 leading-relaxed">
                    Your profile is verified once and reused for future opportunities (faster process on your next application).{' '}
                    <Link to="/verification" className="text-teal font-semibold hover:underline">
                      Learn how →
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-border/60">
              <div className="text-[11px] text-grey">
                Questions about this role? <Link to="/contact" className="text-primary font-semibold hover:underline">Contact our office</Link>.
              </div>
            </div>
          </div>

          {/* Quick Employer Prompt */}
          <div className="bg-white rounded-2xl p-5 border border-border text-center space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal">
              Are you an employer?
            </span>
            <p className="text-xs text-grey">
              Need to fill a similar specialist or leadership mandate in your organization?
            </p>
            <Link
              to="/employers"
              className="inline-block text-xs font-bold text-teal hover:underline pt-1"
            >
              Submit a Requirement →
            </Link>
          </div>

        </div>

      </div>

      {/* Candidate Apply Modal */}
      <ApplyModal
        job={job}
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />

    </div>
  );
};

export default JobDetails;
