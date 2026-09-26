import { useState, useEffect } from 'react';
import { Award, Users, Layers, MapPin, Sparkles } from 'lucide-react';
import statsData from '../../data/stats.json';

const StatStrip = ({ variant = 'light' }) => {
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  const icons = [
    <Award className="w-5 h-5 text-primary" key="award" />,
    <Users className="w-5 h-5 text-accent" key="users" />,
    <Layers className="w-5 h-5 text-teal" key="layers" />,
    <MapPin className="w-5 h-5 text-primary" key="pin" />,
  ];

  // Auto-rotate the rotating subline highlight
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHighlightIndex((prev) => (prev + 1) % statsData.footprint.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const currentStat = statsData.footprint[activeHighlightIndex];

  return (
    <div className={`w-full py-10 rounded-2xl ${
      variant === 'dark' 
        ? 'bg-navy text-white shadow-xl' 
        : 'bg-white border border-border/80 shadow-card'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-up Stat Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
          {statsData.footprint.map((item, idx) => (
            <div 
              key={item.label}
              onClick={() => setActiveHighlightIndex(idx)}
              className={`cursor-pointer px-4 pt-4 sm:pt-0 transition-all duration-300 rounded-xl p-2 ${
                activeHighlightIndex === idx 
                  ? 'bg-lavender-light/80 ring-1 ring-primary/20' 
                  : 'hover:bg-background-secondary/60'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-lg bg-surface shadow-xs">
                  {icons[idx]}
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-grey">
                  {item.label}
                </span>
              </div>

              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy">
                {item.value}
              </div>

              <p className="mt-2 text-xs sm:text-sm text-grey line-clamp-2">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Rotating Subline Banner */}
        <div className="mt-8 pt-6 border-t border-border/60">
          <div className="flex items-start sm:items-center justify-between gap-4 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-lavender-soft via-lavender-light to-teal-subtle border border-lavender-soft">
            <div className="flex items-center gap-3">
              <span className="p-1.5 rounded-md bg-white text-accent shadow-xs shrink-0">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </span>
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide mr-2">
                  {currentStat.label} Insight:
                </span>
                <span className="text-xs sm:text-sm font-medium text-navy">
                  "{currentStat.highlight}"
                </span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 shrink-0">
              {statsData.footprint.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHighlightIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeHighlightIndex === idx ? 'w-5 bg-primary' : 'bg-grey-200 hover:bg-grey'
                  }`}
                  aria-label={`Show stat highlight ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatStrip;
