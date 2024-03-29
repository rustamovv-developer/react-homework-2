import React, { memo } from "react";
import img1 from "../../assets/images/ipad-2.png";
import img2 from "../../assets/images/ipad-3.png";

function Ipad() {
  return (
    <main className="main">
      <img src={img1} alt="" style={{ width: "100%" }} />
      <img
        src={img2}
        alt=""
        style={{ width: "100%", marginTop: "-30px", marginBottom: "50px" }}
      />
    </main>
  );
}

export default memo(Ipad);
