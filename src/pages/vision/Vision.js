import React, { memo } from "react";
import img1 from "../../assets/images/vision-1.png";

function Vision() {
  return (
    <main className="main">
      <img src={img1} alt="" style={{ width: "100%", marginBottom: "50px" }} />
    </main>
  );
}

export default memo(Vision);
