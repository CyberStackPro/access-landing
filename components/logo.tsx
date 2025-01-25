import type React from "react";

interface LogoProps {
  className?: string;
}

// Updated Logo Component (modern activity tracking design)
const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="20"
        cy="20"
        r="19.5"
        className="stroke-[url(#gradient)] dark:stroke-[url(#dark-gradient)]"
        strokeWidth="1.5"
      />
      <path
        d="M10 24 L14 16 L18 24 L22 16 L26 24 L30 16"
        className="stroke-[url(#gradient)] dark:stroke-[url(#dark-gradient)]"
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
          <stop stopColor="#00C853" />
          <stop offset="1" stopColor="#2962FF" />
        </linearGradient>
        <linearGradient
          id="dark-gradient"
          x1="0"
          y1="0"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#64DD17" />
          <stop offset="1" stopColor="#2979FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
