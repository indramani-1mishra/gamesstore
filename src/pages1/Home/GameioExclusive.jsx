import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRef } from 'react';
import { FaUser } from "react-icons/fa";
import HowPlay from "./HowPlay";
import News from "./News";


function GameioExclusive() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const exclusiveGames = [
        {
            id: 1,
            title: "Fire Fighter",
            image: "./assets/Exclusive-slider/compete-img-1.webp",
            isLive: true,
            entry: "5SZL",
            players: 771,
            playing: 12,
            gameId: 548
        },
        {
            id: 2,
            title: "Sky Race",
            image: "./assets/Exclusive-slider/compete-img-2.webp",
            isLive: true,
            entry: "5SZL",
            players: 771,
            playing: 12,
            gameId: 548
        },
        {
            id: 3,
            title: "Gameio Road Mash",
            image: "./assets/Exclusive-slider/compete-img-3.webp",
            isLive: true,
            entry: "5SZL",
            players: 771,
            playing: 12,
            gameId: 548
        },
        {
            id: 4,
            title: "Battle Arena",
            image: "./assets/Exclusive-slider/compete-img-1.webp",
            isLive: false,
            entry: "10SZL",
            players: 892,
            playing: 24,
            gameId: 549
        },
        {
            id: 5,
            title: "Speed Warriors",
            image: "./assets/Exclusive-slider/compete-img-3.webp",
            isLive: true,
            entry: "3SZL",
            players: 654,
            playing: 18,
            gameId: 550
        }
    ];

    return (
        <div className="px-4 py-10 " style={{
            background: 'linear-gradient(to bottom, #080618 0%, #181820 20%, #181820 50%, #181820 80%, #080618 100%)',
            paddingBottom: '100px'
        }}>
            <div className="max-w-6xl mx-auto ">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="flex-1 text-center text-white font-[Open Sans] 
               text-[20px] md:text-3xl lg:text-3xl 
               font-[600] uppercase">
                        <b>Gameio Exclusive Game</b>
                    </h3>

                    <div className="flex items-center gap-3 ">
                        <button ref={prevRef} className="bg-gray-700 hover:bg-[#2DCB2A] w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300">
                            <IoIosArrowBack size={20} color="#fff" />
                        </button>
                        <button ref={nextRef} className="bg-gray-700 hover:bg-[#2DCB2A] w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300">
                            <IoIosArrowForward size={20} color="#fff" />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    className="gameio-swiper"
                >
                    {exclusiveGames.map((game) => (
                        <SwiperSlide key={game.id}>
                            <div className="bg-[#1A1A22] rounded-xl overflow-hidden border border-gray-800 w-[94%] transition-all duration-300">
                                <div className="relative h-31">
                                    <img
                                        src={game.image}
                                        alt={game.title}
                                        className="img-fluid object-cover"
                                    />
                                    {game.isLive && (
                                        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            Live
                                        </div>
                                    )}
                                    <div className="absolute -bottom-5 right-0 bg-yellow-500 text-black px-4 py-2 font-bold clip-badge">
                                        Entry: {game.entry}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h4 className="text-white text-center text-xl font-bold mb-4">{game.title}</h4>

                                    <div className="flex items-center justify-between mb-4 text-sm">
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <FaUser size={18} />
                                            <span>Players: <span className="text-green-500 font-semibold">{game.players}</span></span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-400">
                                            <FaUser size={18} />
                                            <span>Playing: <span className="text-green-500 font-semibold">{game.playing}</span></span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-yellow-500 hover:bg-[#2DCB2A] hover:text-white text-black font-bold py-3 rounded-lg transition-all duration-300 mb-3">
                                        Play Now
                                    </button>

                                    <div className="text-center text-gray-400 text-sm">
                                        Game ID: {game.gameId}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div>
                <HowPlay />
            </div>

            <div>
                <News />
            </div>

            {/* <div className="w-full px-4 py-8">
                <div
                    className="text-white rounded-xl bg-cover bg-center w-full max-w-6xl mx-auto bg-no-repeat overflow-hidden"
                    style={{ backgroundImage: "url('./assets/home4.webp')" }}>
                    <div className="bg-black/50 ">
                        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around gap-6 px-6 py-12 lg:py-16">
                            <div className="text-center lg:text-left max-w-xl">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                                    Ready To Start Your Journey?
                                </h2>
                                <p className="text-base sm:text-lg lg:text-xl">
                                    Stop Scrolling, Start Playing. Create your account now and earn 500 coins
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <button onClick={()=>navigate('/signin')} className="bg-yellow-400 hover:bg-[#2DCB2A] px-8 py-3 font-bold text-black rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                                    Login Now!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .clip-badge {
                    clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
                }
                
                .gameio-swiper .swiper-slide {
                    height: auto;
                }
            `}</style> */}
        </div>
    );
}

export default GameioExclusive;