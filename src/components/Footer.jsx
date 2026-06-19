import { ArrowUpRight, Leaf, Rabbit, Sparkles, ShieldCheck } from "lucide-react";

/* ── Shared logo SVG ── */
function Logo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M6 4C6 4 13 12 16 16C19 20 26 28 26 28"
        stroke="#FF6333"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M26 4C26 4 19 12 16 16C13 20 6 28 6 28"
        stroke="#FF6333"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const TRUST_FEATURES = [
  { icon: Leaf, label: "ORGANIC" },
  { icon: Rabbit, label: "CRUELTY FREE" },
  { icon: Sparkles, label: "RADIANT" },
  { icon: ShieldCheck, label: "TESTED" },
];

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mb-3 overflow-hidden rounded-none bg-[#0a0a0a] text-white sm:mx-4 sm:mb-4 sm:rounded-[28px]">
      <div className="mx-auto max-w-[1400px]">
        {/* ── Top Section: 2 Columns ── */}
        <div className="flex flex-col md:flex-row">
          
          {/* Left Column */}
          <div className="flex flex-1 flex-col justify-center px-5 py-8 md:p-14 lg:p-16">
            <a href="/" className="mb-7 flex items-center gap-2.5 sm:mb-10">
              <Logo size={28} />
              <span className="text-[24px] font-bold leading-none tracking-tight text-white sm:text-[28px]">
                GlowFix
              </span>
            </a>
            
            <h2 className="mb-3 text-[21px] font-semibold text-white sm:mb-4 sm:text-[30px]">
              Premium Cosmetic Experts
            </h2>
            <p className="mb-8 max-w-[400px] text-[13px] leading-relaxed text-white/60 sm:mb-12 sm:text-[15px]">
              At GlowFix, we take pride in offering a curated collection of high-quality, cruelty-free cosmetic products and skincare routines you can trust.
            </p>
            
            {/* Trusted Icons / Features */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-10">
              {TRUST_FEATURES.map((feature) => (
                <div key={feature.label} className="flex flex-col items-center gap-2">
                  <feature.icon size={21} className="text-white/80 sm:size-6" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/50 sm:text-[10px]">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column with Seamless Image Background */}
          <div className="relative flex flex-1 flex-col justify-center px-5 py-8 md:p-14 lg:p-16">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: "url('/images/hero2.png')" }}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />
            
            {/* Gradient mask on the left side to fade seamlessly from the left column's black background */}
            <div 
              className="hidden md:block absolute inset-y-0 left-0 w-32 lg:w-48 z-10 pointer-events-none" 
              style={{ background: "linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.8) 40%, transparent 100%)" }}
            />
            
            {/* Gradient mask on the top side for mobile stacking */}
            <div 
              className="md:hidden absolute inset-x-0 top-0 h-32 z-10 pointer-events-none" 
              style={{ background: "linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0.8) 40%, transparent 100%)" }}
            />

            {/* Content Container */}
            <div className="relative z-20">
              <h2 className="mb-3 max-w-[400px] text-[21px] font-semibold text-white sm:mb-4 sm:text-[30px]">
                Let’s Talk Skincare Solutions
              </h2>
              <p className="mb-7 max-w-[400px] text-[13px] leading-relaxed text-white/60 sm:mb-10 sm:text-[15px]">
                Whether you need a new daily routine, advice on our product line, our friendly team is ready to help you glow.
              </p>
              
              <div>
                <a
                  href="/shop"
                  className="group inline-flex items-center gap-4 rounded-full bg-white py-1.5 pl-5 pr-1.5 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md sm:gap-5 sm:pl-7"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-black sm:text-[13px]">
                    Shop Now
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

        {/* ── Bottom Section: Thin Copyright Bar ── */}
        <div className="mx-5 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:mx-8 sm:flex-row sm:gap-6 md:mx-14 lg:mx-16">
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-medium text-white/70 transition-colors hover:text-white sm:text-[13px]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-center text-[12px] text-white/50 sm:text-right sm:text-[13px]">
            © 2025 GlowFix. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
