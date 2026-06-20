import React, { useState } from 'react';
import ShopHero from '../components/shop/ShopHero';
import { ProductRow } from '../components/shop/ProductCard';
import OurProducts from '../components/home/OurProducts';

const SHOP_PRODUCTS = [
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
  {
    id: 7,
    name: "Vitamin C Serum",
    category: "SKINCARE",
    price: "₹850",
    oldPrice: "₹1,200",
    discount: "-29%",
    rating: 5,
    reviews: "4.80",
    image1: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=600&q=80",
    image2: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Deep Cleanse Face Wash",
    category: "FACE CARE",
    price: "₹450",
    oldPrice: null,
    discount: null,
    rating: 4,
    reviews: "4.20",
    image1: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=600&q=80",
    image2: "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Almond Hair Mask",
    category: "HAIR CARE",
    price: "₹950",
    oldPrice: "₹1,150",
    discount: "-17%",
    rating: 4,
    reviews: "4.60",
    image1: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80",
    image2: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  }
];

export default function Shop() {
  const [likedProducts, setLikedProducts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(SHOP_PRODUCTS.length / ITEMS_PER_PAGE);
  const paginatedProducts = SHOP_PRODUCTS.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <ShopHero />
      <div className="bg-[#f6f7f9] py-12">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar Filter */}
            <aside className="w-full lg:w-1/4 shrink-0">
              {/* Sticky wrapper — holds filter + offer banner together */}
              <div className="sticky top-24 flex flex-col gap-5">

                {/* Filter Card */}
                <div className="overflow-hidden rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-orange-100/40">

                  {/* Card Header — dark gradient matching sidebar */}
                  <div
                    className="flex items-center justify-between px-6 py-5"
                    style={{
                      background: "linear-gradient(160deg, #0d0d0d 0%, #1a1008 60%, #0f0a05 100%)",
                      borderBottom: "1px solid rgba(255,99,51,0.12)",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full"
                        style={{ background: "rgba(255,99,51,0.15)", border: "1px solid rgba(255,99,51,0.3)" }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                          <path d="M3 6h18M7 12h10M11 18h2" stroke="#FF6333" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <h3 className="text-[16px] font-bold tracking-tight text-white">Filter By</h3>
                    </div>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest"
                      style={{ background: "rgba(255,99,51,0.15)", color: "#FF6333", border: "1px solid rgba(255,99,51,0.25)" }}
                    >
                      Active
                    </span>
                  </div>

                  {/* Card Body — filters */}
                  <div className="bg-white px-6 py-5">
                    {/* Categories */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-4 text-[13px] uppercase tracking-widest text-gray-400">Categories</h4>
                      <ul className="space-y-3">
                        {['Hair Care', 'Body Lotion', 'Skincare', 'Fragrance', 'Makeup'].map(cat => (
                          <li key={cat} className="flex items-center gap-3">
                            <input type="checkbox" id={cat} className="h-4 w-4 rounded border-gray-300 text-[#FF6333] focus:ring-[#FF6333] cursor-pointer accent-[#FF6333]" />
                            <label htmlFor={cat} className="text-[14px] font-medium text-gray-600 hover:text-[#FF6333] transition-colors cursor-pointer">{cat}</label>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price Range */}
                    <div>
                      <h4 className="font-semibold mb-4 text-[13px] uppercase tracking-widest text-gray-400">Price Range</h4>
                      <ul className="space-y-3">
                        {['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', 'Over ₹2000'].map(price => (
                          <li key={price} className="flex items-center gap-3">
                            <input type="checkbox" id={price} className="h-4 w-4 rounded border-gray-300 text-[#FF6333] focus:ring-[#FF6333] cursor-pointer accent-[#FF6333]" />
                            <label htmlFor={price} className="text-[14px] font-medium text-gray-600 hover:text-[#FF6333] transition-colors cursor-pointer">{price}</label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer — dark gradient + home-page CTA button */}
                  <div
                    className="px-6 py-5"
                    style={{
                      background: "linear-gradient(160deg, #0f0a05 0%, #1a1008 50%, #0d0d0d 100%)",
                      borderTop: "1px solid rgba(255,99,51,0.12)",
                    }}
                  >
                    <button className="group w-full inline-flex items-center justify-between gap-4 rounded-full bg-white py-1.5 pl-5 pr-1.5 shadow-sm transition-shadow duration-300 ease-out hover:shadow-md">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-black">
                        Apply Filters
                      </span>
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 ease-out group-hover:rotate-45"
                        style={{ backgroundColor: "#FF6333" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7v10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </div>

                </div>


                {/* Offer Banner */}
                <div className="relative overflow-hidden rounded-[24px] min-h-[280px] flex flex-col justify-end">
                  {/* BG Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=600&q=80')`,
                      filter: "brightness(0.92) contrast(1.05)",
                    }}
                  />
                  {/* Left dark gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.18) 100%)",
                    }}
                  />
                  {/* Bottom gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(10,10,10,0.80) 0%, rgba(10,10,10,0.30) 50%, rgba(10,10,10,0) 100%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col gap-3 p-6 pb-7">
                    <span
                      className="inline-flex w-fit items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                      style={{
                        background: "rgba(255,99,51,0.18)",
                        color: "#FF6333",
                        border: "1px solid rgba(255,99,51,0.35)",
                      }}
                    >
                      Limited Offer
                    </span>
                    <h4 className="font-sans text-[22px] font-bold leading-tight tracking-tight text-white">
                      Up to{" "}
                      <span style={{ color: "#FF6333" }}>50% Off</span>{" "}
                      on Beauty Picks
                    </h4>
                    <p className="text-[12px] leading-relaxed text-white/65">
                      Grab premium skincare &amp; beauty essentials at unbeatable prices. Today only!
                    </p>
                    <a
                      href="/shop"
                      className="mt-1 inline-flex w-fit items-center gap-2 rounded-full py-2 pl-4 pr-2 text-[11px] font-bold uppercase tracking-wide transition-shadow duration-300 hover:shadow-[0_6px_18px_rgba(255,99,51,0.35)]"
                      style={{ background: "#FF6333", color: "#ffffff" }}
                    >
                      Shop Now
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path d="M7 17L17 7M17 7H7M17 7v10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

              </div>{/* end sticky wrapper */}
            </aside>



            {/* Right Product Grid */}
            <div className="w-full lg:w-3/4">
              {/* Toolbar */}
              <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white rounded-[20px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-orange-100/50">
                <p className="text-[14px] font-medium text-gray-600 pl-2">
                  Showing <span className="font-bold text-gray-900">{paginatedProducts.length}</span> of <span className="font-bold text-gray-900">{SHOP_PRODUCTS.length}</span> products
                </p>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <label htmlFor="sort" className="text-[13px] font-semibold text-gray-500 whitespace-nowrap">Sort by:</label>
                  <select id="sort" className="w-full sm:w-auto text-[14px] border border-gray-100 bg-gray-50 rounded-xl text-gray-700 py-2 pl-3 pr-8 focus:ring-[#FF6333] focus:border-[#FF6333] outline-none hover:bg-white transition-colors cursor-pointer">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>New Arrivals</option>
                  </select>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {paginatedProducts.map((product) => (
                  <ProductRow
                    key={product.id}
                    product={{ ...product, image: product.image1 }}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center gap-2">
                  {/* Prev */}
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                      borderColor: "rgba(255,99,51,0.3)",
                      color: "#FF6333",
                      background: "rgba(255,99,51,0.06)",
                    }}
                    aria-label="Previous page"
                  >
                    ‹
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-semibold transition-all duration-200"
                      style={{
                        background: currentPage === page ? "#FF6333" : "rgba(255,99,51,0.06)",
                        color: currentPage === page ? "#ffffff" : "#FF6333",
                        border: currentPage === page ? "none" : "1px solid rgba(255,99,51,0.3)",
                        boxShadow: currentPage === page ? "0 4px 14px rgba(255,99,51,0.3)" : "none",
                      }}
                      aria-label={`Page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next */}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{
                      borderColor: "rgba(255,99,51,0.3)",
                      color: "#FF6333",
                      background: "rgba(255,99,51,0.06)",
                    }}
                    aria-label="Next page"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Related Products — same UI as home Explore New Arrivals */}
      <OurProducts
        eyebrow="Related Products"
        headingMain="You May"
        headingHighlight="Also Like"
      />
    </>
  );
}
