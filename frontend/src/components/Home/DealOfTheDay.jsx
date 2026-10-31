import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";

export default function DealOfTheDay() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#031424] rounded-3xl overflow-hidden shadow-2xl border border-slate-800/40 p-8 md:p-12 lg:p-16 relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Side: Image with glowing backdrop */}
        <div className="relative w-50 h-50 sm:w-60 sm:h-60 flex-shrink-0 flex items-center justify-center bg-[#061b2e] rounded-2xl border border-slate-800/60 p-4">
          <img
            src="/images/juice.png"
            alt="Summer Offer"
            className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
          />
          <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 w-16 h-16 rounded-full flex flex-col items-center justify-center font-black rotate-12 shadow-md">
            <span className="text-base leading-none">20%</span>
            <span className="text-[10px] uppercase tracking-wider leading-none">
              OFF
            </span>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="text-white text-center md:text-left flex-grow flex flex-col items-center md:items-start">
          <span className="inline-flex items-center gap-1.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Star size={12} className="fill-rose-400" /> Deal of the Day
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
            GET REFRESHED THIS SUMMER! ☀️
          </h2>
          <p className="text-slate-300 max-w-xl mb-6 leading-relaxed text-center md:text-left text-sm">
            Beat the heat. Buy 2 bottles of refreshing pure Orange Juice and get
            one absolutely Free!
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-2">
            <span className="text-xl line-through text-slate-500 font-semibold">
              ₹99
            </span>
            <span className="text-4xl font-black tracking-tight text-white">
              ₹79
            </span>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold px-2.5 py-1 rounded-lg text-xs shadow-sm">
              Save ₹20
            </span>
          </div>
          <p className="text-[10px] text-slate-500 mb-6">
            *Terms and Conditions applicable
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 h-11 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl text-xs tracking-wide transition-all duration-300 transform active:scale-[0.98] shadow-[0_4px_20px_rgba(6,182,212,0.25)] max-w-xs md:w-auto"
          >
            Grab This Deal <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
