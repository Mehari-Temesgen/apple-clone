import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/data";
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
            <>
              <img src={imageLink} />
              {/* <p>{text1}</p> */}
            </>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselEffect;
