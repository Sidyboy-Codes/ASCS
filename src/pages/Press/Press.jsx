import React, { useEffect, useLayoutEffect } from "react";
import useLocation from "wouter/use-location";
import pressPdf from "../../assets/ASCS Press Release.pdf";
import Navbar from "../../components/Navbar/Navbar";
import "./Press.css";

const Press = () => {
  const [location, setLocation] = useLocation();

  // Scroll to top when the location changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <section className="press">
        <h1>Press Release</h1>
        <div className="press_contain">
          <span>FOR IMMEDIATE RELEASE</span>
          <p>
            <strong>
              20 of Canada's Top Basketball Stars to Battle in All-Star Charity Shootout: Clash of the Charities, Supporting Make-A-Wish Foundation
              and Canadian Mental Health Association
            </strong>
          </p>
          <p>
            Toronto, ON – June 5th, 2023 - The stage is set for an epic clash as Canada's basketball elite gear up for the All-Star Charity Shootout:
            Clash of the Charities, a thrilling exhibition game in support of the Make-A-Wish Foundation and the Canadian Mental Health Association
            (CMHA). Taking place on July 22nd at Humber College in Toronto, this highly anticipated event promises an unforgettable evening of
            basketball, entertainment, and philanthropy.
          </p>
          <p>
            In a show of unity and compassion, 20 of Canada's most talented basketball stars will take to the court, displaying their skills and
            competing for a worthy cause. These remarkable athletes, hailing from professional leagues and college teams, have graciously come
            together to support the missions of the Make-A-Wish Foundation and the Canadian Mental Health Association.
          </p>
          <p>
            The Make-A-Wish Foundation has been fulfilling the dreams of children facing critical illnesses, providing them with hope, joy, and
            unforgettable experiences. By granting wishes, this remarkable organization has brought smiles to the faces of countless children and
            their families during challenging times.
          </p>

          <p>
            The Canadian Mental Health Association is a prominent advocate for mental wellness, supporting individuals and families affected by mental
            health challenges and promoting positive mental health across Canada. Their tireless efforts have helped create a more inclusive and
            compassionate society, reducing the stigma surrounding mental health.
          </p>

          <p>
            The Clash of the Charities game will not only showcase extraordinary basketball skills but also serve as a platform to raise funds for
            these two remarkable organizations. The winning team's charity will receive 60% of the proceeds generated by the event, while the
            remaining 40% will be directed to the other charity, ensuring both causes benefit from the collective generosity of participants and
            attendees.
          </p>

          <p>
            "We are thrilled to bring together Canada's top basketball stars for the All Star Charity Shootout: Clash of the Charities," said
            Fitzallen Sutton, Director of the event. "This game represents the perfect synergy between athletic excellence and social impact. We
            invite basketball fans and supporters of these incredible charities to join us for a day of thrilling basketball and to contribute to
            making a difference in the lives of children and individuals facing critical illnesses and mental health challenges."
          </p>

          <p>
            Tickets for the All-Star Charity Shootout: Clash of the Charities are available for purchase at www.allstarcharityshootout.com. The
            website will also provide event updates, including player announcements, halftime show details, and additional ways to contribute and get
            involved.
          </p>

          <p>
            Join us on July 22nd at Humber College for an unforgettable evening of basketball, camaraderie, and charitable giving. Together, let's
            support the Make-A-Wish Foundation and the Canadian Mental Health Association as we unite under the banner of sportsmanship and
            compassion.
          </p>

          <p>
            Media Contact: <br />
            All-Star Charity Shootout <br />
            Fitzallen Sutton, Director <br />
            <a href="mailto:fitzallen.sutton@dfsin.ca">Fitzallen.sutton@dfsin.ca</a> <br />
            <a href="tel:+14168757385">416.875.7385</a>
          </p>

          <a className="download_btn" href={pressPdf} download>Download Pdf</a>
        </div>
      </section>
    </>
  );
};

export default Press;
