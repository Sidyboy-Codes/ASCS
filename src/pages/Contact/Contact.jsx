import React, { useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";

import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7n', 'ascs_main_contact', form.current, 'XczhWm8V4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <>
      <Navbar />
      <div class="fcf-body">
        <div id="fcf-form">
          <h3 class="contact">Contact</h3>

          <form ref={form} onSubmit={sendEmail} id="fcf-form-id" class="fcf-form-class" >
            <div class="fcf-form-group">
              <label for="Name" class="fcf-label">
                First Name*
              </label>
              <div class="fcf-input-group">
                <input type="text" id="Name" name="first_name" class="fcf-form-control" required />
              </div>
            </div>
            <div class="fcf-form-group">
              <label for="Name" class="fcf-label">
                Last Name*
              </label>
              <div class="fcf-input-group">
                <input type="text" id="Name" name="last_name" class="fcf-form-control" required />
              </div>
            </div>

            <div class="fcf-form-group">
              <label for="Email" class="fcf-label">
                Email*
              </label>
              <div class="fcf-input-group">
                <input type="email" id="Email" name="Email" class="fcf-form-control" required />
              </div>
            </div>
            <div class="fcf-form-group">
              <label for="phone" class="fcf-label">
                Enter your phone number*
              </label>
              <div class="fcf-input-group">
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" class="fcf-form-control" required />
              </div>
            </div>

            <div class="fcf-form-group">
              {" "}
              <label for="lang" class="fcf-label">
                Select the reason for contacting us*
              </label>
              <div class="fcf-input-group">
                <select name="reason" id="lang" class="fcf-form-control" required>
                  <option value="Partnerships">Partnerships and Sponsorships</option>
                  <option value="Volunteering">Volunteering</option>
                  <option value="Donations">Donations</option>
                  <option value="Media">Media</option>
                  <option value="event">Events</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div class="fcf-form-group">
              <label for="Message" class="fcf-label">
                Details*
              </label>
              <div class="fcf-input-group">
                <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
              </div>
            </div>

            <div class="fcf-form-group">
              <button type="submit" id="fcf-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
