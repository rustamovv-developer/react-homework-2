import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Mac from "./pages/mac/Mac";
import Ipad from "./pages/ipad/Ipad";
import Iphone from "./pages/iphone/Iphone";
import Watch from "./pages/watch/Watch";
import Vision from "./pages/vision/Vision";
import Airpods from "./pages/airpods/Airpods";
import Tv from "./pages/tv/Tv";
import Ent from "./pages/ent/Ent";
import Acc from "./pages/acc/Acc";
import Support from "./pages/support/Support";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/airpods" element={<Airpods />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/ent" element={<Ent />} />
        <Route path="/acc" element={<Acc />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
