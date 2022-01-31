import React from "react";
import bannerStyles from "./Banner.module.css";
import whiteLogo from "../images/logo_white.svg";
import blackBlueLogo from "../images/logo.svg";

const Banner = ({ accepted }) => {
  return (
    <div>
      {accepted ? (
        <div className={bannerStyles.blueBanner}>
          <img
            src={whiteLogo}
            alt="white Logo"
            className={bannerStyles.logoWhite}
          />
        </div>
      ) : (
        <div className={bannerStyles.whiteBanner}>
          <img
            src={blackBlueLogo}
            alt="Black and blue Logo"
            className={bannerStyles.logoWhite}
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
