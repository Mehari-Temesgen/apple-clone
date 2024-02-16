import React, { Component } from "react";
import watch from "../../images/icons/10005.png";
import watch2 from "../../images/home/10001.jpg";
import apple from "../../images/icons/apple-card-logo.png";
import LearnMoreBuy from "../LearnMoreBuy/LearnMoreBuy";
import Fourth from "./Fourth";
class WachCard extends Component {
  render() {
    return (
      <div>
        <section className="wach-card-wrapper text-center my-2">
          <div className="container-fluid">
            <div className="row gx-md-3">
              <div className="col-12 col-md-6 bg-color">
                <div className="left-col-image pt-4 text-white">
                  <div className="logo-wrapper">
                    <img src={watch} />
                  </div>
                  <Fourth
                    FirstText="With the new Always-On Retina display."
                    SecondText="You’ve never seen a watch like this. "
                  />
                  <LearnMoreBuy />
                </div>
              </div>
              <div className="col-12 mt-2 mt-md-0 col-md-6 bg-color">
                <div className="right-col-img pt-4">
                  <div className="logo-wrapper">
                    <img src={apple} />
                  </div>
                  <Fourth
                    FirstText="Get 3% Daily Cash on purchases from"
                    SecondText="Apple using Apple Card."
                  />
                  <LearnMoreBuy />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default WachCard;
