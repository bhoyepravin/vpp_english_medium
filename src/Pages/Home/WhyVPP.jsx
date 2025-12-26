// components/WhyVPP.jsx
import React from "react";

const features = [
  { icon: "📖", text: "Modern English Lab" },
  { icon: "♞", text: "Kathak and Chess classes" },
  { icon: "🎯", text: "NDA preparation" },
  { icon: "🏃", text: "Military Training" },
  { icon: "✊", text: "Self Defence for girls" },
  { icon: "📱", text: "E- Library" },
  { icon: "🧠", text: "Manshakti session and Mind Gym Activities" },
  {
    icon: "🎓",
    text: "Many more projects for holistic development of students",
  },
];

const WhyVPP = () => {
  return (
    <section className="py-8 md:py-12 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-500">
            Why VPP English Medium School
          </h2>
          <div className="w-24 sm:w-28 md:w-32 h-1 bg-orange-400 mx-auto mt-3 md:mt-4"></div>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-yellow-500 text-xl md:text-2xl flex-shrink-0 mt-0.5">
                {feature.icon}
              </span>
              <span className="text-gray-600 text-sm sm:text-base md:text-lg font-medium">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Alternative: For single column on all screens */}
        {/* 
        <div className="space-y-3 md:space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-yellow-500 text-xl md:text-2xl flex-shrink-0 mt-0.5">
                {feature.icon}
              </span>
              <span className="text-gray-600 text-sm md:text-base lg:text-lg font-medium">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
};

export default WhyVPP;
