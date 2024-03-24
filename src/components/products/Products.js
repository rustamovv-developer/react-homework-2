import React from "react";
import { PRODUCTS } from "../../static";
import { FaChevronRight } from "react-icons/fa6";
import "./products.css";

function Products() {
  return (
    <section className="products" id="products">
      <div className="products__info">
        {PRODUCTS.map(({ id, title, text, img, color }) => (
          <div
            id="products__card"
            key={id}
            style={{
              background: `url(${img}) no-repeat center/cover`,
            }}
            className="products__card"
          >
            <h2 style={{ color: color }} className="products__title">
              {title}
            </h2>
            <p style={{ color: color }} className="products__text">
              {text}
            </p>
            <div className="products__buttons">
              <a href="#" className="products__link">
                <p className="products__link__text">Learn more</p>
                <FaChevronRight className="products__link__icon" />
              </a>
              <a href="#" className="products__link">
                <p className="products__link__text">Buy</p>
                <FaChevronRight className="products__link__icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
