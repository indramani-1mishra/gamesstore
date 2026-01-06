import { Play } from "lucide-react";

function TrailerPage() {
  const trailers = [
    { id: 1, title: "Title", image: "/assets/video.webp" },
    { id: 2, title: "Title", image: "/assets/video.webp" },
    { id: 3, title: "Title", image: "/assets/video.webp" },
    { id: 4, title: "Title", image: "/assets/video.webp" },
    { id: 5, title: "Title", image: "/assets/video.webp" },
    { id: 6, title: "Title", image: "/assets/video.webp" },
    { id: 7, title: "Title", image: "/assets/video.webp" },
    { id: 8, title: "Title", image: "/assets/video.webp" },
    { id: 9, title: "Title", image: "/assets/video.webp" },
    { id: 10, title: "Title", image: "/assets/video.webp" },
    { id: 11, title: "Title", image: "/assets/video.webp" },
    { id: 12, title: "Title", image: "/assets/video.webp" },
  ];
console.log(trailers);
  const handlePlay = (id) => {
    console.log(`Playing trailer ${id}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">

     
      <div
        className="text-white min-h-[320px] max-h-[420px] bg-cover bg-center w-full 
                   flex items-center justify-center relative"
        style={{ backgroundImage: "url('/assets/banner-about-bg.webp')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-[92%] max-w-[1400px]">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Trailer
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-300 mt-3">
            <span className="hover:text-yellow-400 cursor-pointer">Home</span>
            <span>›</span>
            <span className="hover:text-yellow-400 cursor-pointer">Pages</span>
            <span>›</span>
            <span className="text-yellow-400 font-semibold">Trailer</span>
          </div>
        </div>
      </div>

      {/* ================= TRAILER SECTION ================= */}
      <div className="pt-20 pb-32 px-4 bg-gradient-to-b from-[#181720] to-[#0b0b14]">

        <h2 className="text-center text-4xl font-bold text-white mb-14">
          Trailer
        </h2>

        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 
                          lg:grid-cols-4 xl:grid-cols-6 gap-8">

            {trailers.map((trailer) => (
              <div
                key={trailer.id}
                className="flex flex-col items-center gap-3 group"
              >
                {/* VIDEO CARD */}
                <div className="relative w-full aspect-[4/3] rounded-2xl 
                                overflow-hidden bg-[#0b0b0b] shadow-lg cursor-pointer">

                  <img
                    src={trailer.image}
                    alt={trailer.title}
                    className="w-full h-full object-cover 
                               transition-transform duration-500 
                               group-hover:scale-110"
                  />

                  {/* dark overlay */}
                  <div className="absolute inset-0 bg-black/40 
                                  group-hover:bg-black/60 
                                  transition-all duration-300"></div>

                  {/* play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      onClick={() => handlePlay(trailer.id)}
                      className="w-16 h-16 rounded-full 
                                 bg-white/20 backdrop-blur-md 
                                 flex items-center justify-center 
                                 border border-white/40
                                 transition-all duration-300 
                                 group-hover:scale-110"
                    >
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-white text-lg font-semibold text-center mt-1">
                  {trailer.title}
                </h3>

                {/* PLAY BUTTON */}
                <button
                  onClick={() => handlePlay(trailer.id)}
                  className="bg-yellow-400 hover:bg-yellow-500 
                             text-black font-semibold 
                             py-2 px-10 rounded-full 
                             transition-all duration-300 
                             hover:scale-105 shadow-md"
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

export default TrailerPage;
