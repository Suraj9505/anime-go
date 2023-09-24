import React, { Fragment, memo } from "react";
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
  popularShow,
} from "./staticData/data";
import HeroCard from "./components/card/hero-card";
import TrendingCard from "./components/card/trending-card";
import SectionSlider from "./components/slider/section-slider";

const Index = memo(() => {
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
                      slug={item.slug}
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
            breakpoints={{
              316: { slidesPerView: 1, spaceBetween: 50 },
              400: { slidesPerView: 2, spaceBetween: 10 },
              750: { slidesPerView: 3 },
              900: { slidesPerView: 4 },
              1200: { slidesPerView: 6 },
            }}
            spaceBetween={15}
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
                    slug={item.slug}
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
              breakpoints={{
                316: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                  navigation: false,
                },
                400: { slidesPerView: 2, spaceBetween: 10 },
                750: { slidesPerView: 3 },
                1000: { slidesPerView: 4 },
                1200: { slidesPerView: 5 },
              }}
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
                      slug={item.slug}
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
                      slug={item.slug}
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
              {popularShow.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <SectionSlider
                      thumbnail={item.thumbnail}
                      title={item.title}
                      slug={item.slug}
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

Index.displayName = "Index";
export default Index;
