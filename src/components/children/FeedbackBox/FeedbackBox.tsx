import React from "react";


const FeedbackBox: React.FC = () => (
    <div className="relative mt-4 p-6 bg-gray-200 bg-opacity-20 backdrop-blur-sm rounded-2xl shadow-sm
    transform hover:-translate-y-1 hover:shadow-xl transition duration-200 ease-out">
      {/* Pulsing burnt orange border */}
      <div className="absolute inset-0 rounded-2xl border-4 border-[#d68100] animate-pulse pointer-events-none"></div>
      {/* Static content */}
      <div className="relative space-y-2 text-center">
        <p className="text-2xl font-bold text-neutral-900">
          Access the Virtual Open House to view the GPA Options and Provide Your Feedback
        </p>
        <p className="text-md text-gray-900">
          [Coming Soon! Available starting July 19, 2025]
        </p>
      </div>
    </div>
);

export default FeedbackBox;