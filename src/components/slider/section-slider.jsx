import React, { Fragment, memo } from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";

const SectionSlider = memo((props) => {
  return (
    <Fragment>
      <Card className="section-slider">
        <div className="section-slider-img">
          <img src={props.thumbnail} alt={props.title} />
        </div>
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip id={props.title}>{props.title}</Tooltip>}
        >
          <h5 className="section-slider-title">{props.title}</h5>
        </OverlayTrigger>
      </Card>
    </Fragment>
  );
});

SectionSlider.displayName = "SectionSlider";
export default SectionSlider;
