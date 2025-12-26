import { motion } from "framer-motion";
import { infoSectionData } from "../../constant/Home/infoSectionData";
import { Link } from "react-router-dom";

function InfoSection() {
  return (
    <section className="py-14 bg-gradient-to-r from-[#EEE7D9] to-[#f1ebe6]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xl sm:text-2xl font-medium text-gray-700 mb-10"
        >
          {infoSectionData.title}
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {infoSectionData.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={item.link}
                  className="group bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all h-full"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-purple-50 text-[#da925b] mb-4 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <p className="text-sm sm:text-base font-medium text-gray-700">
                    {item.title}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
