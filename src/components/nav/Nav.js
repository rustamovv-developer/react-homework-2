import React from "react";
import { FaApple } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import { IoBagOutline } from "react-icons/io5";
import { LINKS } from "../../static";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <FaApple className="nav__icon" />
          <ul className="nav__list">
            {LINKS.map((el, i) => (
              <li key={i} className="nav__item">
                <a key={i} href="#" className="nav__link">
                  {el}
                </a>
              </li>
            ))}
          </ul>
          <GoSearch className="nav__icon" />
          <IoBagOutline className="nav__icon" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
