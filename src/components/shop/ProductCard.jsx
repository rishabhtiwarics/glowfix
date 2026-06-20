import { Heart, ShoppingBag, Star } from "lucide-react";

export default function ProductCard({ product, liked, onToggleLike }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          size={12}
          fill={i <= rating ? "#FF6333" : "transparent"}
          color={i <= rating ? "#FF6333" : "#d1d5db"}
          className="mr-0.5 inline-block"
        />
      );
    }
    return stars;
  };

  return (
    <article className="group bg-white rounded-lg sm:rounded-xl lg:rounded-2xl border border-orange-100/80 p-3 sm:p-4 transition-all duration-300 hover:shadow-[0_12px_28px_rgba(255,99,51,0.05)] hover:border-orange-200/80 flex flex-col justify-between h-full relative overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full aspect-square rounded-lg sm:rounded-xl bg-[#f6f7f9] overflow-hidden mb-3 sm:mb-4">
        {/* Discount Badge */}
        {product.discount && (
          <span
            className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded shadow-sm"
            style={{ background: "#FFEBE5", color: "#FF6333" }}
          >
            {product.discount}
          </span>
        )}

        {/* Heart Wishlist Icon */}
        <button
          onClick={(e) => {
            e.preventDefault();
            if (onToggleLike) onToggleLike(product.id);
          }}
          className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10 flex h-7 sm:h-8 w-7 sm:w-8 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 transition-all duration-200 hover:scale-105"
          style={{ color: liked ? "#FF6333" : "#888888" }}
          aria-label="Add to wishlist"
        >
          <Heart size={14} fill={liked ? "#FF6333" : "none"} />
        </button>

        {/* First Image (slides up to top) */}
        <img
          src={product.image1}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:-translate-y-full"
          loading="lazy"
        />
        {/* Second Image (slides up from bottom) */}
        <img
          src={product.image2}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"
          loading="lazy"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col flex-grow text-left">
        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
          {product.category}
        </span>
        <h3 className="font-sans text-[13px] sm:text-[14px] font-bold text-gray-800 leading-snug tracking-tight mb-2 group-hover:text-[#FF6333] transition-colors duration-200 min-h-[36px] sm:min-h-[40px]">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {renderStars(product.rating)}
          <span className="text-[8px] sm:text-[10px] font-medium text-gray-400 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex min-w-0 flex-wrap items-baseline gap-1.5 sm:gap-2">
            <span className="text-[14px] sm:text-[16px] font-bold text-gray-900">
              {product.price}
            </span>
            {product.oldPrice && (
              <span className="text-[10px] sm:text-[12px] text-gray-400 line-through">
                {product.oldPrice}
              </span>
            )}
          </div>

          <button
            type="button"
            className="inline-flex h-8 sm:h-9 w-8 sm:w-9 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(255,99,51,0.22)]"
            style={{ backgroundColor: "#FF6333" }}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProductRow({ product }) {
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
            <span className="mr-0.5 text-[12px]">₹</span>
            {product.price}
          </span>
          <span className="inline-flex items-center text-[11px] text-[#888888] line-through sm:text-[12px]">
            <span className="mr-0.5 text-[10px]">₹</span>
            {product.oldPrice}
          </span>
        </div>
      </div>
    </article>
  );
}
