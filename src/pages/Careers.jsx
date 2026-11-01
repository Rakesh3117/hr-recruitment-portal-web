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
  Send,
  Upload,
  Search,
  DollarSign
} from 'lucide-react';
import careersData from '../data/careers.mocks.js';
import statsData from '../data/stats.mocks.js';

const Careers = () => {
  const positionsRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
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
    }, 600);
  };

  // Filter jobs by search term and department
  const filteredJobs = careersData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || job.department.includes(selectedDept);
    return matchesSearch && matchesDept;
  });

  const perks = [
    {
      title: 'Accelerated Career Paths',
      desc: 'Rapid progression based on performance metrics, with clear pathways to leadership roles.',
      icon: TrendingUp
    },
    {
      title: 'Uncapped Commissions',
      desc: 'Industry-leading incentive plans with fast disbursement schedules.',
      icon: DollarSign
    },
    {
      title: 'Health & Wellness',
      desc: 'Comprehensive medical protection and employee health assistance programs.',
      icon: Heart
    },
    {
      title: 'Continuous Upskilling',
      desc: 'Sponsorship for professional certifications, recruitment workshops, and ATS tools.',
      icon: Award
    }
  ];

  const hiringSteps = [
    { num: '01', title: 'Submit Profile', desc: 'Apply with your resume or connect with our talent team directly.' },
    { num: '02', title: 'Discovery Chat', desc: 'A quick 20-minute discussion covering your goals, expectations, and role fit.' },
    { num: '03', title: 'Skill Discussion', desc: 'Case evaluation or conversation with domain practice leaders.' },
    { num: '04', title: 'Welcome to Team', desc: 'Offer release, transparent documentation, and structured onboarding.' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden bg-white">
      
      {/* 1. DISTINCT CAREER HUB HERO BANNER WITH COLLABORATIVE WORKSPACE IMAGERY */}
      <section className="relative bg-gradient-to-br from-[#0D274A] via-[#091D38] to-[#0D274A] text-white pt-14 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        
        {/* Background Visual (Dedicated photo-1542744173-8e7e53415bb0) */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80"
            alt="Collaborative Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A] via-[#0D274A]/80 to-transparent" />
        </div>

        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            
            <div className="flex items-center justify-center gap-2">
              <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">Home</Link>
              <span className="text-xs text-slate-500">/</span>
              <span className="text-xs font-bold text-[#159FB4]">Careers</span>
              <span className="ml-2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 text-[#C59B4B] border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
                <span>We Are Expanding</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Build an Extraordinary Career at <span className="text-[#159FB4]">VM HRM Private Limited</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We are assembling a high-caliber team of talent specialists, IT recruiters, and business development professionals at our Bachupally, Hyderabad headquarters.
            </p>

            {/* In-Hero Search & Filter Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col sm:flex-row items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-2 w-full bg-white rounded-xl text-slate-800">
                  <Search className="w-4 h-4 text-slate-400 shrink-0" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search roles (e.g. Recruiter, Sales, Operations)..."
                    className="w-full text-xs font-medium focus:outline-hidden bg-transparent placeholder-slate-400"
                  />
                </div>
                <button
                  type="button"
                  onClick={scrollToPositions}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#159FB4] hover:bg-[#118496] transition-colors whitespace-nowrap shadow-md cursor-pointer"
                >
                  Find Roles
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. "LIFE AT VM HRM" BENTO CULTURE GRID WITH DEDICATED DISTINCT IMAGERY */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
            Why Join Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A] tracking-tight">
            A Culture of Energy, Recognition & Growth
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Work with purpose, achieve meaningful outcomes, and celebrate every milestone.
          </p>
        </div>

        {/* 3-Visual Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Bento Card 1: Modern Collaborative Hub (Dedicated photo-1516321318423-f06f85e504b3) */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group relative h-72">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Collaborative Hub"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/90 via-[#0D274A]/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#159FB4]">
                Workplace Experience
              </span>
              <h3 className="text-base font-bold">Collaborative Team Spaces</h3>
              <p className="text-xs text-slate-300">Modern tech tools, open communication, and high-trust leadership.</p>
            </div>
          </div>

          {/* Bento Card 2: Diversity & Team Energy (Dedicated photo-1529156069898-49953e39b3ac) */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group relative h-72">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
              alt="Team Unity"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/90 via-[#0D274A]/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C59B4B]">
                Team Spirit
              </span>
              <h3 className="text-base font-bold">Inclusion & Peer Camaraderie</h3>
              <p className="text-xs text-slate-300">Celebrating diverse backgrounds and collective achievements.</p>
            </div>
          </div>

          {/* Bento Card 3: Executive Mentorship (Dedicated photo-1573497019940-1c28c88b4f3e) */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md group relative h-72">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80"
              alt="Mentorship & Coaching"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/90 via-[#0D274A]/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#159FB4]">
                Growth & Learning
              </span>
              <h3 className="text-base font-bold">1-on-1 Leadership Coaching</h3>
              <p className="text-xs text-slate-300">Direct mentorship from experienced corporate HR directors.</p>
            </div>
          </div>

        </div>

        {/* 4 Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((perk, idx) => {
            const IconComp = perk.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#159FB4] transition-all space-y-2 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#159FB4] shadow-xs flex items-center justify-center">
                  <IconComp className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#0D274A]">{perk.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{perk.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. OPEN POSITIONS BOARD (SEARCHABLE & FILTERABLE) */}
      <section ref={positionsRef} className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4] block">
              Opportunities
            </span>
            <h2 className="text-2xl font-black text-[#0D274A] mt-0.5">
              Current Openings ({filteredJobs.length})
            </h2>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {['All', 'Talent Acquisition', 'Sourcing', 'Sales', 'Compliance'].map(dept => (
              <button
                key={dept}
                type="button"
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-[#0D274A] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#159FB4] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header row with avatar and tags */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={role.image}
                      alt={role.title}
                      className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                    />
                    <div>
                      <h3 className="text-base font-bold text-[#0D274A] group-hover:text-[#159FB4] transition-colors">
                        {role.title}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium">
                        {role.department}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#159FB4]/10 text-[#0D274A] shrink-0">
                    {role.type}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {role.description}
                </p>

                {/* Key specs */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#159FB4]" />
                    <span>{role.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C59B4B]" />
                    <span>{role.experience}</span>
                  </div>
                </div>

                {/* Requirements snippets */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Key Requirements</span>
                  {role.requirements.slice(0, 2).map((req, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#159FB4] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{req}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action row */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#C59B4B]">
                  Immediate Requirement
                </span>
                <button
                  type="button"
                  onClick={() => handleApplyClick(role)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#159FB4] hover:bg-[#118496] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
            <Briefcase className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-700">No positions found matching your criteria</h4>
            <p className="text-xs text-slate-500 mt-1">Try resetting your search or department filter.</p>
          </div>
        )}
      </section>

      {/* 4. "HOW WE HIRE" 4-STEP CANDIDATE JOURNEY */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#159FB4]">
              Transparency First
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D274A]">
              Our 4-Stage Interview Process
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear timelines, respectful feedback, and zero unnecessary hurdles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hiringSteps.map((step) => (
              <div 
                key={step.num}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2"
              >
                <span className="text-2xl font-black text-[#159FB4]">{step.num}</span>
                <h3 className="text-sm font-bold text-[#0D274A]">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GENERAL TALENT POOL INVITATION BANNER */}
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0D274A] via-[#091D38] to-[#0D274A] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C59B4B] block">
              Spontaneous Application
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Don’t See Your Exact Role?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We are constantly seeking brilliant minds in talent acquisition, technology staffing, and business development. Send your CV to our talent desk.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:VMHRMPL@GMAIL.COM?subject=Spontaneous%20Application%20-%20VM%20HRM"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#0D274A] bg-white hover:bg-slate-100 shadow-md transition-all"
            >
              <Send className="w-4 h-4 text-[#159FB4]" />
              <span>Email Your Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* APPLICATION MODAL / SLIDE-OVER */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={() => setSelectedRole(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#0D274A]">Application Submitted!</h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Thank you, <strong>{applicationData.name}</strong>. Our talent team for <em>{selectedRole.title}</em> will review your details and reach out within 48 hours.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0D274A] hover:bg-[#081B34] transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#159FB4] block">
                    Direct Application
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-[#0D274A]">
                    {selectedRole.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {company.legalName} • {selectedRole.location}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicationData.name}
                      onChange={(e) => setApplicationData(p => ({ ...p, name: e.target.value }))}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicationData.email}
                        onChange={(e) => setApplicationData(p => ({ ...p, email: e.target.value }))}
                        placeholder="you@email.com"
                        className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={applicationData.phone}
                        onChange={(e) => setApplicationData(p => ({ ...p, phone: e.target.value }))}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Total Experience (Years) *</label>
                    <input
                      type="text"
                      required
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData(p => ({ ...p, experience: e.target.value }))}
                      placeholder="e.g. 3.5 Years"
                      className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Upload Resume (PDF, DOCX) *</label>
                    <div className="border border-dashed border-slate-300 rounded-xl p-3 text-center bg-slate-50 hover:bg-slate-100 transition-colors relative cursor-pointer">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                        <Upload className="w-4 h-4 text-[#159FB4]" />
                        <span>{applicationData.resumeName || 'Click to select resume file'}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Cover Note / LinkedIn Profile (Optional)</label>
                    <textarea
                      rows={2}
                      value={applicationData.notes}
                      onChange={(e) => setApplicationData(p => ({ ...p, notes: e.target.value }))}
                      placeholder="Brief note on your background or LinkedIn URL..."
                      className="w-full px-3.5 py-2 rounded-xl text-xs border border-slate-200 focus:border-[#159FB4] focus:outline-hidden resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#159FB4] hover:bg-[#118496] shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Submitting Application...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Careers;
