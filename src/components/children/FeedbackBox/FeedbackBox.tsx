import React from "react";
import "./FeedbackBox.css"; // keeps shimmer / border styles

// FeedbackBox: glass panel + animated shimmer border (no static blue border)
const FeedbackBox: React.FC = () => (

    <div className="relative p-6 bg-gray-200 bg-opacity-20 backdrop-blur-sm rounded-2xl">
      {/* Pulsing burnt orange border */}
      <div className="absolute inset-0 rounded-2xl border-4 border-[#d68100] animate-pulse pointer-events-none"></div>
      {/* Static content */}
      <div className="relative space-y-2 text-center">
        <p className="text-xl font-bold text-neutral-900">
          Access the Virtual Open House to view the GPA Options and Provide Your Feedback
        </p>
        <p className="text-sm text-gray-700">
          [Coming Soon! Available starting July 19, 2025]
        </p>
      </div>
    </div>
);

export default FeedbackBox;