import React from "react";
import "./Sponsor.css";

import temp2Logo from "../../assets/ascsLogo.svg";
// import temp1Logo from "../../assets/blackLogo.png";

import Marquee from "react-fast-marquee";

const Sponsor = () => {
  return (
    <Marquee className="sponsor" gradient={false}>
      {Array.from({ length: 6 }).map((item, i) => (
        <React.Fragment key={i}>
          <img src="https://i.postimg.cc/XvCg5F1j/black-Logo.png" alt="" />
          <img src={temp2Logo} alt="" />
        </React.Fragment>
      ))}

      {/* <img src="https://i.postimg.cc/ZYvrGcgF/banner-better-Planing.png" alt="better planning group"/>
      <img src="https://i.postimg.cc/sDhQpZkx/spons-Fedility.png" alt="Fidelity Investments"/>
      <img src="https://i.postimg.cc/SQw7FqqX/spons-Ignite.png" alt="Humber Ignite"/>
      <img src="https://i.postimg.cc/yW41SBXj/spons-Westin-Toronto.png" alt="the westin"/>
      <img src="https://i.postimg.cc/43JYk2mH/spons-Toolbox.png" alt="toolbox branding"/>

      <img src="https://i.postimg.cc/ZYvrGcgF/banner-better-Planing.png" alt="better planning group"/>
      <img src="https://i.postimg.cc/sDhQpZkx/spons-Fedility.png" alt="Fidelity Investments"/>
      <img src="https://i.postimg.cc/SQw7FqqX/spons-Ignite.png" alt="Humber Ignite"/>
      <img src="https://i.postimg.cc/yW41SBXj/spons-Westin-Toronto.png" alt="the westin"/>
      <img src="https://i.postimg.cc/43JYk2mH/spons-Toolbox.png" alt="toolbox branding"/> */}
    
    </Marquee>
  );
};

export default Sponsor;
