import React from "react";
import "./Partners.css";

// import logo from "../../assets/ascsLogo.svg";

// import sponsMilestones from "../../assets/Milestones-Restaurants.jpeg";
// import sponsBetterPlan from "../../assets/sponsBetterPlan.png";
// import sponsDesjardins from "../../assets/sponsDesjardins.png";
// import sponsFidelity from "../../assets/sponsFedility.png";
// import sponsIgnite from "../../assets/sponsIgnite.png";
// import sponsToolbox from "../../assets/sponsToolbox.png";
import Navbar from "../../components/Navbar/Navbar";

const Partners = () => {
  return (
    <>
      <Navbar />
      <section id="partners">
        <div class="container">
          <div className="header">
            <h1>Thank You To Our Partners And Donors</h1>
          </div>
          <div class="row">
            <div class="column">
              <a href="https://betterplanningtoday.com/">
                <img src="https://i.postimg.cc/qvcNFHMd/spons-Better-Plan.png" alt="Sponsor 1" />
              </a>
            </div>
            <div class="column">
              <img src="https://i.postimg.cc/SQw7FqqX/spons-Ignite.png" alt="Sponsor 3" />
            </div>
            <div class="column">
              <img src="https://i.postimg.cc/sDhQpZkx/spons-Fedility.png" alt="Sponsor 2" />
            </div>
          </div>
          <div class="row2">
            <div class="column">
              <a href="https://www.torontosignsandwraps.com/">
                <img src="https://i.postimg.cc/43JYk2mH/spons-Toolbox.png" alt="Sponsor 4" />
              </a>
            </div>
            <div class="column">
                <img src="https://i.postimg.cc/8zgFwzGH/spons-Milestones.jpg" alt="Sponsor 5" />
            </div>
            <div class="column">
                <img src="https://i.postimg.cc/yW41SBXj/spons-Westin-Toronto.png" alt="Sponsor 6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
