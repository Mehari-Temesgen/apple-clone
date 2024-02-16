import React from "react";
import servant from "../../images/icons/servant-logo.png";
import applTv from "../../images/icons/apple-tv-logo.png";
import LearnMoreBuy from "../LearnMoreBuy/LearnMoreBuy";
const TvAripod = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row gx-md-3">
          <div className="col-12 col-md-6 bg-color">
            <div className="apple-tv-image pt-5 text-center">
              <div className="tv-logo">
                <img src={applTv} alt="apple-tv" />
              </div>
              <div className="tvshow-logo-wraper">
                <img src={servant} alt="servant" />
              </div>
              <div className="watch-more-wrapper">
                <a href="#" className="nav-link">
                  Watch the trailer <i className="bi bi-play-circle-fill"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-0 pt-md-0 my-2 my-md-0">
            <div className="Arir-pod-wrapper pt-5 black-col text-center text-light">
              <div className="top-logo-wrapper">
                <div className="AirePod-text">AirPods Pro</div>
              </div>
              <div className="airpos-wraper pb-2">
                Adaptive Audio. Now Playing
              </div>
              <LearnMoreBuy />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TvAripod;
