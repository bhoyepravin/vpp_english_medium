import { ChevronLeft, ChevronRight } from "lucide-react";
import { vppStudentJourneyData } from "../../constant/Home/vppStudentJourneyData";

function VppStudentJourney() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-xl sm:text-2xl font-medium text-gray-700 mb-10">
          {vppStudentJourneyData.title}
        </h2>

        {/* Cards + Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-gray-600">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {vppStudentJourneyData.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-gray-600 font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-gray-600">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <button className="px-10 py-4 rounded-lg text-white font-medium bg-gradient-to-r from-[#e6b8a2] to-[#e6b8a2] hover:opacity-90 transition">
            {vppStudentJourneyData.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default VppStudentJourney;
