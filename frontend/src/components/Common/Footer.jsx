import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full text-slate-400 dark:text-slate-400 transition-colors duration-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Link Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 border-t border-slate-200/10">
          {/* Brand Profile Section */}
          <div className="col-span-1 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                <img
                  src="/images/logo.png"
                  alt="ListKaro"
                  className="h-7 w-auto object-contain"
                />
              </div>
              <span className="font-black text-2xl text-white tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                ListKaro
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your premium, ultra-fast hub for fresh groceries, home staples,
              and essentials delivered directly to your doorstep in 45 minutes
              flat.
            </p>
          </div>

          {/* Category Links Column */}
          <div className="flex flex-col space-y-3.5">
            <h4 className="font-bold text-white tracking-wider text-[11px] uppercase opacity-90">
              Categories
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <Link
                to="/dairy-products"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Dairy Products
              </Link>
              <Link
                to="/Fruits"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Fruits & Berries
              </Link>
              <Link
                to="/vegetables"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Fresh Vegetables
              </Link>
              <Link
                to="/canned-products"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Canned Packets
              </Link>
              <Link
                to="/snacks"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Snacks & Treats
              </Link>
            </div>
          </div>

          {/* About Us Links Column */}
          <div className="flex flex-col space-y-3.5">
            <h4 className="font-bold text-white tracking-wider text-[11px] uppercase opacity-90">
              About Us
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <Link
                to="/about"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Our Company
              </Link>
              <Link
                to="/about"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Developers Team
              </Link>
              <Link
                to="/about"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                News & Blog
              </Link>
              <Link
                to="/about"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Contact Support
              </Link>
            </div>
          </div>

          {/* Support Links Column */}
          <div className="flex flex-col space-y-3.5">
            <h4 className="font-bold text-white tracking-wider text-[11px] uppercase opacity-90">
              Support
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <Link
                to="/completepayment"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Secure Payment
              </Link>
              <a
                href="#"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Delivery Timings
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Easy Returns
              </a>
              <Link
                to="/faq"
                className="hover:text-cyan-400 transform hover:translate-x-1 transition-all duration-200 text-slate-400"
              >
                Help & FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Information Section */}
        <div className="border-t border-slate-200/5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 ListKaro. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-400 transition-colors">
              Cookie Controls
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
