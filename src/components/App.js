import React from "react";
import Header from "./header/Header";
import Home from "../pages/Home";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div>
        <Home />
      </div>
    </div>
  );
};

export default App;
