import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowUpRight } from "lucide-react";

import "swiper/css";

/* ── Duplicate slides so loop never gaps ── */
const CATEGORIES = [
  {
    id: 1,
    title: "Hair Care & Styling",
    count: "2+ items",
    href: "/shop/hair-care",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Hair Removal (Epilation)",
    count: "15+ items",
    href: "/shop/hair-removal",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Fragrances",
    count: "10+ items",
    href: "/shop/fragrances",
    image:
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Skincare",
    count: "20+ items",
    href: "/shop/skincare",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Makeup",
    count: "30+ items",
    href: "/shop/makeup",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Body Care",
    count: "12+ items",
    href: "/shop/body-care",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Categories() {
  return (
    <section
      className="relative w-full"
      style={{ background: "#f6f7f9" }}
      aria-label="Shop Categories"
    >
      {/* ── Section header ── */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 mb-7 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div className="text-left">
          {/* Eyebrow — pill style matching Figma / hero CTA theme */}
          <div className="inline-flex items-center mb-3">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{
                background: "rgba(255,99,51,0.08)",
                color: "#FF6333",
                border: "1px solid rgba(255,99,51,0.22)",
              }}
            >
              {/* small dot */}
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: "#FF6333" }}
              />
              Browse Collection
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-sans text-[24px] font-bold leading-tight tracking-tight sm:text-[34px] lg:text-[40px]"
            style={{ color: "#111111" }}
          >
            Check Our <span style={{ color: "#FF6333" }}>Categories</span>
          </h2>


        </div>

        {/* Right side CTA */}
        <div className="flex shrink-0">
          <a
            href="/shop"
            className="group inline-flex items-center gap-3 rounded-full py-1 pl-4 pr-1 shadow-sm transition-all duration-300 ease-out hover:shadow-md border"
            style={{
              backgroundColor: "rgba(255,99,51,0.08)",
              borderColor: "rgba(255,99,51,0.22)",
            }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-wide sm:text-[12px]"
              style={{ color: "#FF6333" }}
            >
              Explore Collection
            </span>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45 sm:h-9 sm:w-9"
              style={{ backgroundColor: "#FF6333" }}
            >
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </div>

      {/* ── Swiper — no external buttons, autoplay loop ── */}
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
          speed={700}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          spaceBetween={12}
          slidesPerView={1}
          breakpoints={{
            /* ≥ 480px — 2 full cards */
            480: { slidesPerView: 2, spaceBetween: 14 },
            /* ≥ 768px — 3 full cards */
            768: { slidesPerView: 3, spaceBetween: 18 },
            /* ≥ 1200px — 4 full cards */
            1200: { slidesPerView: 4, spaceBetween: 16 },
          }}
        >
          {CATEGORIES.map((cat) => (
            <SwiperSlide key={cat.id} style={{ height: "auto" }}>
              <CategoryCard cat={cat} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* ── Theme Half-circle: right edge of card ── */
        .cat-image-wrap {
          position: absolute;
          right: 0;
          top: 0;
          width: 58%;
          height: 100%;
          overflow: hidden;
          clip-path: ellipse(88% 78% at 100% 50%);
          border-radius: 0 16px 16px 0;
        }

        /* ── Card base ── */
        .cat-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          background: #ffffff;
          height: 140px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 6px 20px rgba(17,17,17,0.05);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
          display: block;
        }

        /* ── Hover — only shadow/border, NO translateY ── */
        .cat-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          border-color: rgba(0,0,0,0.15);
        }

        .cat-card-content {
          width: 56%;
          padding: 0 8px 0 14px;
        }

        .shop-now-pill {
          gap: 10px;
          padding: 4px 4px 4px 13px;
          border: 1px solid rgba(255,99,51,0.14);
          box-shadow: 0 3px 12px rgba(17,17,17,0.06);
        }

        .shop-now-text {
          font-size: 9px;
          letter-spacing: 0.14em;
          line-height: 1;
        }

        .shop-now-icon {
          width: 26px;
          height: 26px;
        }

        /* ── Responsive heights ── */
        @media (min-width: 480px) {
          .cat-card { height: 156px; }
          .cat-card-content {
            width: 55%;
            padding-left: 16px;
          }
          .shop-now-pill {
            gap: 12px;
            padding-left: 15px;
          }
          .shop-now-text {
            font-size: 10px;
          }
          .shop-now-icon {
            width: 28px;
            height: 28px;
          }
        }
        @media (min-width: 768px) {
          .cat-card {
            height: 166px;
            border-radius: 18px;
          }
          .cat-card-content {
            width: 54%;
            padding-left: 18px;
          }
          .cat-image-wrap {
            width: 57%;
            clip-path: ellipse(82% 72% at 100% 50%);
            border-radius: 0 18px 18px 0;
          }
          .shop-now-pill {
            gap: 13px;
            padding: 5px 5px 5px 17px;
          }
          .shop-now-text {
            font-size: 10px;
            letter-spacing: 0.16em;
          }
          .shop-now-icon {
            width: 30px;
            height: 30px;
          }
        }
        @media (min-width: 1200px) {
          .cat-card { height: 174px; }
        }

        /* ── Hide built-in swiper nav arrows ── */
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}

function CategoryCard({ cat }) {
  return (
    <a href={cat.href} className="cat-card group" aria-label={cat.title}>

      {/* ── Left content ── */}
      <div
        className="cat-card-content absolute left-0 top-0 h-full flex flex-col justify-center z-10"
      >
        {/* Title */}
        <h3
          className="mb-1 font-sans text-[12px] font-bold leading-snug sm:text-[14px] md:text-[15px]"
          style={{ color: "#FF6333" }}
        >
          {cat.title}
        </h3>

        {/* Count */}
        <p
          className="mb-2 text-[10px] sm:mb-3 md:text-[12px]"
          style={{ color: "#aaaaaa" }}
        >
          {cat.count}
        </p>

        {/* Shop Now pill button */}
        <div
          className="shop-now-pill inline-flex w-fit items-center rounded-full bg-white transition-all duration-300 ease-out group-hover:shadow-[0_5px_18px_rgba(255,99,51,0.18)] group-hover:border-orange-200"
        >
          <span className="shop-now-text font-bold uppercase text-[#111111]">
            Shop Now
          </span>
          <span
            className="shop-now-icon flex items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45"
            style={{ backgroundColor: "#FF6333" }}
          >
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        </div>
      </div>

      {/* ── Right half-circle image ── */}
      <div className="cat-image-wrap">
        <img
          src={cat.image}
          alt={cat.title}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Soft blend from white on left edge */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 45%)",
          }}
        />
      </div>
    </a>
  );
}
