import { useEffect, useState } from "react";
import GameioExclusive from "./Home/GameioExclusive";
import ProfileCard from "./Home/ProfileCard";
import Slider from "./Home/Slider";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱️ loader time (2 sec)

    return () => clearTimeout(timer);
  }, []);

  // 🔄 LOADER
  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0b0b1d] flex items-center justify-center z-[9999]">
        <img
          src="/assets/logo.webp" // 👈 yahan aapka logo
          alt="Loading..."
          className="w-24 animate-pulse"
        />
      </div>
    );
  }

  // 🏠 HOME CONTENT
  return (
    <div>
      <Slider />
      <ProfileCard />
      <GameioExclusive />
    </div>
  );
}

export default Home;
