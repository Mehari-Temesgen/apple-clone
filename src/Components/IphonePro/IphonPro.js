import React, { Component } from "react";
import LearnMoreBuy from "../LearnMoreBuy/LearnMoreBuy";
class IphonPro extends Component {
  render() {
    return (
      <div>
        <section className="iphon-11-pro-wrapper text-center pt-5">
          <div className="container">
            <div className="title-wraper fw-bold h1 display-4">
              iPhone 11 Pro
            </div>
            <div className="description-wrapper h3">
              Pro cameras. Pro display. Pro performance.
            </div>
            <div className="price-wrapper">
              From $24.95/mo. or $599 with trade‑in.
            </div>
            <LearnMoreBuy />
          </div>
        </section>
      </div>
    );
  }
}

export default IphonPro;
