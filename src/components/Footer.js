import React from "react";
import footerStyles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={footerStyles.gray}>
        <p>© 2019 Credit One Bank, N.A All Rights Reserved. Member FDC.</p>
      </div>
    </div>
  );
};

export default Footer;
