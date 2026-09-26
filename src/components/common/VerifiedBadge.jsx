import { useState } from 'react';
import { CheckCircle2, ShieldCheck, ChevronDown } from 'lucide-react';

const VerifiedBadge = ({ variant = 'full', showDetails = false, className = '' }) => {
  const [expanded, setExpanded] = useState(showDetails);

  if (variant === 'compact') {
    return (
      <span 
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-success/10 text-success border border-success/20 ${className}`}
        title="Identity · Education · Employment · References · Skills — all checked"
      >
        <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
        <span>Verified</span>
      </span>
    );
  }

  return (
    <div className={`inline-block relative group ${className}`}>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-success/10 text-success border border-success/25 hover:bg-success/15 transition-all text-left cursor-pointer"
        aria-label="Candidate Verification details"
      >
        <ShieldCheck className="w-4 h-4 text-success shrink-0" />
        <span>100% Verified Candidate</span>
        <ChevronDown className={`w-3 h-3 text-success/70 transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Sub-line tooltip on hover or expand */}
      <div className={`mt-1 text-[11px] font-medium text-navy/80 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-lg border border-success/30 shadow-sm transition-all duration-200 ${
        expanded ? 'block' : 'hidden group-hover:block absolute left-0 z-30 min-w-[260px]'
      }`}>
        <span className="flex items-center gap-1 text-success font-semibold text-[10px] uppercase tracking-wider mb-0.5">
          <CheckCircle2 className="w-3 h-3" /> Multi-Point Verification:
        </span>
        <span className="text-grey-dark">
          Identity · Education · Employment · References · Skills — all checked
        </span>
      </div>
    </div>
  );
};

export default VerifiedBadge;
