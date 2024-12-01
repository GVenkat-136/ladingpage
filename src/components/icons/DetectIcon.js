export const DetectIcon = () => (
  <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Circle */}
    <circle cx="200" cy="200" r="180" fill="#f0fdfa"/>
    
    {/* Decorative Elements */}
    <circle cx="200" cy="200" r="150" stroke="#115e59" strokeWidth="2" strokeDasharray="4 4"/>
    <circle cx="200" cy="200" r="120" stroke="#115e59" strokeOpacity="0.2" strokeWidth="40"/>
    
    {/* Smart Detect Icon */}
    <g transform="translate(120, 120)">
      {/* Main Icon */}
      <rect x="20" y="20" width="120" height="120" rx="20" fill="#115e59" fillOpacity="0.1"/>
      <path d="M40 100h80M40 80h60" stroke="#115e59" strokeWidth="4" strokeLinecap="round"/>
      
      {/* Pulse Effect */}
      <circle cx="140" cy="40" r="15" fill="#115e59" fillOpacity="0.2">
        <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="fill-opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite"/>
      </circle>
    </g>
    
    {/* Decorative Dots */}
    <g fill="#115e59">
      <circle cx="50" cy="200" r="4" fillOpacity="0.3"/>
      <circle cx="350" cy="200" r="4" fillOpacity="0.3"/>
      <circle cx="200" cy="50" r="4" fillOpacity="0.3"/>
      <circle cx="200" cy="350" r="4" fillOpacity="0.3"/>
    </g>
  </svg>
); 