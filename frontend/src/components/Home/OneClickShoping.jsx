import React from "react";
import { Link } from "react-router-dom";
import { Zap, Upload } from "lucide-react";

export default function OneClickShopping() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#031424] rounded-3xl border border-slate-800/40 shadow-2xl overflow-hidden grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-12">
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-flex items-center gap-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Zap size={12} /> Smart Feature
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight leading-none">
            One Click Shopping
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
            Upload your handwritten or typed grocery list and we'll
            automatically prepare your full cart. No more infinite browsing—just
            upload, verify, and check out!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 py-2">
            <div className="flex items-center gap-3 bg-[#061b2e] p-3 rounded-xl border border-slate-800/60">
              <div className="w-7 h-7 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-sm">
                1
              </div>
              <span className="text-xs font-semibold text-slate-300">
                Upload list
              </span>
            </div>
            <div className="flex items-center gap-3 bg-[#061b2e] p-3 rounded-xl border border-slate-800/60">
              <div className="w-7 h-7 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-sm">
                2
              </div>
              <span className="text-xs font-semibold text-slate-300">
                We prepare it
              </span>
            </div>
            <div className="flex items-center gap-3 bg-[#061b2e] p-3 rounded-xl border border-slate-800/60">
              <div className="w-7 h-7 rounded-full bg-cyan-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-sm">
                3
              </div>
              <span className="text-xs font-semibold text-slate-300">
                Delivered to you
              </span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/uploadlist"
              className="inline-flex items-center justify-center gap-2 px-6 h-11 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl text-xs tracking-wide transition-all duration-300 transform active:scale-[0.98] shadow-[0_4px_20px_rgba(6,182,212,0.25)] max-w-xs md:w-auto"
            >
              <Upload size={14} /> Upload Your List
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 h-64 lg:h-full min-h-[280px] rounded-2xl overflow-hidden shadow-inner relative group bg-[#061b2e] border border-slate-800/60 p-2">
          <img
            src="/images/shopping.jpg"
            alt="One Click Shopping"
            className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
