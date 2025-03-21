
import React from "react";

const HandWave: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      className={className}
      width="48" 
      height="48" 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M14 28.5C14 28.5 15.5 27 19 27C22.5 27 24.5 29.5 28 29.5C31.5 29.5 33 28 33 28M9 18.5C9 18.5 10.5 17 14 17C17.5 17 19.5 19.5 23 19.5C26.5 19.5 28 18 28 18M19 36.5C19 36.5 20.5 35 24 35C27.5 35 29.5 37.5 33 37.5C36.5 37.5 38 36 38 36" 
        stroke="#4AA7FF" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HandWave;
