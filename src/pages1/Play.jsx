import React, { useState } from "react";

function Play() {
  const [isLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const allGames = [
    { id: 1, title: "Warzone", image: "/assets/games-slider1/browse-game-img-1.webp" },
    { id: 2, title: "Redsquad", image: "/assets/games-slider1/browse-game-img-2.webp" },
    { id: 3, title: "Cyborg", image: "/assets/games-slider1/browse-game-img-3.webp" },
    { id: 4, title: "Headshot", image: "/assets/games-slider1/browse-game-img-4.webp" },
    { id: 5, title: "Cyberpunk", image: "/assets/games-slider1/browse-game-img-5.webp" },
    { id: 6, title: "Army", image: "/assets/games-slider1/browse-game-img-6.webp" },
    { id: 7, title: "Holigans", image: "/assets/games-slider1/browse-game-img-7.webp" },
    { id: 8, title: "Anonymous", image: "/assets/games-slider1/browse-game-img-8.webp" },
    { id: 9, title: "Soldier", image: "/assets/games-slider1/browse-game-img-9.webp" },
    { id: 10, title: "Ninja", image: "/assets/games-slider1/browse-game-img-10.webp" },
    { id: 11, title: "Pirats", image: "/assets/games-slider1/browse-game-img-11.webp" },
    { id: 12, title: "Spartan", image: "/assets/games-slider1/browse-game-img-12.webp" },
    { id: 13, title: "Cyborg", image: "/assets/games-slider1/browse-game-img-14.webp" },
    { id: 14, title: "Head", image: "/assets/games-slider1/browse-game-img-15.webp" },
    { id: 15, title: "Sword Shield", image: "/assets/games-slider1/browse-game-img-16.webp" },
    { id: 16, title: "Head Hunter", image: "/assets/games-slider1/browse-game-img-17.webp" },
    { id: 17, title: "Archer", image: "/assets/games-slider1/browse-game-img-18.webp" },
    { id: 18, title: "Cyberpunk", image: "/assets/games-slider1/browse-game-img-19.webp" },
    { id: 19, title: "Gunslinger", image: "/assets/games-slider1/browse-game-img-20.webp" },
    { id: 20, title: "Cyberpunk", image: "/assets/games-slider1/browse-game-img-21.webp" },
  ];

  return (
    <div className="bg-[#181820] min-h-screen">

      {/* ================= BANNER ================= */}
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
            Play as you go
          </h1>
          <p className="text-gray-300 text-sm">
            Home <span className="mx-2">›</span> play
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


      {/* ================= GAMES LIST ================= */}
      <div className="pt-14 pb-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">

          <h2 className="text-center text-3xl font-bold text-white mb-14">
            <span className="text-yellow-500">Games</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
            {allGames.map((res) => (
              <div className="group" key={res.id}>
                <div className="overflow-hidden rounded-2xl border-2 border-[#36363e] group-hover:border-yellow-500 transition-all duration-300">
                  <img
                    src={res.image}
                    alt={res.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="mt-4 text-center text-white text-lg font-semibold">
                  {res.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

export default Play;
