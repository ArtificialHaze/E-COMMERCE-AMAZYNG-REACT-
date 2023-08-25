import React from "react";
import Logo from "./assets/logo.png";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LinkIcon from "@material-ui/icons/Link";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <hr />
      <div className="footer">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="block">
          <div className="detail">
            <span>Contact</span>
            <span className="pngLine">
              <LocationCityIcon className="icon" />
              <span>5521, ipsum dolor sit amet.</span>
            </span>
          </div>
        </div>
        <div className="block">
          <div className="detail">
            <span>Resources</span>
            <span className="pngLine">
              <LinkIcon className="icon" />
              <p>Safety Privacy and Terms</p>
            </span>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <span>Copyright &copy; by DreamDevs.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
