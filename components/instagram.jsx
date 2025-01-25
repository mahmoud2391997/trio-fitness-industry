import React from "react";

const InstagramIcon = ({ width = 48, height = 48 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
    >
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#F58529" }} />
          <stop offset="30%" style={{ stopColor: "#DD2A7B" }} />
          <stop offset="60%" style={{ stopColor: "#8134AF" }} />
          <stop offset="100%" style={{ stopColor: "#515BD4" }} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#instagramGradient)" />
      <path
        d="M24 14.7a9.3 9.3 0 1 0 9.3 9.3A9.31 9.31 0 0 0 24 14.7zm0 15.3a6 6 0 1 1 6-6 6 6 0 0 1-6 6zm7.8-12.6a2.2 2.2 0 1 1-2.2-2.2 2.21 2.21 0 0 1 2.2 2.2z"
        fill="#fff"
      />
      <path
        d="M24 12a12 12 0 0 0-12 12 12 12 0 0 0 12 12 12 12 0 0 0 12-12 12 12 0 0 0-12-12zm0 21.6A9.6 9.6 0 1 1 33.6 24 9.61 9.61 0 0 1 24 33.6zm8.4-16.2a3 3 0 1 1-3-3 3 3 0 0 1 3 3z"
        fill="url(#instagramGradient)"
      />
    </svg>
  );
};

export default InstagramIcon;