import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase, Filter } from 'lucide-react';
import statsData from '../../data/stats.json';
import domainsData from '../../data/domains.json';

const JobSearchWidget = ({ initialValues = {}, onSearch = null, isEmbedded = false }) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(initialValues.keyword || '');
  const [location, setLocation] = useState(initialValues.location || '');
  const [industry, setIndustry] = useState(initialValues.industry || '');
  const [experience, setExperience] = useState(initialValues.experience || '');

  // Extract unique locations from data
  const locations = [
    'Pune',
    'Bengaluru',
    'Mumbai',
    'Delhi NCR',
    'Hyderabad',
    'Chennai',
    'Singapore'
  ];

  const experienceRanges = [
    '0 - 3 years',
    '3 - 6 years',
    '6 - 10 years',
    '10+ years',
    '15+ years'
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams();
    if (keyword.trim()) queryParams.set('keyword', keyword.trim());
    if (location) queryParams.set('location', location);
    if (industry) queryParams.set('industry', industry);
    if (experience) queryParams.set('experience', experience);

    if (onSearch) {
      onSearch({ keyword, location, industry, experience });
    } else {
      navigate(`/jobs?${queryParams.toString()}`);
    }
  };

  const handleClear = () => {
    setKeyword('');
    setLocation('');
    setIndustry('');
    setExperience('');
    if (onSearch) {
      onSearch({ keyword: '', location: '', industry: '', experience: '' });
    }
  };

  const totalCount = statsData?.keyMetrics?.openRolesCount || 1797;

  return (
    <div className={`w-full rounded-2xl bg-white shadow-card border border-border/80 ${
      isEmbedded ? 'p-5' : 'p-6 sm:p-8 -mt-10 sm:-mt-12 relative z-20 max-w-5xl mx-auto'
    }`}>
      
      {/* Header with Live Counter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-navy">
            Find your next opportunity
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-0.5">
            Verified executive and specialist openings across premier MNCs.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lavender-light border border-lavender-soft text-primary font-semibold text-xs shrink-0">
          <span className="w-2 h-2 rounded-full bg-teal animate-ping" />
          <span>Showing {totalCount.toLocaleString()} Jobs</span>
        </div>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearchSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Keyword Input */}
          <div className="relative">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-grey mb-1">
              Job Title or Keyword
            </label>
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-grey absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g. DevOps, Architect, VP"
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-border text-sm text-navy placeholder-grey/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Location Select */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-grey mb-1">
              Location
            </label>
            <div className="relative flex items-center">
              <MapPin className="w-4 h-4 text-grey absolute left-3.5 pointer-events-none" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Industry Select */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-grey mb-1">
              Industry
            </label>
            <div className="relative flex items-center">
              <Briefcase className="w-4 h-4 text-grey absolute left-3.5 pointer-events-none" />
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="">All Industries</option>
                {domainsData.map((dom) => (
                  <option key={dom.id} value={dom.name}>{dom.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Experience Select */}
          <div>
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-grey mb-1">
              Experience
            </label>
            <div className="relative flex items-center">
              <Filter className="w-4 h-4 text-grey absolute left-3.5 pointer-events-none" />
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-border text-sm text-navy bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                <option value="">Any Experience</option>
                {experienceRanges.map((exp) => (
                  <option key={exp} value={exp}>{exp}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Action Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          
          <div className="flex flex-wrap items-center gap-2 text-xs text-grey">
            <span className="font-semibold text-navy">Popular Searches:</span>
            {['Cloud DevOps', 'ADAS Systems', 'Equities VP', 'Supply Chain Director'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setKeyword(tag)}
                className="px-2.5 py-1 rounded-md bg-background-secondary hover:bg-lavender-soft text-grey-dark hover:text-primary transition-colors cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {(keyword || location || industry || experience) && (
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-grey hover:text-navy transition-colors"
              >
                Clear
              </button>
            )}
            <button
              type="submit"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search Opportunities</span>
            </button>
          </div>

        </div>

      </form>

    </div>
  );
};

export default JobSearchWidget;
