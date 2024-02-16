import React from "react";
import LearnMoreBuy from "../LearnMoreBuy/LearnMoreBuy";
function Iphone() {
  return (
    <div>
      <section className="iphon-11-wrapper text-center pt-5">
        <div className="container">
          <div className="title-wraper h1 display-4 fw-bold pb-1">
            iPhone 11
          </div>
          <div className="description-wrapper h3">
            Just the right amount of everything.
          </div>
          <div className="price-wrapper">
            From $16.62/mo. or $399 with trade‑in.
          </div>
          <LearnMoreBuy />
        </div>
      </section>
    </div>
  );
}
export default Iphone;
