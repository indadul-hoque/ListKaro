import React, { useState } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Aarav Sharma",
    role: "Verified Customer",
    comment:
      "ListKaro delivered my fresh grocery list within 35 minutes! The quality of fruits and vegetables was top-notch.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav",
  },
  {
    name: "Priya Patel",
    role: "Frequent Shopper",
    comment:
      "The 'One Click Shopping List' feature saved me so much time. I just uploaded my handwritten list and checked out!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
  },
  {
    name: "Rohan Gupta",
    role: "Verified Customer",
    comment:
      "Amazing discounts and incredible speed. ListKaro has completely changed how our home orders weekly kitchen supplies.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan",
  },
  {
    name: "Sneha Reddy",
    role: "Verified Customer",
    comment:
      "The produce is always fresh, and customer support resolves any issue instantly. Highly recommended!",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
  },
  {
    name: "Vikram Malhotra",
    role: "Frequent Shopper",
    comment:
      "Great pricing and unbeatable delivery speed. Best grocery platform I have used so far.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
  },
  {
    name: "Ananya Roy",
    role: "Verified Customer",
    comment:
      "Super easy ordering experience. Packing quality is excellent and items arrive fully intact every single time.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
  },
];

export default function Testimonials() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 translate-x-0");
  const VISIBLE_COUNT = 3;

  const handleSlideChange = (direction) => {
    // 1. Fade out & slide off direction
    const slideOutClass =
      direction === "next"
        ? "opacity-0 -translate-x-6"
        : "opacity-0 translate-x-6";

    setFadeState(slideOutClass);

    // 2. Wait for fade-out, update index, and slide back in
    setTimeout(() => {
      setCurrentTestimonialIndex((prev) => {
        if (direction === "next") {
          return prev + 1 >= TESTIMONIALS.length ? 0 : prev + 1;
        } else {
          return prev === 0 ? Math.max(0, TESTIMONIALS.length - 1) : prev - 1;
        }
      });

      // Prepare starting position for slide-in
      const slideInStartClass =
        direction === "next"
          ? "opacity-0 translate-x-6"
          : "opacity-0 -translate-x-6";

      setFadeState(slideInStartClass);

      // Animate to full visibility
      setTimeout(() => {
        setFadeState("opacity-100 translate-x-0");
      }, 50);
    }, 200);
  };

  // Get current slice of testimonials (handles circular looping)
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      const index = (currentTestimonialIndex + i) % TESTIMONIALS.length;
      visible.push(TESTIMONIALS[index]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-[#031424] rounded-3xl border border-slate-800/40 shadow-2xl p-8 lg:p-12">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Customer Feedback
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-1 whitespace-nowrap">
              Loved by Thousands of Households
            </h2>
          </div>

          {/* Previous & Next Buttons */}
          <div className="flex gap-2 self-end sm:self-auto">
            <button
              onClick={() => handleSlideChange("prev")}
              className="p-2.5 rounded-xl bg-[#061b2e] border border-slate-800/60 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-900 shadow-md active:scale-95 transition-all cursor-pointer"
              aria-label="Previous Feedback"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleSlideChange("next")}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-md active:scale-95 transition-all cursor-pointer"
              aria-label="Next Feedback"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Grid with Slide/Fade Transition */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300 ease-in-out transform ${fadeState}`}
        >
          {visibleTestimonials.map((t, idx) => (
            <div
              key={`${t.name}-${idx}`}
              className="bg-[#061b2e] p-6 rounded-2xl border border-slate-800/60 shadow-sm flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/60">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full bg-slate-900 border border-cyan-500/20"
                />
                <div>
                  <h5 className="font-bold text-white text-sm">{t.name}</h5>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle size={10} /> {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
