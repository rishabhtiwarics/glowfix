import { ArrowUpRight, IndianRupee, ShoppingBag, Star } from "lucide-react";

const BEST_SELLERS = [
  {
    id: 1,
    name: "Kerastase Discipline Smooth Bath",
    price: "116.00",
    oldPrice: "167.53",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=360&q=85",
  },
  {
    id: 2,
    name: "Hydrating Cream Mask 75ml Tube",
    price: "84.00",
    oldPrice: "140.92",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=360&q=85",
  },
  {
    id: 3,
    name: "Smart Hydrating Foundation Glow",
    price: "96.00",
    oldPrice: "121.54",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1631214524020-3c69888b2b49?auto=format&fit=crop&w=360&q=85",
  },
  {
    id: 4,
    name: "Daily Restore Milky Body Lotion",
    price: "118.00",
    oldPrice: "148.33",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=360&q=85",
  },
  {
    id: 5,
    name: "Soft Cleanse Botanical Face Wash",
    price: "118.00",
    oldPrice: "148.33",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=360&q=85",
  },
  {
    id: 6,
    name: "Velvet Rose Night Cream 75ml",
    price: "72.00",
    oldPrice: "120.28",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=360&q=85",
  },
   {
    id: 7,
    name: "Soft Cleanse Botanical Face Wash",
    price: "118.00",
    oldPrice: "148.33",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=360&q=85",
  },
  {
    id: 8,
    name: "Velvet Rose Night Cream 75ml",
    price: "72.00",
    oldPrice: "120.28",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=360&q=85",
  },
];

