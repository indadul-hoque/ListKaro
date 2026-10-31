import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // handle email submission
  const handleEmailSubmission = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/subscribe", {
        email,
      });
      alert(res.data.message);
      setEmail("");
    } catch (err) {
      alert(err.response?.data?.message || "Failed! Something went wrong.");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="bg-[#031424] rounded-3xl overflow-hidden shadow-2xl border border-slate-800/40 grid md:grid-cols-12 gap-8 items-center p-8 sm:p-10 lg:p-14">
        {/* Left Side: Copy & Subscription Form */}
        <div className="md:col-span-7 text-white space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
            Get Top Deals, Latest Trends & More
          </h2>
          <p className="text-sm text-slate-300 max-w-md leading-relaxed">
            Join our exclusive inner circle to get early updates on weekly flash
            promotions, custom coupons, and special deals.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 pt-2 max-w-md"
            onSubmit={handleEmailSubmission}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-[#061b2e] border border-slate-800/80 text-white placeholder-slate-500 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 flex-grow transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="h-11 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl text-xs tracking-wide transition-all duration-300 transform active:scale-[0.98] shadow-[0_4px_20px_rgba(6,182,212,0.25)] flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {isSubscribed ? (
            <p className="text-xs text-emerald-400 font-semibold pt-1 animate-fadeIn">
              ✓ Thank you for subscribing! Check your inbox soon.
            </p>
          ) : (
            <p className="text-[11px] text-slate-500 flex items-center gap-1 pt-1">
              🔒 We respect your privacy. Unsubscribe anytime.
            </p>
          )}
        </div>

        {/* Right Side: Image Focus */}
        <div className="md:col-span-5 h-48 md:h-full flex items-center justify-center">
          <img
            src="/images/newsletternight.png"
            alt="Newsletter"
            className="max-h-56 w-auto rounded-2xl object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
