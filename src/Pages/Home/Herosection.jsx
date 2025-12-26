// components/HeroSection.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroData } from "../../constant/Home/heroData";

function HeroSection() {
  const images = Object.values(heroData.images);
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative h-[45vh] md:h-[75vh] w-full overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1 }}
          loading="eager"
        />
      ))}

      {/* Dark Overlay (optional – remove if not needed) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 rounded-full bg-white/30 backdrop-blur
              flex items-center justify-center hover:bg-white/50 transition"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10
              w-10 h-10 rounded-full bg-white/30 backdrop-blur
              flex items-center justify-center hover:bg-white/50 transition"
          >
            <ChevronRight className="text-white" />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default HeroSection;
