import { Play } from "lucide-react";

function Blog() {

    const trailers = [
        { id: 1, title: "Title", image: "./assets/blog1.svg" },
        { id: 3, title: "Title", image: "./assets/blog1.svg" },
        { id: 4, title: "Title", image: "./assets/blog1.svg" },
        { id: 5, title: "Title", image: "./assets/blog1.svg" },
        { id: 6, title: "Title", image: "./assets/blog1.svg" },
        { id: 2, title: "Title", image: "./assets/blog1.svg" },
        { id: 7, title: "Title", image: "./assets/blog1.svg" },
        { id: 8, title: "Title", image: "./assets/blog1.svg" },
        { id: 9, title: "Title", image: "./assets/blog1.svg" },
        { id: 10, title: "Title", image: "./assets/blog1.svg" },
        { id: 11, title: "Title", image: "./assets/blog1.svg" },
        { id: 12, title: "Title", image: "./assets/blog1.svg" },
    ];

    const handlePlay = (id) => {
        console.log(`Playing trailer ${id}`);
    }
    return (
        <div className="">
            <div
                className="text-white max-h-[auto] min-h-[auto] sm:max-h-[420px] lg:max-h-[420px]  md:max-h-[420px] lg:min-h-[320px] p-8 bg-cover bg-center w-full mx-auto bg-no-repeat overflow-hidden flex items-center justify-start md:justify-center lg:justify-center"
                style={{ backgroundImage: "url('/assets/banner-about-bg.webp')" }}
            >
                <div className="flex flex-col-reverse md:flex-row items-center justify-start sm:justify-between md:justify-between lg:justify-between w-[100%] md:w-[92%] lg:w-[92%] gap-8">
                    <div className="flex flex-col gap-4 z-10 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blogs</h1>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-sm">
                            <span className="hover:text-orange-400 cursor-pointer transition-colors">Home</span>
                            <span className="text-gray-300">›</span>
                            <span className="hover:text-orange-400 cursor-pointer transition-colors">Pages</span>
                            <span className="text-gray-300">›</span>
                            <span className="text-yellow-400">Blogs</span>
                        </div>
                    </div>

                    <div className="md:flex lg:flex sm:flex hidden gap-4 items-center justify-center">
                        <img src=".\assets\images\banner-about-illus.png" className="md:w-[60%] sm:w-[30%] md:w-auto object-contain" alt="banner-1" />
                    </div>
                </div>
            </div>

 <div className="py-36 px-4 bg-[#181720]">

                <div className="mb-12">
                    <h2 className="text-center text-3xl font-bold text-white">
                        Latest <span className="text-yellow-500">Blogs</span>
                    </h2>
                </div>
                <div className="max-w-7xl mx-auto ">
                    <div className="grid grid-cols-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {trailers.map((trailer) => (
                            <div
                                key={trailer.id}
                                className="flex flex-col items-center gap-4 group "
                            >
                                <div className="relative w-full rounded-lg cursor-pointer">
                                    <div className="p-1 border border-1 border-[#3d3d71] rounded-[10px] hover:border-[yellow]">
                                        <img
                                            src={trailer.image}
                                            alt={trailer.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>


                                    {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div> */}

                                    {/* <div className="absolute inset-0 flex items-center justify-center">
                                        <div
                                            onClick={() => handlePlay(trailer.id)}
                                            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/50 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30"
                                        >
                                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                                        </div>
                                    </div> */}

                                </div>

                                <div className="w-full">
                                    <h3 className='text-white font-[Roboto Mono] text-xl font-[600] mt-4 text-center'>
                                        {trailer.title}
                                    </h3>
                                </div>

                                <button
                                    onClick={() => handlePlay(trailer.id)}
                                    className="bg-yellow-400 hover:bg-[#7dda16] text-black font-bold py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Read More
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           

            <style jsx>{`
                @media (max-width: 640px) {
                    .grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </div>
    )
}

export default Blog