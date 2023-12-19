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
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/7L7HqPHc/maw-p1.jpg" />
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
                Accolades: <span>Rebounds 2nd in Ivy League</span>
              </p>
            </div>
          </div>

          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/YqSf7NCh/maw-p2.jpg" />
              <span>KeonAmbrose-Hylton</span>
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
                Accolades: <span>4-Star Athlete by ESPN</span>
              </p>
            </div>
          </div>

          {/* player 3 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/MKYR8K0q/maw-p3.jpg" />
              <span>Dezayne Mingo</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'4ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Guelph Gryphons</span>
              </p>
              <p>
                Accolades: <span>OUA ROY & U Sports All-Rookie Team</span>
              </p>
            </div>
          </div>

          {/* player 4 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/RFqwJJZv/maw-p4.jpg" />
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
                Accolades: <span>2022 OCAA Athlete of the Year & CCAA National Champion</span>
              </p>
            </div>
          </div>

          {/* player 5 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/SKCddv0J/maw-p5.jpg" />
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
                Accolades: <span>U Sports All-Rookie team</span>
              </p>
            </div>
          </div>

          {/* player 6 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/L5tCPvdf/maw-p6.jpg" />
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
                Current Team: <span>VFL Bensheim</span>
              </p>
              <p>
                Accolades: <span>PRO</span>
              </p>
            </div>
          </div>

          {/* player 7 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/JnQqVHz8/maw-p7.jpg" />
              <span>Frank Mitchell</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'8ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>Canisius</span>
              </p>
              <p>
                Accolades: <span>2022 National Champion CCAA</span>
              </p>
            </div>
          </div>

          {/* player 8 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/26YwK7mT/maw-p8.jpg" />
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
                Accolades: <span>All-Rookie Team</span>
              </p>
            </div>
          </div>

          {/* player 9 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/3xVXGdRm/maw-p9.jpg" />
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
                Accolades: <span>Professional Scorer</span>
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
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/FHwFtk43/cmha-p1.jpg" />
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
                Current Team: <span>Tarleton Texans Alumni/Professional</span>
              </p>
              <p>
                Accolades: <span>All-WAC Honorable Mention</span>
              </p>
              <a className="yt__link" href="https://www.youtube.com/watch?v=BYilqz5X2g8" target="_blank">
                <AiFillYoutube size={26} />
                Highlights
              </a>
            </div>
          </div>

          {/* player 2 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/WF2mXHbD/chma-p2.jpg" />
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
                Current Team: <span>Winnipeg Sear Bears / KK Kumanovo</span>
              </p>
              <p>
                Accolades: <span>13-year professional career spanning 14 countries</span>
              </p>
            </div>
          </div>

          {/* player 3 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/SRxXScf4/chma-p3.jpg" />
              <span>Aaron Rhooms</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'6ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>TMU</span>
              </p>
              <p>
                Accolades: <span>2022 U Sports ROY & 2023 OUA All-Star</span>
              </p>
            </div>
          </div>

          {/* player 4 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/XrCgJ5zv/chma-p4.jpg" />
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
                Current Team: <span>Dynamo</span>
              </p>
              <p>
                Accolades: <span>All-Lebanese League Domestic Player of the Year</span>
              </p>
            </div>
          </div>

          {/* player 5 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/B8fB1vrB/chma-p5.jpg" />
              <span>Taye Donald</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'2ft</span>
              </p>
              <p>
                Position: <span>Guard</span>
              </p>
              <p>
                Current Team: <span>Laurier University</span>
              </p>
              <p>
                Accolades: <span>OUA All-Star</span>
              </p>
            </div>
          </div>

          {/* player 6 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/4KvbvgZk/chma-p6.jpg" />
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
                Accolades: <span>OUA All-Star</span>
              </p>
            </div>
          </div>

          {/* player 7 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/Zvn8hvN4/chma-p7.jpg" />
              <span>Mohamud Qasim</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'7ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>Sheridan College</span>
              </p>
              <p>
                Accolades: <span>1st Team OCAA All-Star</span>
              </p>
            </div>
          </div>

          {/* player 8 */}
          <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/k6fQZvBT/chma-p8.jpg" />
              <span>Noah Ngamba</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'5ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>University of Toronto</span>
              </p>
              <p>
                Accolades: <span>All-Rookie Team</span>
              </p>
            </div>
          </div>

          {/* player 9 */}
          {/* <div className="player__card">
            <div className="player__card__header">
              <img src="https://i.postimg.cc/TPTDggxy/chma-p9.jpg" />
              <span>Emmanuel Ansah</span>
            </div>
            <div className="player__card__body">
              <p>
                Height: <span>6'6ft</span>
              </p>
              <p>
                Position: <span>Forward</span>
              </p>
              <p>
                Current Team: <span>Guelph University</span>
              </p>
              <p>
                Accolades: <span></span>
              </p>
            </div>
          </div> */}
        </Glider>
      </div>
    </section>
  );
};

export default Team;
