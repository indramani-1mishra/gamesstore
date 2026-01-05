import { useState } from "react";
import { FaUsers } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


function RecentGames() {
  const games = [
    { title: "Fire Fighter", image: "/assets/rone.webp", entry: "5SZL", players: 771, playing: 12, gameId: 548 },
    { title: "Sky Race", image: "/assets/rtwo.webp", entry: "5SZL", players: 771, playing: 12, gameId: 548 },
    { title: "Gameio Road Mash", image: "/assets/rthree.webp", entry: "5SZL", players: 771, playing: 12, gameId: 548 },
    { title: "Speed Run", image: "/assets/rone.webp", entry: "10SZL", players: 620, playing: 8, gameId: 549 },
    { title: "Battle Zone", image: "/assets/rtwo.webp", entry: "15SZL", players: 510, playing: 20, gameId: 550 },
  ];
  

  const perPage = 3;
  const [page, setPage] = useState(0);

  const start = page * perPage;
  const end = start + perPage;
  const visibleGames = games.slice(start, end);

  const nextPage = () => {
    if (end < games.length) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <>
      <style>
        {`
          .entry-ribbon {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
          }
        `}
      </style>

      {/* ================= RECENT GAMES SECTION ================= */}
      <section className="bg-[#0e0e1a] py-16 text-white">
        <div className="max-w-[1200px] mx-auto px-5">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl font-bold">
              Your Recent Games
            </h2>

            <div className="flex gap-3">
              <button
                onClick={prevPage}
                disabled={page === 0}
                className={`p-3 rounded-xl transition ${
                  page === 0
                    ? "bg-gray-700 opacity-50 cursor-not-allowed"
                    : "bg-[#3b3d57] hover:bg-[#4a4c68]"
                }`}
              >
                <MdKeyboardArrowLeft size={24} />
              </button>

              <button
                onClick={nextPage}
                disabled={end >= games.length}
                className={`p-3 rounded-xl transition ${
                  end >= games.length
                    ? "bg-gray-700 opacity-50 cursor-not-allowed"
                    : "bg-[#3b3d57] hover:bg-[#4a4c68]"
                }`}
              >
                <MdKeyboardArrowRight size={24} />
              </button>
            </div>
          </div>

          <div className="border-b border-gray-600 mb-10"></div>

          {/* GAME CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleGames.map((game, index) => (
              <div
                key={index}
                className="bg-[#1b1c2b] rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-56 object-cover"
                  />

                  <span className="absolute top-4 right-4 bg-red-600 px-3 py-1 rounded-full text-sm">
                    Live
                  </span>

                  <div className="absolute bottom-0 right-0 bg-yellow-400 text-black font-bold px-5 py-2 entry-ribbon">
                    Entry: {game.entry}
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-6">{game.title}</h3>

                  <div className="flex justify-center gap-10 mb-6 text-gray-300 text-sm">
                    <div className="flex items-center gap-2">
                      <FaUsers />
                      Players:
                      <span className="text-green-400">{game.players}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FaUsers />
                      Playing:
                      <span className="text-green-400">{game.playing}</span>
                    </div>
                  </div>

                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl mb-4 transition">
                    Play Now
                  </button>

                  <p className="text-gray-400 text-sm">
                    Game ID: {game.gameId}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default RecentGames;
