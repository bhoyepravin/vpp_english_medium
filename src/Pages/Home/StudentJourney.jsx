import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { studentJourney } from "../../constant/Home/studentJourney"; // Add curly braces

const StudentJourney = () => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 300; // adjust scroll distance
      if (direction === "left") {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-12 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-500 mb-10">
          Key Highlights of Our School
        </h2>

        {/* Desktop Slider */}
        <div className="hidden lg:flex items-center relative">
          {/* Left Chevron */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 p-2 bg-white rounded-full  hover:bg-purple-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
          >
            {studentJourney.items.map(
              (
                item // Access items array
              ) => (
                <div
                  key={item.id}
                  className="flex-none w-72 bg-white rounded-xl  overflow-hidden duration-300 snap-start"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-gray-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Right Chevron */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 p-2 bg-white rounded-full  hover:bg-purple-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory hide-scrollbar">
          {studentJourney.items.map(
            (
              item // Access items array
            ) => (
              <div
                key={item.id}
                className="flex-none w-64 bg-white rounded-xl  overflow-hidden hover:shadow-2xl transition-shadow duration-300 snap-start"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-700 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default StudentJourney;
