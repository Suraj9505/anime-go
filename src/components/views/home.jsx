import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
// import { Card } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  heroSlider,
  trendingSlider,
  latestUpdate,
  trendingShow,
} from "../../staticData/data";
import HeroCard from "../card/hero-card";
import TrendingCard from "../card/trending-card";
import SectionSlider from "../slider/section-slider";

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
            {heroSlider.map((item, index) => {
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
            {trendingSlider.map((item, index) => {
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
        <div className="section-swiper-wrapper">
          <div className="section-swiper mt-4">
            <h3 className="section-swiper-title ms-4 ">Latest Update</h3>
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              modules={[Navigation]}
              navigation={true}
              loop={true}
            >
              {latestUpdate.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SectionSlider
                      thumbnail={item.thumbnail}
                      title={item.title}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="section-swiper mt-4">
            <h3 className="section-swiper-title ms-4 ">Trending Shows</h3>
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              modules={[Navigation]}
              navigation={true}
              loop={true}
            >
              {trendingShow.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SectionSlider
                      thumbnail={item.thumbnail}
                      title={item.title}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="section-swiper mt-4">
            <h3 className="section-swiper-title ms-4 ">Popular Shows</h3>
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              modules={[Navigation]}
              navigation={true}
              loop={true}
            >
              {latestUpdate.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SectionSlider
                      thumbnail={item.thumbnail}
                      title={item.title}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

Home.displayName = "Home";
export default Home;
