import React from "react";
import { FaApple } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { LINKS } from "../../static";
import "./nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <ul className="nav__list">
            <NavLink to={"/"}>
              <FaApple className="nav__icon" />
            </NavLink>
            <NavLink className="nav__link" to={"/store"}>
              Store
            </NavLink>
            <NavLink className="nav__link" to={"/mac"}>
              Mac
            </NavLink>
            <NavLink className="nav__link" to={"/ipad"}>
              iPad
            </NavLink>
            <NavLink className="nav__link" to={"/iphone"}>
              iPhone
            </NavLink>
            <NavLink className="nav__link" to={"/watch"}>
              Watch
            </NavLink>
            <NavLink className="nav__link" to={"/vision"}>
              Vision
            </NavLink>
            <NavLink className="nav__link" to={"/airpods"}>
              AirPods
            </NavLink>
            <NavLink className="nav__link" to={"/tv"}>
              TV & Home
            </NavLink>
            <NavLink className="nav__link" to={"/ent"}>
              Entertainment
            </NavLink>
            <NavLink className="nav__link" to={"/acc"}>
              Accessories
            </NavLink>
            <NavLink className="nav__link" to={"/support"}>
              Support
            </NavLink>
          </ul>
          <GoSearch className="nav__icon" />
          <IoBagOutline className="nav__icon" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
