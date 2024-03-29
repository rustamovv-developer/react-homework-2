import React, { memo } from "react";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}

export default memo(Home);
