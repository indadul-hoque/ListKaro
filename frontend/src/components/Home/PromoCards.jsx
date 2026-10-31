import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PromoCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#031424] rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-800/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* ===== LEFT COLUMN: Snacks & Munchies Content ===== */}
        <div className="lg:col-span-4 flex flex-col items-start space-y-4">
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
            🔥 TRENDING
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Snacks & Munchies
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed break-words whitespace-normal max-w-sm">
            Explore our wide range of crispy chips & healthy snacks perfect for
            your cravings!
          </p>

          {/* Coupon Tag Container */}
          <div className="flex items-center gap-2 bg-[#061b2e] border border-slate-800/60 rounded-xl px-3 py-2 text-xs w-full max-w-xs">
            <span className="text-slate-400">
              Use Code: <strong className="text-amber-400">IamHungry</strong>
            </span>
            <span className="ml-auto font-black bg-yellow-400 text-slate-950 px-1.5 py-0.5 rounded text-[10px]">
              20% OFF
            </span>
          </div>

          {/* Modern Gradient Button */}
          <Link
            to="/products"
            className="w-full max-w-xs h-11 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl text-xs tracking-wide transition-all duration-300 transform active:scale-[0.98] shadow-[0_4px_20px_rgba(6,182,212,0.25)] flex items-center justify-center gap-1 cursor-pointer"
          >
            Shop Now <ArrowRight size={14} />
          </Link>
        </div>

        {/* ===== CENTER COLUMN: Main Image Focus ===== */}
        <div className="lg:col-span-4 aspect-square max-w-[320px] mx-auto w-full rounded-2xl overflow-hidden shadow-xl border border-slate-800/40">
          <img
            src="/images/snacks.jpg"
            alt="Snacks Preview"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ===== RIGHT COLUMN: Daily Essentials Content ===== */}
        <div className="lg:col-span-4 flex flex-col items-start space-y-4">
          <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
            🌿 FRESH
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Daily Essentials
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed break-words whitespace-normal max-w-sm">
            From farm-fresh vegetables to premium pantry staples, everything you
            need in one place.
          </p>

          {/* Coupon Tag Container */}
          <div className="flex items-center gap-2 bg-[#061b2e] border border-slate-800/60 rounded-xl px-3 py-2 text-xs w-full max-w-xs">
            <span className="text-slate-400">
              Use Code: <strong className="text-emerald-400">FreshStart</strong>
            </span>
            <span className="ml-auto font-black bg-emerald-400 text-slate-950 px-1.5 py-0.5 rounded text-[10px]">
              10% OFF
            </span>
          </div>

          {/* Modern Gradient Button */}
          <Link
            to="/products"
            className="w-full max-w-xs h-11 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl text-xs tracking-wide transition-all duration-300 transform active:scale-[0.98] shadow-[0_4px_20px_rgba(6,182,212,0.25)] flex items-center justify-center gap-1 cursor-pointer"
          >
            Shop Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
