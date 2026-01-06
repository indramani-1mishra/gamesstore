import { FaUser, FaGamepad, FaGift } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function ProfileCard() {

    const [profileCount, setProfileCount] = useState(0);
    const [gameCount, setGameCount] = useState(0);
    const [rewardCount, setRewardCount] = useState(0);
     const [trendingGames,setTrendingGames]=useState([]);
    const [newReleaseGames,setNewReleaseGames]=useState([]);
    const[Racing,setRacing]=useState([]);
    const[Multi,setMulti]=useState([]);

    useEffect(()=>{
        getallgame();
    },[]);

    const animateCount = (target, setter, duration = 3000) => {
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setter(target);
                clearInterval(timer);
            } else {
                setter(Math.floor(current));
            }
        }, 16);
    };

    useEffect(() => {
        animateCount(28328, setProfileCount, 5000);
        animateCount(383, setGameCount, 5000);
        animateCount(2956, setRewardCount, 5000);
    }, []);

    const formatNumber = (num) => {
        return num.toLocaleString();
    };

    const allGames = [
        {
            id: 1,
            title: "Warzone",
            image: "./assets/games-slider1/browse-game-img-1.webp"
        },
        {
            id: 2,
            title: "Redsquad",
            image: "./assets/games-slider1/browse-game-img-2.webp"
        },
        {
            id: 3,
            title: "Cyborg",
            image: "./assets/games-slider1/browse-game-img-3.webp"
        },
        {
            id: 4,
            title: "Headshot",
            image: "./assets/games-slider1/browse-game-img-4.webp"
        },
        {
            id: 5,
            title: "Cyberpunk",
            image: "./assets/games-slider1/browse-game-img-5.webp"
        },

        {
            id: 6,
            title: "Army",
            image: "./assets/games-slider1/browse-game-img-6.webp"
        },
        {
            id: 7,
            title: "Holigans",
            image: "./assets/games-slider1/browse-game-img-7.webp"
        },
        {
            id: 8,
            title: "Anonymous",
            image: "./assets/games-slider1/browse-game-img-8.webp"
        }

        ,
        {
            id: 9,
            title: "Soldier",
            image: "./assets/games-slider1/browse-game-img-9.webp"
        }
        ,
        {
            id: 10,
            title: "Ninja",
            image: "./assets/games-slider1/browse-game-img-10.webp"
        }
        ,
        {
            id: 11,
            title: "Pirats",
            image: "./assets/games-slider1/browse-game-img-11.webp"
        }
        ,
        {
            id: 12,
            title: "Spartan",
            image: "./assets/games-slider1/browse-game-img-12.webp"
        }

        ,
        {
            id: 14,
            title: "Cyborg",
            image: "./assets/games-slider1/browse-game-img-14.webp"
        }
        ,
        {
            id: 15,
            title: "Head",
            image: "./assets/games-slider1/browse-game-img-15.webp"
        }
        ,
        {
            id: 16,
            title: "Sword Shield",
            image: "./assets/games-slider1/browse-game-img-16.webp"
        }
        ,
        {
            id: 17,
            title: "Head Hunter",
            image: "./assets/games-slider1/browse-game-img-17.webp"
        }
        ,
        {
            id: 18,
            title: "Archer",
            image: "./assets/games-slider1/browse-game-img-18.webp"
        }
        ,
        {
            id: 19,
            title: "Kids Game Mind",
            image: "./assets/games-slider1/kids_game_mind.jpg"
        }
        ,
        {
            id: 20,
            title: "Genius",
            image: "./assets/games-slider1/genius_game.jpg"
        }
        ,
        {
            id: 21,
            title: "Sudoku",
            image: "./assets/games-slider1/sudoko_game.jpg"
        }
        ,
        {
            id: 22,
            title: "Sliding Number",
            image: "./assets/games-slider1/sliding_number.jpg"
        }
        ,
        {
            id: 24,
            title: "Spelling Challange",
            image: "./assets/games-slider1/spellingchllange.jpg"
        },
        {
            id: 25,
            title:"Stick Fruit",
            image: "./assets/games-slider1/one.jpg"
        },
        {
            id: 26,
            title: "Tetrix Mania",
            image: "./assets/games-slider1/two.jpg"
        },
        {
            id: 27,
            title: "Urban Crosser",
            image: "./assets/games-slider1/three.jpg"
        },
        {
            id: 28,
            title: "Water Sort Puzzle",
            image: "./assets/games-slider1/four.jpg"
        },
         {
            id: 29,
            title: "World Puzzle",
            image: "./assets/games-slider1/five.jpg"
        },

    ];

  
    const getallgame = async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/games/');
        const games = res.data.data;

        // category wise filter
        setTrendingGames(games.filter(g => g.category === "trending"));
        setNewReleaseGames(games.filter(g => g.category === "release"));
        setRacing(games.filter(g => g.category === "racing"));
        setMulti(games.filter(g => g.category === "mindmining"));

    } catch (err) {
        console.log(err);
    }
};
    

    

  



    
    const navigate = useNavigate();

    return (
        <>
            <style>{`
                .swiper-button-prev-trending:hover,
                .swiper-button-next-trending:hover,
                .swiper-button-prev-release:hover,
                .swiper-button-next-release:hover,
                .swiper-button-prev-racing:hover,
                .swiper-button-next-racing:hover,
                .swiper-button-prev-multi:hover,
                .swiper-button-next-multi:hover
                 {
                    transform: scale(1.1);
                }
            `}</style>
            <div className='relative w-full h-full lg:h-full sm:h-full bg-[#212129] py-20'>
               <div className="absolute z-20 left-1/2 -translate-x-1/2 -top-16 w-full px-4">
  <div className="flex justify-center">
    <div className="flex gap-6 flex-wrap justify-center">

      {/* Card 1 */}
      <div className="bg-[#0b0b0b] w-[340px] h-[140px] rounded-xl flex items-center px-6 
                      border border-gray-800 hover:border-yellow-500 transition-all duration-300">
        <div className="flex items-center gap-4">
          <img
            src="./assets/images/icon/counter-icon-1.png"
            className="w-14 h-14"
            alt=""
          />
          <div>
            <h3 className="text-white text-4xl font-semibold">
              {formatNumber(profileCount)}
            </h3>
            <p className="text-green-500 text-sm mt-1">
              Profiles Created
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#0b0b0b] w-[340px] h-[140px] rounded-xl flex items-center px-6 
                      border border-gray-800 hover:border-yellow-500 transition-all duration-300">
        <div className="flex items-center gap-4">
          <img
            src="./assets/images/icon/counter-icon-2.png"
            className="w-14 h-14"
            alt=""
          />
          <div>
            <h3 className="text-white text-4xl font-semibold">
              {formatNumber(gameCount)}
            </h3>
            <p className="text-green-500 text-sm mt-1">
              Game Running
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-[#0b0b0b] w-[340px] h-[140px] rounded-xl flex items-center px-6 
                      border border-gray-800 hover:border-yellow-500 transition-all duration-300">
        <div className="flex items-center gap-4">
          <img
            src="./assets/images/icon/counter-icon-3.png"
            className="w-14 h-14"
            alt=""
          />
          <div>
            <h3 className="text-white text-4xl font-semibold">
              {formatNumber(rewardCount)}
            </h3>
            <p className="text-green-500 text-sm mt-1">
              Total Rewards
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>



                <div className="first-games-slider mt-[350px] sm:mt-5 md:mt-5 xl:mt-5 lg:mt-5">
                    <div className='w-full py-12 px-4'>
                        <div className='max-w-6xl mx-auto'>
                            <div className='column   lg:flex sm:flex md:flex xl:flex justify-between items-center mb-8'>
                                <p className={`text-white font-[Open Sans] text-[25px] md:text-3xl lg:text-3xl font-[600] uppercase`}>
                                    See What's Trending
                                </p>
                                <div className='flex items-center gap-3'>
                                    <button onClick={()=>navigate('/games')} className='bg-[#3a3f5c] hover:bg-[#2DCB2A] text-white px-6 py-2 rounded-lg transition-all duration-300'>
                                        View All
                                    </button>
                                    <button className='swiper-button-prev-trending bg-[#3a3f5c] hover:bg-[#2DCB2A] w-12 h-10 rounded-lg flex items-center justify-center transition-all duration-300'>
                                        <span className='text-white text-xl'>
                                            <IoIosArrowBack size={20} color='#fff' />
                                        </span>
                                    </button>
                                    <button className='swiper-button-next-trending bg-[#3a3f5c] hover:bg-[#2DCB2A] w-12 h-10 rounded-lg flex items-center justify-center transition-all duration-300'>
                                        <IoIosArrowForward size={20} color='#fff' />
                                    </button>
                                </div>
                            </div>

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '.swiper-button-prev-trending',
                                    nextEl: '.swiper-button-next-trending',
                                }}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1280: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}
                                className="trending-swiper"
                            >
                                {trendingGames.map((game) => (
                                    <SwiperSlide key={game.id}>
                                        <div className='group cursor-pointer' onClick={() => navigate('/signin')}>
                                            <div className='relative overflow-hidden  rounded-xl transform transition-all duration-300 hover:scale-70 border border-gray-800 hover:border-yellow-500'>
                                                <img
                                                    src={game.gameimage}
                                                    alt={game.gametitle}
                                                    className='w-full img-fluid h-auto object-cover'
                                                />
                                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                            </div>
                                            <h3 className='text-white font-[Roboto Mono] text-xl font-[600] mt-4 text-center'>
                                                {game.gametitle}
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className="first-games-slider mt-[0px] sm:mt-0 md:mt-5 xl:mt-5 lg:mt-5">
                    <div className='w-full py-0 sm:py-10 md:py-10 lg:py-10 xl:py-10 px-4'>
                        <div className='max-w-6xl mx-auto'>
                            <div className='column   lg:flex sm:flex md:flex xl:flex justify-between items-center mb-8'>
                                <p className='text-white font-[Open Sans] text-[25px] md:text-3xl lg:text-3xl font-[600] uppercase'>
                                    New Release
                                </p>
                                <div className='flex items-center gap-3'>
                                    <button onClick={()=>navigate('/games')}  className='bg-[#3a3f5c] hover:bg-[#2DCB2A] text-white px-6 py-2 rounded-lg transition-all duration-300'>
                                        View All
                                    </button>
                                    <button className='swiper-button-prev-release bg-[#3a3f5c] hover:bg-[#2DCB2A] w-12 h-10 rounded-lg flex items-center justify-center transition-all duration-300'>
                                        <span className='text-white text-xl'>
                                            <IoIosArrowBack size={20} color='#fff' />
                                        </span>
                                    </button>
                                    <button className='swiper-button-next-release bg-[#3a3f5c] hover:bg-[#2DCB2A] w-12 h-10 rounded-lg flex items-center justify-center transition-all duration-300'>
                                        <IoIosArrowForward size={20} color='#fff' />
                                    </button>
                                </div>
                            </div>

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '.swiper-button-prev-release',
                                    nextEl: '.swiper-button-next-release',
                                }}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1280: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}
                                className="trending-swiper"
                            >
                                {newReleaseGames.map((game) => (
                                    <SwiperSlide key={game.id}>
                                        <div className='group cursor-pointer' onClick={() => navigate('/signin')}>
                                            <div className='relative overflow-hidden  rounded-xl transform transition-all duration-300 hover:scale-70 border border-gray-800 hover:border-yellow-500'>
                                                <img
                                                    src={game.gameimage}
                                                    alt={game.gametitle}
                                                    className='w-full img-fluid h-auto object-cover'
                                                />
                                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                            </div>
                                            <h3 className='text-white font-[Roboto Mono] text-xl font-[600] mt-4 text-center'>
                                                {game.gametitle}
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className="first-games-slider mt-[50px] sm:mt-0 md:mt-5 xl:mt-5 lg:mt-5">
                    <div className='w-full py-0 sm:py-10 md:py-10 lg:py-10 xl:py-10 px-4'>
                        <div className='max-w-6xl mx-auto'>
                            <div className='column   lg:flex sm:flex md:flex xl:flex justify-between items-center mb-8'>
                                <p className='text-white font-[Open Sans] text-[25px] md:text-3xl lg:text-3xl font-[600] uppercase'>
                                    Racing
                                </p>
                                <div className='flex items-center gap-3'>
                                    <button onClick={()=>navigate('/games')}  className='bg-[#3a3f5c] hover:bg-[#2DCB2A] text-white px-6 py-2 rounded-lg transition-all duration-300'>
                                        View All
                                    </button>
                                    <button className='swiper-button-prev-racing bg-[#3a3f5c] hover:bg-[#2DCB2A] w-12 h-10 rounded-lg flex items-center justify-center transition-all duration-300'>
                                        <span className='text-white text-xl'>
                                            <IoIosArrowBack size={20} color='#fff' />
                                        </span>
                                    </button>
                                    <button className='swiper-button-next-racing bg-[#3a3f5c] hover:bg-[#2DCB2A] w-12 h-10 rounded-lg flex items-center justify-center transition-all duration-300'>
                                        <IoIosArrowForward size={20} color='#fff' />
                                    </button>
                                </div>
                            </div>

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '.swiper-button-prev-racing',
                                    nextEl: '.swiper-button-next-racing',
                                }}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1280: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}
                                className="trending-swiper"
                            >
                                {Racing.map((game) => (
                                    <SwiperSlide key={game.id}>
                                        <div className='group cursor-pointer' onClick={() => navigate('/signin')}>
                                            <div className='relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-70 border border-gray-800 hover:border-yellow-500'>
                                                <img
                                                    src={game.gameimage}
                                                    alt={game.gametitle}
                                                    className='w-full img-fluid object-cover'
                                                    style={{ border: '1px solid rgb(61, 61, 113)' }}
                                                />
                                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                            </div>
                                            <h3 className='text-white font-[Roboto Mono] text-xl font-[600] mt-4 text-center'>
                                                {game.gametitle}
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>

                <div className="first-games-slider mt-[50px] sm:mt-0 md:mt-5 xl:mt-5 lg:mt-5">
                    <div className='w-full py-0 sm:py-10 md:py-10 lg:py-10 xl:py-10 px-4'>
                        <div className='max-w-6xl mx-auto'>
                            <div className='column   lg:flex sm:flex md:flex xl:flex justify-between items-center mb-8'>
                                <p className='text-white font-[Open Sans] text-[25px] md:text-3xl lg:text-3xl font-[600] uppercase'>
                                    Mind-mining games
                                </p>
                                <div className='flex items-center gap-3'>
                                    <button onClick={()=>navigate('/games')}  className='bg-[#3a3f5c] hover:bg-[#2DCB2A] text-white px-6 py-2 rounded-lg transition-all duration-300'>
                                        View All
                                    </button>
                                    <button className='swiper-button-prev-multi bg-[#3a3f5c] hover:bg-[#2DCB2A] w-12 h-10 rounded-lg flex items-center justify-center transition-all duration-300'>
                                        <span className='text-white text-xl'>
                                            <IoIosArrowBack size={20} color='#fff' />
                                        </span>
                                    </button>
                                    <button className='swiper-button-next-multi bg-[#3a3f5c] hover:bg-[#2DCB2A] w-12 h-10 rounded-lg flex items-center justify-center transition-all duration-300'>
                                        <IoIosArrowForward size={20} color='#fff' />
                                    </button>
                                </div>
                            </div>

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '.swiper-button-prev-multi',
                                    nextEl: '.swiper-button-next-multi',
                                }}
                                loop={true}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1280: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}
                                className="trending-swiper"
                            >
                                {Multi.map((game) => (
                                    <SwiperSlide key={game.id}>
                                        <div className='group cursor-pointer' onClick={() => navigate('/signin')}>
                                            <div className='relative overflow-hidden rounded-xl transform transition-all duration-300 hover:scale-70 border border-gray-800 hover:border-yellow-500'>
                                                <img
                                                    src={game.gameimage}
                                                    alt={game.gametitle}
                                                    className='w-full img-fluid h-auto object-cover'
                                                />
                                                <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                            </div>
                                            <h3 className='text-white font-[Roboto Mono] text-xl font-[600] mt-4 text-center'>
                                                {game.gametitle}
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard;