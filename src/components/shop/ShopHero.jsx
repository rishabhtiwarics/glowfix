import { ArrowUpRight } from "lucide-react";

export default function ShopHero() {
  return (
    <section
      className="relative mx-0 h-[250px] overflow-hidden rounded-none sm:mx-4 sm:h-[300px] sm:rounded-[28px] lg:h-[330px] xl:h-[350px]"
      aria-label="Shop Hero"
    >
      {/* Background Container */}
      <div className="absolute inset-0 h-full w-full">
        {/* BG image */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1920&q=80')`,
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
      </div>

      {/* Hero content — bottom center on mobile, bottom left on sm+ */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-6 text-center sm:pb-8 sm:text-left lg:pb-10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center px-4 sm:items-start sm:px-10">
          <div className="flex max-w-[640px] flex-col items-center sm:items-start">
            {/* Heading */}
            <h1 className="font-sans text-[24px] font-bold leading-[1.08] tracking-tight text-white sm:text-[32px] lg:text-[40px]">
              Our Shop
            </h1>

            {/* Subtitle */}
            <div className="mt-2 flex max-w-md flex-col items-center gap-2 sm:mt-4 sm:max-w-lg sm:flex-row sm:items-start sm:gap-3">
              <span
                className="hidden sm:block mt-1 w-px shrink-0 self-stretch"
                style={{ backgroundColor: "rgba(255,99,51,0.5)" }}
              />
              <p className="text-[12px] leading-relaxed text-white/75 sm:text-[13px]">
                Discover our exclusive collection of beauty products. Premium formulas, trusted rituals, and clean beauty stories designed for radiant skin.
              </p>
            </div>

            {/* CTA button */}
            <div className="mt-4 sm:mt-5">
              <button
                className="group inline-flex items-center gap-3 rounded-full bg-white py-1 pl-4 pr-1 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md sm:gap-4 sm:pl-5"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: 'smooth'
                  });
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wide text-black sm:text-[11px]">
                  Explore Products
                </span>
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45 sm:h-8 sm:w-8"
                  style={{ backgroundColor: "#FF6333" }}
                >
                  <ArrowUpRight size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
