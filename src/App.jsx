import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import BrandIcons from "./components/BrandIcons";
import AboutUs from "./components/AboutUs";
import Balls from "./components/Balls";
import Services from "./components/Services";
import OurWorks from "./components/OurWorks";

function App() {
  const [bannerInView, setBannerInView] = useState(false);
  const [aboutInView, setAboutInView] = useState(false);

  return (
    <>
      <div className="h-screen mx-auto">
        <Navbar />
        <div className="h-[10vw]"></div>
        <Banner setBannerInView={setBannerInView} />
        <BrandIcons />
        <AboutUs setAboutInView={setAboutInView} />
        <Services />
        <OurWorks />
      </div>
    </>
  );
}

export default App;