export default function BestSellerShowcase() {
  return (
    <section
      className="w-full py-6 sm:py-8 lg:py-12"
      style={{ background: "#f6f7f9" }}
      aria-label="Best seller beauty products"
    >
      <div className="mx-auto max-w-[1400px] px-3 sm:px-4">
        <div className="mb-5 flex flex-col items-center text-center gap-4 md:mb-7 lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div>
            <span
              className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{
                background: "rgba(255,99,51,0.08)",
                color: "#FF6333",
                border: "1px solid rgba(255,99,51,0.22)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "#FF6333" }}
              />
              Beauty picks
            </span>
            <h2 className="font-sans text-[26px] font-bold leading-tight tracking-tight text-[#111111] md:text-[34px] lg:text-[40px]">
              Best <span style={{ color: "#FF6333" }}>Seller</span>
            </h2>
          </div>

          <a
            href="/shop"
            className="group hidden w-fit items-center gap-3 rounded-full py-1 pl-4 pr-1 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md lg:inline-flex lg:gap-4 lg:pl-5"
            style={{
              background: "rgba(255,99,51,0.08)",
              border: "1px solid rgba(255,99,51,0.22)",
            }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-wide lg:text-[12px]"
              style={{ color: "#FF6333" }}
            >
              View all
            </span>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45 lg:h-9 lg:w-9"
              style={{ backgroundColor: "#FF6333" }}
            >
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(340px,0.4fr)_minmax(0,0.6fr)] lg:gap-7">
        <article className="group relative min-h-[420px] overflow-hidden rounded-[22px] bg-[#efe0d7] shadow-[0_18px_42px_rgba(17,17,17,0.07)] sm:min-h-[500px] sm:rounded-[28px] lg:min-h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=90"
            alt="Natural cream beauty offer"
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,246,241,0.66) 34%, rgba(255,99,51,0.06) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(17,17,17,0.18) 0%, rgba(17,17,17,0) 45%)",
            }}
          />
          <img
            src="/images/plant.png"
            alt=""
            className="pointer-events-none absolute bottom-0 right-0 z-10 h-56 w-auto select-none object-contain opacity-40 sm:h-72"
          />
          <div className="pointer-events-none absolute left-6 top-6 z-20 h-24 w-24 rounded-full border border-white/70 bg-white/25 backdrop-blur-sm sm:left-8 sm:top-8" />
          <div className="pointer-events-none absolute -right-12 top-16 z-10 h-36 w-36 rounded-full border border-white/60 bg-white/20 backdrop-blur-sm" />

          <div className="relative z-30 flex h-full flex-col px-7 py-9 sm:px-10 sm:py-12">
            <span
              className="mb-4 inline-flex w-fit items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] sm:text-[12px]"
              style={{
                background: "rgba(255,99,51,0.1)",
                color: "#FF6333",
                border: "1px solid rgba(255,99,51,0.18)",
              }}
            >
              Up to 50% off
            </span>
            <h2 className="max-w-[330px] font-sans text-[34px] font-bold leading-[1.08] tracking-tight text-[#111111] sm:text-[46px]">
              Super Natural Beauty
            </h2>
            <p className="mt-4 max-w-[280px] text-[14px] leading-relaxed text-[#666666]">
              Creamy textures, soft botanical notes, and glow-first essentials for daily care.
            </p>
            <a
              href="/shop"
              className="mt-7 inline-flex w-fit items-center gap-3 rounded-full py-1 pl-4 pr-1 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md sm:gap-4 sm:pl-5"
              style={{
                background: "rgba(255,99,51,0.08)",
                border: "1px solid rgba(255,99,51,0.22)",
              }}
            >
              <span
                className="text-[11px] font-semibold uppercase tracking-wide sm:text-[12px]"
                style={{ color: "#FF6333" }}
              >
                Shop now
              </span>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45 sm:h-9 sm:w-9"
                style={{ backgroundColor: "#FF6333" }}
              >
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>
        </article>

        <div className="flex min-w-0 flex-col">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {BEST_SELLERS.map((product, index) => (
              <div key={product.id} className={index >= 4 ? 'hidden lg:block' : ''}>
                <ProductRow product={product} />
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="flex justify-center lg:hidden mt-6">
          <a
            href="/shop"
            className="group inline-flex w-fit items-center gap-3 rounded-full py-1 pl-4 pr-1 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md gap-4 pl-5"
            style={{
              background: "rgba(255,99,51,0.08)",
              border: "1px solid rgba(255,99,51,0.22)",
            }}
          >
            <span
              className="text-[11px] font-semibold uppercase tracking-wide text-[12px]"
              style={{ color: "#FF6333" }}
            >
              View all
            </span>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45 h-9 w-9"
              style={{ backgroundColor: "#FF6333" }}
            >
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductRow({ product }) {
  return (
    <article className="group min-w-0 rounded-[14px] border border-[#f1e8e4] bg-white p-2.5 shadow-[0_8px_22px_rgba(17,17,17,0.035)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ffd0c1] hover:bg-[#fffaf8] hover:shadow-[0_14px_28px_rgba(255,99,51,0.08)]">
      <div className="relative aspect-square w-full overflow-hidden rounded-[11px] bg-[#f6f1ef]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span
          className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full text-white opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100"
          style={{ backgroundColor: "#FF6333" }}
        >
          <ShoppingBag size={14} />
        </span>
      </div>
      <div className="pt-3">
        <h3 className="line-clamp-2 min-h-[36px] text-[12px] font-semibold leading-snug text-[#111111] transition-colors duration-300 group-hover:text-[#FF6333] sm:text-[13px]">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={11}
              fill={index < product.rating ? "#FF7373" : "#d9d9d9"}
              color={index < product.rating ? "#FF7373" : "#d9d9d9"}
              className="mr-0.5"
            />
          ))}
        </div>
        <div className="mt-2 flex flex-wrap items-baseline gap-1.5">
          <span className="inline-flex items-center text-[13px] font-bold text-[#111111] sm:text-[14px]">
            <IndianRupee size={12} strokeWidth={3} />
            {product.price}
          </span>
          <span className="inline-flex items-center text-[11px] text-[#888888] line-through sm:text-[12px]">
            <IndianRupee size={10} strokeWidth={2.5} />
            {product.oldPrice}
          </span>
        </div>
      </div>
    </article>
  );
}
