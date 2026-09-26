import { useState, useMemo } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Filter, 
  Building2, 
  X, 
  Table as TableIcon,
  LayoutGrid,
  ShieldCheck
} from 'lucide-react';
import jobsData from '../data/jobs.json';
import JobCard from '../components/common/JobCard';
import ApplyModal from '../components/common/ApplyModal';
import domainsData from '../data/domains.json';

const Jobs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Read URL query params
  const searchParams = new URLSearchParams(location.search);
  const initialKeyword = searchParams.get('keyword') || '';
  const initialLocation = searchParams.get('location') || '';
  const initialIndustry = searchParams.get('industry') || '';
  const initialExperience = searchParams.get('experience') || '';

  const [keyword, setKeyword] = useState(initialKeyword);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [selectedIndustry, setSelectedIndustry] = useState(initialIndustry);
  const [selectedExperience, setSelectedExperience] = useState(initialExperience);
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'grid'
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);

  // Sync state if URL changes (e.g. navigation from navbar or domain card) without an effect
  const [prevSearch, setPrevSearch] = useState(location.search);
  if (prevSearch !== location.search) {
    setPrevSearch(location.search);
    const params = new URLSearchParams(location.search);
    setKeyword(params.get('keyword') || '');
    setSelectedLocation(params.get('location') || '');
    setSelectedIndustry(params.get('industry') || '');
    setSelectedExperience(params.get('experience') || '');
  }

  // Update URL helper
  const updateURL = (newParams) => {
    const params = new URLSearchParams();
    if (newParams.keyword) params.set('keyword', newParams.keyword);
    if (newParams.location) params.set('location', newParams.location);
    if (newParams.industry) params.set('industry', newParams.industry);
    if (newParams.experience) params.set('experience', newParams.experience);
    navigate(`/jobs${params.toString() ? `?${params.toString()}` : ''}`, { replace: true });
  };

  const locationsList = ['Pune', 'Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Singapore'];
  const experienceList = ['0 - 3 years', '3 - 6 years', '6 - 10 years', '10+ years', '15+ years'];

  // Filter jobs based on criteria
  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      // Keyword match
      if (keyword.trim()) {
        const query = keyword.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesDesc = job.aboutRole.toLowerCase().includes(query);
        const matchesSkills = job.requiredSkills.some(s => s.toLowerCase().includes(query));
        const matchesClient = job.clientType.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesSkills && !matchesClient) {
          return false;
        }
      }

      // Location match
      if (selectedLocation) {
        if (!job.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
          return false;
        }
      }

      // Industry match
      if (selectedIndustry) {
        if (job.industry.toLowerCase() !== selectedIndustry.toLowerCase()) {
          return false;
        }
      }

      // Experience match
      if (selectedExperience) {
        // Simple heuristic matching
        const expDigits = parseInt(selectedExperience, 10);
        const jobExpDigits = parseInt(job.experience, 10);
        if (!isNaN(expDigits) && !isNaN(jobExpDigits)) {
          if (Math.abs(expDigits - jobExpDigits) > 4) {
            return false;
          }
        }
      }

      return true;
    });
  }, [keyword, selectedLocation, selectedIndustry, selectedExperience]);

  const handleClearAll = () => {
    setKeyword('');
    setSelectedLocation('');
    setSelectedIndustry('');
    setSelectedExperience('');
    updateURL({ keyword: '', location: '', industry: '', experience: '' });
  };

  return (
    <div className="space-y-8 lg:space-y-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-lavender-light via-white to-teal-subtle p-6 sm:p-8 rounded-3xl border border-border/80 shadow-xs">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Candidate Opportunities Portal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy mt-1">
            Find Your Next Career Milestone
          </h1>
          <p className="text-xs sm:text-sm text-grey mt-2">
            Direct access to senior, specialist, and leadership roles at Fortune 500 MNCs and hyper-growth enterprises. Transparent compensation, dedicated consultant representation.
          </p>
        </div>
      </div>

      {/* Search & Filters Section (Spec Section 6) */}
      <div className="bg-white rounded-2xl p-6 border border-border shadow-card space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Job Title / Keyword */}
          <div className="relative">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-grey mb-1">
              Job Title / Keyword
            </label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-grey absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                  updateURL({ keyword: e.target.value, location: selectedLocation, industry: selectedIndustry, experience: selectedExperience });
                }}
                placeholder="e.g. Platform Engineer, VP"
                className="w-full pl-10 pr-3 py-2 text-sm rounded-xl border border-border text-navy focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Location ▾ */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-grey mb-1">
              Location ▾
            </label>
            <div className="relative flex items-center">
              <MapPin className="w-4 h-4 text-grey absolute left-3.5 pointer-events-none" />
              <select
                value={selectedLocation}
                onChange={(e) => {
                  setSelectedLocation(e.target.value);
                  updateURL({ keyword, location: e.target.value, industry: selectedIndustry, experience: selectedExperience });
                }}
                className="w-full pl-10 pr-3 py-2 text-sm rounded-xl border border-border text-navy bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
              >
                <option value="">All Locations</option>
                {locationsList.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Industry ▾ */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-grey mb-1">
              Industry ▾
            </label>
            <div className="relative flex items-center">
              <Briefcase className="w-4 h-4 text-grey absolute left-3.5 pointer-events-none" />
              <select
                value={selectedIndustry}
                onChange={(e) => {
                  setSelectedIndustry(e.target.value);
                  updateURL({ keyword, location: selectedLocation, industry: e.target.value, experience: selectedExperience });
                }}
                className="w-full pl-10 pr-3 py-2 text-sm rounded-xl border border-border text-navy bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
              >
                <option value="">All Industries</option>
                {domainsData.map((dom) => (
                  <option key={dom.id} value={dom.name}>{dom.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Experience ▾ */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-grey mb-1">
              Experience ▾
            </label>
            <div className="relative flex items-center">
              <Filter className="w-4 h-4 text-grey absolute left-3.5 pointer-events-none" />
              <select
                value={selectedExperience}
                onChange={(e) => {
                  setSelectedExperience(e.target.value);
                  updateURL({ keyword, location: selectedLocation, industry: selectedIndustry, experience: e.target.value });
                }}
                className="w-full pl-10 pr-3 py-2 text-sm rounded-xl border border-border text-navy bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer"
              >
                <option value="">Any Experience</option>
                {experienceList.map((exp) => (
                  <option key={exp} value={exp}>{exp}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Filter Pills & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/60">
          
          <div className="flex flex-wrap items-center gap-2">
            {/* Live Result Counter (Spec Section 6: "Showing N Jobs") */}
            <span className="text-sm font-bold text-navy">
              Showing {filteredJobs.length} Jobs
            </span>

            {(keyword || selectedLocation || selectedIndustry || selectedExperience) && (
              <>
                <span className="text-grey-light">•</span>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs text-danger font-semibold hover:underline flex items-center gap-1"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Clear All Filters</span>
                </button>
              </>
            )}

            {/* Individual filter pills */}
            {selectedLocation && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-lavender-soft text-primary font-medium">
                Location: {selectedLocation}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-danger" 
                  onClick={() => {
                    setSelectedLocation('');
                    updateURL({ keyword, location: '', industry: selectedIndustry, experience: selectedExperience });
                  }} 
                />
              </span>
            )}

            {selectedIndustry && (
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-lavender-soft text-primary font-medium">
                Industry: {selectedIndustry}
                <X 
                  className="w-3 h-3 cursor-pointer hover:text-danger" 
                  onClick={() => {
                    setSelectedIndustry('');
                    updateURL({ keyword, location: selectedLocation, industry: '', experience: selectedExperience });
                  }} 
                />
              </span>
            )}
          </div>

          {/* Desktop View Switcher */}
          <div className="hidden md:flex items-center gap-1 bg-background-secondary p-1 rounded-lg border border-border">
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === 'table' ? 'bg-white text-primary shadow-xs' : 'text-grey hover:text-navy'
              }`}
            >
              <TableIcon className="w-4 h-4" />
              <span>Table</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                viewMode === 'grid' ? 'bg-white text-primary shadow-xs' : 'text-grey hover:text-navy'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Cards</span>
            </button>
          </div>

        </div>

      </div>

      {/* Candidate-side trust note (Spec Section 7: small banner above results) */}
      <div className="bg-gradient-to-r from-lavender-light/70 via-teal-subtle/50 to-white border border-lavender-soft/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-success/10 text-success flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <p className="text-navy font-medium leading-relaxed">
            Every applicant who progresses goes through our standard verification process — it's part of why our clients trust profiles from our network.{' '}
            <Link to="/verification" className="text-teal font-bold hover:underline inline-flex items-center gap-0.5 ml-1">
              Learn more →
            </Link>
          </p>
        </div>
      </div>

      {/* Job Listing (Spec Section 7: table on desktop, stacked cards on mobile) */}
      {filteredJobs.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-border shadow-card space-y-4">
          <Briefcase className="w-12 h-12 text-grey mx-auto opacity-50" />
          <h3 className="text-xl font-bold text-navy">No positions match your search criteria</h3>
          <p className="text-xs sm:text-sm text-grey max-w-md mx-auto">
            Try broadening your location or industry filter, or submit your profile for proactive confidential matching.
          </p>
          <button
            type="button"
            onClick={handleClearAll}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-hover transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          {viewMode === 'table' && (
            <div className="hidden md:block bg-white rounded-2xl border border-border shadow-card overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-secondary/80 border-b border-border text-[11px] font-bold uppercase tracking-wider text-grey">
                    <th className="py-4 px-6">Role Title</th>
                    <th className="py-4 px-6">Client Type</th>
                    <th className="py-4 px-6">Location</th>
                    <th className="py-4 px-6">Experience</th>
                    <th className="py-4 px-6">Compensation</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60 text-sm">
                  {filteredJobs.map((job) => (
                    <tr key={job.id} className="hover:bg-lavender-light/40 transition-colors group">
                      
                      {/* Role Title */}
                      <td className="py-4 px-6 font-bold text-navy">
                        <Link to={`/jobs/${job.id}`} className="hover:text-primary transition-colors block">
                          {job.title}
                        </Link>
                        <span className="text-[11px] font-normal text-grey">
                          {job.industry}
                        </span>
                      </td>

                      {/* Client Type */}
                      <td className="py-4 px-6 text-xs text-teal font-semibold">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{job.clientType}</span>
                        </div>
                      </td>

                      {/* Location */}
                      <td className="py-4 px-6 text-xs text-grey font-medium">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span>{job.location}</span>
                        </div>
                        <span className="text-[10px] text-grey-light">({job.workMode})</span>
                      </td>

                      {/* Experience */}
                      <td className="py-4 px-6 text-xs text-navy font-medium">
                        {job.experience}
                      </td>

                      {/* Compensation */}
                      <td className="py-4 px-6 text-xs font-bold text-teal-dark">
                        <span className="bg-teal-subtle px-2 py-0.5 rounded border border-teal-light">
                          {job.compensation}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedJobForApply(job)}
                            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors shadow-2xs"
                          >
                            Apply
                          </button>
                          <Link
                            to={`/jobs/${job.id}`}
                            className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-lavender-soft hover:bg-lavender-light text-navy transition-colors"
                          >
                            Details
                          </Link>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Grid View on Desktop or Stacked Cards View on Mobile (Spec Section 6) */}
          <div className={`${viewMode === 'grid' ? 'grid' : 'grid md:hidden'} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={(j) => setSelectedJobForApply(j)}
              />
            ))}
          </div>
        </>
      )}

      {/* Candidate Apply Modal */}
      <ApplyModal
        job={selectedJobForApply}
        isOpen={!!selectedJobForApply}
        onClose={() => setSelectedJobForApply(null)}
      />

    </div>
  );
};

export default Jobs;
