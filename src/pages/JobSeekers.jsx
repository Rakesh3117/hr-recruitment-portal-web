import { useState, useRef } from 'react';
import { 
  UserCheck, 
  Search, 
  MapPin, 
  Briefcase, 
  Upload, 
  FileText, 
  CheckCircle2, 
  Send, 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  Sparkles,
  ArrowRight,
  Filter,
  X
} from 'lucide-react';
import jobsData from '../data/jobs.mocks.js';
import ApplyModal from '../components/common/ApplyModal';

const JobSeekers = () => {
  const formRef = useRef(null);

  // Candidate Form State
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    currentLocation: '',
    preferredLocation: '',
    qualification: '',
    totalExperience: '1 - 3 Years',
    skills: '',
    resumeFile: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Job Search / Filter State
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, resumeFile: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log('Candidate Resume Submitted:', {
        ...formData,
        resumeFileName: formData.resumeFile?.name,
        submittedAt: new Date().toISOString()
      });
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      currentLocation: '',
      preferredLocation: '',
      qualification: '',
      totalExperience: '1 - 3 Years',
      skills: '',
      resumeFile: null,
    });
    setSubmitted(false);
  };

  // Filter Jobs
  const filteredJobs = jobsData.filter(job => {
    const matchesKeyword = searchKeyword === '' || 
      job.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.industry.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      job.requiredSkills?.some(s => s.toLowerCase().includes(searchKeyword.toLowerCase()));
    
    const matchesLocation = selectedLocation === 'All' || 
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesKeyword && matchesLocation;
  });

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-lavender-light via-surface to-background py-14 sm:py-20 lg:py-24 border-b border-border/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface text-primary border border-border shadow-xs">
              For Candidates & Job Seekers
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
              Looking for Your Next <span className="text-primary">Career Opportunity?</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-grey leading-relaxed font-normal">
              Explore career opportunities and connect with employers looking for talented professionals like you.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-fast cursor-pointer"
              >
                <Upload className="w-5 h-5 text-primary-light" />
                <span>Submit Your Resume</span>
              </button>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-grey-dark font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Direct Access to Hiring Managers</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>100% Confidential Candidate Handling</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Zero Candidate Placement Fees</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CANDIDATE RESUME SUBMISSION FORM (SECTION 7 SPECIFICATION) */}
      <section ref={formRef} className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-surface rounded-3xl p-6 sm:p-10 border border-border shadow-card">
          
          {submitted ? (
            <div className="py-12 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-teal-subtle text-teal flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Resume Submitted Successfully!
                </h3>
                <p className="text-sm text-grey leading-relaxed">
                  Thank you, <span className="font-semibold text-navy">{formData.fullName}</span>. Your profile has been registered in our recruitment database. When suitable positions match your experience, our recruitment team will reach out to you.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-background-secondary max-w-md mx-auto text-left text-xs space-y-1.5 text-grey-dark">
                <div><span className="font-semibold text-navy">Candidate:</span> {formData.fullName}</div>
                <div><span className="font-semibold text-navy">Email:</span> {formData.email}</div>
                <div><span className="font-semibold text-navy">Total Experience:</span> {formData.totalExperience}</div>
                <div><span className="font-semibold text-navy">Preferred Location:</span> {formData.preferredLocation}</div>
                {formData.resumeFile && (
                  <div><span className="font-semibold text-navy">Resume:</span> {formData.resumeFile.name}</div>
                )}
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-primary bg-lavender-light hover:bg-lavender-soft transition-colors duration-fast cursor-pointer"
                >
                  Submit Another Profile
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-navy">
                  Candidate Registration & Resume Submission
                </h2>
                <p className="text-xs sm:text-sm text-grey mt-1">
                  Please complete the form below. Our recruiters will review your qualifications against relevant open opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* 1. Full Name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Priya Nair"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 2. Mobile Number */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      name="mobileNumber"
                      required
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 3. Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="priya@example.com"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 4. Current Location */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Current Location *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="currentLocation"
                      required
                      value={formData.currentLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Pune, Maharashtra"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 5. Preferred Location */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Preferred Location *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="preferredLocation"
                      required
                      value={formData.preferredLocation}
                      onChange={handleInputChange}
                      placeholder="e.g. Mumbai / Bengaluru / Remote"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 6. Qualification */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Highest Qualification *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="qualification"
                      required
                      value={formData.qualification}
                      onChange={handleInputChange}
                      placeholder="e.g. B.Tech / MBA / Graduate"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                    />
                  </div>
                </div>

                {/* 7. Total Experience */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Total Experience *
                  </label>
                  <select
                    name="totalExperience"
                    value={formData.totalExperience}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy transition-all outline-none"
                  >
                    <option value="Fresher (0 Years)">Fresher (0 Years)</option>
                    <option value="1 - 3 Years">1 - 3 Years</option>
                    <option value="3 - 5 Years">3 - 5 Years</option>
                    <option value="5 - 8 Years">5 - 8 Years</option>
                    <option value="8 - 12 Years">8 - 12 Years</option>
                    <option value="12+ Years">12+ Years</option>
                  </select>
                </div>

                {/* 8. Skills */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Key Skills / Functional Area *
                  </label>
                  <input
                    type="text"
                    name="skills"
                    required
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="e.g. Java, Spring Boot, React, AWS, or B2B Sales"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                  />
                </div>

              </div>

              {/* 9. Resume Upload */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                  Resume Upload (PDF / DOC / DOCX) *
                </label>
                <div className="border-2 border-dashed border-border hover:border-primary/50 rounded-2xl p-6 text-center transition-colors">
                  <input
                    type="file"
                    id="resumeUpload"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="resumeUpload" className="cursor-pointer block space-y-2">
                    <div className="w-12 h-12 rounded-full bg-lavender-soft text-primary flex items-center justify-center mx-auto">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-semibold text-navy">
                      {formData.resumeFile ? (
                        <span className="text-teal font-bold">{formData.resumeFile.name}</span>
                      ) : (
                        <span>Click to choose file or drag and drop</span>
                      )}
                    </div>
                    <p className="text-xs text-grey">
                      Supported formats: PDF, DOC, DOCX (Max size: 5MB)
                    </p>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-fast disabled:opacity-70 cursor-pointer"
                >
                  {submitting ? (
                    <span>Uploading Profile...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-primary-light" />
                      <span>Submit Resume</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 3. BROWSE OPEN OPPORTUNITIES */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal">
            Active Mandates
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
            Browse Featured Opportunities
          </h2>
          <p className="text-xs sm:text-sm text-grey leading-relaxed">
            Connect directly with verified client mandates across key functional areas.
          </p>
        </div>

        {/* Search & Location Filter Bar */}
        <div className="bg-surface rounded-2xl p-4 border border-border shadow-xs mb-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search by role title, skill, or domain..."
              className="w-full pl-10 pr-3 py-2 rounded-xl text-xs sm:text-sm bg-background-secondary border border-border focus:border-primary text-navy outline-none"
            />
          </div>

          <div className="sm:w-48">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-3 py-2 rounded-xl text-xs sm:text-sm bg-background-secondary border border-border focus:border-primary text-navy outline-none"
            >
              <option value="All">All Locations</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Delhi">Delhi NCR</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.slice(0, 6).map((job) => (
            <div
              key={job.id}
              className="bg-surface rounded-2xl p-6 border border-border hover:border-primary/40 shadow-xs hover:shadow-card transition-all duration-normal flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-lavender-light text-primary">
                    {job.industry}
                  </span>
                  <span className="text-[11px] text-grey">
                    {job.postedDate || 'Active'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy leading-snug">
                  {job.title}
                </h3>

                <div className="space-y-1.5 text-xs text-grey">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-teal" />
                    <span>{job.location} ({job.workMode || 'Hybrid'})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-teal" />
                    <span>Exp: {job.experience}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-1.5">
                  {job.requiredSkills?.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-background-secondary text-grey-dark">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-border flex items-center justify-between">
                <span className="text-xs font-bold text-navy">
                  {job.compensation}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedJobForModal(job)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-primary hover:bg-primary-hover transition-colors cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Modal */}
      {selectedJobForModal && (
        <ApplyModal
          job={selectedJobForModal}
          isOpen={!!selectedJobForModal}
          onClose={() => setSelectedJobForModal(null)}
        />
      )}

    </div>
  );
};

export default JobSeekers;
