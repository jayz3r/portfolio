import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./style/Contacts.scss";

const Contacts = () => {
  return (
    <div className="navContacts">
      <div className="contactText">
        <h1 style={{ fontSize: "40px" }}>Contacts</h1>
      </div>
      <div>
        <div className="social">
          <a
            href="tel:+1123-456-7890"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <FontAwesomeIcon icon={faPhone} />
            <a href="">+996 554 922 724 </a>
          </a>
          <NavLink
            to={"https://www.tiktok.com/@a_bikaboss?_t=8ieCqI9cok6&_r=1"}
          >
            <FontAwesomeIcon icon={faTiktok} />
            <a>a_bikaboss</a>
          </NavLink>
          <NavLink
            to={
              "https://www.instagram.com/bikaboss___?igsh=MTJ1bWhzNWRlN2R3eg%3D%3D&utm_source=qr"
            }
          >
            <FontAwesomeIcon icon={faInstagram} />
            <a>bikaboss</a>
          </NavLink>
          <NavLink>
            <FontAwesomeIcon icon={faTwitter} />
            <a></a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
