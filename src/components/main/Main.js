import React from "react";
import Brend from "../brend/Brend";
import Products from "../products/Products";
import brendBg1 from "../../assets/images/brend-bg-1.jpg";
import brendBg2 from "../../assets/images/brend-bg-2.jpg";
import brendBg3 from "../../assets/images/brend-bg-3.jpg";

function Main() {
  return (
    <main className="main">
      <Brend
        jc="flex-start"
        color="#fff"
        title="iPhone 15 Pro"
        text="Titanium. So strong. So light. So Pro."
        img={brendBg1}
      />
      <Brend
        jc="flex-start"
        color="#000"
        title="iPhone 15"
        text="New camera. New design. Newphoria."
        img={brendBg2}
      />
      <Brend
        jc="flex-end"
        color="#000"
        title="Apple Vision Pro"
        text="Welcome to the era of spatial computing."
        img={brendBg3}
      />
      <Products />
    </main>
  );
}

export default Main;
