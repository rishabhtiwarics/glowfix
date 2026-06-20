import React from "react";
import { ArrowUpRight, Instagram } from "lucide-react";

const LEFT_COLUMNS = [
  {
    className: "promo-gallery-track-a",
    images: [
      {
        src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=360&q=80",
        alt: "Lipstick collection",
      },
      {
        src: "https://images.unsplash.com/photo-1631214524020-3c69888b2b49?auto=format&fit=crop&w=360&q=80",
        alt: "Eye shadow palette",
      },
      {
        src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=360&q=80",
        alt: "Makeup brushes",
      },
      {
        src: "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=360&q=80",
        alt: "Foundation bottles",
      },
      {
        src: "https://images.unsplash.com/photo-1599733594230-6b823276df04?auto=format&fit=crop&w=360&q=80",
        alt: "Skincare serum",
      },
    ],
  },
  {
    className: "promo-gallery-track-b",
    images: [
      {
        src: "https://images.unsplash.com/photo-1583241475880-083f84372725?auto=format&fit=crop&w=360&q=80",
        alt: "Nail polish",
      },
      {
        src: "https://images.unsplash.com/photo-1512496015851-a1dc8a477d94?auto=format&fit=crop&w=360&q=80",
        alt: "Perfume bottle",
      },
      {
        src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=360&q=80",
        alt: "Skincare cream",
      },
      {
        src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=360&q=80",
        alt: "Blush palette",
      },
      {
        src: "https://images.unsplash.com/photo-1526758097130-bab247274f58?auto=format&fit=crop&w=360&q=80",
        alt: "Beauty flatlay",
      },
    ],
  },
];

const RIGHT_COLUMNS = [
  {
    className: "promo-gallery-track-c",
    images: [
      {
        src: "https://images.unsplash.com/photo-1590156562745-5bdb2a336f5e?auto=format&fit=crop&w=360&q=80",
        alt: "Face mask",
      },
      {
        src: "https://images.unsplash.com/photo-1533330409649-cfa26e213e6c?auto=format&fit=crop&w=360&q=80",
        alt: "Mascara wand",
      },
      {
        src: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&w=360&q=80",
        alt: "Highlighter powder",
      },
      {
        src: "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=360&q=80",
        alt: "Lipstick shades",
      },
      {
        src: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=360&q=80",
        alt: "Serum dropper",
      },
    ],
  },
  {
    className: "promo-gallery-track-d",
    images: [
      {
        src: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?auto=format&fit=crop&w=360&q=80",
        alt: "Rose water mist",
      },
      {
        src: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=360&q=80",
        alt: "Eye liner",
      },
      {
        src: "https://images.unsplash.com/photo-1600428853876-fb3e4b3a1f2f?auto=format&fit=crop&w=360&q=80",
        alt: "Moisturiser jar",
      },
      {
        src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=360&q=80",
        alt: "Beauty tools",
      },
      {
        src: "https://images.unsplash.com/photo-1585232351009-aa87e605c1b0?auto=format&fit=crop&w=360&q=80",
        alt: "Collagen cream",
      },
    ],
  },
];

