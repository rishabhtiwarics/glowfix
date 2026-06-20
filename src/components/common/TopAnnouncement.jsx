const ITEMS = [
  {
    text: "Summer Glow Event: All Skincare Sets ",
    highlight: "20% Off",
    suffix: " This Month! ",
    linkText: "Shop Now!",
    linkHref: "/shop",
    isFirst: true,
  },
  {
    text: "Free Shipping on All Orders Over $50 — ",
    linkText: "Shop Collection",
    href: "/shop",
  },
  {
    text: "Buy 2 Get 1 Free on Select Lipsticks! ",
    linkText: "Grab Yours",
    href: "/shop",
  },
  {
    text: "New Arrivals: Try our Hydrating Serum for ",
    linkText: "Just $29!",
    href: "/shop/new",
  },
];

// Flame/spark icon separator instead of plain dot
function Separator() {
  return (
    <span
      className="select-none px-2"
      aria-hidden="true"
      style={{ color: "#FF6333" }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "inline", verticalAlign: "middle" }}
      >
        {/* snowflake / asterisk style icon fitting HVAC theme */}
        <path
          d="M6 1v10M1 6h10M2.5 2.5l7 7M9.5 2.5l-7 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}

function Item({ index }) {
  const item = ITEMS[index % ITEMS.length];

  if (item.isFirst) {
    return (
      <span className="inline-flex items-center whitespace-nowrap px-5 text-[12px] font-medium leading-none text-neutral-600 sm:px-8 sm:text-[13px]">
        {item.text}
        <span className="font-semibold" style={{ color: "#FF6333" }}>
          {item.highlight}
        </span>
        {item.suffix}
        <a
          href={item.linkHref}
          className="ml-1 font-semibold transition-colors duration-300 ease-out"
          style={{ color: "#FF6333" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#E5572B")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#FF6333")}
        >
          {item.linkText}
        </a>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center whitespace-nowrap px-5 text-[12px] font-medium leading-none text-neutral-600 sm:px-8 sm:text-[13px]">
      {item.text}
      <a
        href={item.href}
        className="ml-1 font-semibold transition-colors duration-300 ease-out"
        style={{ color: "#FF6333" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#E5572B")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#FF6333")}
      >
        {item.linkText}
      </a>
    </span>
  );
}

const SEQUENCE = Array.from({ length: 8 }, (_, i) => i);

export default function TopAnnouncement() {
  return (
    <div
      className="relative z-40 flex h-9 w-full items-center overflow-hidden sm:h-11"
      style={{ backgroundColor: "#f6f7f9" }}
    >
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

      <div
        className="flex w-max items-center"
        style={{
          animation: "marquee 55s linear infinite",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {SEQUENCE.map((i) => (
          <span key={i} className="inline-flex items-center">
            <Item index={i} />
            <Separator />
          </span>
        ))}
        {SEQUENCE.map((i) => (
          <span key={`d-${i}`} className="inline-flex items-center">
            <Item index={i} />
            <Separator />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
