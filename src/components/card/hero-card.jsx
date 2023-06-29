import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Col, Container, Row } from "react-bootstrap";

const HeroCard = memo((props) => {
  return (
    <Fragment>
      <div className="position-relative hero-card d-flex ">
        <div className="hero-slider-detail">
          <h2 className="hero-slider-title ms-4 mt-5 mb-3">{props.title}</h2>
          <div className="categories mb-3">
            {props.categories.map((item, index) => {
              return (
                <span
                  className="text-uppercase category-title ms-4"
                  key={index}
                >
                  {item}
                </span>
              );
            })}
          </div>
          <div className="hero-slider-description ms-5 mt-4">
            {props.description}
          </div>
          <div className="d-flex mt-3">
            <Link to="#" className="watch-now-btn btn btn-primary">
              <FontAwesomeIcon icon="circle-play" />
              <span className="ms-2">Watch Now</span>
            </Link>
            <Link to="#" className="detail-btn btn btn-primary">
              <span className="mx-3">Detail</span>
              <FontAwesomeIcon icon="chevron-right" />
            </Link>
          </div>
        </div>
        <div className="hero-slider-image ">
          <img src={props.thumbnail} alt={props.title} />
        </div>
      </div>
    </Fragment>
  );
});

export default HeroCard;
