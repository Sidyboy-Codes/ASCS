import "glider-js/glider.min.css";
import React, { useState } from "react";
import Glider from "react-glider";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./introduction.css";

import ModalVideo from "react-modal-video";

// import guest1 from "../../assets/guest1.webp";
// import guest2 from "../../assets/guest2.webp";
// import introImg from "../../assets/introImg.webp";
// import introImgLeft from "../../assets/introImgLeft.webp";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Introduction = () => {
  const [isOpen, setOpen] = useState(false);

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <section id="introduction">
      <div className="intro__video">
        <img src="https://i.postimg.cc/ZKzX58HL/intro-Img-Left.webp" />
        <div
          className="intro__video__sec"
          style={{
            backgroundImage: `url(https://i.postimg.cc/Nf8S9KPv/introImg.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => setOpen(!isOpen)}
        >
          <ModalVideo channel="youtube" isOpen={isOpen} videoId="7QUVoJvTSnI" onClose={() => setOpen(false)} autoplay />
        </div>
      </div>

      <div className="intro__guest">
        <Glider
          className="glider-container"
          hasArrows
          hasDots
          scrollLock
          responsive={[
            {
              breakpoint: 890,
              settings: {
                slidesToShow: "2",
                slidesToScroll: "1",
                duration: 0.25,
              },
            },
          ]}
        >
          <div class="card slide">
            <img src="https://i.postimg.cc/vZ2tKySN/guest1.webp" alt="Guest Image" class="card-header" />
            <div class="card-body">
              <h2 class="guest-name">Tychon Carter Newman</h2>
              <p class="guest-description">Event Host</p>
            </div>
            <div class="card-footer">
              <a onClick={() => setModal1(true)} className="read-more">
                Read More
              </a>
            </div>
            <Modal
              open={modal1}
              onClose={() => setModal1(false)}
              center
              classNames={{
                modal: "customModal",
              }}
            >
              <div class="modal">
                <div class="modal-header">
                  <img src="https://i.postimg.cc/vZ2tKySN/guest1.webp" alt="Guest Portrait" />
                  <h2>Tychon Carter Newman</h2>
                </div>
                <div class="modal-body">
                <p>
                    Tychon's debut as a public figure stemmed from being crowned as the winner of Big Brother Canada Season 9. As the first black
                    winner of the series, he uses his platform to make a positive difference in the world.
                  </p>
                  <p>
                    Tychon's life's work has been dedicated to Community Building, mostly as an Urban Planner, Basketball Coach, and Youth Program
                    Director. Through being an Ambassador for Diversity and Inclusion, Mental Health, Education, and Active Living, he believes he can
                    help be part of the change he'd like to see in today's world.{" "}
                  </p>
                  <p>
                    Motivational speaking is the vehicle he uses to inspire, empower and advocate for change. Through storytelling, humour and
                    engagement he is able to connect with his audience in the aspiration of helping people reach their potential.
                  </p>
                </div>
              </div>
            </Modal>
          </div>

          <div class="card slide">
            <img src="https://i.postimg.cc/Wp0S1Qhd/guest2.webp" alt="Guest Image" class="card-header" />
            <div class="card-body">
              <h2 class="guest-name">Akil Augustine</h2>
              <p class="guest-description">Event Host</p>
            </div>
            <div class="card-footer">
              <a onClick={() => setModal2(true)} className="read-more">
                Read More
              </a>
            </div>
            <Modal
              open={modal2}
              onClose={() => setModal2(false)}
              center
              classNames={{
                modal: "customModal",
              }}
            >
              <div class="modal">
                <div class="modal-header">
                  <img src="https://i.postimg.cc/Wp0S1Qhd/guest2.webp" alt="Guest Portrait" />
                  <h2>Akil Augustine</h2>
                </div>
                <div class="modal-body">
                <p>
                    Akil Augustine has been reporting on the Toronto Raptors for over a decade with NBATVCanada and Raptors.com and has been a member
                    of the Raptors 905 broadcast team for the last 3 seasons. Raised in Toronto and a graduate of Seneca College’s Broadcast
                    journalism program, Akil has stayed involved in the game of basketball at all levels in the city and continues to volunteer his
                    services with the cities youth through initiatives like Northern Kings AAU and the not for profit Amadeuz.
                  </p>
                </div>
              </div>
            </Modal>
          </div>
        </Glider>
      </div>
    </section>
  );
};

export default Introduction;
