import React, { memo } from "react";
import img1 from "../../assets/images/iphone-1.png";
import img2 from "../../assets/images/iphone-2.png";

function Iphone() {
  return (
    <main className="main">
      <img src={img1} alt="" style={{ width: "100%", marginBottom: "30px" }} />
      <img src={img2} alt="" style={{ width: "100%", marginBottom: "50px" }} />
    </main>
  );
}

export default memo(Iphone);
