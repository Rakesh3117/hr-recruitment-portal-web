import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Briefcase, 
  ChevronRight,
  ChevronLeft,
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

  // Hero background image carousel slides
  const heroSlides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
      badge: '30+ Years of Trusted Search',
      subBadge: 'MNCs & Global Leaders',
      headline: 'Connecting great companies with great talent.',
      subline: 'A quarter century of partnering with exceptional enterprise clients and candidates across sectors, functions and geographies. Empowering leadership pipelines and high-velocity engineering teams.',
      highlight: '1.1L+ Placements',
      statLabel: 'Executive & Specialist Mandates'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80',
      badge: 'Engineering & Technology Leadership',
      subBadge: 'Fortune 500 & Unicorns',
      headline: 'Vetted engineering talent built for rapid innovation.',
      subline: 'From AI/ML research leads to cloud architects, our deep technical practice panels ensure zero hiring compromise with pre-authenticated candidate credentials.',
      highlight: '100% Genuine',
      statLabel: 'Pre-Checked Verified Pipeline'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80',
      badge: 'Enterprise RPO & Captive Build-Outs',
      subBadge: 'Global Capability Centers',
      headline: 'Turnkey staffing squads for fast-growing GCCs.',
      subline: 'Scalable talent infrastructure fulfilling 10 to 500+ specialized hires per quarter across Pan-India metro centers, Singapore, Qatar, and Dubai.',
      highlight: '5-7 Days',
      statLabel: 'Average Shortlist Delivery'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1920&q=80',
      badge: 'Interview-as-a-Service & BGV Audit',
      subBadge: 'Zero Misrepresentation',
      headline: 'Objective technical panels and rigorous verification.',
      subline: 'Every candidate vetted through multi-factor identity authentication, registrar confirmation, and comprehensive 90-day replacement protection.',
      highlight: '90 Days',
      statLabel: 'Replacement Guarantee'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      
      {/* 1. HERO SECTION WITH FULL-WIDTH BACKGROUND CAROUSEL */}
      <section className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center border-b border-navy/40">
        
        {/* Full Image Background Carousel with Cross-Fade & Ken-Burns Zoom */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`w-full h-full object-cover transition-transform duration-7000 ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
          </div>
        ))}

        {/* Ambient Dark Gradient Overlays for Superb Text Legibility & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70 z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40 z-1" />

        {/* Hero Data / Content Layer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left text-white">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-teal-light shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-teal animate-pulse" />
                <span>{heroSlides[currentSlide].badge}</span>
                <span className="text-white/40">•</span>
                <span className="text-white/80">{heroSlides[currentSlide].subBadge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Connecting great companies with{' '}
                <span className="bg-gradient-to-r from-teal-light via-teal to-accent-light bg-clip-text text-transparent">
                  great talent.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-lavender-soft/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {heroSlides[currentSlide].subline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/employers"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-teal hover:bg-teal-hover shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Submit a Requirement</span>
                </Link>

                <Link
                  to="/jobs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Find a Job</span>
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-xs border border-white/20 transition-all duration-200"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4 text-white/70" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-lavender-soft font-medium border-t border-white/15">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  <span>100% Verified Profiles</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-success" />
                  <span>90-Day Replacement Guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal" />
                  <span>5–7 Day Shortlist SLA</span>
                </div>
              </div>

            </div>

            {/* Right Hero Visual / Interactive Glassmorphism Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Feature Card with Frosted Glass styling */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-2xl border border-white/40 relative z-10 space-y-5 overflow-hidden">
                  
                  {/* Current Active Slide Preview Thumbnail */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden -mt-1 shadow-sm group">
                    <img 
                      src={heroSlides[currentSlide].image} 
                      alt={heroSlides[currentSlide].headline} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-navy shadow-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      <span>Slide {currentSlide + 1} of {heroSlides.length}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div>
                        <div className="text-xs font-bold">{heroSlides[currentSlide].headline}</div>
                        <div className="text-[10px] text-teal-light">{heroSlides[currentSlide].statLabel}</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-teal text-white shadow-xs">
                        {heroSlides[currentSlide].highlight}
                      </span>
                    </div>
                  </div>

                  {/* Visual Process Strip */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-navy uppercase tracking-wider flex items-center justify-between">
                      <span>Fulfillment Calibration</span>
                      <span className="text-teal font-semibold text-[11px]">SLA Committed</span>
                    </div>
                    
                    <div className="p-3 rounded-xl bg-lavender-light border border-lavender-soft flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                        <div>
                          <div className="text-xs font-bold text-navy">Role Calibration & Intake</div>
                          <div className="text-[11px] text-grey">Within 24–48 hours of mandate</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-primary">Stage 1</span>
                    </div>

                    <div className="p-3 rounded-xl bg-teal-subtle border border-teal-light flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal" />
                        <div>
                          <div className="text-xs font-bold text-navy">Pre-Authenticated Shortlist</div>
                          <div className="text-[11px] text-grey">SME evaluated & BGV checked</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-teal">Stage 2</span>
                    </div>

                    <div className="p-3 rounded-xl bg-background border border-border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                        <div>
                          <div className="text-xs font-bold text-navy">Offer & 90-Day Guarantee</div>
                          <div className="text-[11px] text-grey">Risk-free placement assurance</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-bold text-accent">Stage 3</span>
                    </div>
                  </div>

                  {/* Dual quick jump */}
                  <div className="pt-1 grid grid-cols-2 gap-3 text-center">
                    <Link
                      to="/employers"
                      className="p-2.5 rounded-xl bg-teal/10 hover:bg-teal/20 text-teal font-bold text-xs transition-colors"
                    >
                      Hire Leadership →
                    </Link>
                    <Link
                      to="/jobs"
                      className="p-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs transition-colors"
                    >
                      Join Network →
                    </Link>
                  </div>

                </div>

                {/* Floating Metric 1 */}
                <div className="absolute -bottom-5 -left-5 bg-navy text-white p-3.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3 z-20 border border-white/10">
                  <div className="p-2 rounded-xl bg-teal text-white">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-white">18 Days</div>
                    <div className="text-[10px] text-grey-light">Average Time-to-Shortlist</div>
                  </div>
                </div>

                {/* Floating Metric 2 */}
                <div className="absolute -top-5 -right-5 bg-white p-3 rounded-2xl shadow-lg border border-border hidden sm:flex items-center gap-2.5 z-20">
                  <Award className="w-4 h-4 text-accent" />
                  <div className="text-xs">
                    <span className="font-bold text-navy block">1.1L+ Placements</span>
                    <span className="text-[10px] text-grey">Across 25+ Verticals</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Carousel Navigation Arrows & Indicators */}
          <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-4">
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentSlide === idx 
                      ? 'w-8 h-2.5 bg-teal' 
                      : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
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
        <div className="bg-gradient-to-r from-success/10 via-white to-teal-subtle rounded-3xl p-8 sm:p-10 border border-success/30 shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-success/15 text-success">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span>Our Promise</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Every candidate. 100% verified. No exceptions.
              </h2>
              <p className="text-xs sm:text-sm text-grey leading-relaxed">
                We don't just source talent — we confirm it. Identity, education, employment history, references and skills are checked before a single profile reaches your inbox.
              </p>

              {/* 4-up icon row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-border/60 shadow-2xs">
                  <UserCheck className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-xs font-bold text-navy">Identity Verified</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-border/60 shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-xs font-bold text-navy">Education Verified</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-border/60 shadow-2xs">
                  <Briefcase className="w-4 h-4 text-teal shrink-0" />
                  <span className="text-xs font-bold text-navy">Employment Verified</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-border/60 shadow-2xs">
                  <PhoneCall className="w-4 h-4 text-success shrink-0" />
                  <span className="text-xs font-bold text-navy">References Checked</span>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between flex-wrap gap-4 border-t border-border/40">
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

            {/* Right side verification visual */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="relative h-60 w-full rounded-2xl overflow-hidden shadow-md border border-white">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" 
                  alt="Candidate Credential Verification" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between">
                  <span>Audit Sign-off Protocol</span>
                  <span className="bg-success text-white px-2 py-0.5 rounded text-[10px] font-bold">
                    Cleared
                  </span>
                </div>
              </div>
            </div>

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
                <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4 shadow-xs">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs text-primary flex items-center justify-center shadow-xs">
                    <Briefcase className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-teal mt-0.5 mb-2.5">
                  {service.tagline}
                </p>
                <p className="text-xs text-grey leading-relaxed line-clamp-2">
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
                className="bg-white rounded-2xl p-3.5 sm:p-4 border border-border hover:border-primary/40 shadow-xs hover:shadow-card transition-all duration-200 group block overflow-hidden"
              >
                <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3">
                  <img 
                    src={domain.image} 
                    alt={domain.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                    {domain.placementsCount} Placed
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-navy group-hover:text-primary transition-colors line-clamp-1">
                  {domain.name}
                </h3>
                <div className="mt-2 flex items-center justify-between text-[11px] text-grey pt-2 border-t border-border/60">
                  <span className="text-teal font-semibold">Verified pool</span>
                  <span className="text-primary font-semibold group-hover:translate-x-0.5 transition-transform">
                    Explore →
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

      {/* ENTERPRISE TALENT & SEARCH IN ACTION — VISUAL GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              HR ANAND In Action
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-1">
              Enterprise Talent & Global Delivery Hubs
            </h2>
            <p className="text-xs sm:text-sm text-grey mt-1 max-w-xl">
              From mission-critical executive hires to high-scale captive engineering incubation across the globe.
            </p>
          </div>
          <Link
            to="/company"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal hover:text-teal-hover group"
          >
            <span>Learn About Our Infrastructure</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group relative rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all">
            <div className="h-56 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
                alt="Executive Search & Boardroom Placements"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold text-navy">
                C-Suite & Leadership
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-bold text-white">Executive Search</h3>
                <p className="text-[11px] text-lavender-soft/90 mt-0.5">Discreet, retained search for enterprise CXO leaders.</p>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all">
            <div className="h-56 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Global Capability Center Build-Outs"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold text-teal">
                GCC Incubation
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-bold text-white">Captive Centers</h3>
                <p className="text-[11px] text-lavender-soft/90 mt-0.5">Scaling 10 to 500+ specialized engineering squads.</p>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all">
            <div className="h-56 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Technical Assessment & SME Interview Panels"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold text-primary">
                Interview-as-a-Service
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-bold text-white">Technical SME Panels</h3>
                <p className="text-[11px] text-lavender-soft/90 mt-0.5">Live code evaluations by practicing architects.</p>
              </div>
            </div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-card-hover transition-all">
            <div className="h-56 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Diversity & Inclusive Hiring"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[10px] font-bold text-accent">
                D&I Mandates
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-bold text-white">Inclusive Hiring</h3>
                <p className="text-[11px] text-lavender-soft/90 mt-0.5">Empowering women in STEM and equitable leadership.</p>
              </div>
            </div>
          </div>
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

              <div className="pt-4 border-t border-border/60 flex items-center gap-3">
                {item.authorAvatar && (
                  <img 
                    src={item.authorAvatar} 
                    alt={item.authorName} 
                    className="w-10 h-10 rounded-full object-cover border border-primary/20 shrink-0"
                    loading="lazy" 
                  />
                )}
                <div>
                  <div className="font-bold text-xs text-navy">{item.authorName}</div>
                  <div className="text-[11px] text-grey">{item.authorTitle}</div>
                  <div className="text-[11px] font-semibold text-teal mt-0.5">{item.clientCompany}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. WE'RE HERE FOR YOU — DUAL CTA BANNER (Spec Section 1) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-3xl overflow-hidden shadow-card">
          
          {/* Left (teal): For Employers */}
          <div className="relative bg-gradient-to-br from-teal to-[#083344] p-8 sm:p-10 text-white flex flex-col justify-between space-y-6 overflow-hidden rounded-3xl">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
              alt="Enterprise Hiring Hub" 
              className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay"
              loading="lazy"
            />
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
          <div className="relative bg-gradient-to-br from-primary via-navy-muted to-navy p-8 sm:p-10 text-white flex flex-col justify-between space-y-6 overflow-hidden rounded-3xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Candidate Career Network" 
              className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay"
              loading="lazy"
            />
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
