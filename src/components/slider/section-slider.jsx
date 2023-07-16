import React, { Fragment, memo } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

const SectionSlider = memo((props) => {
  return (
    <Fragment>
      <Card className="section-slider">
        <div className="section-slider-img">
          <Link to={`details-page/${props.slug}`}>
            <img src={props.thumbnail} alt={props.title} />
          </Link>
        </div>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id={props.title}>{props.title}</Tooltip>}
        >
          <Link to={`/details-page/${props.slug}`}>
            <h5 className="section-slider-title">{props.title}</h5>
          </Link>
        </OverlayTrigger>
      </Card>
    </Fragment>
  );
});

SectionSlider.displayName = "SectionSlider";
export default SectionSlider;
