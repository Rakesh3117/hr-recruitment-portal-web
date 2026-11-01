import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  X, 
  ArrowRight, 
  TrendingUp, 
  Heart, 
  Award,
  Sparkles,
  Users,
  Send,
  Upload
} from 'lucide-react';
import careersData from '../data/careers.mocks.js';
import statsData from '../data/stats.mocks.js';

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
  const { company } = statsData;

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
    }, 500);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 overflow-hidden">
      
      {/* 1. DISTINCTIVE HERO HEADER WITH TALENT & CULTURE IMAGERY */}
      <section className="relative bg-[#0D274A] text-white py-16 sm:py-24 overflow-hidden">
        
        {/* Background Image with Dark Navy Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
            alt="Workplace Culture"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D274A] via-[#0D274A]/95 to-[#0D274A]/80" />
        </div>

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-xs text-slate-400">
                  <Link to="/" className="hover:text-white transition-colors">Home</Link> / <span className="text-[#159FB4]">Careers</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-[#C59B4B] border border-white/15">
                  <Sparkles className="w-3 h-3 text-[#C59B4B]" />
                  <span>We are Hiring</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Build Your Future at <span className="text-[#159FB4]">VM HRM Private Limited</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
                Join our team of recruiters, talent consultants, and workforce specialists. We offer high-growth career pathways, transparent commissions, and a supportive culture.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  type="button"
                  onClick={scrollToPositions}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#159FB4] hover:bg-[#118496] shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>View Open Positions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
                >
                  <span>Connect With HR Desk</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual with Animated Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Life at VM HRM"
                    className="w-full h-72 sm:h-84 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#159FB4] block">Hyderabad HQ</span>
                      <strong className="text-xs font-black text-[#0D274A]">{company.legalName}</strong>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#159FB4]/15 text-[#0E7482]">
                      Recruit. Train. Place. Grow.
                    </span>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-3 -left-3 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 animate-float flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EBF7F9] text-[#159FB4] flex items-center justify-center font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#0D274A] block">Fast-Growing Team</span>
                    <span className="text-[10px] text-slate-500 font-medium">Recruitment & Staffing</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. LIFE AT VM HRM — CULTURE & WORKPLACE PHOTO GALLERY */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
            Life At VM HRM
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A]">
            A Workplace Built on Collaboration & Growth
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Experience an environment where your expertise is celebrated and rewarded.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs group bg-white">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                alt="Continuous Learning"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-sm font-bold text-white">
                Skill Upskilling & Mentorship
              </span>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Regular training workshops on niche technical sourcing, modern ATS tooling, and client relationship management.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs group bg-white">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Client Partnerships"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-sm font-bold text-white">
                Enterprise Client Engagement
              </span>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct collaboration with top corporate leaders, founders, and hiring directors across pan-India mandates.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs group bg-white">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                alt="Modern Workplace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-sm font-bold text-white">
                Modern Work Environment
              </span>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                A transparent, merit-driven workplace with open communication, zero bureaucracy, and performance recognition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CULTURE & PERKS */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
              Why Join Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A]">
              Rewarding Your Ambition
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EBF7F9] text-[#159FB4] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0D274A]">High Growth & Incentives</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent commission structures, reward recognition, and rapid promotional pathways based on delivered closures.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FDF9F0] text-[#C59B4B] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0D274A]">Continuous Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hands-on training across niche sector recruitment, modern ATS tooling, candidate mapping, and corporate client pitching.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0F8FA] text-[#0D274A] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#159FB4]" />
              </div>
              <h3 className="text-base font-bold text-[#0D274A]">Collaborative Team Spirit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A supportive peer network with open leadership communication, team celebrations, and flexible working arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CURRENT OPENINGS WITH RELEVANT ROLE IMAGERY */}
      <section ref={positionsRef} className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
            Current Openings
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A]">
            Explore Opportunities in Our Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Find your next role in recruitment, talent acquisition, account management, or HR operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {careersData.map((pos) => (
            <div
              key={pos.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#159FB4] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Role Photo Header */}
              {pos.image && (
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={pos.image}
                    alt={pos.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/80 via-[#0D274A]/30 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#0D274A]">
                    {pos.department}
                  </span>
                  <span className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded bg-black/40 text-white backdrop-blur-xs">
                    {pos.type}
                  </span>
                  <h3 className="absolute bottom-3 left-4 text-base sm:text-lg font-bold text-white">
                    {pos.title}
                  </h3>
                </div>
              )}

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#159FB4]" />
                      {pos.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#159FB4]" />
                      Exp: {pos.experience}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pos.description}
                  </p>

                  {pos.requirements && (
                    <div className="pt-2 border-t border-slate-100 space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D274A] block">
                        Requirements:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {pos.requirements.slice(0, 3).map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#159FB4] shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleApplyClick(pos)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0D274A] hover:bg-[#081B34] shadow-xs transition-colors cursor-pointer"
                  >
                    <span>Apply for this Position</span>
                    <ArrowRight className="w-4 h-4 text-[#159FB4]" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 5. INLINE APPLICATION MODAL */}
      {selectedRole && (
        <div className="fixed inset-0 z-modal bg-[#0D274A]/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-2xl relative animate-fadeIn">
            
            <button
              type="button"
              onClick={() => setSelectedRole(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#F0F8FA] text-[#159FB4] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0D274A]">Application Submitted!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-[#0D274A]">{applicationData.name}</span>. We have received your application for <strong className="text-[#159FB4]">{selectedRole.title}</strong>. Our HR team will review and connect with you.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0D274A]"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#159FB4] tracking-wider block">
                    Direct Application
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0D274A] mt-0.5">
                    Apply: {selectedRole.title}
                  </h3>
                  <p className="text-xs text-slate-500">{selectedRole.location} • {selectedRole.type}</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D274A] mb-1">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={applicationData.name}
                    onChange={(e) => setApplicationData({ ...applicationData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0D274A] mb-1">Email *</label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({ ...applicationData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D274A] mb-1">Phone *</label>
                    <input
                      type="tel"
                      placeholder="Mobile number"
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({ ...applicationData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D274A] mb-1">Experience Level *</label>
                  <input
                    type="text"
                    placeholder="e.g. 3 years in recruitment"
                    value={applicationData.experience}
                    onChange={(e) => setApplicationData({ ...applicationData, experience: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#159FB4] focus:outline-none bg-slate-50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0D274A] mb-1">Resume / CV</label>
                  <label className="border border-dashed border-slate-300 rounded-lg p-3 text-center flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors">
                    <Upload className="w-5 h-5 text-[#159FB4] mb-1" />
                    <span className="text-xs font-semibold text-[#0D274A]">
                      {applicationData.resumeName || 'Click to select PDF or Word document'}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[#0D274A] hover:bg-[#081B34] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Submit Application</span>
                  <Send className="w-4 h-4 text-[#159FB4]" />
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;
