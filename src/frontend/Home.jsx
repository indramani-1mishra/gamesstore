import MainLayout from "@/frontend/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      
      {/* Hero Section */}
      <section className="relative bg-[url('/hero.jpg')] bg-cover bg-center">
        <div className="bg-black/60">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Level Up Your Game
            </h1>
            <p className="text-white/80 mb-6">
              Play without limits and earn rewards
            </p>
            <button className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold">
              Lets Play
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {["Profiles Created", "Game Running", "Total Rewards"].map((item, i) => (
          <div
            key={i}
            className="bg-[#1a1b2e] rounded-xl p-6 text-center"
          >
            <h3 className="text-xl font-bold text-yellow-400 mb-2">🔥</h3>
            <p className="text-white/70">{item}</p>
          </div>
        ))}
      </section>

    </MainLayout>
  );
};

export default Home;
