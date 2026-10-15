import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Briefcase, 
  CheckCircle2, 
  Send, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

const Employers = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialService = searchParams.get('service') || '';
  const initialIndustry = searchParams.get('industry') || '';

  // Form State according to Section 6
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    positionRequired: initialService ? `${initialService} Role` : '',
    openings: '1',
    experienceRequired: '3 - 6 Years',
    jobDescription: initialIndustry ? `Looking for talent in ${initialIndustry}.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log('Hiring Requirement Submitted:', formData);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      location: '',
      positionRequired: '',
      openings: '1',
      experienceRequired: '3 - 6 Years',
      jobDescription: '',
    });
    setSubmitted(false);
  };

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-lavender-light via-surface to-background py-14 sm:py-20 lg:py-24 border-b border-border/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface text-primary border border-border shadow-xs">
              For Employers & Hiring Managers
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
              Have a <span className="text-primary">Hiring Requirement?</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-grey leading-relaxed font-normal">
              Tell us what talent you are looking for, and our recruitment team will help you find suitable candidates.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-grey-dark font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Dedicated Recruiter Allocation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>24–48h Initial Shortlist</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Pre-Screened Profiles</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORM & SIDEBAR SECTION */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Requirement Form (8 Cols) */}
          <div className="lg:col-span-8 bg-surface rounded-3xl p-6 sm:p-10 border border-border shadow-card">
            
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-teal-subtle text-teal flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                    Requirement Submitted Successfully!
                  </h3>
                  <p className="text-sm text-grey leading-relaxed">
                    Thank you, <span className="font-semibold text-navy">{formData.contactPerson}</span>. Our recruitment practice specialist for <span className="font-semibold text-navy">{formData.positionRequired}</span> will review your requirement and reach out within 24 business hours.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-background-secondary max-w-md mx-auto text-left text-xs space-y-1.5 text-grey-dark">
                  <div><span className="font-semibold text-navy">Company:</span> {formData.companyName}</div>
                  <div><span className="font-semibold text-navy">Position:</span> {formData.positionRequired} ({formData.openings} opening/s)</div>
                  <div><span className="font-semibold text-navy">Location:</span> {formData.location}</div>
                  <div><span className="font-semibold text-navy">Contact Email:</span> {formData.email}</div>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-primary bg-lavender-light hover:bg-lavender-soft transition-colors duration-fast cursor-pointer"
                  >
                    Submit Another Requirement
                  </button>
                  <Link
                    to="/"
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-navy bg-background-secondary hover:bg-border transition-colors duration-fast"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy">
                    Submit Hiring Requirement
                  </h2>
                  <p className="text-xs sm:text-sm text-grey mt-1">
                    Fill in the details below and our talent acquisition team will initiate sourcing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* 1. Company Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Company Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Corporation"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* 2. Contact Person */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Contact Person *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* 3. Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Email *
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
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* 4. Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* 5. Location */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Job Location *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai / Pune / Remote"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* 6. Position Required */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Position Required *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-grey">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="positionRequired"
                        required
                        value={formData.positionRequired}
                        onChange={handleChange}
                        placeholder="e.g. Senior Java Developer / Area Sales Manager"
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* 7. Number of Openings */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Number of Openings *
                    </label>
                    <input
                      type="number"
                      name="openings"
                      min="1"
                      required
                      value={formData.openings}
                      onChange={handleChange}
                      placeholder="1"
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy transition-all outline-none"
                    />
                  </div>

                  {/* 8. Experience Required */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                      Experience Required *
                    </label>
                    <select
                      name="experienceRequired"
                      value={formData.experienceRequired}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy transition-all outline-none"
                    >
                      <option value="0 - 2 Years">0 - 2 Years (Entry Level)</option>
                      <option value="2 - 5 Years">2 - 5 Years (Mid Level)</option>
                      <option value="5 - 8 Years">5 - 8 Years (Senior)</option>
                      <option value="8 - 12 Years">8 - 12 Years (Lead / Manager)</option>
                      <option value="12+ Years">12+ Years (Director / Executive)</option>
                    </select>
                  </div>

                </div>

                {/* 9. Job Description / Requirement */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-navy uppercase tracking-wider">
                    Job Description / Requirement Details *
                  </label>
                  <div className="relative">
                    <textarea
                      name="jobDescription"
                      rows={5}
                      required
                      value={formData.jobDescription}
                      onChange={handleChange}
                      placeholder="Paste key responsibilities, mandatory skill sets, qualification criteria, budget range, or notice period requirements..."
                      className="w-full p-3.5 rounded-xl text-sm bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-navy placeholder:text-grey-light transition-all outline-none leading-relaxed"
                    />
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
                      <span>Submitting Requirement...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-primary-light" />
                        <span>Submit Hiring Requirement</span>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Sidebar: What happens next (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-surface rounded-3xl p-6 sm:p-8 border border-border shadow-xs space-y-5">
              <h3 className="text-base sm:text-lg font-bold text-navy">
                What Happens Next?
              </h3>
              
              <ul className="space-y-4 text-xs sm:text-sm text-grey leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-lavender-soft text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <span className="font-semibold text-navy">Requirement Calibration:</span>
                    <p className="mt-0.5">We analyze your role specifications, experience parameters, and cultural prerequisites.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-lavender-soft text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <span className="font-semibold text-navy">Sourcing & Screening:</span>
                    <p className="mt-0.5">Our recruiters filter candidates against your criteria to ensure 100% role readiness.</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-lavender-soft text-primary font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <span className="font-semibold text-navy">Shortlist & Interview:</span>
                    <p className="mt-0.5">Curated candidate profiles are shared for review, and interview schedules are coordinated seamlessly.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Support Card */}
            <div className="bg-background-secondary rounded-3xl p-6 sm:p-8 border border-border space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal">
                Need Immediate Help?
              </span>
              <h4 className="text-base font-bold text-navy">
                Speak With a Recruiter Directly
              </h4>
              <p className="text-xs text-grey leading-relaxed">
                If you have an urgent or high-volume hiring mandate, reach out directly to our talent team.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover"
                >
                  <span>Go to Contact Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Employers;
