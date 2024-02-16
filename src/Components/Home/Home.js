import React from "react";
import Macbook from "../Macbook/Macbook";
import IphonPro from "../IphonePro/IphonPro";
import Iphone from "../Iphone/Iphone";
import WachCard from "../WachCard/WachCard";
import TvAripod from "../TVAirPod/TvAripod";
import MacbookIpad from "../MacbookIpad/MacbookIpad";
import Youtube from "../Youtube/Youtube";
import CarouselEffect from "../Carousel/CarouselEffect";

function Home() {
  return (
    <div>
      <Macbook />
      <IphonPro />
      <Iphone />
      <WachCard />
      <TvAripod />
      <MacbookIpad />
      <CarouselEffect />
      <Youtube />
    </div>
  );
}

export default Home;
