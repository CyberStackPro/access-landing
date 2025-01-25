import type React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="19" stroke="url(#gradient)" strokeWidth="2" />
      <path
        d="M8 20h6l2-4 4 8 2-4h10"
        stroke="url(#gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4CAF50" />
          <stop offset="1" stopColor="#2196F3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
