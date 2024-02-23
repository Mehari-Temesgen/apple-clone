import React, { useEffect, useState } from "react";
import flag from "../../images/icons/16.png";
import FotterProps from "./FooterProps";
import $ from "jquery";
function Footer() {
  const [footerOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(!footerOpen);
  };
  useEffect(() => {
    return () => {
      if ($(window).width() <= 768) {
        $(".footer-link-item").addClass("someClass");
      } else {
        $(".footer-link-item").removeClass("someClass");
      }
      $(window).on("resize", function () {
        if ($(window).width() <= 768) {
          $(".footer-link-item").addClass("someClass");
          window.location.reload();
        } else {
          $(".footer-link-item").removeClass("someClass");
          $(".footer-link-item ul").show();
        }
      });
      $(document).on("click", ".someClass h3", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded");
      });
    };
  }, [footerOpen]);
  return (
    <div>
      <footer className="apple-footer pb-3">
        <div className="container">
          <div className="footer-text py-3 px-2 mb-3 text-justify">
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the
            <a href="#">Customer Agreement</a>. Additional iPhone Payments terms
            are <a href="#">here</a>.<p>2. Subscription required.</p>
            <p>Magic Keyboard sold separately.</p>
            <p>
              Apple TV+ is $4.99/month after free trial. One subscription per
              Family Sharing group. Offer good for 3 months after eligible
              device activation. Plan automatically renews until cancelled.
              Restrictions and other <a href="#">terms apply</a>
            </p>
          </div>
          <div className="footer-link-item row pt-2">
            <div className="col-sm-12 col-md">
              <h3
                onClick={() => {
                  handleMenuClick();
                }}
              >
                shop and Learn
              </h3>
              <ul className="list_item">
                <FotterProps FootLink="#" FootName="mac" />
                <FotterProps FootLink="#" FootName="iPad" />
                <FotterProps FootLink="#" FootName="iphone" />
                <FotterProps FootLink="#" FootName="Watch" />
                <FotterProps FootLink="#" FootName="TV" />
                <FotterProps FootLink="#" FootName="Music" />
                <FotterProps FootLink="#" FootName="AirPods" />
                <FotterProps FootLink="#" FootName="HomePod" />
                <FotterProps FootLink="#" FootName="iPod touch" />
                <FotterProps FootLink="#" FootName="Accessories" />
                <FotterProps FootLink="#" FootName="Gift Cards" />
              </ul>
            </div>
            <div className="col-sm-12 col-md">
              <h3 className="my-toggler">Services</h3>
              <ul className="list_item">
                <FotterProps FootLink="#" FootName="Apple Music" />
                <FotterProps FootLink="#" FootName="Apple News+" />
                <FotterProps FootLink="#" FootName="Apple TV+" />
                <FotterProps FootLink="#" FootName="Apple Arcade" />
                <FotterProps FootLink="#" FootName="Apple Card" />
                <FotterProps FootLink="#" FootName="iCloud" />
              </ul>
              <h3 className="my-toggler">Account</h3>
              <ul className="list_item">
                <FotterProps FootLink="#" FootName="Manage Your Apple ID" />
                <FotterProps FootLink="#" FootName="Apple Store Account" />
                <FotterProps FootLink="#" FootName="iCloud.com" />
              </ul>
            </div>

            <div className="col-sm-12 col-md">
              <h3 className="my-toggler">Apple Store</h3>
              <ul className="list_item">
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Field Trip</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
                <li>
                  <a href="#">Refurbished and Clearance</a>
                </li>
                <li>
                  <a href="#">Financing</a>
                </li>
                <li>
                  <a href="#">Apple Trade In</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
                <li>
                  <a href="#">Shopping Help</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md">
              <h3 className="my-toggler">For Business</h3>
              <ul className="list_item">
                <li>
                  <a href="#">Apple and Business</a>
                </li>
                <li>
                  <a href="#">Shop for Business</a>
                </li>
              </ul>
              <h3 className="my-toggler">For Education</h3>
              <ul className="list_item">
                <li>
                  <a href="#">Apple and Education</a>
                </li>
                <li>
                  <a href="#">Shop for College</a>
                </li>
              </ul>
              <h3 className="my-toggler">For Healthcare</h3>
              <ul className="list_item">
                <li>
                  <a href="#">Manage Your Apple ID</a>
                </li>
                <li>
                  <a href="#">Apple Store Account</a>
                </li>
                <li>
                  <a href="#">iCloud.com</a>
                </li>
              </ul>
              <h3 className="my-toggler">For Government</h3>
              <ul className="list_item">
                <li>
                  <a href="#">Apple and Education</a>
                </li>
                <li>
                  <a href="#">Shop for College</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md">
              <h3 className="my-toggler">Apple Values</h3>
              <ul className="list_item">
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Field Trip</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
              </ul>
              <h3 className="my-toggler">About Apple</h3>
              <ul className="list_item">
                <li>
                  <a href="#">Find a Store</a>
                </li>
                <li>
                  <a href="#">Genius Bar</a>
                </li>
                <li>
                  <a href="#">Today at Apple</a>
                </li>
                <li>
                  <a href="#">Apple Camp</a>
                </li>
                <li>
                  <a href="#">Field Trip</a>
                </li>
                <li>
                  <a href="#">Apple Store App</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- </div> --> */}
          <div className="apple-text pb-2">
            More ways to shop: <a href="#">Find an Apple Store</a> or
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
          </div>
          <div className="copyright-wrapper row mt-0">
            <div className="coppyright mt-3 col-sm-12 col-md-8 col-lg-4 order-2 order-md-1 order-lg-1">
              copyright © 2020 Apple Inc. All rights reserved.
            </div>
            <div className="footer-links-terms mt-3 col-sm-12 col-lg-6 order-3 order-lg-2">
              <ul className="d-flex list-unstyled">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Sales and Refunds</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
              </ul>
            </div>
            <div className="d-flex col-sm-12 col-md-4 col-lg-2 mt-3 order-1 order-md-2 order-lg-3">
              <div className="align-middle pe-1">
                <img src={flag} className="img" />
              </div>
              <div className="align-middle">United States</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
