import React from "react";
import Carousel from "./Carousel";


const MainPage = () => {
  return (
    <>
      <div className="main-page">
      <div className="main-top-head">LATEST MODELS</div>
      <div className="main-bot-head">PLEASE SELECT THE MODEL</div>
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
};

export default MainPage;
