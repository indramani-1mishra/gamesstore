import React, { useEffect, useState } from "react";
import axios from 'axios'
function GamesPage() {
  const [isLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [allGames,setallgames]=useState([]);
  useEffect(()=>{
    getallgame();
  },[])

 {/** const allGames = [
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
  ]; */}
   const getallgame = async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/games/');
        const games = res.data.data;
        setallgames(games);
    } catch (err) {
        console.log(err);
    }
};
    
  return (
    <div className="bg-[#181820] min-h-screen overflow-x-hidden">

      {/* ================= BANNER ================= */}
      <section
        className="relative h-[280px] sm:h-[340px] md:h-[420px] lg:h-[460px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/banner-about-bg.webp')" }}
      >
        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10"></div>

        {/* center glow image */}
        <img
          src="/assets/game-banner-illus-2.png"
          alt="center illustration"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[180px] sm:w-[220px] md:w-[280px] opacity-50 z-20 hidden sm:block"
        />

        <div className="relative z-30 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">

              {/* LEFT CONTENT */}
              <div className="text-white text-center md:text-left">

                <div className="relative inline-block">
                  <img
                    src="/assets/images/game-banner-illus-1.png"
                    alt="decoration"
                    className="absolute -left-[70px] top-1/2 -translate-y-1/2 w-[70px] hidden md:block"
                  />

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-12 md:mt-16">
                    Games
                  </h2>
                </div>

                <div className="flex justify-center md:justify-start gap-2 text-sm text-gray-300 mt-3">
                  <span>Home</span>
                  <span>›</span>
                  <span>Pages</span>
                  <span>›</span>
                  <span className="text-yellow-400 font-semibold">Games</span>
                </div>
              </div>

              {/* RIGHT IMAGES */}
              <div className="relative hidden md:block h-[420px]">

                <img
                  src="/assets/game-banner-illus-4.webp"
                  alt="character"
                  className="absolute bottom-0 right-[180px] w-[180px] lg:w-[200px] drop-shadow-2xl"
                />

                <img
                  src="/assets/game-banner-illus-3.webp"
                  alt="trophy"
                  className="absolute bottom-[80px] right-[20px] w-[160px] lg:w-[180px] drop-shadow-xl"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= GAMES LIST ================= */}
      <div className="pt-16 sm:pt-20 pb-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          <h2 className="text-center text-2xl sm:text-3xl font-bold text-white mb-10">
            <span className="text-yellow-500">Games</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 lg:gap-8">
            {allGames.map((res) => (
              <div key={res.id} className="group">
                <div className="overflow-hidden rounded-xl border-2 border-[#36363e] group-hover:border-yellow-500 transition">
                  <img
                    src={res.gameimage}
                    alt={res.gametitle}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-3 text-center text-white text-sm sm:text-base font-semibold">
                  {res.gametitle}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

export default GamesPage;
