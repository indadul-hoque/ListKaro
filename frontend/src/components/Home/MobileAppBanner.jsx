import React from "react";
import { Smartphone, QrCode } from "lucide-react";

export default function MobileAppBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl border border-cyan-500/20">
        {/* Left Side: Content & App Store Links */}
        <div className="max-w-xl text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Smartphone size={14} /> Shop On The Go
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Download the ListKaro Mobile App
          </h2>
          <p className="text-cyan-100 text-sm leading-relaxed mb-6">
            Get exclusive mobile app deals, live order tracking on Map, and
            instant notifications for daily fresh flash discounts.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              className="h-11 px-5 bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Get on Google Play"
            >
              <span>Google Play</span>
            </button>
            <button
              className="h-11 px-5 bg-slate-950 hover:bg-slate-900 text-white border border-slate-800 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Download on App Store"
            >
              <span>App Store</span>
            </button>
          </div>
        </div>

        {/* Right Side: QR Code Card */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-2xl bg-slate-950/40 backdrop-blur-md border border-white/20 p-4 flex flex-col items-center justify-center text-center shadow-xl">
            <span className="text-xs font-bold text-cyan-200 mb-3 flex items-center gap-1.5">
              <QrCode size={14} /> Scan to Install
            </span>
            <div className="w-32 h-32 bg-white rounded-xl p-2 flex flex-col items-center justify-center text-slate-950 font-black text-xs text-center border border-slate-200">
              [ QR CODE ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
