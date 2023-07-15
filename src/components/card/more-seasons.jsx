import React, { Fragment, memo } from "react";

import { Link } from "react-router-dom";

const MoreSeasons = memo((props) => {
  return (
    <Fragment>
      <div className="season-container ps-5 pe-5">
        <h2 className="season-heading text-capitalize">more seasons</h2>
        <div className="season-list mt-5 ">
          {props.seasons.map((item, index) => {
            return (
              <Link
                to="#"
                className="season-item ms-4 mb-4 text-capitalize text-center "
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
});

MoreSeasons.displayName = "MoreSeasons";
export default MoreSeasons;
