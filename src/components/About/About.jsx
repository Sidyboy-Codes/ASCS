import React, { useEffect, useRef, useState } from "react";

import Lottie from "lottie-react";
import grayBb from "../../assets/aboutBasketball.svg";
import wavyBorder from "../../assets/wavy-border.json";
import "./About.css";

const About = () => {
  // useref to get position of about section 
  const aboutRef = useRef();
  const [imgScale, setImgScale] = useState(0);
  const [titleOpc, setTitleOpc] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", setBbSize);
  }, []);

  // zooming basketball size
  let about__offSet = 0;
  let about__height = 0;
  let pos = 0;
  let scale = 0;
  let zoomSpeed;
  let opacity = 1;
  const setBbSize = () => {
    // checking height of about sec
    about__height = aboutRef.current.clientHeight;

    // calculating offset of about sec div
    about__offSet = aboutRef.current.offsetTop - window.scrollY;
    pos = about__offSet * -1;

    // setting image scale according to position of about div
    // if small screen zoom speed will be more
    if (window.matchMedia("(max-width: 810px)").matches) {
      zoomSpeed = 760;
      opacity = (pos / (about__height/2)) * -1 + 0.9;
      setTitleOpc(opacity);
    } else {
      zoomSpeed = 260;
      setTitleOpc(1);
    }
    scale = (pos / about__height) * zoomSpeed;
    setImgScale(scale);


  };

  // lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: wavyBorder,
  };

  return (
    <section id="about" ref={aboutRef}>
      <div className="about__sticky">
        <div className="about__title" style={{ opacity: `${titleOpc}` }}>
          <h1>
            All-star
            <br />
            Charity Shootout
            <br />
            <span>Clash of The Charities?</span>
          </h1>
        </div>
        <img src={grayBb} style={{ width: `${imgScale}vw` }} />
      </div>

      <div className="about__info">
        <div className="about__info__block">
          <h1>Mission</h1>
          <p>All-Star Charity Shootout's mission is to assist charitable organizations, through the mobilization of high calibre sporting events.</p>
          <Lottie loop autoplay animationData={wavyBorder} speed={0.5} />
        </div>

        <div className="about__info__block">
          <h1>Introduction</h1>
          <p>
            All-Star Charity Shootout (ASCS) is a celebration of Canadian basketball at its best. The event will showcase 20 of Canada’s most talented
            university, college, and professional basketball stars.
          </p>
          <p>
            More than just a high caliber basketball game, ASCS is an educational experience. This high-profile event uses basketball as a tool to
            create unique and exciting learning experiences that will educate basketball enthusiasts and players about worthwhile charitable causes in
            their communities.
          </p>
          <p>
            For 5 years, ASCS has worked with charities such as Heart and Stroke Foundation, YMCA, Kids Help Phone, War Child Canada, and London
            Children Museum to raise funds and awareness for their local programs.
          </p>
          <Lottie loop autoplay animationData={wavyBorder} speed={0.5} />

        </div>

        <div className="about__info__block">
          <h1>CLASH OF THE CHARITIES - OVERVIEW</h1>
          <ul>
            <li>This event will showcase 20 male All-Star basketball players on the university, college and professional level.</li><br/>
            <li>Proceeds raised from the event will assist the Make-A-Wish Foundation and the Canadian Mental Health Association.</li><br/>
            <li>Players will be divided into two teams, and they will represent one of the participating charitable organizations.</li><br/>
            <li>Charity represented by the winning team will receive 60% of the proceeds and the other charity will receive 40% of the proceeds.</li><br/>
            <li><strong>100% of ticket sales will go directly to the participating charities.</strong></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
