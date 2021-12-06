import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="p-5 md:p-10 border-b border-gray-600 flex flex-col md:flex-row md:items-center justify-between">
        <Link to="/">
          <div className="text-3xl font-bold tracking-wide hover:text-gray-300 duration-200">
            The Rick and Morty
          </div>
        </Link>

        <Link to="/saved">
          <div className="hover:text-gray-300 font-medium tracking-wide duration-200">
            Saved
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
