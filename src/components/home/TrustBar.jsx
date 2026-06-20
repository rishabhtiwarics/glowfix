import { BadgeDollarSign, Headphones, RotateCcw, Truck } from "lucide-react";

const TRUST_ITEMS = [
  {
    title: "Free Shipping",
    text: "Free Shipping for orders over $130.",
    icon: Truck,
  },
  {
    title: "Return Policy",
    text: "Within 30 days for an exchange.",
    icon: RotateCcw,
  },
  {
    title: "Save Money",
    text: "Shop smart and save bigger.",
    icon: BadgeDollarSign,
  },
  {
    title: "Support 24/7",
    text: "Support 24 hours a day, 7 days a week.",
    icon: Headphones,
  },
];

export default function TrustBar() {
  return (
    <section
      className="relative w-full overflow-hidden py-6 sm:py-8 lg:py-12"
      style={{ background: "#f6f7f9" }}
      aria-label="Store benefits"
    >
      {/* ── Trust Cards ── */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-2 gap-2.5 px-3 sm:grid-cols-2 sm:gap-3 sm:px-4 lg:grid-cols-4">
        {TRUST_ITEMS.map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className="group flex flex-col items-center justify-center gap-2.5 rounded-2xl border bg-white/95 backdrop-blur-sm px-2.5 py-3.5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(17,17,17,0.08)] sm:flex-row sm:justify-start sm:gap-4 sm:px-5 sm:py-5 sm:text-left"
            style={{ borderColor: "rgba(255,99,51,0.12)" }}
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-[0_8px_18px_rgba(255,99,51,0.22)] transition-transform duration-300 group-hover:rotate-6 sm:h-12 sm:w-12"
              style={{ background: "#FF6333" }}
            >
              <Icon size={20} strokeWidth={2.2} />
            </span>
            <span className="min-w-0">
              <h3 className="text-[12px] font-bold leading-tight text-[#111111] sm:text-[15px]">
                {title}
              </h3>
              <p className="mt-1 text-[10px] leading-snug text-neutral-500 sm:text-[13px] sm:leading-relaxed">
                {text}
              </p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
