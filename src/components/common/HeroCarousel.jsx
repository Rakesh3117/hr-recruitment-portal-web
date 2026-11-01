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
    headlinePart1: 'Empowering Business Growth Through',
    highlight: 'Innovation',
    headlinePart2: '& Talent',
    description: 'VM Human Resource Management Private Limited connects businesses with skilled talent and delivers comprehensive corporate training, software consulting, and workforce solutions.',
    primaryBtn: { text: 'View Services', link: '/services' },
    secondaryBtn: { text: 'Contact Us', link: '/contact' },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
    floatingBadge1: { number: '10,000+', text: 'Placed Candidates', icon: TrendingUp },
    floatingBadge2: { number: '100%', text: 'Pre-Screened Profiles', icon: ShieldCheck }
  },
  {
    id: 2,
    tagline: 'Connecting Talent, Elevating Your Workforce',
    headlinePart1: 'Connecting Top-Tier Talent with',
    highlight: 'Leading',
    headlinePart2: 'Enterprises',
    description: 'From specialized software engineers to leadership hiring and flexible contract staffing, we deliver verified, high-performance talent tailored to your needs.',
    primaryBtn: { text: 'Hire Talent', link: '/contact' },
    secondaryBtn: { text: 'Explore Careers', link: '/careers' },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80',
    floatingBadge1: { number: '500+', text: 'Corporate Clients', icon: Award },
    floatingBadge2: { number: '24-48h', text: 'Fast Profile Turnaround', icon: Users }
  },
  {
    id: 3,
    tagline: 'Skill Development & Placement Excellence',
    headlinePart1: 'Industry-Aligned Corporate',
    highlight: 'Training',
    headlinePart2: '& Upskilling',
    description: 'Bridging the competency gap with hands-on technical workshops, role readiness, and end-to-end placement support for modern organizations.',
    primaryBtn: { text: 'Our Training Programs', link: '/services' },
    secondaryBtn: { text: 'Talk to a Recruiter', link: '/contact' },
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80',
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
      className="relative bg-gradient-to-b from-[#F0F8FA] via-white to-white pt-10 sm:pt-14 pb-16 sm:pb-24 border-b border-slate-100 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Animated Glowing Ambient Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#159FB4]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C59B4B]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Slide Content Grid */}
        <div key={active.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[460px] animate-fadeIn">
          
          {/* Left Column: Animated Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#159FB4]/30 shadow-xs text-xs font-bold text-[#159FB4] transition-all hover:scale-105">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B4B]" />
              <span>{active.tagline}</span>
            </div>

            {/* Dynamic Animated Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D274A] tracking-tight leading-[1.12]">
              {active.headlinePart1}{' '}
              <span className="text-[#159FB4] relative inline-block">
                {active.highlight}
                <span className="absolute left-0 bottom-1 w-full h-2 bg-[#159FB4]/20 rounded-full" />
              </span>{' '}
              {active.headlinePart2}
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {active.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                to={active.primaryBtn.link}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0D274A] hover:bg-[#081B34] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>{active.primaryBtn.text}</span>
                <ArrowRight className="w-4 h-4 text-[#159FB4]" />
              </Link>

              <Link
                to={active.secondaryBtn.link}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#0D274A] bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-xs hover:shadow-sm hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#159FB4]" />
                <span>{active.secondaryBtn.text}</span>
              </Link>
            </div>

            {/* Micro Statutory Strip */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#159FB4]" />
                <span>Bachupally, Hyderabad</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C59B4B]" />
                <span className="font-mono">CIN: {contactInfo.cin}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Imagery with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src={active.image}
                  alt={active.highlight}
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D274A]/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-between border border-white/40">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#159FB4] block">Registered Corporate Entity</span>
                    <strong className="text-xs font-black text-[#0D274A]">VM HRM Private Limited</strong>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#C59B4B]/15 text-[#8F6B1E]">
                    TS, India
                  </span>
                </div>
              </div>

              {/* Floating Badge 1 (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 animate-float flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#EBF7F9] text-[#159FB4] flex items-center justify-center font-bold">
                  <Icon1 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#0D274A] block">{active.floatingBadge1.number}</span>
                  <span className="text-[10px] text-slate-500 font-medium">{active.floatingBadge1.text}</span>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Right) */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 animate-float-reverse flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FDF9F0] text-[#C59B4B] flex items-center justify-center font-bold">
                  <Icon2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-black text-[#0D274A] block">{active.floatingBadge2.number}</span>
                  <span className="text-[10px] text-slate-500 font-medium">{active.floatingBadge2.text}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Carousel Controls & Pagination Dots */}
        <div className="pt-8 sm:pt-12 flex items-center justify-between border-t border-slate-200/80 mt-8">
          
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
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <span className="text-xs font-bold text-slate-400 ml-2">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

          {/* Prev / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0D274A] hover:bg-[#159FB4] hover:text-white hover:border-[#159FB4] transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#0D274A] hover:bg-[#159FB4] hover:text-white hover:border-[#159FB4] transition-all flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
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

