import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const PRODUCTS = [
  {
    id: 1,
    name: "Essential Hair Oil",
    category: "HAIR CARE",
    price: "₹1,299",
    oldPrice: "₹1,599",
    discount: "-20%",
    rating: 4,
    reviews: "4.00",
    image1: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    image2: "https://images.unsplash.com/photo-1608248597983-10eb2c101598?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Women Beauty Glow",
    category: "BODY LOTION",
    price: "₹899",
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: "4.00",
    image1: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
    image2: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Dry Skin Moisturizer Lotion",
    category: "SKINCARE",
    price: "₹749",
    oldPrice: "₹999",
    discount: "-25%",
    rating: 5,
    reviews: "5.00",
    image1: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
    image2: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "AntiDan Drof Shampo",
    category: "HAIR CARE",
    price: "₹599",
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: "4.00",
    image1: "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=600&q=80",
    image2: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Body Serum For Women",
    category: "SKINCARE",
    price: "₹1,499",
    oldPrice: null,
    discount: null,
    rating: 5,
    reviews: "5.00",
    image1: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    image2: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Rose Glow Mist",
    category: "BODY CARE",
    price: "₹690",
    oldPrice: "₹850",
    discount: "-18%",
    rating: 4,
    reviews: "4.50",
    image1: "https://images.unsplash.com/photo-1590439472477-36353b0e363b?auto=format&fit=crop&w=600&q=80",
    image2: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80",
  },
];

export default function OurProducts() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [_, setInit] = useState(false);
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={12}
          fill={i <= rating ? "#FF6333" : "transparent"}
          color={i <= rating ? "#FF6333" : "#d1d5db"}
          className="mr-0.5 inline-block"
        />
      );
    }
    return stars;
  };

  return (
    <section
      className="relative w-full py-6 sm:py-8 lg:py-12"
      style={{ background: "#f6f7f9" }}
      aria-label="Our Products"
    >
      {/* ── Section header ── */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-4 mb-8 sm:mb-12 flex flex-col items-center text-center sm:flex-row sm:items-end sm:justify-between sm:text-left gap-6">
        <div className="text-center sm:text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center mb-3">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{
                background: "rgba(255,99,51,0.08)",
                color: "#FF6333",
                border: "1px solid rgba(255,99,51,0.22)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: "#FF6333" }}
              />
              Our Products
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-sans text-[24px] font-bold leading-tight tracking-tight sm:text-[34px] lg:text-[40px]"
            style={{ color: "#111111" }}
          >
            Explore <span style={{ color: "#FF6333" }}>New Arrivals</span>
          </h2>


        </div>

        {/* Custom Navigation Arrow Buttons on the Right */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            ref={prevRef}
            aria-label="Previous products"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 border hover:bg-[#FF6333] hover:text-white"
            style={{
              backgroundColor: "rgba(255,99,51,0.08)",
              borderColor: "rgba(255,99,51,0.22)",
              color: "#FF6333",
            }}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            ref={nextRef}
            aria-label="Next products"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 border hover:bg-[#FF6333] hover:text-white"
            style={{
              backgroundColor: "rgba(255,99,51,0.08)",
              borderColor: "rgba(255,99,51,0.22)",
              color: "#FF6333",
            }}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* ── Swiper Slider ── */}
      <div className="relative max-w-[1400px] mx-auto px-3 sm:px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onInit={() => setInit(true)}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 5, spaceBetween: 20 },
            1200: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {PRODUCTS.map((product) => (
            <SwiperSlide key={product.id} className="h-auto">
              <article className="group bg-white rounded-lg sm:rounded-xl lg:rounded-2xl border border-orange-100/80 p-3 sm:p-4 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(255,99,51,0.05)] hover:border-orange-200/80 flex flex-col justify-between h-full relative overflow-hidden">
                {/* Image Section */}
                <div className="relative w-full aspect-square rounded-lg sm:rounded-xl bg-[#f6f7f9] overflow-hidden mb-3 sm:mb-4">
                  {/* Discount Badge */}
                  {product.discount && (
                    <span
                      className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded shadow-sm"
                      style={{ background: "#FFEBE5", color: "#FF6333" }}
                    >
                      {product.discount}
                    </span>
                  )}

                  {/* Heart Wishlist Icon */}
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 transition-all duration-200 hover:scale-105"
                    style={{ color: likedProducts[product.id] ? "#FF6333" : "#888888" }}
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={14}
                      fill={likedProducts[product.id] ? "#FF6333" : "none"}
                    />
                  </button>

                  {/* First Image (slides up to top) */}
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full"
                    loading="lazy"
                  />
                  {/* Second Image (slides up from bottom) */}
                  <img
                    src={product.image2}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"
                    loading="lazy"
                  />
                </div>

                {/* Details Section */}
                <div className="flex flex-col flex-grow text-left">
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-sans text-[13px] sm:text-[14px] font-bold text-gray-800 leading-snug tracking-tight mb-2 group-hover:text-[#FF6333] transition-colors duration-200 min-h-[36px] sm:min-h-[40px]">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    {renderStars(product.rating)}
                    <span className="text-[8px] sm:text-[10px] font-medium text-gray-400 ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-auto flex items-center justify-between gap-2 sm:gap-3">
                    <div className="flex min-w-0 flex-wrap items-baseline gap-1.5 sm:gap-2">
                      <span className="text-[14px] sm:text-[16px] font-bold text-gray-900">
                        {product.price}
                      </span>
                      {product.oldPrice && (
                        <span className="text-[10px] sm:text-[12px] text-gray-400 line-through">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      className="inline-flex h-8 sm:h-9 w-8 sm:w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(255,99,51,0.22)]"
                      style={{ backgroundColor: "#FF6333" }}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingBag size={14} />
                    </button>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile navigation controls below slider */}
        <div className="flex justify-center gap-3 mt-5 sm:hidden">
          <button
            ref={prevRef}
            aria-label="Previous products"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 border hover:bg-[#FF6333] hover:text-white"
            style={{
              backgroundColor: "rgba(255,99,51,0.08)",
              borderColor: "rgba(255,99,51,0.22)",
              color: "#FF6333",
            }}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>
          <button
            ref={nextRef}
            aria-label="Next products"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 border hover:bg-[#FF6333] hover:text-white"
            style={{
              backgroundColor: "rgba(255,99,51,0.08)",
              borderColor: "rgba(255,99,51,0.22)",
              color: "#FF6333",
            }}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <style>{`
        /* Hide native Swiper navigation buttons */
        .swiper-button-disabled {
          opacity: 0.4;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
