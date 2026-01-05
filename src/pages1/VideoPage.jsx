import { Play } from "lucide-react";

function VideoPage() {

  const trailers = [
    { id: 1, title: "Title", image: "/assets/video.webp" },
    { id: 2, title: "Title", image: "/assets/video.webp" },
    { id: 3, title: "Title", image: "/assets/video.webp" },
    { id: 4, title: "Archery Master", image: "/assets/video.webp" },
    { id: 5, title: "Archery Master", image: "/assets/video.webp" },
    { id: 6, title: "Archery Master", image: "/assets/video.webp" },
    { id: 7, title: "Archery Master", image: "/assets/video.webp" },
    { id: 8, title: "Archery Master", image: "/assets/video.webp" },
    { id: 9, title: "Archery Master", image: "/assets/video.webp" },
    { id: 10, title: "Archery Master", image: "/assets/video.webp" },
    { id: 11, title: "Archery Master", image: "/assets/video.webp" },
    { id: 12, title: "Archery Master", image: "/assets/video.webp" },
  ];

  const handlePlay = (id) => {
    console.log(`Playing video ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">

      {/* ================= BANNER ================= */}
      <div
        className="text-white min-h-[320px] max-h-[420px] p-8 bg-cover bg-center w-full flex items-center justify-center"
        style={{ backgroundImage: "url('/assets/banner-about-bg.webp')" }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-[92%] max-w-[1400px] gap-8">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Videos
            </h1>

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
      {/* 👇 Footer se space ke liye pb-32 */}
      <div className="pt-16 pb-32 px-4 bg-[#181720]">

        <div className="mb-12">
          <h2 className="text-center text-3xl font-bold text-white">
            Videos
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

            {trailers.map((trailer) => (
              <div
                key={trailer.id}
                className="flex flex-col items-center gap-4 group"
              >
                {/* VIDEO CARD */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-pointer">
                  <img
                    src={trailer.image}
                    alt={trailer.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      onClick={() => handlePlay(trailer.id)}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30"
                    >
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-white text-lg sm:text-xl font-semibold text-center mt-2">
                  {trailer.title}
                </h3>

                {/* PLAY BUTTON */}
                <button
                  onClick={() => handlePlay(trailer.id)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Play
                </button>
              </div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
}

export default VideoPage;
