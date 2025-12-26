import React from "react";
import { vppSchoolTourData } from "../../constant/Home/vppSchoolTourData";
import { ChevronLeft, ChevronRight } from "lucide-react";

function VppSchoolTour() {
  return (
    <section className="py-16 bg-[#f9f7f5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Headline */}
        <h2 className="text-center text-xl sm:text-2xl font-medium text-gray-700 mb-10">
          {vppSchoolTourData.title}
        </h2>

        {/* Image Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-purple-600">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vppSchoolTourData.images.map((img) => (
              <div
                key={img.id}
                className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-purple-600">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default VppSchoolTour;
