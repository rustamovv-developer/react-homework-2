import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import "./brend.css";

function Brend({ title, text, img, color, jc }) {
  return (
    <section
      style={{
        background: `url(${img}) no-repeat center/cover`,
        justifyContent: jc,
      }}
      className="brend"
      id="brend"
    >
      <h2 style={{ color: color }} className="brend__title">
        {title}
      </h2>
      <p style={{ color: color }} className="brend__text">
        {text}
      </p>
      <div className="brend__buttons">
        <a href="#" className="brend__link">
          <p className="brend__link__text">Learn more</p>
          <FaChevronRight className="brend__link__icon" />
        </a>
        <a href="#" className="brend__link">
          <p className="brend__link__text">Buy</p>
          <FaChevronRight className="brend__link__icon" />
        </a>
      </div>
    </section>
  );
}

export default Brend;
