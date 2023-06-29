import React, { Fragment, memo } from "react";
import { Card } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";

const TrendingCard = memo((props) => {
  return (
    <Fragment>
      <Card className="trending-slider-card d-flex flex-row">
        <div className="trending-slider-text d-flex flex-column justify-content-end">
          <h4 className="vertical-title">{props.title}</h4>
          {props.index + 1 < 10 ? (
            <span className="trending-number ms-2 mx-2">
              0{props.index + 1}
            </span>
          ) : (
            <span className="trending-number ms-2 mx-2">{props.index + 1}</span>
          )}
        </div>
        <img
          className="trending-image"
          src={props.thumbnail}
          alt={props.title}
        />
      </Card>
    </Fragment>
  );
});

TrendingCard.displayName = "TrendingCard";
export default TrendingCard;
