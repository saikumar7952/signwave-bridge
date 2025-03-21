
import React from "react";

const WaveLines: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      className={className}
      width="320" 
      height="160" 
      viewBox="0 0 320 160" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M-40 40C-40 40 10 0 80 0C150 0 170 80 240 80C310 80 360 40 360 40" 
        stroke="#E0F2FF" 
        strokeWidth="2"
      />
      <path 
        d="M-40 80C-40 80 10 40 80 40C150 40 170 120 240 120C310 120 360 80 360 80" 
        stroke="#E0F2FF" 
        strokeWidth="2"
      />
      <path 
        d="M-40 120C-40 120 10 80 80 80C150 80 170 160 240 160C310 160 360 120 360 120" 
        stroke="#E0F2FF" 
        strokeWidth="2"
      />
    </svg>
  );
};

export default WaveLines;
