import React from "react";
import "./Team.css";

// libs
import "glider-js/glider.min.css";
import { useState } from "react";
import Glider from "react-glider";
import { AiFillYoutube } from "react-icons/ai";

const Team = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section id="team">
            <div className="team__container">
        <h1>Team Make A Wish</h1>
        <Glider
          className="glider-container"
          hasArrows
          hasDots
          scrollLock
          slidesToShow={1}
          responsive={[
            {
              breakpoint: 890,
              settings: {
                slidesToShow: "4",
                slidesToScroll: "1",
                duration: 0.25,
              },
            },
          ]}
        >

          {/* player 1 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/qtB6bNLy/maw-p1.png" alt="shakwon barrett"/>
              <span>Shakwon Barrett</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'5ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>KW Titans (Canada)</span>
              </p>
              <p>
                Accolades: <span>NBLC Rookie Of The Year Pro</span>
              </p>
            </div>
          </div>

          {/* player 2 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/tYh193vF/maw-p2.png" alt="kamar mcknight"/>
              <span>Kamar McKnight</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'4ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>GTUNI</span>
              </p>
              <p>
                Accolades: <span>Double Digital D1 Scorer Pro</span>
              </p>
            </div>
          </div>

          {/* player 3 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/9w9DRZm5/maw-p3.png" alt="keon ambrose-hylton" />
              <span>Keon Ambrose-Hylton</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'8ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>SMU</span>
              </p>
              <p>
                Accolades: <span>ESPN 4-Star Prospect NCAA</span>
              </p>
            </div>
          </div>

          {/* player 4 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/mcdz0TXq/maw-p4.png" alt="ali mahmoud"/>
              <span>Ali Mahmoud</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'0ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Dynamo Lebanon</span>
              </p>
              <p>
                Accolades: <span>11x Lebanese League Champion Pro</span>
              </p>
            </div>
          </div>

          {/* player 5 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/hz6Jtpq1/maw-p5.png" alt="tyson dunn"/>
              <span>Tyson Dunn</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'3ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Western University</span>
              </p>
              <p>
                Accolades: <span>OUA All-Star U-Sports</span>
              </p>
            </div>
          </div>

          {/* player 6 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/JGwDw6x1/maw-p6.png" alt="mohamud qasim" />
              <span>Mohamud Qasim</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'7ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Sheridan</span>
              </p>
              <p>
                Accolades: <span>OCAA All-Star CCAA</span>
              </p>
            </div>
          </div>

          {/* player 7 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/w3RyG8hf/maw-p7.png" alt="reece brooks"/>
              <span>Reece Brooks</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>5'10ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Bensheim (Germany)</span>
              </p>
              <p>
                Accolades: <span>17 PPG Second on The Team Pro</span>
              </p>
            </div>
          </div>

          {/* player 8 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/tZYZb88g/maw-p8.png" alt="noah ngamba"/>
              <span>Noah Ngamba</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'5ft</span>
              </p>
              <p>
                Position: <span>Guard/Forward</span>
              </p>
              <p>
                Current Team: <span>University of Toronto</span>
              </p>
              <p>
                Accolades: <span>All-Rookie U Sports</span>
              </p>
            </div>
          </div>

          {/* player 9 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/xX5cz02C/maw-p9.png" alt="stefan prica" />
              <span>Stefan Prica</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'2ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Ontario Tech</span>
              </p>
              <p>
                Accolades: <span>All-Rookie U Sports</span>
              </p>
            </div>
          </div>
        </Glider>
      </div>

      <div className="team__container">
        <h1>Team Canadian Mental Health Association</h1>

        <Glider
          className="glider-container"
          hasArrows
          hasDots
          scrollLock
          slidesToShow={1}
          responsive={[
            {
              breakpoint: 890,
              settings: {
                slidesToShow: "4",
                slidesToScroll: "1",
                duration: 0.25,
              },
            },
          ]}
        >

          {/* player 1 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/s1N1LpWb/chma-p1.png" alt="deQuon cascart"/>
              <span>DeQuon Cascart</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'1ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Truro Tide</span>
              </p>
              <p>
                Accolades: <span>OCAA Male Athlete of the Year Pro</span>
              </p>
            </div>
          </div>

          {/* player 2 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/z3BVpdyn/chma-p2.png" alt="nana owusu-anane"/>
              <span>Nana Owusu-Anane</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'8ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>Brown University</span>
              </p>
              <p>
                Accolades: <span>2nd Highest Rebound Average NCAA </span>
              </p>
            </div>
          </div>

          {/* player 3 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/XG2X45zG/chma-p3.png" alt="taye donald"/>
              <span>Taye Donald</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'3ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Wilfrid Laurier</span>
              </p>
              <p>
                Accolades: <span>OUA All-Star U Sports</span>
              </p>
            </div>
          </div>

          {/* player 4 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/rRKsmpBh/chma-p4.png" alt="shakur daniel"/>
              <span>Shakur Daniel</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'6ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Tarleton Texans</span>
              </p>
              <p>
                Accolades: <span>All-WAC Honorable Mention Pro</span>
              </p>
              <a className="yt__link" href="https://www.youtube.com/watch?v=BYilqz5X2g8" target="_blank">
                <AiFillYoutube size={26} />
                Highlights
              </a>
            </div>
          </div>

          {/* player 5 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/gwm0h49L/chma-p5.png" alt="ryan wright"/>
              <span>Ryan Wright</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'9ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>Winnipeg Sea Bears</span>
              </p>
              <p>
                Accolades: <span>13-year professional Pro</span>
              </p>
            </div>
          </div>

          {/* player 6 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/rD6sVMQJ/chma-p6.png" alt="jerry jr. mercury"/>
              <span>Jerry Jr. Mercury</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'4ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>Mohawk</span>
              </p>
              <p>
                Accolades: <span>OCAA All-Star CCAA</span>
              </p>
            </div>
          </div>

          {/* player 7 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/F7k1X7gz/chma-p7.png" alt="simeon smith" />
              <span>Simeon Smith</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'1ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Georgian College</span>
              </p>
              <p>
                Accolades: <span>OCAA All-Star CCAA</span>
              </p>
            </div>
          </div>

          {/* player 8 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/HrQxjRNC/chma-p8.png" alt="marcus barnes"/>
              <span>Marcus Barnes</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'3ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>UNB</span>
              </p>
              <p>
                Accolades: <span>U Sports All-Rookie U Sports</span>
              </p>
            </div>
          </div>

          {/* player 9 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/vTfy3F2j/chma-p9.png" alt="aaron rhooms" />
              <span>Aaron Rhooms</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'5ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>TMU</span>
              </p>
              <p>
                Accolades: <span>2022 ROY U Sports</span>
              </p>
            </div>
          </div>
        </Glider>
      </div>
    </section>
  );
};

export default Team;
