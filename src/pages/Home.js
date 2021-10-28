import React from "react";

import Characters from "../components/characters/Characters";

const Home = () => {
  return (
    <>
      <div className="p-5 md:p-10">
        <div className="mb-5">
          <div className="text-2xl font-medium mb-1">Characters</div>
          <div className="text-sm text-gray-400">Find your fav char here</div>
        </div>
        <Characters />
      </div>
    </>
  );
};

export default Home;
