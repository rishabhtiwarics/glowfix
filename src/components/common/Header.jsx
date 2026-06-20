import {
  ArrowUpRight,
  ChevronDown,
  Facebook,
  Instagram,
  LogIn,
  LogOut,
  Menu,
  Search,
  ShoppingCart,
  Twitter,
  User,
  UserPlus,
  Youtube,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const SHOP_CATEGORIES = [
  {
    name: "Hair Care & Styling",
    desc: "2+ items",
    href: "/shop/hair-care",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Hair Removal (Epilation)",
    desc: "15+ items",
    href: "/shop/hair-removal",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Fragrances",
    desc: "10+ items",
    href: "/shop/fragrances",
    image:
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Skincare",
    desc: "20+ items",
    href: "/shop/skincare",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Makeup",
    desc: "30+ items",
    href: "/shop/makeup",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Body Care",
    desc: "12+ items",
    href: "/shop/body-care",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=200&q=80",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
];

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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [sidebarUser, setSidebarUser] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when sidebar is open */
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    if (!sidebarOpen) {
      setCategoriesOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const savedUser =
      window.localStorage.getItem("glowfixUser") ||
      window.localStorage.getItem("user");

    if (!savedUser) return;

    try {
      setSidebarUser(JSON.parse(savedUser));
    } catch {
      setSidebarUser(null);
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem("glowfixUser");
    window.localStorage.removeItem("user");
    setSidebarUser(null);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* ── Main header bar ── */}
      <header
        className={`absolute inset-x-0 z-30 transition-all duration-300 ease-out ${scrolled
          ? "fixed top-0 bg-transparent"
          : "top-9 sm:top-11 bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:h-20 sm:px-10">

          {/* Logo */}
          <a href="/" className="flex shrink-0 items-center gap-2.5">
            <Logo size={24} />
            <span className="text-[19px] font-semibold leading-none tracking-tight text-white sm:text-[22px]">
              GlowFix
            </span>
          </a>

          {/* Right side: CTA + icon pill */}
          <div className="flex items-center gap-3">
            {/* All icons grouped in a dark-bordered pill */}
            <div
              className="flex items-center gap-0.5 rounded-full px-1.5 py-1.5"
              style={{
                background: "rgba(0,0,0,0.35)",
                border: "1px solid rgba(255,255,255,0.55)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Search — hidden on mobile */}
              <button
                aria-label="Search"
                className="hidden h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 sm:flex"
              >
                <Search size={17} />
              </button>

              {/* User — hidden on mobile */}
              <button
                aria-label="Account"
                className="hidden h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 sm:flex"
              >
                <User size={17} />
              </button>

              {/* Cart — always visible */}
              <button
                aria-label="Cart"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
              >
                <ShoppingCart size={17} />
              </button>

              {/* Thin divider */}
              <span className="mx-1 h-4 w-px bg-white/40" />

              {/* Burger — ALL screen sizes */}
              <button
                aria-label="Open menu"
                className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={18} />
              </button>
            </div>
            {/* Shop Now CTA pill */}
            <a
              href="/contact"
              className="group hidden sm:flex items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md"
            >
              <span className="text-[13px] font-semibold uppercase leading-none tracking-wide text-black">
                Shop Now
              </span>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45"
                style={{ backgroundColor: "#FF6333" }}
              >
                <ArrowUpRight size={18} />
              </span>
            </a>


          </div>
        </div>
      </header>

      {/* ── Backdrop overlay ── */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${sidebarOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* ── Sidebar panel wrapper — slides left → right ── */}
      <div
        className={`fixed left-0 top-0 z-50 h-full transition-transform duration-300 ease-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <aside
          className="flex h-full flex-col overflow-hidden w-[min(320px,100vw)] rounded-none sm:m-4 sm:h-[calc(100%-32px)] sm:w-[340px] sm:rounded-[28px]"
          style={{ background: "#0d0d0d" }}
        >

          {/* ── Sidebar HEADER — dark gradient ── */}
          <div
            className="flex shrink-0 items-center justify-between px-6 pb-5 pt-6 "
            style={{
              background:
                "linear-gradient(160deg, #0d0d0d 0%, #1a1008 60%, #0f0a05 100%)",
              borderBottom: "1px solid rgba(255,99,51,0.12)",
            }}
          >
            <a
              href="/"
              className="flex items-center gap-2.5"
              onClick={() => setSidebarOpen(false)}
            >
              <Logo size={24} />
              <span className="text-[20px] font-semibold leading-none tracking-tight text-white">
                GlowFix
              </span>
            </a>
            <button
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          {/* ── Sidebar BODY — white background ── */}
          <div
            className="sidebar-thin-scroll flex-1 overflow-y-auto"
            style={{ background: "#ffffff" }}
          >
            <div className="px-4 pt-5 sm:hidden">
              {sidebarUser ? (
                <div className="rounded-3xl border border-orange-100 bg-orange-50/70 p-3.5">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        sidebarUser.image ||
                        sidebarUser.avatar ||
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                      }
                      alt={sidebarUser.name || "User"}
                      className="h-12 w-12 rounded-2xl object-cover ring-2 ring-white"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[14px] font-bold text-neutral-900">
                        {sidebarUser.name || "GlowFix User"}
                      </p>
                      <p className="truncate text-[11px] text-neutral-500">
                        {sidebarUser.email || "user@glowfix.com"}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#111111] px-4 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#FF6333]"
                    onClick={handleLogout}
                  >
                    <LogOut size={15} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="rounded-3xl border border-orange-100 bg-orange-50/70 p-3.5">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-[0_8px_18px_rgba(255,99,51,0.22)]"
                      style={{ background: "#FF6333" }}
                    >
                      <User size={20} />
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-neutral-900">
                        Welcome
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        Login to manage your account
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="/login"
                      className="flex items-center justify-center gap-1.5 rounded-full bg-[#111111] px-3 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#FF6333]"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <LogIn size={14} />
                      Login
                    </a>
                    <a
                      href="/register"
                      className="flex items-center justify-center gap-1.5 rounded-full border border-orange-200 bg-white px-3 py-2.5 text-[11px] font-bold uppercase tracking-wide text-[#FF6333] transition-colors hover:bg-orange-50"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <UserPlus size={14} />
                      Register
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-4 pt-5 sm:pt-6">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between border-b border-neutral-100 py-4 text-[15px] font-medium text-neutral-800 transition-colors hover:text-[#FF6333]"
                  onClick={() => setSidebarOpen(false)}
                >
                  {item.label}
                  <ArrowUpRight size={15} className="text-neutral-300" />
                </a>
              ))}
            </nav>

            {/* Shop categories */}
            <div className="px-4 pb-6 pt-5">
              <button
                type="button"
                aria-expanded={categoriesOpen}
                className="flex w-full items-center justify-between rounded-full border border-orange-100 bg-orange-50/70 px-4 py-3 text-left transition-colors hover:bg-orange-50"
                onClick={() => setCategoriesOpen((open) => !open)}
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500">
                  Shop Categories
                </span>
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-white transition-transform duration-300 ${categoriesOpen ? "rotate-180" : ""
                    }`}
                  style={{ backgroundColor: "#FF6333" }}
                >
                  <ChevronDown size={16} strokeWidth={2.4} />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${categoriesOpen ? "max-h-[292px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="sidebar-thin-scroll mt-3 flex max-h-[276px] flex-col gap-2 overflow-y-auto pr-1">
                  {SHOP_CATEGORIES.map((cat) => (
                    <a
                      key={cat.name}
                      href={cat.href}
                      className="group flex items-center gap-3 rounded-2xl border border-neutral-100 bg-neutral-50 p-2.5 transition-all hover:border-orange-100 hover:bg-orange-50"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="h-10 w-10 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-semibold text-neutral-800 group-hover:text-[#FF6333]">
                          {cat.name}
                        </p>
                        <p className="text-[11px] text-neutral-400">{cat.desc}</p>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-neutral-300 transition-colors group-hover:text-[#FF6333]"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Sidebar FOOTER — dark gradient with social follow icons ── */}
          <div
            className="shrink-0 px-6 pb-7 pt-5"
            style={{
              background:
                "linear-gradient(160deg, #0f0a05 0%, #1a1008 50%, #0d0d0d 100%)",
              borderTop: "1px solid rgba(255,99,51,0.12)",
            }}
          >
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/50 transition-all duration-200 hover:text-white"
                  style={{ border: "1px solid rgba(255,255,255,0.12)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,99,51,0.5)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

        </aside>
      </div>

      <style>{`
        .sidebar-thin-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .sidebar-thin-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
