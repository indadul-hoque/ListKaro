import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, Star, ShoppingBag, ArrowRight } from "lucide-react";

const FLASH_PRODUCTS = [
  {
    id: 1,
    name: "Organic Farm Apples",
    category: "Fresh Produce",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviews: 124,
    img: "/images/fruits.jpg",
    badge: "Bestseller",
    badgeColor: "bg-amber-500",
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
    badge: "Fresh",
    badgeColor: "bg-emerald-500",
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
    badge: "20% OFF",
    badgeColor: "bg-rose-500",
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
    badge: "Hot Deal",
    badgeColor: "bg-cyan-500",
  },
];

export default function FlashDeals() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#031424] rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800/40">
        {/* Header, Countdown Timer & View All Button Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-rose-500/10 text-rose-500 border border-rose-500/20 rounded-2xl">
              <Zap size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  Flash Deals
                </h2>
                <span className="bg-rose-500 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm">
                  Live Now
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Limited stock items at unbelievable prices
              </p>
            </div>
          </div>

          {/* Right Side Container: Countdown Box & View All Button Side-by-Side */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Countdown Box */}
            <div className="flex items-center gap-2 bg-[#061b2e] border border-slate-800/60 text-white px-4 py-2 rounded-2xl shadow-inner">
              <span className="text-xs font-semibold text-slate-400 mr-1">
                Ends In:
              </span>
              <div className="flex items-center gap-1 font-mono text-sm font-bold">
                <span className="bg-slate-900 px-2 py-1 rounded text-cyan-400 border border-slate-800">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span>:</span>
                <span className="bg-slate-900 px-2 py-1 rounded text-cyan-400 border border-slate-800">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span>:</span>
                <span className="bg-slate-900 px-2 py-1 rounded text-cyan-400 border border-slate-800">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* View All Flash Deals Button */}
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-5 h-[42px] bg-[#061b2e] hover:bg-slate-900 text-cyan-400 hover:text-cyan-300 border border-slate-800/80 hover:border-cyan-500/40 font-bold rounded-2xl text-xs tracking-wide transition-all duration-300 transform active:scale-[0.98] shadow-md"
            >
              View All <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FLASH_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#061b2e] rounded-2xl border border-slate-800/60 p-4 relative group hover:shadow-xl hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-3 relative bg-slate-950">
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-2 left-2 ${prod.badgeColor} text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-sm uppercase`}
                >
                  {prod.badge}
                </span>
              </div>
              <h4 className="font-bold text-white text-sm truncate">
                {prod.name}
              </h4>
              <div className="flex items-center gap-1 my-1">
                <Star size={12} className="fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-slate-300">
                  {prod.rating}
                </span>
                <span className="text-[10px] text-slate-400">
                  ({prod.reviews})
                </span>
              </div>
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-800/60">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-black text-white text-base">
                    ₹{prod.price}
                  </span>
                  <span className="text-xs text-slate-500 line-through font-medium">
                    ₹{prod.originalPrice}
                  </span>
                </div>
                <button className="p-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl shadow-md active:scale-95 transition-all cursor-pointer">
                  <ShoppingBag size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
