import React from "react";
import macbook from "../../images/home/mac-laptop.jpg";
import mackbook15 from "../../images/home/10007.jpg";
import LearnMoreBuy from "../LearnMoreBuy/LearnMoreBuy";
function Macbook() {
  return (
    <div>
      <section className="macbook-16 text-center">
        <div className="container mackbook15">
          {/* <div className="lead">16-inch model</div> */}
          <div className="fw-bold h1 display-4">iphone 15</div>
          <div className="discrip-titel h3">
            New Camera. New design. Newphoia
          </div>
          <LearnMoreBuy />
          <div className="main-image-wrapper">
            {/* <img src={mackbook15} /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
export default Macbook;
