import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowUpRight, BadgeDollarSign, Headphones, Heart,
  RotateCcw, Send, ShoppingBag, Star, Truck
} from 'lucide-react';

/* ─── Shared product data (same as Shop.jsx) ─── */
const ALL_PRODUCTS = [
  {
    id: 1, name: "Essential Hair Oil", category: "Hair Care",
    price: "₹1,299", oldPrice: "₹1,599", discount: "-20%", rating: 4, reviews: "4.00",
    description: "Nourish and revitalize your hair with our Essential Hair Oil, a luxurious blend of natural oils designed to strengthen strands, reduce frizz, and add a brilliant shine. Perfect for all hair types.",
    images: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248597983-10eb2c101598?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ['50ml', '100ml', '200ml'], tags: ['Nourishing', 'Frizz Control', 'Shine'],
  },
  {
    id: 2, name: "Women Beauty Glow", category: "Body Lotion",
    price: "₹899", oldPrice: null, discount: null, rating: 4, reviews: "4.00",
    description: "Indulge in our Women Beauty Glow lotion, crafted with vitamin-rich botanicals to leave your skin silky smooth and radiant. Non-greasy formula absorbs instantly.",
    images: [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ['150ml', '300ml'], tags: ['Vitamin-Rich', 'Non-Greasy', 'Radiant'],
  },
  {
    id: 3, name: "Dry Skin Moisturizer Lotion", category: "Skincare",
    price: "₹749", oldPrice: "₹999", discount: "-25%", rating: 5, reviews: "5.00",
    description: "A deeply hydrating formula for dry and sensitive skin. Enriched with hyaluronic acid and shea butter, it delivers 48-hour moisture retention and a soft, supple feel.",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590439472477-36353b0e363b?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ['100ml', '200ml'], tags: ['Hyaluronic Acid', 'Shea Butter', '48hr Moisture'],
  },
  {
    id: 4, name: "AntiDan Drof Shampo", category: "Hair Care",
    price: "₹599", oldPrice: null, discount: null, rating: 4, reviews: "4.00",
    description: "Clinically proven formula targets dandruff at the source. Gentle enough for daily use, it cleanses thoroughly while maintaining scalp health and hair softness.",
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248597983-10eb2c101598?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ['200ml', '400ml'], tags: ['Anti-Dandruff', 'Daily Use', 'Scalp Care'],
  },
  {
    id: 5, name: "Body Serum For Women", category: "Skincare",
    price: "₹1,499", oldPrice: null, discount: null, rating: 5, reviews: "5.00",
    description: "A luxurious body serum packed with antioxidants and peptides that visibly firms and brightens skin. Lightweight texture sinks in fast, leaving a healthy, youthful glow.",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ['30ml', '60ml'], tags: ['Peptides', 'Brightening', 'Firming'],
  },
  {
    id: 6, name: "Rose Glow Mist", category: "Body Care",
    price: "₹690", oldPrice: "₹850", discount: "-18%", rating: 4, reviews: "4.50",
    description: "A refreshing facial and body mist infused with real rose water and vitamin C. Instantly hydrates, tones, and adds a dewy glow any time of the day.",
    images: [
      "https://images.unsplash.com/photo-1590439472477-36353b0e363b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ['100ml'], tags: ['Rose Water', 'Vitamin C', 'Dewy Glow'],
  },
  {
    id: 7, name: "Vitamin C Serum", category: "Skincare",
    price: "₹850", oldPrice: "₹1,200", discount: "-29%", rating: 5, reviews: "4.80",
    description: "High-potency 20% Vitamin C serum that visibly reduces dark spots, evens skin tone, and boosts collagen. Suitable for all skin types with a lightweight, fast-absorbing formula.",
    images: [
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ['15ml', '30ml'], tags: ['Vitamin C 20%', 'Collagen Boost', 'Dark Spots'],
  },
  {
    id: 8, name: "Deep Cleanse Face Wash", category: "Face Care",
    price: "₹450", oldPrice: null, discount: null, rating: 4, reviews: "4.20",
    description: "A gentle yet effective deep-cleansing face wash that removes impurities, excess oil, and makeup without stripping natural moisture. Leaves skin refreshed and balanced.",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571781926291-c477eb3af723?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590439472477-36353b0e363b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ['100ml', '200ml'], tags: ['Deep Cleanse', 'Oil-Free', 'Balanced'],
  },
  {
    id: 9, name: "Almond Hair Mask", category: "Hair Care",
    price: "₹950", oldPrice: "₹1,150", discount: "-17%", rating: 4, reviews: "4.60",
    description: "An intensive weekly treatment enriched with sweet almond oil and keratin that repairs damage, restores elasticity, and delivers incredible softness to even the most dry, brittle hair.",
    images: [
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248597983-10eb2c101598?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    ],
    sizes: ['150ml', '300ml'], tags: ['Almond Oil', 'Keratin', 'Repair'],
  },
];

/* ─── Trust items ─── */
const TRUST_ITEMS = [
  { title: "Free Shipping", text: "Free on orders over ₹999.", icon: Truck },
  { title: "Easy Returns", text: "30-day hassle-free returns.", icon: RotateCcw },
  { title: "Best Prices", text: "Guaranteed lowest prices.", icon: BadgeDollarSign },
  { title: "24/7 Support", text: "Always here to help you.", icon: Headphones },
];

/* ─── Star renderer ─── */
function Stars({ rating }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={14}
          fill={i < rating ? '#FF6333' : 'transparent'}
          color={i < rating ? '#FF6333' : '#d1d5db'}
        />
      ))}
    </span>
  );
}

