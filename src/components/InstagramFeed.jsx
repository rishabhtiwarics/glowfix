import React from "react";
import { Instagram } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const FEED_IMAGES = [
  "https://images.unsplash.com/photo-1615397323136-1e07b822dc47?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1512496015851-a1dc8a477d94?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1594035910387-fea47714263f?auto=format&fit=crop&w=400&q=80",
];

export default function InstagramFeed() {
  return (
    <section id="instagram" className="w-full" aria-label="Instagram Feed">
      <div className="relative max-w-[1400px] mx-auto px-3 sm:px-4">
        
        {/* Left fade overlay — matches hero mx (0 on mobile, 16px on sm+) */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-10 h-full w-0 sm:w-16 lg:w-24"
          style={{
            background:
              "linear-gradient(90deg, #f6f7f9 0%, #f6f7f9 30%, rgba(246,247,249,0.6) 70%, transparent 100%)",
          }}
        />

        {/* Right fade overlay — matches hero mx (0 on mobile, 16px on sm+) */}
        <div
          className="pointer-events-none absolute right-0 top-0 z-10 h-full w-0 sm:w-16 lg:w-24"
          style={{
            background:
              "linear-gradient(270deg, #f6f7f9 0%, #f6f7f9 30%, rgba(246,247,249,0.6) 70%, transparent 100%)",
          }}
        />

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 14 },
            768: { slidesPerView: 4, spaceBetween: 18 },
            1024: { slidesPerView: 6, spaceBetween: 24 },
          }}
          className="marquee-swiper"
        >
          {FEED_IMAGES.map((src, idx) => (
            <SwiperSlide key={idx}>
              <a 
                href="#instagram" 
                className="group relative block aspect-square w-full overflow-hidden rounded-md sm:rounded-lg"
              >
                {/* Image */}
                <img
                  src={src}
                  alt={`Instagram feed ${idx + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Glass Overlay - Animates from center */}
                <div 
                  className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(3px)",
                  }}
                >
                  {/* Center Icon with scale animation */}
                  <div 
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white scale-50 opacity-0 transition-all duration-300 delay-75 ease-out group-hover:scale-100 group-hover:opacity-100 shadow-[0_4px_20px_rgba(0,0,0,0.1)] m-4"
                  >
                    <Instagram size={24} style={{ color: "#FF6333" }} />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
