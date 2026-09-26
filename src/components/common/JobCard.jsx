import { Link } from 'react-router-dom';
import { Building2, MapPin, Briefcase, ArrowRight, Sparkles } from 'lucide-react';
import VerifiedBadge from './VerifiedBadge';

const JobCard = ({ job, onApply }) => {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-border/80 hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between">
      
      {/* Top Meta */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-lavender-light text-primary border border-lavender-soft">
            <Sparkles className="w-3 h-3 text-accent" />
            {job.industry}
          </span>
          <div className="flex items-center gap-2">
            <VerifiedBadge variant="compact" />
            <span className="text-[11px] font-medium text-grey">
              {job.postedDate}
            </span>
          </div>
        </div>

        {/* Role Title */}
        <Link to={`/jobs/${job.id}`} className="block group-hover:text-primary transition-colors">
          <h3 className="text-lg font-bold text-navy tracking-tight line-clamp-1">
            {job.title}
          </h3>
        </Link>

        {/* Client Type */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-teal mt-1 mb-3">
          <Building2 className="w-3.5 h-3.5" />
          <span>{job.clientType}</span>
        </div>

        {/* Meta Strip */}
        <div className="flex flex-wrap items-center gap-y-1.5 gap-x-3 text-xs text-grey border-t border-b border-border/60 py-3 my-3">
          <span className="flex items-center gap-1 text-navy font-medium">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            {job.location}
          </span>
          <span className="text-grey-light">•</span>
          <span className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5 text-accent" />
            {job.experience}
          </span>
          <span className="text-grey-light">•</span>
          <span className="flex items-center gap-1 font-semibold text-teal-dark bg-teal-subtle px-2 py-0.5 rounded">
            {job.compensation}
          </span>
        </div>

        {/* Snippet / Skills */}
        <p className="text-xs text-grey line-clamp-2 leading-relaxed mb-4">
          {job.aboutRole}
        </p>

        {/* Key Skill Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {job.requiredSkills?.slice(0, 3).map((skill, idx) => (
            <span 
              key={idx} 
              className="text-[11px] px-2 py-0.5 rounded bg-background-secondary text-grey-dark"
            >
              {skill}
            </span>
          ))}
          {job.requiredSkills?.length > 3 && (
            <span className="text-[11px] px-1.5 py-0.5 text-grey">
              +{job.requiredSkills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 pt-2 border-t border-border/60">
        <button
          type="button"
          onClick={() => onApply(job)}
          className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-primary hover:bg-primary-hover transition-colors shadow-xs"
        >
          Apply Now
        </button>
        <Link
          to={`/jobs/${job.id}`}
          className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-navy bg-lavender-soft hover:bg-lavender-light hover:text-primary transition-colors text-center inline-flex items-center justify-center gap-1"
        >
          <span>Details</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

    </div>
  );
};

export default JobCard;
