import React from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import "./scss/_all.scss";

function App() {
  return (
    <div className="main">
      <Navbar />
      <div className="column">
        <Welcome />
      </div>
    </div>
  );
}

export default App;
