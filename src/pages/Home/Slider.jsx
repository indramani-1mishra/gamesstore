import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();

  return (
    <div className="slider-container">
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src="/assets/swiper/home.webp" alt="slider" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-wrapper">
            <img src="/assets/swiper/home2.webp" alt="slider" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-wrapper">
            <img src="/assets/swiper/home3.webp" alt="slider" />
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="slide-caption">
        <h1>Level Up Your Game</h1>
        <p>Play Without Limits</p>
        <button
          onClick={() => navigate("/signin")}
          className="cta-button"
        >
          Let's Play
        </button>
      </div>
    </div>
  );
}

export default Slider;
