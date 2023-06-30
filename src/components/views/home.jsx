import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  anime,
  heroSlider,
  trendingSlider,
  topAiring,
} from "../../staticData/data";
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

        {/* <div className="bottom-section mt-5">
          <div className="comment-section"></div>
          <div className="anime-list-section d-flex justify-content-around mt-5">
            <Card className="top-airing mx-3">
              <h4 className="section-title ms-3 mt-3">Top Airing</h4>
              <ul className="content">
                {topAiring.map((item, index) => {
                  return (
                    <li className="anime-block d-flex" key={index}>
                      <div className="anime-block-img">
                        <img src={item.thumbnail} alt={item.title} />
                      </div>
                      <div className="anime-block-detail">
                        <Link to="#" className="anime-block-title ms-3 mt-3">
                          {item.title}
                        </Link>
                      </div>
                    </li>
                  );
                })}
                <Link className="view-more">
                  View More <FontAwesomeIcon icon="chevron-right" />
                </Link>
              </ul>
            </Card>
            <Card className="most-popular mx-3">
              <h4 className="section-title ms-3 mt-3">Most Popular</h4>
              <ul className="content">
                {anime.slice(0, 5).map((item, index) => {
                  return (
                    <li className="anime-block d-flex" key={index}>
                      <div className="anime-block-img">
                        <img src={item.thumbnail} alt={item.title} />
                      </div>
                      <div className="anime-block-detail">
                        <Link to="#" className="anime-block-title ms-3 mt-3">
                          {item.title}
                        </Link>
                      </div>
                    </li>
                  );
                })}
                <Link className="view-more">
                  View More <FontAwesomeIcon icon="chevron-right" />
                </Link>
              </ul>
            </Card>
            <Card className="most-favorite mx-3">
              <h4 className="section-title ms-3 mt-3">Most Favorite</h4>
              <ul className="content">
                {anime.slice(0, 5).map((item, index) => {
                  return (
                    <li className="anime-block d-flex" key={index}>
                      <div className="anime-block-img">
                        <img src={item.thumbnail} alt={item.title} />
                      </div>
                      <div className="anime-block-detail">
                        <Link to="#" className="anime-block-title ms-3 mt-3">
                          {item.title}
                        </Link>
                      </div>
                    </li>
                  );
                })}
                <Link className="view-more">
                  View More <FontAwesomeIcon icon="chevron-right" />
                </Link>
              </ul>
            </Card>
            <Card className="latest-completed mx-3">
              <h4 className="section-title ms-3 mt-3">Latest Completed</h4>
              <ul className="content">
                {anime.slice(0, 5).map((item, index) => {
                  return (
                    <li className="anime-block d-flex" key={index}>
                      <div className="anime-block-img">
                        <img src={item.thumbnail} alt={item.title} />
                      </div>
                      <div className="anime-block-detail">
                        <Link to="#" className="anime-block-title ms-3 mt-3">
                          {item.title}
                        </Link>
                      </div>
                    </li>
                  );
                })}
                <Link className="view-more">
                  View More <FontAwesomeIcon icon="chevron-right" />
                </Link>
              </ul>
            </Card>
          </div>
        </div> */}
      </div>
    </Fragment>
  );
});

Home.displayName = "Home";
export default Home;
