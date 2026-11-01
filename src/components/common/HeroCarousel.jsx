import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Phone,
  Briefcase,
  Users
} from 'lucide-react';
import statsData from '../../data/stats.mocks.js';

const slides = [
  {
    id: 1,
    tagline: 'Recruit. Train. Place. Grow.',
    headlinePart1: 'Find Your Next Opportunity &',
    highlight: 'Apply for Jobs',
    headlinePart2: 'with Top Companies',
    description: 'VM Human Resource Management Private Limited connects ambitious professionals with leading enterprises. Explore verified career openings, receive industry-aligned training, and get placed fast.',
    primaryBtn: { text: 'Apply for Job', link: '/careers' },
    secondaryBtn: { text: 'Hire Talent', link: '/contact' },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85',
    floatingBadge1: { number: '2000+', text: 'Deployed Candidates', icon: TrendingUp },
    floatingBadge2: { number: '100%', text: 'Pre-Screened Profiles', icon: ShieldCheck }
  },
  {
    id: 2,
    tagline: 'Connecting Talent, Elevating Your Workforce',
    headlinePart1: 'Connecting Top-Tier Talent with',
    highlight: 'Leading',
    headlinePart2: 'Enterprises',
    description: 'From executive leadership hiring to flexible contract staffing and role readiness, we deliver verified, high-performance talent tailored to your needs.',
    primaryBtn: { text: 'Hire Talent', link: '/contact' },
    secondaryBtn: { text: 'Apply for Job', link: '/careers' },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1800&q=85',
    floatingBadge1: { number: '100+', text: 'Happy Clients', icon: Award },
    floatingBadge2: { number: '24-48h', text: 'Fast Profile Turnaround', icon: Users }
  },
  {
    id: 3,
    tagline: 'Skill Development & Placement Excellence',
    headlinePart1: 'Industry-Aligned Corporate',
    highlight: 'Training',
    headlinePart2: '& Job Readiness',
    description: 'Bridging the competency gap with hands-on technical workshops, role readiness, and end-to-end placement support for modern organizations.',
    primaryBtn: { text: 'Apply for Job', link: '/careers' },
    secondaryBtn: { text: 'Talk to a Recruiter', link: '/contact' },
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1800&q=85',
    floatingBadge1: { number: '10+ Years', text: 'Industry Experience', icon: Briefcase },
    floatingBadge2: { number: 'Telangana', text: 'Govt. Registered (CIN)', icon: ShieldCheck }
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { contactInfo } = statsData;
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5500);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [currentSlide, isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];
  const Icon1 = active.floatingBadge1.icon;
  const Icon2 = active.floatingBadge2.icon;

  return (
    <section 
      className="relative w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[680px] flex flex-col justify-between overflow-hidden bg-[#0D274A]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Full-Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          key={active.id}
          src={active.image}
          alt={active.highlight}
          className="w-full h-full object-cover object-center animate-fadeIn transition-transform duration-1000 scale-105"
        />
        {/* Layered Cinematic Gradient Scrims for maximum matter legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D274A] via-[#0D274A]/90 to-[#0D274A]/40 lg:to-[#0D274A]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A] via-transparent to-[#0D274A]/60" />
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#159FB4]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* 2. Matter written upon the full-width image */}
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 w-full my-auto">
        <div key={active.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fadeIn">
          
          {/* Main Text Content */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-xs font-bold text-[#159FB4] transition-all hover:scale-105">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
              <span className="text-white tracking-wide">{active.tagline}</span>
            </div>

            {/* Dynamic Animated Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              {active.headlinePart1}{' '}
              <span className="text-[#159FB4] relative inline-block">
                {active.highlight}
                <span className="absolute left-0 bottom-1 w-full h-2 bg-[#159FB4]/30 rounded-full" />
              </span>{' '}
              {active.headlinePart2}
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-xs">
              {active.description}
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                to={active.primaryBtn.link}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#159FB4] hover:bg-[#118496] transition-all shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-0.5 group"
              >
                <Briefcase className="w-4 h-4 text-white" />
                <span>{active.primaryBtn.text}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={active.secondaryBtn.link}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 transition-all shadow-md hover:-translate-y-0.5"
              >
                {active.secondaryBtn.link === '/careers' ? (
                  <Briefcase className="w-4 h-4 text-[#159FB4]" />
                ) : (
                  <Phone className="w-4 h-4 text-[#C59B4B]" />
                )}
                <span>{active.secondaryBtn.text}</span>
              </Link>
            </div>

            {/* Micro Statutory & Location Strip */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#159FB4]" />
                <span>Bachupally, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#C59B4B]" />
                <span className="font-mono">CIN: {contactInfo.cin}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Stat Cards Overlaid Directly Upon the Image */}
          <div className="lg:col-span-4 hidden lg:flex flex-col gap-4 justify-center items-end">
            <div className="w-full max-w-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl text-white flex items-center gap-4 hover:bg-white/15 transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-[#159FB4]/25 border border-[#159FB4]/40 text-[#159FB4] flex items-center justify-center font-bold shrink-0">
                <Icon1 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black text-white block">{active.floatingBadge1.number}</span>
                <span className="text-xs text-slate-200 font-medium">{active.floatingBadge1.text}</span>
              </div>
            </div>

            <div className="w-full max-w-xs bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-xl text-white flex items-center gap-4 hover:bg-white/15 transition-all hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-[#C59B4B]/25 border border-[#C59B4B]/40 text-[#C59B4B] flex items-center justify-center font-bold shrink-0">
                <Icon2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black text-white block">{active.floatingBadge2.number}</span>
                <span className="text-xs text-slate-200 font-medium">{active.floatingBadge2.text}</span>
              </div>
            </div>

            <div className="w-full max-w-xs bg-[#0D274A]/80 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 text-xs text-slate-200 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#159FB4] animate-ping" />
              <span className="font-semibold text-white">VM HRM Private Limited</span>
              <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded bg-[#C59B4B]/20 text-[#E5BF70]">
                TS, India
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Carousel Controls & Pagination Dots */}
      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-8 pb-6 w-full">
        <div className="pt-4 flex items-center justify-between border-t border-white/15">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-8 h-2.5 bg-[#159FB4]' 
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs font-bold text-slate-300 ml-2">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

          {/* Prev / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#159FB4] border border-white/20 text-white transition-all flex items-center justify-center shadow-md cursor-pointer backdrop-blur-md active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#159FB4] border border-white/20 text-white transition-all flex items-center justify-center shadow-md cursor-pointer backdrop-blur-md active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;

