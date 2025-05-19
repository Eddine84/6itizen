const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className="text-blue-600 hover:text-blue-700 transition-colors"
    >
      {/* Contour du losange */}
      <polygon
        points="16 2, 30 16, 16 30, 2 16"
        fill="none" // Intérieur transparent
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
    <h1 className="text-2xl font-bold text-gray-900">6itizen</h1>
  </div>
);

export default Logo;
