import React from "react";
import '/index.css'
import "./style/Layout.css";
import { NavLink, Outlet } from "react-router-dom";

const activeMenuClass = ({ isActive }) => isActive ? "active-menu" : "";

export default function Layout() {
  return (
    <div>
      <div className="header xl:container">

        <div className="logo">
          <NavLink to={'/'} className={activeMenuClass}>
          <h1 className="text">Bika</h1>
          </NavLink>
        </div>
        <nav className="headerNav">
          <ul>
            <li><NavLink to={'/'} className={activeMenuClass}>About me</NavLink></li>
            <li><NavLink to={'/Portfolio'} className={activeMenuClass}>Portfolio</NavLink></li>
            <li><NavLink to={'/Contacts'} className={activeMenuClass}>Contacts</NavLink></li>
          </ul>
        </nav>
      </div>
      <div className="xl:container">

      
      <Outlet />
      <footer>
        <div className="footer-logo">
        <h2>
          BIKABOSS
        </h2>
        </div>

        <nav className="footer-nav">
        <ul>
            <li><NavLink to={'/'} className={activeMenuClass}>About me</NavLink></li>
            <li><NavLink to={'/Portfolio'} className={activeMenuClass}>Portfolio</NavLink></li>
            <li><NavLink to={'/Contacts'} className={activeMenuClass}>Contacts</NavLink></li>
          </ul>

        </nav>
      </footer>
      </div>
    </div>
  );
}
