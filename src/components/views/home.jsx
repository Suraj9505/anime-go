import React, { Fragment, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { anime } from "../../staticData/data";
import HeroCard from "../card/hero-card";
import TrendingCard from "../card/trending-card";

const Home = memo(() => {
  return (
    <Fragment>
      <div className="main-container">
        {/* hero swwiper start */}
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            slidesPerView={1}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
          >
            {anime.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="swiper-slide-content">
                    <HeroCard
                      thumbnail={item.thumbnail}
                      title={item.title}
                      description={item.description}
                      categories={item.categories}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* hero swiper end */}

        {/* section slider */}
        <div className="trending-slider ms-3 mt-5">
          <h3 className="trending-title mb-4">Trending</h3>
          <Swiper
            slidesPerView={6}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={true}
            // loop={true}
          >
            {anime.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <TrendingCard
                    title={item.title}
                    thumbnail={item.thumbnail}
                    index={index}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
});

Home.displayName = "Home";
export default Home;