export default function PromoGallery() {
  return (
    <section
      className="w-full px-3 sm:px-4  py-6 sm:py-8 lg:py-12"
      style={{ background: "#f6f7f9" }}
      aria-label="Beauty promo gallery"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="promo-gallery-grid overflow-hidden rounded-[22px] border border-white bg-white p-1.5 shadow-[0_10px_28px_rgba(17,17,17,0.05)] sm:rounded-[28px] sm:p-2">
          <SideColumns columns={LEFT_COLUMNS} side="left" />

          <article className="promo-gallery-center relative overflow-hidden rounded-[20px] bg-[#111111] sm:rounded-[26px]">
            <img
              src="https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1100&q=85"
              alt="Cosmetic banner model"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.48) 46%, rgba(10,10,10,0.18) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-6 text-center sm:px-8 sm:pb-8 sm:text-left lg:px-10 lg:pb-10">
              <div className="mx-auto flex max-w-[300px] flex-col items-center sm:mx-0 sm:items-start">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  <Instagram size={14} style={{ color: "#FF6333" }} />
                  Follow Us
                </div>
                <h2 className="max-w-[300px] font-sans text-[26px] font-bold leading-[1.15] tracking-tight text-white sm:text-[32px] lg:text-[36px]">
                  Daily Glow Inspiration.
                </h2>
                <div className="mt-3 flex max-w-[285px] flex-col items-center gap-3 sm:flex-row sm:items-start">
                  <span
                    className="hidden sm:block mt-1 w-px shrink-0 self-stretch"
                    style={{ backgroundColor: "rgba(255,99,51,0.5)" }}
                  />
                  <p className="text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
                    Skincare, makeup, and beauty moments curated for your routine.
                  </p>
                </div>
                <a
                  href="#instagram"
                  className="group mt-6 inline-flex items-center gap-3 rounded-full bg-white py-1 pl-4 pr-1 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md sm:gap-4 sm:pl-5"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-black sm:text-[12px]">
                    Follow Us
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
          </article>

          <SideColumns columns={RIGHT_COLUMNS} side="right" />
        </div>
      </div>

      <style>{`
        .promo-gallery-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        .promo-gallery-side {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          min-height: 220px;
          overflow: hidden;
        }

        .promo-gallery-subcol {
          position: relative;
          height: 100%;
          min-height: 220px;
          overflow: hidden;
          border-radius: 18px;
          background: #fff4ef;
        }

        .promo-gallery-track {
          display: flex;
          flex-direction: column;
          gap: 8px;
          will-change: transform;
        }

        .promo-gallery-track:hover {
          animation-play-state: paused;
        }

        .promo-gallery-track-a { animation: promoGalleryScroll 18s linear infinite; }
        .promo-gallery-track-b { animation: promoGalleryScroll 25s linear infinite; }
        .promo-gallery-track-c { animation: promoGalleryScroll 21s linear infinite; }
        .promo-gallery-track-d { animation: promoGalleryScroll 28s linear infinite; }

        .promo-gallery-img {
          position: relative;
          height: 128px;
          flex-shrink: 0;
          overflow: hidden;
          border-radius: 18px;
          background: #ffe7dc;
        }

        .promo-gallery-img img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .promo-gallery-center {
          min-height: 320px;
        }

        @media (max-width: 1023px) {
          .promo-gallery-side-left {
            display: none;
          }

          .promo-gallery-side-right {
            min-height: auto;
          }

          .promo-gallery-side-right .promo-gallery-subcol {
            min-height: 400px;
            max-height: 400px;
          }
        }

        @keyframes promoGalleryScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        @media (min-width: 640px) {
          .promo-gallery-grid {
            gap: 10px;
          }

          .promo-gallery-side,
          .promo-gallery-subcol {
            min-height: 300px;
          }

          .promo-gallery-img {
            height: 154px;
            border-radius: 20px;
          }

          .promo-gallery-subcol {
            border-radius: 20px;
          }

          .promo-gallery-center {
            min-height: 390px;
          }
        }

        @media (min-width: 1024px) {
          .promo-gallery-grid {
            grid-template-columns: 1fr 2fr 1fr;
            height: 500px;
          }

          .promo-gallery-side,
          .promo-gallery-subcol,
          .promo-gallery-center {
            min-height: 0;
            height: 100%;
          }

          .promo-gallery-img {
            height: 168px;
          }
        }
      `}</style>
    </section>
  );
}

function SideColumns({ columns, side }) {
  return (
    <div
      className={`promo-gallery-side promo-gallery-side-${side}`}
      aria-label={`${side} gallery columns`}
    >
      {columns.map((column) => {
        const loopImages = [...column.images, ...column.images];

        return (
          <div className="promo-gallery-subcol" key={column.className}>
            <div className={`promo-gallery-track ${column.className}`}>
              {loopImages.map((image, index) => (
                <div className="promo-gallery-img group" key={`${image.src}-${index}`}>
                  <img
                    src={image.src}
                    alt={index < column.images.length ? image.alt : ""}
                    className="transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <div className="m-4 flex h-12 w-12 scale-50 items-center justify-center rounded-full bg-white opacity-0 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all delay-75 duration-300 ease-out group-hover:scale-100 group-hover:opacity-100">
                      <Instagram size={24} style={{ color: "#FF6333" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
