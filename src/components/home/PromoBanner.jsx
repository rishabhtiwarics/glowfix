import React from "react";

export default function PromoBanner() {
  return (
    <section className="relative mx-0 overflow-hidden rounded-none sm:mx-4 sm:rounded-[28px]" aria-label="Promotion Banner">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80")',
        }}
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
      />
      <div className="mx-auto max-w-[1400px]">
        <div
          className="relative flex h-[68px] items-center justify-center overflow-hidden  sm:h-[104px] "
        >
          {/* Content */}
          <div className="relative z-10 w-full px-3 text-center">
            <h2 className="overflow-hidden text-ellipsis whitespace-nowrap font-sans text-[14px] font-bold tracking-tight text-white sm:text-[22px] lg:text-[28px]">
              20% off all beauty products to first purchase
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
