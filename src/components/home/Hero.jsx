import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const HERO_IMAGES = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
];

export default function Hero() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="relative mx-0 h-[500px] overflow-hidden rounded-none sm:mx-4 sm:h-[600px] sm:rounded-[28px] lg:h-[660px] xl:h-[700px]"
      aria-label="Hero"
    >
      {/* Background swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        keyboard={{ enabled: true }}
        allowTouchMove={true}
        simulateTouch={true}
        grabCursor={true}
        resistanceRatio={0}
        watchSlidesProgress={true}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        onRealIndexChange={(s) => setActiveIndex(s.realIndex)}
        className="absolute inset-0 h-full w-full"
        style={{ transform: "translateZ(0)" }}
      >
        {HERO_IMAGES.map((src, i) => (
          <SwiperSlide key={i} className="relative h-full w-full">
            {/* BG image */}
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${src})`,
                filter: "brightness(0.96) contrast(1.04)",
              }}
            />
            {/* Left dark gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.62) 28%, rgba(10,10,10,0.28) 55%, rgba(10,10,10,0.05) 78%, rgba(10,10,10,0) 100%)",
              }}
            />
            {/* Bottom dark gradient so content stays readable */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.25) 35%, rgba(10,10,10,0) 60%)",
              }}
            />
            {/* Overall dark tint */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.10)" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>


      {/* Hero content — bottom center on mobile, bottom left on sm+ */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-9 text-center sm:pb-12 sm:text-left lg:pb-14">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center px-4 sm:items-start sm:px-10">
          <div className="flex max-w-[640px] flex-col items-center sm:items-start">
          {/* Heading */}
          <h1 className="font-sans text-[30px] font-bold leading-[1.08] tracking-tight text-white sm:text-[48px] lg:text-[56px]">
            Premium Skincare Solution for Radiant Skin.
          </h1>

          {/* Subtitle */}
          <div className="mt-4 flex max-w-md flex-col items-center gap-3 sm:mt-8 sm:max-w-lg sm:flex-row sm:items-start sm:gap-4">
            <span
              className="hidden sm:block mt-1 w-px shrink-0 self-stretch"
              style={{ backgroundColor: "rgba(255,99,51,0.5)" }}
            />
            <p className="text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
              Expert cosmetic solutions for your daily routine — cruelty-free skincare, makeup, and body care you can trust.
            </p>
          </div>

          {/* CTA button */}
          <div className="mt-6 sm:mt-8">
            <a
              href="/contact"
              className="group inline-flex items-center gap-4 rounded-full bg-white py-1.5 pl-5 pr-1.5 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md sm:gap-5 sm:pl-7"
            >
              <span className="text-[11px] font-semibold uppercase tracking-wide text-black sm:text-[13px]">
                Get Started Now
              </span>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45 sm:h-10 sm:w-10"
                style={{ backgroundColor: "#FF6333" }}
              >
                <ArrowUpRight size={18} />
              </span>
            </a>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom-right pagination — numbered circles matching Figma */}
      <div className="absolute inset-x-0 bottom-10 z-20 hidden sm:bottom-14 sm:flex lg:bottom-16">
        <div className="mx-auto flex w-full max-w-[1400px] justify-end gap-2 px-4 sm:px-10">
          {HERO_IMAGES.map((_, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="relative flex h-9 w-9 items-center justify-center"
              style={{ outline: "none" }}
            >
              {/* Spinning dashed ring for active slide */}
              {isActive && (
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ animation: "heroSpin 4s linear infinite" }}
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </svg>
              )}
              {/* Inner circle with number */}
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-semibold transition-all duration-300"
                style={{
                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(255,255,255,0.08)",
                  color: isActive ? "white" : "rgba(255,255,255,0.5)",
                  border: isActive
                    ? "none"
                    : "1px solid rgba(255,255,255,0.25)",
                  backdropFilter: "blur(4px)",
                }}
              >
                {i + 1}
              </span>
            </button>
          );
          })}
        </div>
      </div>

      <style>{`
        .swiper-slide {
          will-change: opacity;
          backface-visibility: hidden;
          transform: translateZ(0);
          transition-timing-function: cubic-bezier(0.45, 0, 0.2, 1) !important;
        }
        .swiper-wrapper {
          transform-style: preserve-3d;
        }
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
