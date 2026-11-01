import justLogo from "../../assets/just-logo.png";
import justName from "../../assets/just-name.png";

const BrandLogo = ({
  variant = "default",
  className = "",
  logoClassName = "h-11 sm:h-12 md:h-14",
  nameClassName = "h-8 sm:h-10 md:h-11 w-auto",
}) => {
  const isLight = variant === "light";

  return (
    <div
      className={`flex items-center gap-0.5 sm:gap-0.5 select-none ${className}`}
    >
      {/* 1. Square Shield Logo Emblem */}
      <div
        className={`relative shrink-0 flex items-center justify-center ${isLight ? "bg-white p-1 rounded-xl shadow-xs" : ""}`}
      >
        <img
          src={justLogo}
          alt="VM HRM Emblem"
          className={`${logoClassName} w-auto object-contain transition-transform hover:scale-105`}
        />
      </div>

      {/* 2. Horizontal Company Name / Typography (Enlarged Width) */}
      <div
        className={`relative shrink-0 flex items-center justify-center ${isLight ? "bg-white px-2.5 py-1 rounded-xl shadow-xs" : ""}`}
      >
        <img
          src={justName}
          alt="VM HRM Private Limited - Recruit. Train. Place. Grow."
          className={`${nameClassName} object-contain transition-transform hover:scale-[1.01]`}
        />
      </div>
    </div>
  );
};

export default BrandLogo;
