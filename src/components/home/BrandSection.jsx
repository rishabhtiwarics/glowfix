import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function BrandSection() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    const togglePlay = () => {
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) {
            v.play();
            setPlaying(true);
        } else {
            v.pause();
            setPlaying(false);
        }
    };

    return (
        <section className="w-full pt-6 sm:pt-8 lg:pt-12" aria-label="Brand showcase">
            <div className="mx-auto max-w-[1400px] px-3 sm:px-4">
                <div className="relative flex flex-col lg:flex-row items-stretch gap-6">
                    {/* Left: Video 60% */}
                    <div className="w-full lg:w-3/5 relative overflow-hidden rounded-[18px] bg-black">
                        <video
                            ref={videoRef}
                            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                            src="/videos/brand.mp4"
                            poster="/images/brand-poster.jpg"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />

                        {/* Play/Pause floating button */}
                        <button
                            onClick={togglePlay}
                            aria-pressed={playing}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0 z-30 inline-flex items-center justify-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-lg transition-transform duration-200 hover:scale-105"
                            style={{
                                backdropFilter: "blur(6px)",
                            }}
                        >
                            <span
                                className="flex h-6 w-6 items-center justify-center rounded-full text-white"
                                style={{ backgroundColor: "#FF6333" }}
                            >
                                {playing ? (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="6" y="5" width="4" height="14" fill="white" />
                                        <rect x="14" y="5" width="4" height="14" fill="white" />
                                    </svg>
                                ) : (
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 3v18l15-9L5 3z" fill="white" />
                                    </svg>
                                )}
                            </span>
                            <span className="text-[13px] font-semibold text-[#111111]">{playing ? "Pause" : "Play"}</span>
                        </button>

                        {/* Low-opacity decorative element (right-bottom) */}
                        <div className="pointer-events-none absolute right-0 bottom-0 z-10 h-36 w-36 rounded-full bg-[#FF6333] opacity-10 blur-2xl" />
                    </div>

                    {/* Right: Content 40% */}
                    <div className="w-full lg:w-2/5 relative overflow-hidden rounded-[18px] bg-transparent px-4 py-6">
                        <div className="relative z-10 flex flex-col justify-between h-full items-center text-center lg:items-start lg:text-left">
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em]"
                                    style={{ background: "rgba(255,99,51,0.06)", color: "#FF6333", border: "1px solid rgba(255,99,51,0.12)" }}>
                                    Brand
                                </span>
                                <h3 className="font-sans text-[24px] font-bold leading-tight tracking-tight text-[#111111] mb-3">Discover the signature brands shaping your glow</h3>
                                <p className="text-[14px] leading-relaxed text-[#666666] mb-5">Browse premium formulas, trusted rituals, and clean beauty stories designed for radiant skin. Every brand is chosen for quality, sustainability, and everyday luxury.</p>
                            </div>

                            <div className="flex flex-col gap-2 w-full">
                                <div className="rounded-[16px] bg-[#fff4ef] p-3 text-sm text-[#333333]">
                                    <p className="font-semibold">Glow essentials</p>
                                    <p className="mt-1 text-[#6b6b6b]">Curated picks for hydration and glow.</p>
                                </div>
                                <div className="rounded-[16px] bg-[#fff4ef] p-3 text-sm text-[#333333]">
                                    <p className="font-semibold">Sustainable care</p>
                                    <p className="mt-1 text-[#6b6b6b]">Clean ingredients and mindful rituals.</p>
                                </div>
                            </div>

                            <a href="/brands" className="mt-6 inline-flex items-center gap-3 rounded-full py-1 pl-4 pr-2 transition-shadow duration-300 ease-out hover:shadow-md w-fit"
                                style={{ background: "rgba(255,99,51,0.08)", border: "1px solid rgba(255,99,51,0.18)" }}>
                                <span className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: "#FF6333" }}>Explore Brands</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{ backgroundColor: "#FF6333" }}>
                                    <ArrowUpRight size={14} />
                                </span>
                            </a>
                        </div>

                        <div className="pointer-events-none absolute right-5 bottom-5 opacity-20">
                            <div className="relative mb-6 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
                                {/* Rotating Circular Text SVG */}
                                <svg
                                    className="absolute inset-0 h-full w-full pointer-events-none"
                                    viewBox="0 0 100 100"
                                    style={{ animation: "beautyRealmSpin 15s linear infinite" }}
                                >
                                    <path
                                        id="circleTextPath"
                                        d="M 50, 50 m -42, 0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                                        fill="none"
                                    />
                                    <text
                                        className="font-semibold uppercase tracking-[0.2em]"
                                        style={{ fill: "#FF6333", fontSize: "7.5px" }}
                                    >
                                        <textPath href="#circleTextPath" startOffset="0%">
                                            Realm of Beauty • Natural Glow • Organic Care •
                                        </textPath>
                                    </text>
                                </svg>

                                {/* Center Image */}
                                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-orange-100 shadow-sm sm:h-24 sm:w-24">
                                    <img
                                        src="/images/BeautyRealm.png"
                                        alt="Beauty Realm"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
