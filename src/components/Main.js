import React from "react";
import mainStyles from "./Main.module.css";

const Main = () => {
  return (
    <div className={mainStyles.container}>
      <div>
        <h1>Consolidate Your Debt</h1>
        <h1>With A Lower Rate</h1>
      </div>
      <div>
        <div>
          <h1>XX.XX%</h1>
        </div>
        <div>
          <p>Promotional APR</p>
          <p>now through</p>
          <p>XX/XX/XXXX</p>
        </div>
        <div>
          <p>A XX.XX% variable APR</p>
          <p>will apply after the</p>
          <p>promotional period*</p>
        </div>
        <div>
          <h3>Manage life's expenses by transfering a balanace</h3>
          <h3>to your Credit One Bank account today</h3>
        </div>
      </div>
      <div>
        <button className={mainStyles.orangeButton}>Accept Now</button>
        <a href="https://www.creditonebank.com/" target="_blank">
          <button className={mainStyles.grayButton}>No Thanks</button>
        </a>
      </div>
      <div>
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
