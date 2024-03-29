import React, { memo } from "react";
import img1 from "../../assets/images/watch-1.png";
import img2 from "../../assets/images/watch-2.png";

function Watch() {
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

export default memo(Watch);
