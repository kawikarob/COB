import "./App.css";
import React, { useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  const [accepted, setAccepted] = useState(false);

  const handleChange = () => {
    setAccepted((previousBanner) => {
      return !previousBanner;
    });
  };

  return (
    <div>
      <Banner accepted={accepted} />
      <Main activeClicked={handleChange} />
      <Footer />
    </div>
  );
}

export default App;
