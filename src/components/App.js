import React from "react";

import Home from "./../pages/Home";
import Header from "./header/Header";

const App = () => {
  return (
    <>
      <div className="bg-gray-800 overflow-y-hidden text-white">
        <div className="w-full md:w-9/12 bg-gray-700 mx-auto min-h-screen ">
          <Header />
          <Home />
        </div>
      </div>
    </>
  );
};

export default App;
