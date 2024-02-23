import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";
import "./Carousel.css";
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={64}
      >
        {img?.map((imageLink) => {
          return (
            <div className="my-caousel">
              <img src={imageLink.imgs} />
              <p>{imageLink.img_text}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
