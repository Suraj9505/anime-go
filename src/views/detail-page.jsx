import React, { Fragment } from "react";

//data
import { filterAnime } from "../staticData/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SideBar from "../components/card/sidebar-card";
import MoreSeasons from "../components/card/more-seasons";

const DetailsPage = () => {
  const anime = filterAnime("bleach");
  //   console.log(anime);
  return (
    <Fragment>
      <div className="details-wrapper mb-5">
        <div className="d-flex justify-content-between ms-5">
          <div className="details-content-wrapper d-flex">
            <img src={anime.thumbnail} alt={anime.slug} />
            {/* breadcrumb and other details div */}
            <div className="details-content ms-5">
              <div className="anime-title">
                <h1 className="">{anime.title}</h1>
              </div>
              <div className="details-sub mt-4">
                <span className="text-uppercase detail-category">
                  {anime.categories[1]}
                </span>
                <span className="sub-ep ms-1">
                  <FontAwesomeIcon icon="closed-captioning" className="me-1" />
                  <span>{anime.sub_ep}</span>
                </span>
                {anime.dub_ep ? (
                  <span className="dub-ep ms-1">
                    <FontAwesomeIcon icon="microphone" className=" me-1" />
                    <span>{anime.dub_ep}</span>
                  </span>
                ) : (
                  ""
                )}
                {anime.total_ep ? (
                  <span className="ms-1 total-ep text-white">
                    {anime.total_ep}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="detail-btns mt-5">
                <Link to="#" className="watch-now ">
                  {" "}
                  <FontAwesomeIcon icon="play" />
                  <span className="ms-2">Watch Now</span>
                </Link>
                <Link to="#" className="add-to ms-3">
                  <FontAwesomeIcon icon="plus" />
                  <span className="ms-2">Add to List</span>
                </Link>
              </div>
              <div className="mt-5 mb-3 d-flex">
                <p className="description">{anime.description}</p>
                {/* <span className="align-self-end">+more</span> */}
              </div>
            </div>
          </div>
          <SideBar
            japanese={anime.japanese}
            aired={anime.aired}
            genres={anime.genres}
            premiered={anime.premiered}
            duration={anime.duration}
            mal_score={anime.mal_score}
            studio={anime.studio}
            status={anime.status}
          />
        </div>

        <MoreSeasons seasons={anime.seasons} />
      </div>
    </Fragment>
  );
};

export default DetailsPage;
