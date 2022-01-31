import React from "react";
import mainStyles from "./Main.module.css";

const Main = ({ activeClicked }) => {
  return (
    <div className={mainStyles.container}>
      <div className={mainStyles.largeBlue}>
        <p>Consolidate Your Debt</p>
        <p>With A Lower Rate</p>
      </div>
      <div className={mainStyles.flexParentElement}>
        <div
          className={`${mainStyles.xLargeBlue} ${mainStyles.flexChildElement}`}
        >
          <h1>XX.XX%</h1>
        </div>
        <div className={mainStyles.flexChildElement}>
          <p className={mainStyles.smallBoldBlue}>Promotional APR</p>
          <p className={mainStyles.smallBlue}>now through</p>
          <p className={mainStyles.smallBoldBlue}>XX/XX/XXXX</p>
        </div>
        <div className={mainStyles.flexChildElement}>
          <p className={mainStyles.smallBlue}>
            A{" "}
            <span className={mainStyles.smallBoldBlue}>
              XX.XX% variable APR
            </span>
          </p>
          <p className={mainStyles.smallBlue}>will apply after the</p>
          <p className={mainStyles.smallBlue}>promotional period*</p>
        </div>
      </div>
      <div>
        <div className={mainStyles.mediumBlue}>
          <p>Manage life's expenses by transfering a balanace</p>
          <p>to your Credit One Bank account today</p>
        </div>
      </div>
      <div>
        <button className={mainStyles.orangeButton} onClick={activeClicked}>
          Accept Now
        </button>
        <a href="https://www.creditonebank.com/" target="_blank">
          <button className={mainStyles.grayButton}>No Thanks</button>
        </a>
      </div>
      <div className={mainStyles.smallBlue}>
        <p>A fee may apply</p>
      </div>
      <div>
        <p>*See the Disclosure and Terms & Conditions </p>
        <p>on the application page by selecting the 'Accept Now' button</p>
      </div>
    </div>
  );
};

export default Main;
