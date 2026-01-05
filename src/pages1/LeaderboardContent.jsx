import React, { useState } from "react";
import { FaTrophy, FaCoins, FaStar } from "react-icons/fa";

/* ================= DATA ================= */

const players = [
  {
    id: 1,
    rank: 1,
    phone: "+268XXXXXXXXXX",
    avatar: "/assets/game-banner-illus-4.webp",
    tournaments: 1553,
    level: 353,
    money: 45500,
    online: true,
  },
  {
    id: 2,
    rank: 2,
    phone: "+268XXXXXXXXXX",
    avatar: "/assets/game-banner-illus-4.webp",
    tournaments: 1553,
    level: 353,
    money: 45500,
    online: true,
  },
  {
    id: 3,
    rank: 3,
    phone: "+268XXXXXXXXXX",
    avatar: "/assets/game-banner-illus-4.webp",
    tournaments: 1553,
    level: 353,
    money: 45500,
    online: true,
  },
  {
    id: 4,
    rank: 5,
    phone: "+268XXXXXXXXXX",
    avatar: "/assets/game-banner-illus-4.webp",
    tournaments: 982,
    online: true,
  },
  {
    id: 5,
    rank: 6,
    phone: "+268XXXXXXXXXX",
    avatar: "/assets/game-banner-illus-4.webp",
    tournaments: 982,
    online: true,
  },
  {
    id: 6,
    rank: 6,
    phone: "+268XXXXXXXXXX",
    avatar: "/assets/game-banner-illus-4.webp",
    tournaments: 982,
    online: true,
  },
];

/* ================= PAGE ================= */

export default function LeaderboardContent() {
  const [filter, setFilter] = useState("Week");

  return (
    <section className="bg-[#0b0720] py-20">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-14">
          <h2 className="text-3xl font-bold text-white">Leaderboard</h2>

          <div className="flex gap-6 text-sm font-semibold">
            {["Week", "Month", "All Time"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`${
                  filter === t ? "text-yellow-400" : "text-gray-400"
                } hover:text-yellow-400 transition`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ================= TOP 3 ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {players.slice(0, 3).map((player) => (
            <TopCard key={player.id} player={player} />
          ))}
        </div>

        {/* ================= OTHER PLAYERS ================= */}
        <div className="grid md:grid-cols-2 gap-8">
          {players.slice(3).map((player) => (
            <SmallCard key={player.id} player={player} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ================= TOP CARD ================= */

const TopCard = ({ player }) => (
  <div className="relative rounded-2xl bg-gradient-to-br from-[#3a3c55] to-[#2b2d42] shadow-xl overflow-hidden">

    {/* HEADER */}
    <div className="flex items-center justify-between px-6 py-5">
      <div className="flex items-center gap-4">
        <img
          src={player.avatar}
          className="w-14 h-14 rounded-full border-2 border-yellow-400"
          alt="avatar"
        />
        <div>
          <p className="text-white font-bold text-lg">{player.phone}</p>
          <p className="text-green-400 text-sm">Online</p>
        </div>
      </div>

      <span className="w-9 h-9 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center">
        {player.rank}
      </span>
    </div>

    <div className="h-px bg-white/10" />

    {/* STATS */}
    <div className="px-6 py-6 space-y-4 text-sm">
      <Stat icon={<FaTrophy />} label="Won Tournaments" value={player.tournaments} />
      <Stat icon={<FaStar />} label="Level" value={player.level} />
      <Stat icon={<FaCoins />} label="Money Won" value={`$${player.money}`} />
    </div>
  </div>
);

/* ================= SMALL CARD ================= */

const SmallCard = ({ player }) => (
  <div className="relative rounded-2xl border border-white/10 bg-[#15162d] px-6 py-5">

    <span className="absolute right-4 top-4 w-8 h-8 bg-yellow-400 text-black font-bold rounded-full flex items-center justify-center">
      {player.rank}
    </span>

    <div className="flex items-center gap-4 mb-5">
      <img
        src={player.avatar}
        className="w-12 h-12 rounded-full border-2 border-yellow-400"
        alt="avatar"
      />
      <div>
        <p className="text-white font-semibold">{player.phone}</p>
        <p className="text-green-400 text-sm">Online</p>
      </div>
    </div>

    <div className="flex items-center gap-3 text-sm">
      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-yellow-400">
        <FaTrophy />
      </div>
      <span className="text-gray-300">Won Tournaments</span>
      <span className="ml-auto text-green-400 font-bold">
        {player.tournaments}
      </span>
    </div>
  </div>
);

/* ================= STAT ================= */

const Stat = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-yellow-400">
      {icon}
    </div>
    <span className="text-gray-300">{label}</span>
    <span className="ml-auto text-green-400 font-bold">{value}</span>
  </div>
);
