import React, { Fragment, memo } from "react";

const Footer = memo(() => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="">
          <div className="row">
            <div className="col-md-6">
              <h4>About AnimeGo</h4>
              <p>
                AnimeGo is a platform for anime lovers to discover and explore
                their favorite anime series. We provide a wide range of anime
                content, including popular series, new releases, and
                recommendations based on user preferences. Join us to immerse
                yourself in the captivating world of anime!
              </p>
            </div>
            <div className="col-md-6">
              <h4>Contact Us</h4>
              <ul>
                <li>Email: contact@animego.com</li>
                <li>Phone: +1 123-456-7890</li>
                <li>Address: 123 Anime Street, City, Country</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
});

Footer.displayName = "Footer";
export default Footer;
