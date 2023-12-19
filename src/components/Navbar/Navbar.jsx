import React, { useState } from "react";
import ascsLogo from "../../assets/ascsLogo.svg";
import "./Navbar.css";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { Link } from "wouter";

// things to be done
// Need to increase size of ticket logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link href="/">
          <img src={ascsLogo} alt="All star charity shoot out logo" />
        </Link>
      </div>

      <div className={`navbar-menus ${isOpen ? "" : "no-active"}`}>
        <div className="navbar-menus-menu1">
          <a href="../#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="./#charity" onClick={() => setIsOpen(false)}>
            Charities
          </a>
          <a href="/#team" onClick={() => setIsOpen(false)}>
            Teams
          </a>
          <a href="/#article" onClick={() => setIsOpen(false)}>
            Articles
          </a>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link href="/partners" onClick={() => setIsOpen(false)}>
            Partners
          </Link>
          {/* <a href="https://www.canadahelps.org/en/pages/clash-of-the-charities/" target="_blank" className="donate-btn">
            Donate
          </a> */}
        </div>

        <div className="navbar-menus-menu2">
          <a href="https://www.eventbrite.ca/e/all-star-charity-shootout-clash-of-the-charities-tickets-533959165237" className="ticket-btn">
            <GiTicket size={22} /> Tickets
          </a>

          <div className="navbar-menu2-social">
            <a href="https://www.instagram.com/allstarcharityshootout" target="_blank" onClick={() => setIsOpen(false)}>
              <BsInstagram />
            </a>
            <a href="https://www.facebook.com/allstarcharityshootout" target="_blank" onClick={() => setIsOpen(false)}>
              <BsFacebook />
            </a>
            <a href="https://www.tiktok.com/@allstarcharityshootout" target="_blank" onClick={() => props.setIsOpen(false)}>
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <button className="hamburger" onClick={handleToggle}>
        {isOpen ? "X" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
