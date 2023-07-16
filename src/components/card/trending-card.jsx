import React, { Fragment, memo } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Link to={`/details-page/${props.slug}`}>
          <img
            className="trending-image"
            src={props.thumbnail}
            alt={props.title}
          />
        </Link>
      </Card>
    </Fragment>
  );
});

TrendingCard.displayName = "TrendingCard";
export default TrendingCard;
