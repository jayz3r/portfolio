import React from "react";
import "/index.css";
import "./style/Layout.css";
import { NavLink, Outlet } from "react-router-dom";

const activeMenuClass = ({ isActive }) => (isActive ? "active-menu" : "");

export default function Layout() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <NavLink to={"/"} className={activeMenuClass}>
            <h1>Akbika</h1>
          </NavLink>
        </div>
        <nav className="headerNav">
          <ul>
            <li>
              <NavLink to={"/Me"} className={activeMenuClass}>
                Me
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Portfolio"} className={activeMenuClass}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Contacts"} className={activeMenuClass}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto px-24">
        <Outlet />
        <footer>
          <div className="footer-logo">
            <h2>BIKABOSS</h2>
          <hr style={{textAlign:'center'}}/>
          </div>
          <nav className="footer-nav">
            <ul>
              <li>
                <NavLink to={"/Me"} className={activeMenuClass}>
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Portfolio"} className={activeMenuClass}>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Contacts"} className={activeMenuClass}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}
