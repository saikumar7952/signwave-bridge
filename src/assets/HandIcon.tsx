
import React from "react";

const HandIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <svg 
      className={className}
      width="64" 
      height="64" 
      viewBox="0 0 64 64" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M42 22V18C42 16.9391 41.5786 15.9217 40.8284 15.1716C40.0783 14.4214 39.0609 14 38 14C36.9391 14 35.9217 14.4214 35.1716 15.1716C34.4214 15.9217 34 16.9391 34 18V30" 
        stroke="#4AA7FF" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M34 24V14C34 12.9391 33.5786 11.9217 32.8284 11.1716C32.0783 10.4214 31.0609 10 30 10C28.9391 10 27.9217 10.4214 27.1716 11.1716C26.4214 11.9217 26 12.9391 26 14V30" 
        stroke="#4AA7FF" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M26 20V14C26 12.9391 25.5786 11.9217 24.8284 11.1716C24.0783 10.4214 23.0609 10 22 10C20.9391 10 19.9217 10.4214 19.1716 11.1716C18.4214 11.9217 18 12.9391 18 14V30" 
        stroke="#4AA7FF" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M18 26V18C18 16.9391 17.5786 15.9217 16.8284 15.1716C16.0783 14.4214 15.0609 14 14 14C12.9391 14 11.9217 14.4214 11.1716 15.1716C10.4214 15.9217 10 16.9391 10 18V38C10 43.5228 14.4772 48 20 48H28C31.0609 48 34.0783 46.8143 36.3284 44.6569C38.5786 42.4996 40 39.5826 40 36.5L42 30" 
        stroke="#4AA7FF" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HandIcon;
