import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = [
  { name: "Fruits", img: "/images/fruits.jpg", link: "/Fruits" },
  { name: "Vegetables", img: "/images/vege.jpg", link: "/vegetables" },
  { name: "Dairy", img: "/images/c3.jpg", link: "/dairy-products" },
  { name: "Meat", img: "/images/meat.jpg", link: "/meat" },
  { name: "Snacks", img: "/images/snacks.jpg", link: "/snacks" },
  { name: "Drinks", img: "/images/drink.jpg", link: "/beverages" },
  { name: "Frozen", img: "/images/frozen.jpg", link: "/frozen" },
  { name: "Sweets", img: "/images/sweet.jpg", link: "/sweets" },
  { name: "Canned", img: "/images/canned.jpg", link: "/canned-products" },
  { name: "Bakery", img: "/images/cake.jpg", link: "/bakery" },
  { name: "Rice & Grains", img: "/images/rice.jpg", link: "/rice" },
  { name: "Biscuits", img: "/images/biscuit.jpg", link: "/biscuits" },
];

export default function CategoriesSection() {
  const categoryScrollRef = useRef(null);

  const scrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#031424] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-slate-800/40">
        {/* Header & Scroll Controls */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Shop by Category
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Browse through our wide range of products
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollCategories("left")}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-md active:scale-95 transition-transform duration-150 ease-out cursor-pointer transform-gpu"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollCategories("right")}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-md active:scale-95 transition-transform duration-150 ease-out cursor-pointer transform-gpu"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Optimized Horizontal Scroll Grid */}
        <div
          className="flex gap-5 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory transform-gpu"
          ref={categoryScrollRef}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {CATEGORIES.map((cat, idx) => (
            <Link
              to={cat.link}
              key={idx}
              className="flex-none w-36 sm:w-44 bg-[#061b2e] rounded-2xl p-3 border border-slate-800/60 text-center shadow-sm group hover:border-cyan-500/40 transition-all duration-200 ease-out snap-start transform-gpu backface-hidden"
            >
              <div className="aspect-square rounded-xl bg-slate-950 overflow-hidden mb-3 transform-gpu">
                <img
                  src={cat.img}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out transform-gpu will-change-transform"
                />
              </div>
              <span className="font-bold text-slate-200 text-xs sm:text-sm group-hover:text-cyan-400 transition-colors duration-200 block truncate">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
