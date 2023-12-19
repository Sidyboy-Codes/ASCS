import React, { useState } from "react";
import './Charity.css';

// assets
// import chmaCharity from "../../assets/chmaCharity.png";
import mawCharity from "../../assets/mawCharity.svg";

// library 
import ModalVideo from "react-modal-video";

// things to do
// getting dynamic data for para and dynamic youtube link

const Charity = () => {
  // handling youtube video pop-up (2 videos)
    const [isOpen1, setOpen1] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
  return (
    <section id="charity">
      <ul className="charity__container">
        <li className="charity__card">
          <img src={mawCharity} />

          <div className="charity__text">
            <h1>Make-A-Wish Canada</h1>
            <p>
              Make-A-Wish® Canada is thrilled to have been selected as a charity partner for the 2023 All-Star Charity Shootout. This event has made
              such an incredible impact on local charities over the past five years, and we are excited to be a part of it.
            </p>
            <p>
              Make-A-Wish® creates life-changing wishes for children with critical illnesses, and our mission to grant every eligible child across
              Canada their heartfelt wish. Over the past two years, the Covid-19 pandemic has left close to 4,000 wishes waiting, as an average of 60%
              of all wishes involve travel and could not be fulfilled.
            </p>
          </div>

          <button onClick={() => setOpen1(!isOpen1)}>Play video</button>
        </li>
        <ModalVideo channel="youtube" isOpen={isOpen1} videoId="nb0GBkeTb5g" onClose={() => setOpen1(false)} autoplay />

        <li className="charity__card">
          <img src="https://i.postimg.cc/FKwS3gTP/chma-Charity.png" />
          <div className="charity__text">
            <h1>Canadian Mental Health Association</h1>
            <p>
            Through leadership, collaboration, and the continual pursuit of excellence in community-based mental health and addiction services, Canadian Mental Health Association works to achieve the vision of a society that embraces and invests in the mental health of all people.
            </p>
            <p>
            Your support through the 2023 All-Star Charity Shootout means we can continue, to identify and respond to Canada’s most pressing mental health priorities.
            </p>
          </div>

          <button onClick={() => setOpen2(!isOpen2)}>Play video</button>
        </li>
        <ModalVideo channel="youtube" isOpen={isOpen2} videoId="OM4XmCdCieA" onClose={() => setOpen2(false)} autoplay />
      </ul>
    </section>
  );
};

export default Charity;


// allstarcharityshootout.com