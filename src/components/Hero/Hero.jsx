import React from "react";
import "./Hero.css";

import { GiTicket } from "react-icons/gi";

import chmaHero from "../../assets/chmaHero.svg";
import grayBasketball from "../../assets/grayBasketball.svg";
import heroBgVid from "../../assets/heroBgVid1.mp4";
import mawHero from "../../assets/mawHero.svg";
const Hero = () => {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   video.autoplay = true;
  //   video.load();
  // }, []);

  return (
    <section id="hero">
      <video playsinline loop muted autoPlay id="heroBgVid">
        <source src={heroBgVid} type="video/mp4" />
      </video>

      <div className="overlay">
        <img src={grayBasketball} className="overlay-bg" />
        <div className="hero__header">
          <h2>All Star Charity Shootout</h2>
          <span>20 of Canada's Top Stars Battle in the</span>
          <h1>Clash of the Charities</h1>
        </div>

        <div className="hero__body">
          <img src={mawHero} alt="" />
          <span>V/S</span>
          <img src={chmaHero} alt="" />
        </div>

        <div className="hero__footer">
          <div>
            <span>Humber College North Campus, Toronto</span>
          </div>

          <div>
            <span>July 22, 2023 at 4:30 pm</span>
          </div>
          <a href="https://www.eventbrite.ca/e/all-star-charity-shootout-clash-of-the-charities-tickets-533959165237" className="ticket-btn">
            <GiTicket size={22} /> Tickets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
