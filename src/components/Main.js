import React from "react";
import mainStyles from "./Main.module.css";
import mainImage from "../images/pexels-andrea-piacquadio-920382-(1) 2.03.32 AM.jpg";

const Main = ({ activeClicked }) => {
  return (
    <div className={mainStyles.body}>
      <div className={mainStyles.imageContainer}>
        <img
          className={mainStyles.imageSize}
          src={mainImage}
          alt="woman on phone"
        />
      </div>
      <div className={mainStyles.container}>
        <div className={mainStyles.mainBody}>
          <div className={mainStyles.row}>
            <h2 className={mainStyles.largeText}>
              Consolidate Your Debt
              <br />
              With A Lower Rate
            </h2>
          </div>
          <div className={mainStyles.promoContainer}>
            <div className={mainStyles.boxOne}>
              <h1 className={mainStyles.xLargeText}>XX.XX%</h1>
            </div>
            <div className={mainStyles.boxTwo}>
              <h4 className={mainStyles.smallText}>Promotional APR</h4>
              <p className={mainStyles.smallText}>now through</p>
              <h4 className={mainStyles.smallText}>XX/XX/XXXX</h4>
            </div>
            <div>
              <p className={mainStyles.smallText}>
                A{" "}
                <span className={mainStyles.smallBoldText}>
                  XX.XX% variable APR
                </span>
              </p>
              <p className={mainStyles.smallText}>will apply after the</p>
              <p className={mainStyles.smallText}>promotional period*</p>
            </div>
          </div>
          <div className={mainStyles.row}>
            <h3 className={mainStyles.mediumText}>
              Manage life's expenses by transferring a balance to your Credit
              One Bank account today
            </h3>
          </div>

          {/* // buttons // */}
          <div className={mainStyles.buttonContainer}>
            <div className={mainStyles.row}>
              <div>
                <button
                  className={mainStyles.orangeButton}
                  onClick={activeClicked}
                >
                  Accept Now
                </button>
              </div>
              <div>
                <a
                  href="https://www.creditonebank.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className={mainStyles.grayButton}>No Thanks</button>
                </a>
              </div>
            </div>
            <div className={mainStyles.row}>
              <div className={mainStyles.feeContainer}>
                <p className={mainStyles.xSmallText}>A fee may apply.</p>
              </div>
            </div>
          </div>
        </div>

        {/* // lower section //  */}
        <p className={mainStyles.grayText}>
          *See the Disclosures and Terms & Conditions'
          <br />
          on the application page by selecting the 'Accept Now' button.
        </p>
      </div>
    </div>
  );
};

export default Main;
