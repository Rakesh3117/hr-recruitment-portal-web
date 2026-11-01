import logoImg from '../../assets/vm-hrm-logo.jpg';

const BrandLogo = ({ variant = 'default', className = '', imgClassName = 'h-11 sm:h-12' }) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Company Logo Image */}
      <div className="relative shrink-0 overflow-hidden rounded-xl bg-white p-1 shadow-xs border border-slate-100 flex items-center justify-center">
        <img 
          src={logoImg} 
          alt="VM HRM Private Limited Logo" 
          className={`${imgClassName} w-auto object-contain`} 
        />
      </div>

      {/* Brand Text for accessibility / high resolution header */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-base sm:text-lg font-black tracking-tight ${isLight ? 'text-white' : 'text-[#0D274A]'}`}>
            VM HRM
          </span>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase ${isLight ? 'bg-[#159FB4] text-white' : 'bg-[#0D274A] text-white'}`}>
            PVT LTD
          </span>
        </div>
        <span className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase ${isLight ? 'text-white/80' : 'text-[#64748B]'}`}>
          Recruit. Train. Place. <span className="text-[#C59B4B] font-bold">Grow.</span>
        </span>
      </div>
    </div>
  );
};

export default BrandLogo;
