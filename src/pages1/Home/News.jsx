import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRef } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

function News() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const newsData = [
        {
            id: 1,
            title: "Unique Experience",
            description: "I can say the innovation behind gameio is nothing short of incredible. You can't beat the on-chain experience with its seamless integration and transparency."
        },
        {
            id: 2,
            title: "100% Transparency",
            description: "I can say the innovation behind gameio is nothing short of incredible. You can't beat the on-chain experience with its seamless integration and transparency."
        },
        {
            id: 3,
            title: "Simply Amazing",
            description: "I can say the innovation behind gameio is nothing short of incredible. You can't beat the on-chain experience with its seamless integration and transparency."
        },
        {
            id: 4,
            title: "Revolutionary Platform",
            description: "I can say the innovation behind gameio is nothing short of incredible. You can't beat the on-chain experience with its seamless integration and transparency."
        }
    ];

    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-white text-3xl md:text-4xl font-bold">News</h2>
                    <div className="flex items-center gap-3">
                        <button ref={prevRef} className="bg-gray-700 hover:bg-[#2DCB2A] w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300">
                            <IoIosArrowBack size={20} color="#fff" />
                        </button>
                        <button ref={nextRef} className="bg-gray-700 hover:bg-[#2DCB2A] w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300">
                            <IoIosArrowForward size={20} color="#fff" />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
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
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
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
                    className="news-swiper"
                >
                    {newsData.map((news) => (
                        <SwiperSlide key={news.id}>
                            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16162a] rounded-2xl p-8 border border-gray-700 hover:border-yellow-500 transition-all duration-300 min-h-[300px] max-w-[350px] cursor-pointer flex flex-col relative group">
                                <div className="absolute top-6 right-6 text-gray-600 group-hover:text-purple-500 transition-colors duration-300">
                                    <FaQuoteRight size={60} className="opacity-20" />
                                </div>

                                <h3 className="text-white text-2xl font-bold mb-4 relative z-10">
                                    {news.title}
                                </h3>

                                <p className="text-gray-400 text-3xl text-base leading-relaxed flex-grow relative z-10">
                                    {news.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .news-swiper .swiper-slide {
                    height: auto;
                }
            `}</style>
        </div>
    );
}

export default News;