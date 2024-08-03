import React from "react";
import logo1 from "../assets/brandIcons/logo-l-1.svg";
import logo2 from "../assets/brandIcons/logo-l-2.svg";
import logo3 from "../assets/brandIcons/logo-l-3.svg";
import logo4 from "../assets/brandIcons/logo-l-4.svg";
import logo5 from "../assets/brandIcons/logo-l-5.svg";
import logo6 from "../assets/brandIcons/logo-l-6.svg";
const BrandIcons = () => {
  return (
    <div className="flex justify-center gap-x-28 mt-36 pb-30px">
      <div>
        <img src={logo1} alt="logo1" />
      </div>
      <div>
        <img src={logo2} alt="logo2" />
      </div>
      <div>
        <img src={logo3} alt="logo3" />
      </div>
      <div>
        <img src={logo4} alt="logo4" />
      </div>
      <div>
        <img src={logo5} alt="logo5" />
      </div>
      <div>
        <img src={logo6} alt="logo6" />
      </div>
    </div>
  );
};

export default BrandIcons;