/* ─── Smart Image Gallery ─── */
function ImageGallery({ images }) {
  const [selected, setSelected] = useState(0);
  const n = images.length;

  /* Increased height for a more premium look */
  const boxH = "h-[300px] sm:h-[400px] lg:h-[500px]";

  const renderImg = (idx, extraClass = "") => (
    <div
      key={idx}
      className={`relative overflow-hidden rounded-[16px] cursor-pointer transition-all duration-300 ${selected === idx ? 'ring-2 ring-[#FF6333] ring-offset-2' : 'ring-1 ring-orange-100'} ${extraClass}`}
      onClick={() => setSelected(idx)}
    >
      <img
        src={images[idx]}
        alt={`Product ${idx + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"; }}
      />
    </div>
  );

  let gallery;

  if (n === 1) {
    /* Full width */
    gallery = <div className={`w-full ${boxH}`}>{renderImg(0, 'w-full h-full')}</div>;
  } else if (n === 2) {
    /* 50 / 50 */
    gallery = (
      <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${boxH}`}>
        {renderImg(0, 'w-full h-full')}
        {renderImg(1, 'w-full h-full')}
      </div>
    );
  } else if (n === 3) {
    /* Left 50% (1 img) | Right 50% (2 stacked) */
    gallery = (
      <div className={`flex gap-3 sm:gap-4 ${boxH}`}>
        <div className="w-1/2 h-full">{renderImg(0, 'w-full h-full')}</div>
        <div className="w-1/2 flex flex-col gap-3 sm:gap-4">
          <div className="h-[calc(50%-6px)] sm:h-[calc(50%-8px)]">{renderImg(1, 'w-full h-full')}</div>
          <div className="h-[calc(50%-6px)] sm:h-[calc(50%-8px)]">{renderImg(2, 'w-full h-full')}</div>
        </div>
      </div>
    );
  } else if (n === 4) {
    /* Left 50% (2 stacked) | Right 50% (2 stacked) */
    gallery = (
      <div className={`flex gap-3 sm:gap-4 ${boxH}`}>
        <div className="w-1/2 flex flex-col gap-3 sm:gap-4">
          <div className="h-[calc(50%-6px)] sm:h-[calc(50%-8px)]">{renderImg(0, 'w-full h-full')}</div>
          <div className="h-[calc(50%-6px)] sm:h-[calc(50%-8px)]">{renderImg(1, 'w-full h-full')}</div>
        </div>
        <div className="w-1/2 flex flex-col gap-3 sm:gap-4">
          <div className="h-[calc(50%-6px)] sm:h-[calc(50%-8px)]">{renderImg(2, 'w-full h-full')}</div>
          <div className="h-[calc(50%-6px)] sm:h-[calc(50%-8px)]">{renderImg(3, 'w-full h-full')}</div>
        </div>
      </div>
    );
  } else {
    /* 5+ images: 40% left (1 img) | 60% right grid 2×2 */
    gallery = (
      <div className={`flex gap-3 sm:gap-4 ${boxH}`}>
        <div className="w-[40%] h-full">{renderImg(0, 'w-full h-full')}</div>
        <div className="w-[60%] grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4 h-full">
          {[1, 2, 3, 4].map(i => renderImg(i, 'w-full h-full'))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {gallery}
      {/* Thumbnail strip */}
      {n > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((src, i) => (
            <button key={i} onClick={() => setSelected(i)}
              className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-[12px] overflow-hidden transition-all duration-200 focus:outline-none"
              style={{
                border: selected === i ? '2px solid #FF6333' : '2px solid transparent',
                opacity: selected === i ? 1 : 0.6
              }}
            >
              <img src={src} alt="" className="h-full w-full object-cover hover:scale-110 transition-transform duration-300" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"; }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Comment Section ─── */
function CommentSection() {
  const [comments, setComments] = useState([
    { id: 1, author: "Priya S.", avatar: "https://i.pravatar.cc/40?img=1", text: "Absolutely love this product! My hair feels so silky after using it.", time: "2 days ago", rating: 5 },
    { id: 2, author: "Ananya K.", avatar: "https://i.pravatar.cc/40?img=5", text: "Great value for money. The texture is lightweight and absorbs quickly.", time: "5 days ago", rating: 4 },
  ]);
  const [input, setInput] = useState('');

  const postComment = () => {
    if (!input.trim()) return;
    setComments(prev => [{
      id: Date.now(), author: "You", avatar: "https://i.pravatar.cc/40?img=10",
      text: input.trim(), time: "Just now", rating: 5,
    }, ...prev]);
    setInput('');
  };

  return (
    <div className="mt-6">
      <h4 className="text-[15px] font-bold text-gray-900 mb-4">Customer Reviews</h4>

      {/* Input */}
      <div className="flex items-center gap-2 mb-6">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && postComment()}
          placeholder="Write a review..."
          className="flex-1 rounded-full border border-orange-100 bg-white px-5 py-3 text-[13px] text-gray-700 outline-none focus:border-[#FF6333] transition-colors placeholder:text-gray-400"
        />
        <button
          onClick={postComment}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-all duration-300 hover:shadow-[0_6px_18px_rgba(255,99,51,0.35)] hover:scale-105"
          style={{ backgroundColor: '#FF6333' }}
          aria-label="Post review"
        >
          <Send size={15} />
        </button>
      </div>

      {/* Comments list */}
      <div className="flex flex-col gap-4">
        {comments.map(c => (
          <div key={c.id} className="flex gap-3 rounded-[16px] bg-white p-4 border border-orange-50 shadow-sm">
            <img src={c.avatar} alt={c.author} className="h-9 w-9 rounded-full object-cover shrink-0" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between flex-wrap gap-1 mb-1">
                <span className="text-[13px] font-bold text-gray-900">{c.author}</span>
                <span className="text-[11px] text-gray-400">{c.time}</span>
              </div>
              <Stars rating={c.rating} />
              <p className="mt-1.5 text-[13px] leading-relaxed text-gray-600">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = ALL_PRODUCTS.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [liked, setLiked] = useState(false);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-xl font-bold text-gray-700">Product not found.</p>
        <button onClick={() => navigate('/shop')}
          className="rounded-full bg-[#FF6333] px-6 py-3 text-sm font-bold text-white">
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <>
      {/* ── Hero — same style as ShopHero ── */}
      <section
        className="relative mx-0 h-[250px] overflow-hidden rounded-none sm:mx-4 sm:h-[300px] sm:rounded-[28px] lg:h-[330px] xl:h-[350px]"
        aria-label="Product Hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${product.images[0]}')`,
            filter: 'brightness(0.88) contrast(1.06)',
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg,rgba(10,10,10,0.88) 0%,rgba(10,10,10,0.55) 30%,rgba(10,10,10,0.05) 75%,transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg,rgba(10,10,10,0.65) 0%,rgba(10,10,10,0.15) 40%,transparent 70%)" }} />

        <div className="absolute inset-x-0 bottom-0 z-10 pb-6 text-center sm:pb-8 sm:text-left lg:pb-10">
          <div className="mx-auto flex max-w-[1400px] flex-col items-center px-4 sm:items-start sm:px-10">
            <div className="flex max-w-[600px] flex-col items-center sm:items-start gap-2">
              <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                style={{ background: 'rgba(255,99,51,0.18)', color: '#FF6333', border: '1px solid rgba(255,99,51,0.35)' }}>
                {product.category}
              </span>
              <h1 className="font-sans text-[22px] font-bold leading-tight tracking-tight text-white sm:text-[30px] lg:text-[36px]">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <Stars rating={product.rating} />
                <span className="text-[12px] text-white/65">({product.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── 75% Left ── */}
            <div className="w-full lg:w-3/4 flex flex-col gap-6">

              {/* Image Gallery */}
              <div className="w-full bg-white rounded-[24px] p-5 shadow-sm border border-orange-50">
                <ImageGallery images={product.images} />
              </div>

              {/* Bottom Row: Product Content (60%) + Comments (40%) */}
              <div className="flex flex-col md:flex-row gap-6">
                
                {/* Product Content (60%) */}
                <div className="w-full md:w-[60%] flex flex-col gap-5">
                  <div className="bg-white rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-sm border border-orange-50 h-full flex flex-col">
                    {/* Name + Like */}
                    <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                      <h2 className="font-sans text-[22px] sm:text-[26px] lg:text-[28px] font-bold leading-tight text-gray-900">{product.name}</h2>
                      <button onClick={() => setLiked(l => !l)}
                        className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-gray-50 transition-all hover:scale-105"
                        style={{ color: liked ? '#FF6333' : '#aaa' }}>
                        <Heart size={16} fill={liked ? '#FF6333' : 'none'} />
                      </button>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <Stars rating={product.rating} />
                      <span className="text-[12px] text-gray-400">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-4 sm:mb-5">
                      <span className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-gray-900">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-[15px] sm:text-[16px] text-gray-400 line-through">{product.oldPrice}</span>
                      )}
                      {product.discount && (
                        <span className="rounded-full px-2.5 py-0.5 text-[11px] sm:text-[12px] font-bold"
                          style={{ background: '#FFEBE5', color: '#FF6333' }}>
                          {product.discount}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-600 mb-5 sm:mb-6">{product.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.tags.map(tag => (
                        <span key={tag} className="rounded-full px-3 py-1 text-[11px] font-semibold"
                          style={{ background: 'rgba(255,99,51,0.07)', color: '#FF6333', border: '1px solid rgba(255,99,51,0.18)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Size selector */}
                    {product.sizes && (
                      <div className="mb-5">
                        <p className="text-[12px] font-bold uppercase tracking-widest text-gray-400 mb-2">Size</p>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map(s => (
                            <button key={s} onClick={() => setSelectedSize(s)}
                              className="rounded-full px-4 py-1.5 text-[13px] font-semibold transition-all duration-200"
                              style={{
                                background: selectedSize === s ? '#FF6333' : 'white',
                                color: selectedSize === s ? 'white' : '#FF6333',
                                border: `1px solid ${selectedSize === s ? '#FF6333' : 'rgba(255,99,51,0.3)'}`,
                              }}>
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Qty + Add to Cart */}
                    <div className="flex items-center gap-3 mt-auto pt-4">
                      <div className="flex items-center gap-1 rounded-full border border-orange-100 bg-gray-50 px-2 py-1">
                        <button onClick={() => setQty(q => Math.max(1, q - 1))}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-bold text-gray-600 hover:bg-white transition-colors">−</button>
                        <span className="w-8 text-center text-[14px] font-bold text-gray-800">{qty}</span>
                        <button onClick={() => setQty(q => q + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full text-lg font-bold text-gray-600 hover:bg-white transition-colors">+</button>
                      </div>
                      <button className="group flex-1 inline-flex items-center justify-between gap-3 rounded-full bg-[#111111] py-2 pl-5 pr-2 text-white transition-all duration-300 hover:bg-[#FF6333]">
                        <span className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide">
                          <ShoppingBag size={14} /> Add to Cart
                        </span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45">
                          <ArrowUpRight size={14} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Comments (40%) */}
                <div className="w-full md:w-[40%] bg-white rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-sm border border-orange-50 h-full overflow-y-auto max-h-[600px] scrollbar-hide">
                  <CommentSection />
                </div>
                
              </div>
            </div>

            {/* ── 25% Right Sidebar ── */}
            <aside className="w-full lg:w-1/4 shrink-0">
              <div className="lg:sticky lg:top-24 flex flex-col gap-5 sm:gap-6 lg:gap-8">

                {/* Trust Cards */}
                <div className="overflow-hidden rounded-[24px] shadow-sm border border-orange-100/40">
                  {/* Header */}
                  <div className="px-5 py-4"
                    style={{ background: "linear-gradient(160deg,#0d0d0d 0%,#1a1008 60%,#0f0a05 100%)", borderBottom: "1px solid rgba(255,99,51,0.12)" }}>
                    <h3 className="text-[14px] sm:text-[15px] font-bold text-white">Why Shop With Us</h3>
                  </div>

                  {/* Responsive Grid: 2 cols mobile, 4 tablet, 2 desktop */}
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-px bg-orange-50">
                    {TRUST_ITEMS.map(({ title, text, icon: Icon }) => (
                      <div key={title} className="flex flex-col gap-2 bg-white p-4 hover:bg-orange-50/50 transition-colors">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-sm"
                          style={{ background: '#FF6333' }}>
                          <Icon size={16} strokeWidth={2.2} />
                        </span>
                        <div>
                          <p className="text-[12px] font-bold text-gray-900">{title}</p>
                          <p className="text-[11px] leading-snug text-gray-500 mt-0.5">{text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-4"
                    style={{ background: "linear-gradient(160deg,#0f0a05 0%,#1a1008 50%,#0d0d0d 100%)", borderTop: "1px solid rgba(255,99,51,0.12)" }}>
                    <p className="text-[11px] text-white/50 text-center">Trusted by 50,000+ customers</p>
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="rounded-[24px] bg-white p-5 sm:p-6 shadow-sm border border-orange-50">
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-gray-900 mb-4">Product Details</h4>
                  <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-col gap-2 sm:gap-x-6 sm:gap-y-3 lg:gap-2">
                    {[
                      { label: "Category", value: product.category },
                      { label: "Rating", value: `${product.rating}/5` },
                      { label: "Availability", value: "In Stock" },
                      { label: "SKU", value: `GF-${String(product.id).padStart(4, '0')}` },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                        <span className="text-[12px] text-gray-400 font-medium">{label}</span>
                        <span className="text-[12px] font-bold text-gray-800">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}
