import React, { Fragment, memo } from "react";

const SideBar = memo((props) => {
  return (
    <Fragment>
      <div className="detail-sidebar pe-3">
        <div className="item">
          <span className="item-head text-capitalize">japanese:</span>
          <span className="item-name ms-2 text-capitalize">
            {props.japanese}
          </span>
        </div>
        {props.synonyms ? (
          <div className="item">
            <span className="item-head text-capitalize">synonyms:</span>
            <span className="item-name ms-2 text-capitalize">
              {props.synonyms}
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="item">
          <span className="item-head text-capitalize">aired:</span>
          <span className="item-name ms-2 text-capitalize">{props.aired}</span>
        </div>
        <div className="item">
          <span className="item-head text-capitalize">premiered:</span>
          <span className="item-name ms-2 text-capitalize">
            {props.premiered}
          </span>
        </div>
        <div className="item">
          <span className="item-head text-capitalize">duration:</span>
          <span className="item-name ms-2 text-capitalize">
            {props.duration}
          </span>
        </div>
        <div className="item">
          <span className="item-head text-capitalize">status:</span>
          <span className="item-name ms-2 text-capitalize">{props.status}</span>
        </div>
        <div className="item mb-0">
          <span className="item-head text-capitalize">MAL score:</span>
          <span className="item-name ms-2 text-capitalize">
            {props.mal_score}
          </span>
        </div>
        <hr />
        <div className="item d-flex flex-wrap align-items-center mb-0">
          <span className="item-head text-capitalize ">genres:</span>
          {props.genres.map((item, index) => {
            return (
              <span
                className="item-name genres-item ms-2 text-capitalize"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>
        <hr />
        <div className="item">
          <span className="item-head text-capitalize">studios:</span>
          <span className="item-name ms-2 text-capitalize">{props.studio}</span>
        </div>
      </div>
    </Fragment>
  );
});

SideBar.displayName = "Sidebar";
export default SideBar;
