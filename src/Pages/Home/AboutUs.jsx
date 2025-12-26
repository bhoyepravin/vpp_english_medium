// components/AboutUs.jsx
import React from "react";
import aboutData from "../../constant/Home/aboutData";

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Centered */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600">
            {aboutData.title}
          </h2>
          <div className="mt-3 md:mt-4 w-16 md:w-20 h-1 bg-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
          {/* Left Side Image - Shows FIRST on mobile */}
          <div className="md:w-1/2 order-1 w-full">
            <div className="relative w-full max-w-sm md:max-w-md mx-auto">
              <img
                src={aboutData.imagePath}
                alt={aboutData.imageAlt}
                className="w-full h-auto max-h-[250px] sm:max-h-[300px] md:max-h-[350px] lg:max-h-[400px] object-contain rounded-lg"
              />
              {/* Optional decorative element - only on desktop */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-lg -z-10 hidden md:block"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-100 rounded-lg -z-10 hidden md:block"></div>

              {/* Mobile decorative elements (smaller) */}
              <div className="md:hidden absolute -bottom-2 -right-2 w-12 h-12 bg-blue-50 rounded-lg -z-10 opacity-50"></div>
              <div className="md:hidden absolute -top-2 -left-2 w-10 h-10 bg-yellow-50 rounded-lg -z-10 opacity-50"></div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="md:w-1/2 order-2 w-full">
            <div className="space-y-4 md:space-y-6">
              {aboutData.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Call to Action Button */}
            <div className="mt-6 md:mt-8 lg:mt-10">
              <a
                href={aboutData.ctaLink}
                className="inline-flex items-center justify-center w-full md:w-auto px-5 py-2.5 md:px-6 md:py-3 bg-amber-400 text-gray-700 font-medium rounded-lg hover:bg-amber-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm md:text-base"
              >
                {aboutData.ctaText}
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
