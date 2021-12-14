import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./header/Header";

import Home from "./../pages/Home";
import Saved from "../pages/Saved";

const App = () => {
  return (
    <>
      <Router>
        <div className="bg-gray-800 overflow-y-hidden text-white">
          <div className="lg:w-full xl:w-9/12 bg-gray-700 mx-auto min-h-screen ">
            <Header />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/saved" component={Saved} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
