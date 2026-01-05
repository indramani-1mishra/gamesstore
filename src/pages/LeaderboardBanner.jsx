import React from "react";

export default function LeaderboardBanner() {
  return (
    <section className="relative w-full h-[360px] md:h-[420px] bg-[#0b0720] overflow-hidden">

      {/* 🔹 BACKGROUND IMAGE / LINES */}
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/banner-about-bg.webp')",
        }}
      />

  

      {/* 🔹 CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

        {/* LEFT TEXT */}
        <div className="text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Leaderboard
          </h1>
          <p className="text-gray-300 text-sm">
            Home <span className="mx-2">›</span> Leaderboard
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden md:flex items-center justify-center w-[620px] h-full">

          {/* 🔵 CIRCLE (BEHIND TROPHY) */}
          <img
            src="/assets/play-shape-1.webp"
            alt="planet"
            className="absolute w-[150px] opacity-90 right-8 top-16 ms-5"
            style={{ animation: "rotate360 1s linear infinite" }}
          />

          {/* 🏆 TROPHY (FRONT) */}
          <img
            src="/assets/banner-play-go-illus.webp"
            alt="trophy"
            className="relative w-[400px] z-10 me-4 mt-20"
            style={{
    animation: "spinSlow 18s linear infinite",
  }}
          />
        </div>
      </div>
    </section>
  );
}
