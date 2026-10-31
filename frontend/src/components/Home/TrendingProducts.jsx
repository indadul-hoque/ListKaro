import React, { useState } from "react";
import {
  Star,
  ShoppingBag,
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    name: "Organic Farm Apples",
    category: "Fresh Produce",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviews: 124,
    img: "/images/fruits.jpg",
  },
  {
    id: 2,
    name: "Fresh Whole Milk 1L",
    category: "Dairy",
    price: 66,
    originalPrice: 75,
    rating: 4.9,
    reviews: 310,
    img: "/images/c3.jpg",
  },
  {
    id: 3,
    name: "Crispy Potato Chips",
    category: "Snacks",
    price: 40,
    originalPrice: 50,
    rating: 4.6,
    reviews: 89,
    img: "/images/snacks.jpg",
  },
  {
    id: 4,
    name: "Pure Orange Juice 1L",
    category: "Beverages",
    price: 79,
    originalPrice: 99,
    rating: 4.7,
    reviews: 215,
    img: "/images/drink.jpg",
  },
  {
    id: 5,
    name: "Farm Fresh Tomatoes",
    category: "Fresh Produce",
    price: 35,
    originalPrice: 45,
    rating: 4.7,
    reviews: 95,
    img: "/images/vege.jpg",
  },
  {
    id: 6,
    name: "Crunchy Biscuits Pack",
    category: "Snacks",
    price: 30,
    originalPrice: 40,
    rating: 4.5,
    reviews: 140,
    img: "/images/biscuit.jpg",
  },
];

export default function TrendingProducts() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 translate-x-0");

  const ITEMS_PER_PAGE = 4;

  const filteredProducts =
    activeTab === "All"
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter((p) => p.category === activeTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  const handleSlideChange = (direction) => {
    const slideOutClass =
      direction === "next"
        ? "opacity-0 -translate-x-6"
        : "opacity-0 translate-x-6";

    setFadeState(slideOutClass);

    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return prev + 1 >= filteredProducts.length ? 0 : prev + 1;
        } else {
          return prev === 0
            ? Math.max(0, filteredProducts.length - 1)
            : prev - 1;
        }
      });

      const slideInStartClass =
        direction === "next"
          ? "opacity-0 translate-x-6"
          : "opacity-0 -translate-x-6";

      setFadeState(slideInStartClass);

      setTimeout(() => {
        setFadeState("opacity-100 translate-x-0");
      }, 50);
    }, 200);
  };

  const getVisibleProducts = () => {
    if (filteredProducts.length === 0) return [];
    const visible = [];
    for (
      let i = 0;
      i < Math.min(ITEMS_PER_PAGE, filteredProducts.length);
      i++
    ) {
      const index = (currentIndex + i) % filteredProducts.length;
      visible.push(filteredProducts[index]);
    }
    return visible;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#031424] rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-800/40">
        {/* Header, Filter Tabs & Slider Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Trending Products
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Top selected items based on recent popularity
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-[#061b2e] border border-slate-800/60 p-1.5 rounded-2xl">
              {["All", "Fresh Produce", "Dairy", "Snacks", "Beverages"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-2">
              <button
                onClick={() => handleSlideChange("prev")}
                className="p-2 rounded-xl bg-[#061b2e] border border-slate-800/60 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 shadow-md active:scale-95 transition-all cursor-pointer"
                aria-label="Previous Products"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleSlideChange("next")}
                className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-md active:scale-95 transition-all cursor-pointer"
                aria-label="Next Products"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid with Transitions */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300 ease-in-out transform ${fadeState}`}
        >
          {visibleProducts.map((prod, idx) => (
            <div
              key={`${prod.id}-${idx}`}
              className="bg-[#061b2e] rounded-2xl border border-slate-800/60 p-4 shadow-sm hover:shadow-xl hover:border-cyan-500/30 transition-all duration-300 group relative"
            >
              {/* Quick Actions Hover Overlay */}
              <div className="aspect-square rounded-xl bg-slate-950 overflow-hidden mb-3 relative">
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-[2px]">
                  <button className="p-2.5 bg-white text-slate-900 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition-all cursor-pointer">
                    <Heart size={16} />
                  </button>
                  <button className="p-2.5 bg-white text-slate-900 rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition-all cursor-pointer">
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                {prod.category}
              </span>
              <h4 className="font-bold text-white text-base truncate mt-0.5">
                {prod.name}
              </h4>

              <div className="flex items-center gap-1 my-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={
                      i < Math.floor(prod.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-slate-700"
                    }
                  />
                ))}
                <span className="text-xs font-semibold text-slate-400 ml-1">
                  {prod.rating}
                </span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                <div>
                  <span className="text-xs text-slate-400 block">Price</span>
                  <span className="font-black text-white text-lg">
                    ₹{prod.price}
                  </span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer">
                  <ShoppingBag size={14} /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
