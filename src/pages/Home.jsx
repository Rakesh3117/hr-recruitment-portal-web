import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users, 
  Briefcase, 
  ChevronRight,
  TrendingUp,
  Award,
  ShieldCheck,
  UserCheck,
  GraduationCap,
  PhoneCall,
  Quote
} from 'lucide-react';
import StatStrip from '../components/common/StatStrip';
import JobSearchWidget from '../components/common/JobSearchWidget';
import JobCard from '../components/common/JobCard';
import ApplyModal from '../components/common/ApplyModal';
import VerifiedBadge from '../components/common/VerifiedBadge';
import jobsData from '../data/jobs.json';
import servicesData from '../data/services.json';
import domainsData from '../data/domains.json';
import testimonialsData from '../data/testimonials.json';

const Home = () => {
  const [selectedJobForApply, setSelectedJobForApply] = useState(null);

  // Show 6 recently added jobs
  const recentJobs = jobsData.slice(0, 6);

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-lavender-light via-lavender-soft/40 to-background pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-border/40">
        
        {/* Ambient background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-60">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-xs border border-lavender-soft text-primary text-xs font-semibold">
                <span className="flex h-2 w-2 rounded-full bg-teal" />
                <span>30+ Years of Trusted Partnership</span>
                <span className="text-grey-light">•</span>
                <span className="text-grey-dark">MNCs & Global Leaders</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy leading-[1.15]">
                Connecting great companies with{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-teal bg-clip-text text-transparent">
                  great talent.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-grey leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A quarter century of partnering with exceptional clients and candidates across sectors, functions and geographies. Empowering leadership pipelines and high-velocity engineering teams.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/company"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-navy bg-white hover:bg-lavender-light border border-border/80 shadow-xs hover:shadow-sm transition-all duration-200"
                >
                  <span>Know More About Us</span>
                  <ChevronRight className="w-4 h-4 text-grey" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-grey font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  <span>Executive & Specialist Search</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  <span>Interview-as-a-Service Panels</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  <span>GIC & GCC Incubation</span>
                </div>
              </div>

            </div>

            {/* Right Hero Visual / Interactive Card Display */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Feature Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card-hover border border-lavender-soft relative z-10 space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-border/80">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-md">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-navy">Leadership Search Mandate</div>
                        <div className="text-xs text-teal font-medium">Live Executive Pipeline</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-success/10 text-success">
                      96% Retained
                    </span>
                  </div>

                  {/* Visual Process Strip */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-grey uppercase tracking-wider">
                      Fulfillment Calibration
                    </div>
                    
                    <div className="p-3.5 rounded-xl bg-lavender-light border border-lavender-soft flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                        <div>
                          <div className="text-xs font-bold text-navy">Role Calibration & Mapping</div>
                          <div className="text-[11px] text-grey">Within 48 hours of mandate intake</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-primary">Stage 1</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-teal-subtle border border-teal-light flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal" />
                        <div>
                          <div className="text-xs font-bold text-navy">Vetted Technical Shortlist</div>
                          <div className="text-[11px] text-grey">SME evaluated candidates</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-teal">Stage 2</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-background-secondary border border-border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                        <div>
                          <div className="text-xs font-bold text-navy">Offer & 90-Day Retention</div>
                          <div className="text-[11px] text-grey">Seamless transition support</div>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-accent">Stage 3</span>
                    </div>
                  </div>

                  {/* Dual quick jump */}
                  <div className="pt-2 grid grid-cols-2 gap-3 text-center">
                    <Link
                      to="/employers"
                      className="p-2.5 rounded-xl bg-teal/10 hover:bg-teal/20 text-teal font-semibold text-xs transition-colors"
                    >
                      Hire Leadership →
                    </Link>
                    <Link
                      to="/jobs"
                      className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-semibold text-xs transition-colors"
                    >
                      Join Network →
                    </Link>
                  </div>

                </div>

                {/* Floating Metric 1 */}
                <div className="absolute -bottom-6 -left-6 bg-navy text-white p-4 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 z-20 border border-white/10">
                  <div className="p-2 rounded-xl bg-teal text-white">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-lg font-extrabold text-white">18 Days</div>
                    <div className="text-[11px] text-grey-light">Average Time-to-Shortlist</div>
                  </div>
                </div>

                {/* Floating Metric 2 */}
                <div className="absolute -top-6 -right-6 bg-white p-3.5 rounded-2xl shadow-lg border border-border hidden sm:flex items-center gap-3 z-20">
                  <Award className="w-5 h-5 text-accent" />
                  <div className="text-xs">
                    <span className="font-bold text-navy">1.1L+ Placements</span>
                    <span className="block text-[10px] text-grey">Across 25+ Verticals</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </section>

      {/* 2. JOB SEARCH WIDGET (Candidate Entry Point) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <JobSearchWidget />
      </section>

      {/* NEW: OUR PROMISE — TRUST BANNER (Spec Section 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="bg-gradient-to-r from-success/10 via-white to-teal-subtle rounded-3xl p-8 sm:p-10 border border-success/30 shadow-card">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-success/15 text-success mb-3">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>Our Promise</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Every candidate. 100% verified. No exceptions.
            </h2>
            <p className="text-xs sm:text-sm text-grey mt-2 leading-relaxed">
              We don't just source talent — we confirm it. Identity, education, employment history, references and skills are checked before a single profile reaches your inbox.
            </p>
          </div>

          {/* 4-up icon row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border/60">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-border/60 shadow-2xs">
              <UserCheck className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs font-bold text-navy">Identity Verified</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-border/60 shadow-2xs">
              <GraduationCap className="w-5 h-5 text-accent shrink-0" />
              <span className="text-xs font-bold text-navy">Education Verified</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-border/60 shadow-2xs">
              <Briefcase className="w-5 h-5 text-teal shrink-0" />
              <span className="text-xs font-bold text-navy">Employment Verified</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-border/60 shadow-2xs">
              <PhoneCall className="w-5 h-5 text-success shrink-0" />
              <span className="text-xs font-bold text-navy">References Checked</span>
            </div>
          </div>

          <div className="mt-6 pt-3 flex items-center justify-between flex-wrap gap-4 border-t border-border/40">
            <div className="flex items-center gap-2">
              <VerifiedBadge />
              <span className="text-xs text-grey">Standard on every shortlist delivered to your hiring desk</span>
            </div>
            <Link
              to="/verification"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-success hover:underline"
            >
              <span>See Our Verification Process</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. OUR FOOTPRINT (Trust stats — 4-up stat strip) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Footprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
            Proven Numbers That Speak For Themselves
          </h2>
          <p className="text-xs sm:text-sm text-grey mt-2">
            Built on lasting integrity, deep domain specialists, and enduring client relationships.
          </p>
        </div>
        <StatStrip />
      </section>

      {/* 4. OUR BESPOKE SERVICES (Preview — links to /services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal">
              Comprehensive Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Our Bespoke Recruitment Services
            </h2>
            <p className="text-xs sm:text-sm text-grey mt-1 max-w-xl">
              From targeted executive search to Candidate Verification Services, RPO and GIC incubation.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover group"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Preview Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-lavender-light group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center transition-colors mb-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-teal mt-0.5 mb-2.5">
                  {service.tagline}
                </p>
                <p className="text-xs text-grey leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border/60 flex items-center justify-between">
                <Link
                  to={`/services#${service.id}`}
                  className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/employers"
                  className="text-xs font-semibold text-teal hover:text-teal-hover"
                >
                  Talk to Us →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-primary bg-lavender-soft hover:bg-lavender-light border border-lavender-soft transition-colors"
          >
            <span>Explore Full Services Spectrum & Deliverables</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 5. OUR FOCUS DOMAINS (Preview — links to /domain-specialities) */}
      <section className="bg-lavender-light/60 py-16 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Vertical Depth
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
                Our Focus Domains
              </h2>
              <p className="text-xs sm:text-sm text-grey mt-1 max-w-xl">
                Specialized practice heads with native industry context across 9 critical economic sectors.
              </p>
            </div>

            <Link
              to="/domain-specialities"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover group"
            >
              <span>View All 25+ Verticals</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {domainsData.slice(0, 8).map((domain) => (
              <Link
                key={domain.id}
                to={`/jobs?industry=${encodeURIComponent(domain.industryQuery)}`}
                className="bg-white rounded-2xl p-5 border border-border hover:border-primary/40 shadow-xs hover:shadow-card transition-all duration-200 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-lavender-soft text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center transition-colors mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-navy group-hover:text-primary transition-colors line-clamp-2">
                  {domain.name}
                </h3>
                <div className="mt-2 flex items-center justify-between text-[11px] text-grey pt-2 border-t border-border/60">
                  <span>{domain.placementsCount} placed</span>
                  <span className="text-primary font-semibold group-hover:translate-x-0.5 transition-transform">
                    Jobs →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 6. RECENTLY ADDED JOBS (Preview — pulls from /jobs, show 6-8) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Live Mandates
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Recently Added Opportunities
            </h2>
            <p className="text-xs sm:text-sm text-grey mt-1 max-w-xl">
              Hand-picked executive and specialist roles currently being fulfilled for top MNC clients.
            </p>
          </div>

          <Link
            to="/jobs"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover group"
          >
            <span>Show All Jobs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onApply={(j) => setSelectedJobForApply(j)}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all"
          >
            <span>Show All 1,797+ Jobs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* NEW: WHAT OUR CLIENTS SAY (Preview — Spec Section 1, pulls from /success-stories) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal">
              Client Testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              What Our Clients Say
            </h2>
            <p className="text-xs sm:text-sm text-grey mt-1 max-w-xl">
              Hear directly from HR leaders and engineering VPs who rely on our pre-verified candidate pipeline.
            </p>
          </div>

          <Link
            to="/success-stories"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-hover group"
          >
            <span>Read More Success Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-7 h-7 text-accent/50 mb-3" />
                <p className="text-xs sm:text-sm text-navy font-medium italic leading-relaxed mb-4">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-border/60">
                <div className="font-bold text-xs text-navy">{item.authorName}</div>
                <div className="text-[11px] text-grey">{item.authorTitle}</div>
                <div className="text-[11px] font-semibold text-teal mt-0.5">{item.clientCompany}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WE'RE HERE FOR YOU — DUAL CTA BANNER (Spec Section 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-3xl overflow-hidden shadow-card">
          
          {/* Left (teal): For Employers */}
          <div className="bg-gradient-to-br from-teal to-[#083344] p-8 sm:p-10 text-white flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-teal-light">
                FOR EMPLOYERS & ENTERPRISES
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Talk to us about your hiring needs.
              </h3>
              <p className="text-sm text-teal-light/80 leading-relaxed max-w-md">
                Whether you need a confidential CXO search, niche engineering squads, or an offshore GIC setup — our vertical leads deliver shortlists within 48–72 hours.
              </p>
            </div>

            <div className="pt-2 relative z-10 flex flex-wrap gap-3">
              <Link
                to="/employers"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-teal bg-white hover:bg-teal-subtle shadow-md hover:shadow-lg transition-all"
              >
                <span>Submit a Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/partner-with-us"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                <span>Enterprise Partnering</span>
              </Link>
            </div>

            {/* Background subtle decoration */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
          </div>

          {/* Right (indigo): For Candidates */}
          <div className="bg-gradient-to-br from-primary via-navy-muted to-navy p-8 sm:p-10 text-white flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-3 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-lavender-soft">
                FOR CANDIDATES & PROFESSIONALS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Talk to our local executive close to you.
              </h3>
              <p className="text-sm text-lavender-light/80 leading-relaxed max-w-md">
                Connect with an executive career advisor in your city. Discreet representation, salary benchmarking, and zero black-box ghosting.
              </p>
            </div>

            <div className="pt-2 relative z-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-primary bg-white hover:bg-lavender-light shadow-md hover:shadow-lg transition-all"
              >
                <span>Contact Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Background subtle decoration */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
          </div>

        </div>
      </section>

      {/* Candidate Apply Modal */}
      <ApplyModal
        job={selectedJobForApply}
        isOpen={!!selectedJobForApply}
        onClose={() => setSelectedJobForApply(null)}
      />

    </div>
  );
};

export default Home;
