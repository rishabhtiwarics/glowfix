import { ArrowUpRight, Flower2 } from "lucide-react";
import { useRef, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const FEATURE_CARDS = [
  {
    paginationSide: "right",
    images: [
      {
        src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
        alt: "Skin restoration beauty routine",
        position: "center bottom",
      },
      {
        src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85",
        alt: "Refreshing skincare treatment",
        position: "center center",
      },
      {
        src: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85",
        alt: "Premium skincare products",
        position: "center center",
      },
    ],
  },
  {
    paginationSide: "left",
    images: [
      {
        src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
        alt: "Skin care makeup application",
        position: "center bottom",
      },
      {
        src: "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=900&q=85",
        alt: "Beauty care products",
        position: "center center",
      },
      {
        src: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
        alt: "Body care ritual",
        position: "center center",
      },
    ],
  },
];

export default function BeautyRealm() {
  return (
    <section
      className="relative mx-0 sm:mx-4"
      style={{ background: "#f6f7f9" }}
      aria-label="Beauty collection highlights"
    >
      <div className="grid overflow-hidden rounded-none shadow-[0_10px_28px_rgba(17,17,17,0.05)] sm:rounded-[28px] lg:grid-cols-3">
        <ImageFeatureCard card={FEATURE_CARDS[0]} />
        <CenterFeatureCard />
        <ImageFeatureCard card={FEATURE_CARDS[1]} />
      </div>
      <style>{`
        @keyframes beautyRealmSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

function ImageFeatureCard({ card }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const paginationPosition =
    card.paginationSide === "left"
      ? "bottom-5 left-1/2 -translate-x-1/2 sm:bottom-7 sm:left-5 sm:translate-x-0"
      : "bottom-5 left-1/2 -translate-x-1/2 sm:bottom-7 sm:left-auto sm:right-5 sm:translate-x-0";

  return (
    <article className="group relative min-h-[300px] overflow-hidden bg-[#f3d8cf] sm:min-h-[360px] lg:min-h-[460px]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={800}
        autoplay={{
          delay: 2800,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={true}
        grabCursor={true}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        onRealIndexChange={(s) => setActiveIndex(s.realIndex)}
        className="absolute inset-0 h-full w-full"
      >
        {card.images.map((image) => (
          <SwiperSlide key={image.src} className="relative h-full w-full">
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ objectPosition: image.position }}
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.48) 34%, rgba(10,10,10,0.18) 58%, rgba(10,10,10,0.02) 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
              style={{
                background:
                  "linear-gradient(0deg, rgba(10,10,10,0.52) 0%, rgba(10,10,10,0.18) 42%, rgba(10,10,10,0) 72%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.08)" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={`absolute z-20 flex flex-row gap-2 ${paginationPosition}`}
      >
        {card.images.map((_, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={i}
              aria-label={`Go to feature slide ${i + 1}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="relative flex h-9 w-9 items-center justify-center"
              style={{ outline: "none" }}
            >
              {isActive && (
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ animation: "beautyRealmSpin 4s linear infinite" }}
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
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-semibold transition-all duration-300"
                style={{
                  backgroundColor: isActive
                    ? "rgba(255,255,255,0.15)"
                    : "rgba(255,255,255,0.08)",
                  color: isActive ? "white" : "rgba(255,255,255,0.55)",
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
    </article>
  );
}

function CenterFeatureCard() {
  return (
    <article className="relative overflow-hidden flex min-h-[300px] flex-col items-center justify-center bg-white px-6 py-10 text-center sm:min-h-[360px] sm:px-10 lg:min-h-[460px]">
      {/* Decorative corner plant image */}
      <img
        src="/images/plant.png"
        alt=""
        className="absolute bottom-0 right-0 h-48 sm:h-56 lg:h-64 w-auto object-contain pointer-events-none select-none z-0 opacity-15"
      />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div className="relative mb-6 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
          {/* Rotating Circular Text SVG */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 100 100"
            style={{ animation: "beautyRealmSpin 15s linear infinite" }}
          >
            <path
              id="circleTextPath"
              d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
              fill="none"
            />
            <text
              className="font-semibold uppercase tracking-[0.2em]"
              style={{ fill: "#FF6333", fontSize: "7.5px" }}
            >
              <textPath href="#circleTextPath" startOffset="0%">
                Realm of Beauty • Natural Glow • Organic Care •
              </textPath>
            </text>
          </svg>

          {/* Center Image */}
          <div className="h-20 w-20 overflow-hidden rounded-full border border-orange-100 shadow-sm sm:h-24 sm:w-24">
            <img
              src="/images/BeautyRealm.png"
              alt="Beauty Realm"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <h2 className="max-w-[300px] font-sans text-[26px] font-bold leading-[1.15] tracking-tight text-[#242424] sm:text-[32px] lg:text-[36px]">
          Enter the realm of <span style={{ color: "#FF6333" }}>beauty</span>
        </h2>
        <p
          className="mx-auto mt-3 max-w-[285px] text-[13px] leading-relaxed sm:text-[14px]"
          style={{ color: "#777777" }}
        >
          Discover premium skincare, organic formulas, and luxury tools for your daily self-care ritual.
        </p>
        <HeroStyleButton
          href="/shop"
          label="Shop now"
          className="mt-6"
          variant="orange"
        />
      </div>
    </article>
  );
}

function HeroStyleButton({ href, label, className = "", variant = "light" }) {
  let bgColor = "#ffffff";
  let textColor = "#000000";
  let borderStyle = "none";

  if (variant === "dark") {
    bgColor = "#111111";
    textColor = "#ffffff";
  } else if (variant === "orange") {
    bgColor = "rgba(255,99,51,0.08)";
    textColor = "#FF6333";
    borderStyle = "1px solid rgba(255,99,51,0.22)";
  }

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-1 pl-4 pr-1 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md sm:gap-4 sm:pl-5 ${className}`}
      style={{
        backgroundColor: bgColor,
        border: borderStyle,
      }}
    >
      <span
        className="text-[11px] font-semibold uppercase tracking-wide sm:text-[12px]"
        style={{ color: textColor }}
      >
        {label}
      </span>
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45 sm:h-9 sm:w-9"
        style={{ backgroundColor: "#FF6333" }}
      >
        <ArrowUpRight size={15} />
      </span>
    </a>
  );
}
