import React, { memo } from "react";
import img from "../../assets/images/mac-2.png";
import img2 from "../../assets/images/mac-3.png";

function Mac() {
  return (
    <main className="main">
      <img src={img} alt="" style={{ width: "100%", marginBottom: "50px" }} />
      <img src={img2} alt="" style={{ width: "100%" }} />
    </main>
  );
}

export default memo(Mac);
