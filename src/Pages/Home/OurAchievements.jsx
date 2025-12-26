import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { achievementsData } from "../../constant/Home/achievementsData";

function OurAchievements() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="py-14 bg-gradient-to-r from-[#EEE7D9] to-[#f1ebe6]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Wrapper */}
        <div className="bg-bg-gradient-to-r from-[#EEE7D9] to-[#f1ebe6] rounded-3xl px-6 py-14 relative">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-center text-xl sm:text-2xl font-medium text-gray-700 mb-10">
              {achievementsData.title}
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              {achievementsData.subtitle}
            </p>
          </div>

          {/* Slider */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Cards */}
            <div
              ref={sliderRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-2"
            >
              {achievementsData.items.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[260px] sm:min-w-[300px] text-center"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                    <img
                      src={item.image}
                      alt="Achievement"
                      className="w-full h-48 object-contain"
                    />
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* View All */}
          <div className="text-center mt-10">
            <button className="text-gray-600 font-medium inline-flex items-center gap-2 hover:underline">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAchievements;
