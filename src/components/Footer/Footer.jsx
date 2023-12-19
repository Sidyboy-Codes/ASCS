import React, { useRef } from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import Partners from './../../Pages/Partners';
import "./Footer.css";

import emailjs from '@emailjs/browser';
import { Link } from "wouter";


const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7', 'ascs_newsletter', form.current, 'XczhWm8kV43')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="footer">
      <div className="footer__heading">
        <h1>Get the latest</h1>
        <span>Stay up to date with ASCS news, events, and exclusive opportunities</span>
      </div>

      <form ref={form} onSubmit={sendEmail} className="footer__form">
        <div className="form__grp">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="e.g. youremail@gmail.com" required />
        </div>
        <div className="form__grp">
          <label htmlFor="postal_code">Postal Code</label>
          <input
            type="text"
            name="postal_code"
            id="postal_code"
            placeholder="e.g. m4m 3s5"
            pattern="^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$"
            required
          />
        </div>

        <div className="form__radio">
          <input type="checkbox" name="consent" id="consent" value="agreed" required />
          <label htmlFor="consent">
            By clicking the box, you are agreeing to receive electronic communications from All-Star Charity Shootout. You are free to unsubscribe at
            any time.
          </label>
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <div className="footer__links">
        <p>
          {/* <a href="">Privacy Policy</a>
          <span>|</span>
          <a href="">Terms & Conditions</a>
          <span>|</span> */}
          <Link href="/contact">Contact</Link>
          <span>|</span>
          <Link href="/partners">Partners</Link>
        </p>
      </div>

      <div className="footer__socialMedia">
        <a href="https://www.facebook.com/allstarcharityshootout" target="_blank">
          <BsFacebook />
        </a>

        <a href="https://www.instagram.com/allstarcharityshootout" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://www.tiktok.com/@allstarcharityshootout">
          <FaTiktok />
        </a>

        <a href="https://www.youtube.com/@all-starchariyshootout">
          <BsYoutube />
        </a>
      </div>

      <div className="footer__copyRight">
        <p>Copyright © 2023. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
