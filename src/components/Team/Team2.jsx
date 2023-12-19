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
        
        <h2>To Be Announced...</h2>
      </div>

      <div className="team__container">
        <h1>Team Canadian Mental Health Association</h1>

        <h2>To Be Announced...</h2>
      </div>
    </section>
  );
};

export default Team;
