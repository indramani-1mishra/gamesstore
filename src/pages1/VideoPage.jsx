import { Play } from "lucide-react";

function VideoPage() {
  const trailers = [
    { id: 1, title: "Title", image: "/video.webp" },
    { id: 2, title: "Title", image: "/video.webp" },
    { id: 3, title: "Title", image: "/video.webp" },
    { id: 4, title: "Archery Master", image: "/video.webp" },
    { id: 5, title: "Archery Master", image: "/video.webp" },
    { id: 6, title: "Archery Master", image: "/video.webp" },
    { id: 7, title: "Archery Master", image: "/video.webp" },
    { id: 8, title: "Archery Master", image: "/video.webp" },
    { id: 9, title: "Archery Master", image: "/video.webp" },
    { id: 10, title: "Archery Master", image: "/video.webp" },
    { id: 11, title: "Archery Master", image: "/video.webp" },
    { id: 12, title: "Archery Master", image: "/video.webp" },
  ];

  const handlePlay = (id) => {
    console.log("Playing video:", id);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">

      {/* ================= BANNER ================= */}
      <div
        className="text-white min-h-[320px] max-h-[420px] p-8 bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/banner-about-bg.webp')" }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-[92%] max-w-[1400px]">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">Videos</h1>

            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
              <span className="hover:text-orange-400 cursor-pointer">Home</span>
              <span>›</span>
              <span className="hover:text-orange-400 cursor-pointer">Pages</span>
              <span>›</span>
              <span className="text-yellow-400 font-semibold">Videos</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= VIDEO LIST ================= */}
      <section className="bg-[#0f0f1a] py-9 px-4 ">
      <h2 className="text-center text-white text-3xl font-bold mb-10">
        video
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {trailers.map((item) => (
          <div key={item.id} className="text-center">
            {/* Thumbnail */}
            <div className="relative rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[140px] object-cover"
              />

              {/* Play icon overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100">
                <span className="text-white text-4xl">▶</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white text-lg font-semibold mt-3">
              {item.title}
            </h3>

            {/* Play Button */}
            <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-7 py-2 rounded-full">
              Play
            </button>
          </div>
        ))}
      </div>
    </section>
     
    </div>
  );
}

export default VideoPage;
