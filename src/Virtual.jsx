import React from "react";
import Shade from "./assets/shade.png";
import Before from "./assets/before.png";
import After from "./assets/after.png";
import ReactCompareImage from "react-compare-image";

const Virtual = () => {
  return (
    <div className="virtual">
      <div className="virtual-left">
        <span>Virtual Try-on</span>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
        <span>Try now!</span>
        <img src={Shade} alt="Shade" />
      </div>
      <div className="virtual-right">
        <div className="wrapper">
          <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  );
};

export default Virtual;
