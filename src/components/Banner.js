import React from "react";
import bannerStyles from "./Banner.module.css";
import whiteLogo from "../images/logo_white.svg";
import blackBlueLogo from "../images/logo.svg";

const Banner = ({ accepted }) => {
  return (
    <div
      className={`bannerStyles.banner ${
        accepted ? bannerStyles.blueBanner : bannerStyles.whiteBanner
      }`}
    >
      <div className={bannerStyles.logoContainer}>
        <img
          src={accepted ? whiteLogo : blackBlueLogo}
          alt="logo"
          className={bannerStyles.logo}
        />
      </div>
    </div>
  );
};

export default Banner;
