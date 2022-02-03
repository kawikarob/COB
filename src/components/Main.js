import React from "react";
import mainStyles from "./Main.module.css";

const Main = ({ activeClicked }) => {
  return (
    <div className={mainStyles.body}>
      <div className={mainStyles.container}>
        <div className={mainStyles.row}>
          <div className={mainStyles.rowOne}>
            <h2 className={mainStyles.largeText}>Consolidate Your Debt</h2>
            <h2 className={mainStyles.largeText}>With A Lower Rate</h2>
          </div>
        </div>
        <div className={mainStyles.row}>
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
            Manage life's expenses by transferring a balance
          </h3>
        </div>
        <div className={mainStyles.row}>
          <h3 className={mainStyles.mediumText}>
            to your Credit One Bank account today
          </h3>
        </div>

        {/* // buttons // */}
        <div className={mainStyles.row}>
          <div className={mainStyles.column}>
            <button className={mainStyles.orangeButton} onClick={activeClicked}>
              Accept Now
            </button>
          </div>

          <div className={mainStyles.column}>
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
          <div className={mainStyles.column}>
            <p className={mainStyles.xSmallText}>A fee may apply.</p>
          </div>
        </div>

        {/* // lower section //  */}
        <div>
          <p className={mainStyles.grayText}>
            *See the Disclosures and Terms & Conditions'
          </p>
          <p className={mainStyles.grayText}>
            on the application page by selecting the 'Accept Now' button.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

{
  /* <div>
          <h2 className={mainStyles.largeText}>Consolidate Your Debt</h2>
          <h2 className={mainStyles.largeText}>With A Lower Rate</h2>
        </div>
        <div className={mainStyles.row}>
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
        <div>
          <div>
            <h3 className={mainStyles.mediumText}>
              Manage life's expenses by transfering a balanace
            </h3>
            <h3 className={mainStyles.mediumText}>
              to your Credit One Bank account today
            </h3>
          </div>
        </div>
        <div className={mainStyles.containerButton}>
          <button className={mainStyles.orangeButton} onClick={activeClicked}>
            Accept Now
          </button>
          <a href="https://www.creditonebank.com/" target="_blank">
            <button className={mainStyles.grayButton}>No Thanks</button>
          </a>
        </div>
        <div>
          <p className={mainStyles.xSmallText}>A fee may apply.</p>
        </div>
        <div>
          <p className={mainStyles.grayText}>
            *See the Disclosure and Terms & Conditions{" "}
          </p>
          <p className={mainStyles.grayText}>
            on the application page by selecting the 'Accept Now' button
          </p>
        </div> */
}
