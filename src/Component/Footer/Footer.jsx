import { Phone, Mail, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#261D32]  text-white">
      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto py-12 grid grid-cols-12 gap-4">
        {/* ================= CONTACT INFO ================= */}
        <div className="col-span-12 md:col-span-3">
          <h3 className="text-orange-400 font-semibold text-lg mb-6">
            CONTACT INFO
          </h3>

          <ul className="text-sm space-y-3">
            {[
              "Home",
              "About Us",
              "Admission",
              "Calendar",
              "Achievements",
              "Guest Visits",
              "Alumni",
            ].map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-orange-400">
                <span className="inline-flex items-center gap-2 border-b border-gray-700/60 pb-1">
                  <ChevronRight size={16} />
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ================= GET IN TOUCH ================= */}
        <div className="col-span-12 md:col-span-5">
          <h3 className="text-orange-400 font-semibold text-lg text-center mb-10">
            GET IN TOUCH
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            {/* PRE-PRIMARY */}
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">
                PRE-PRIMARY
              </h4>
              <p className="flex items-center gap-2 mb-2">
                <Phone size={15} /> 9921973113
              </p>
              <p className="text-gray-400 mb-2">(Pre School)</p>
              <p className="flex items-center gap-2 break-all">
                <Mail size={15} /> pre-primary@vppe.bhonsala.in
              </p>
            </div>

            {/* PRIMARY */}
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">PRIMARY</h4>
              <p className="flex items-center gap-2 mb-2">
                <Phone size={15} /> 7774894389
              </p>
              <p className="text-gray-400 mb-2">(1st to 4th)</p>
              <p className="flex items-center gap-2 break-all">
                <Mail size={15} /> principal@vppe.bhonsala.in
              </p>
            </div>

            {/* SECONDARY */}
            <div>
              <h4 className="text-orange-400 font-semibold mb-4">SECONDARY</h4>
              <p className="flex items-center gap-2 mb-2">
                <Phone size={15} /> 9921953879
              </p>
              <p className="text-gray-400 mb-2">(5th to 10th)</p>
              <p className="flex items-center gap-2 break-all">
                <Mail size={15} /> principal@vppe.bhonsala.in
              </p>
            </div>
          </div>
        </div>

        {/* ================= FIND US ================= */}
        <div className="col-span-12 md:col-span-3">
          <h3 className="text-orange-400 font-semibold text-lg mb-6">
            FIND US
          </h3>

          <div className="border border-gray-700 rounded overflow-hidden">
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Vidya%20Prabodhini%20Prashala%20Nashik&output=embed"
              className="w-full h-44"
              loading="lazy"
            />
          </div>

          {/* PIN CODE */}
          <div className="flex gap-2 mt-4">
            {"107025".split("").map((n, i) => (
              <span
                key={i}
                className="bg-black border border-gray-700 px-2 py-1 rounded text-sm"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="border-t border-gray-800 py-4 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>Copyright © 2025. All rights reserved.</p>
          <p>
            Powered by{" "}
            <span className="text-orange-400 font-semibold">
              RICH System Solutions Pvt Ltd
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
