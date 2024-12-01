import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      {/* <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="./hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">Food</h1>
                <h1 className="title dishes_title">Dishes</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="hero2.png" alt="hero" />
          </div>
          <h1 className="title dishes_title">Dishes</h1>
        </div>
      </div> */}
      <section className="home" id="home">
        <div className="dhee">
        <div className="content">
          <h3>
            fresh <span>food in the </span>morning
          </h3>
        </div>
        <p id="parr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          assumenda  exercitationem reprehenderit nam?
        </p>
        <button class="button"><span>get yours now </span></button>
        </div>
        <div className="dhe">

        </div>
        
      </section>
    </section>
  );
};

export default HeroSection;
