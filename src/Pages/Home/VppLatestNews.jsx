import { ChevronLeft, ChevronRight } from "lucide-react";
import { vppLatestNewsData } from "../../constant/Home/vppLatestNewsData";

function VppLatestNews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-medium text-gray-700 mb-10">
          {vppLatestNewsData.title}
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border bg-white shadow items-center justify-center text-gray-600">
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* News Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vppLatestNewsData.items.map((item) => (
              <div
                key={item.id}
                className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt="Latest News"
                  className="w-full h-56 object-cover"
                />

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-[180px]">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    className="mt-6 inline-flex items-center text-gray-500 text-sm font-medium hover:underline"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border bg-white shadow items-center justify-center text-gray-600">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default VppLatestNews;
