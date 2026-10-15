import { useState, useRef } from 'react';
import { 
  Briefcase, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Upload, 
  Send, 
  X, 
  ArrowRight,
  TrendingUp,
  Heart,
  Award
} from 'lucide-react';
import careersData from '../data/careers.mocks.js';

const Careers = () => {
  const positionsRef = useRef(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    notes: '',
    resumeName: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const scrollToPositions = () => {
    positionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyClick = (role) => {
    setSelectedRole(role);
    setSubmitted(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setApplicationData(prev => ({ ...prev, resumeName: file.name }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      console.log('Internal Career Application Submitted:', {
        role: selectedRole?.title,
        applicant: applicationData,
        submittedAt: new Date().toISOString()
      });
    }, 500);
  };

  return (
    <div className="space-y-16 sm:space-y-20 lg:space-y-28 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-lavender-light via-surface to-background py-14 sm:py-20 lg:py-24 border-b border-border/60">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-surface text-primary border border-border shadow-xs">
              Work With Us
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-tight">
              Build Your <span className="text-primary">Career With Us</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-grey leading-relaxed font-normal">
              If you're passionate about recruitment, sales, HR or talent acquisition, we'd love to hear from you.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={scrollToPositions}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-fast cursor-pointer"
              >
                <Briefcase className="w-5 h-5 text-primary-light" />
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY BUILD YOUR CAREER HERE */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal">
            Our Culture
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
            Why Join HR ANAND?
          </h2>
          <p className="text-xs sm:text-sm text-grey leading-relaxed">
            We offer an energetic, merit-driven environment where your talent acquisition skills create direct business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface rounded-2xl p-6 border border-border shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-lavender-soft text-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy">High Growth & Incentives</h3>
            <p className="text-xs text-grey leading-relaxed">
              Transparent commission structures, reward recognition, and rapid promotional pathways based on delivered closures.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-border shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-subtle text-teal flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy">Continuous Learning</h3>
            <p className="text-xs text-grey leading-relaxed">
              Hands-on training across niche sector recruitment, modern ATS tooling, candidate mapping, and corporate client pitching.
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-6 border border-border shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-background-secondary text-accent flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-navy">Collaborative Team Spirit</h3>
            <p className="text-xs text-grey leading-relaxed">
              A supportive peer network with zero bureaucracy, open leadership communication, and flexible hybrid work models.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OPEN POSITIONS SECTION */}
      <section ref={positionsRef} className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-primary">
            Current Openings
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
            Explore Opportunities in Our Team
          </h2>
          <p className="text-xs sm:text-sm text-grey leading-relaxed">
            Find your next role in recruitment, talent acquisition, account management, or HR operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careersData.map((pos) => (
            <div
              key={pos.id}
              className="bg-surface rounded-3xl p-6 sm:p-8 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-normal flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-lavender-light text-primary">
                    {pos.department}
                  </span>
                  <span className="text-xs font-medium text-grey">
                    {pos.type}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-navy group-hover:text-primary transition-colors">
                    {pos.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-grey mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-teal" />
                      {pos.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-teal" />
                      Exp: {pos.experience}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-grey leading-relaxed">
                  {pos.description}
                </p>

                <div className="pt-2 border-t border-border/70 space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-navy">
                    Requirements:
                  </span>
                  <ul className="space-y-1 text-xs text-grey-dark">
                    {pos.requirements?.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="pt-6 mt-6 border-t border-border">
                <button
                  type="button"
                  onClick={() => handleApplyClick(pos)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-xs transition-colors cursor-pointer"
                >
                  <span>Apply for this Position</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Inline Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-modal bg-navy/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-surface rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-border shadow-modal relative animate-fadeIn">
            
            <button
              type="button"
              onClick={() => setSelectedRole(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-grey hover:bg-background-secondary cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-teal-subtle text-teal flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy">
                  Application Received!
                </h3>
                <p className="text-xs sm:text-sm text-grey leading-relaxed">
                  Thank you, <span className="font-semibold text-navy">{applicationData.name}</span>. Our internal HR hiring team has received your application for <span className="font-semibold text-navy">{selectedRole.title}</span>. We will review your profile shortly.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedRole(null)}
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-primary hover:bg-primary-hover"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    Internal Application
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-navy">
                    Apply: {selectedRole.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.name}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      className="w-full px-3 py-2 rounded-lg text-xs sm:text-sm border border-border focus:border-primary text-navy outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicationData.email}
                        onChange={(e) => setApplicationData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 rounded-lg text-xs sm:text-sm border border-border focus:border-primary text-navy outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicationData.phone}
                        onChange={(e) => setApplicationData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 9876543210"
                        className="w-full px-3 py-2 rounded-lg text-xs sm:text-sm border border-border focus:border-primary text-navy outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">
                      Years of Relevant Experience *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData(prev => ({ ...prev, experience: e.target.value }))}
                      placeholder="e.g. 2.5 Years in IT Recruitment"
                      className="w-full px-3 py-2 rounded-lg text-xs sm:text-sm border border-border focus:border-primary text-navy outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">
                      Upload Resume *
                    </label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleFileChange}
                      className="w-full text-xs text-grey file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-lavender-light file:text-primary hover:file:bg-lavender-soft"
                    />
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-sm transition-colors cursor-pointer disabled:opacity-70"
                  >
                    {submitting ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;
