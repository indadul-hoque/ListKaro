import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ArrowRight,
  Truck,
  Clock,
  ShieldCheck,
  Upload,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  Gift,
  Zap,
  ShoppingBag,
  Heart,
  Eye,
  CheckCircle,
  Smartphone,
  TrendingUp,
  Percent,
} from "lucide-react";

import Testimonials from "../../components/Home/Testimonials";
import TrendingProducts from "../../components/Home/TrendingProducts";
import PromoCards from "../../components/Home/PromoCards";
import FlashDeals from "../../components/Home/FlashDeals";
import Categories from "../../components/Home/Categories";
import DealOfTheDay from "../../components/Home/DealOfTheDay";
import OneClickShopping from "../../components/Home/OneClickShoping";
import MobileAppBanner from "../../components/Home/MobileAppBanner";
import Newsletter from "../../components/Home/NewsLetter";
import Footer from "../../components/Common/Footer";

const HERO_SLIDES = [
  {
    img: "/images/c1.jpg",
    title: "Farm Fresh\nDelivered Daily",
    subtitle: "Quality groceries at your doorstep in 45 minutes",
    cta: "Shop Now",
    link: "/products",
  },
  {
    img: "/images/c2.jpg",
    title: "Save Big on\nWeekly Essentials",
    subtitle: "Up to 50% off on fruits, vegetables & dairy",
    cta: "View Offers",
    link: "/products",
  },
  {
    img: "/images/c3.jpg",
    title: "One Click\nShopping List",
    subtitle: "Upload your list and we'll prepare everything",
    cta: "Try Now",
    link: "/uploadlist",
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideInterval = useRef(null);

  // Auto-slide hero
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(slideInterval.current);
  }, []);

  // handle slide
  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // handle slide navigation
  const nextSlide = () => goToSlide((currentSlide + 1) % HERO_SLIDES.length);
  const prevSlide = () =>
    goToSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[500px] md:h-[650px] overflow-hidden bg-slate-950">
        <div className="relative w-full h-full">
          {HERO_SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.img}
                alt=""
                className="w-full h-full object-cover transform scale-105 transition-transform duration-[5000ms] ease-out object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 top-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white z-20">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest w-max mb-3 backdrop-blur-md">
                  <Sparkles size={14} /> Express Supermarket Delivery
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight whitespace-pre-line leading-tight drop-shadow-sm">
                  {slide.title}
                </h1>
                <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-200 max-w-md drop-shadow">
                  {slide.subtitle}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link
                    to={slide.link}
                    className="inline-flex items-center justify-center gap-2 px-6 h-11 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl text-xs tracking-wide transition-all duration-300 transform active:scale-[0.98] shadow-[0_4px_20px_rgba(6,182,212,0.25)]"
                  >
                    {slide.cta} <ArrowRight size={14} />
                  </Link>
                  <Link
                    to="/uploadlist"
                    className="inline-flex items-center justify-center gap-2 px-6 h-11 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-xl text-xs tracking-wide backdrop-blur-md transition-all duration-300"
                  >
                    Upload List <Upload size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hero Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all cursor-pointer"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 transition-all cursor-pointer"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Hero Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2.5">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide
                  ? "bg-cyan-400 w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ========== FEATURES BAR ========== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-30 mb-16">
        <div className="bg-gray-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700/50 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-xl">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                45 Min Delivery
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Lightning fast to your door
              </p>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-green-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                100% Fresh
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Quality guaranteed always
              </p>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Easy Returns
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                No questions asked
              </p>
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Best Prices
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Save more every day
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CATEGORIES ========== */}
      <Categories />

      {/* ========== FLASH SALE COUNTDOWN SECTION ========== */}
      <FlashDeals />

      {/* ========== PROMO CARDS ========== */}
      <PromoCards />

      {/* ========== TREND FEATURED PRODUCTS SECTION ========== */}
      <TrendingProducts />

      {/* ========== DEAL OF THE DAY ========== */}
      <DealOfTheDay />

      {/* ========== ONE CLICK SHOPPING ========== */}
      <OneClickShopping />

      {/* ========== TESTIMONIALS / SOCIAL PROOF ========== */}
      <Testimonials />

      {/* ========== MOBILE APP PROMO BANNER ========== */}
      {/* <MobileAppBanner /> */}

      {/* ========== NEWSLETTER ========== */}
      <Newsletter />

      {/* ========== FOOTER ========== */}
      <Footer />
    </div>
  );
}

export default Home;
