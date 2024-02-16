import React from "react";
import newIpad from "../../images/icons/new-ipad-logo.png";
import LearnMoreBuy from "../LearnMoreBuy/LearnMoreBuy";
const MacbookIpad = () => {
  return (
    <section className="mackbook-ipad-wrapper mt-2">
      <div className="container-fluid">
        <div className="row gx-md-3">
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <div className="left-col-mackbook text-center mackbook-pro-col pt-4">
              <div className="model">16-inch model</div>
              <div className="product-title-small">MacBook Pro</div>
              <div className="description-wraper">
                The best for the brightest.
              </div>
              <LearnMoreBuy />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="right-side-ipad text-center pt-3 mh-100">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={newIpad} alt="Ipad" />
                </div>
              </div>
              <div className="description-wraper">
                Like a computer. Unlike any computer.
              </div>
              <LearnMoreBuy />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MacbookIpad;
