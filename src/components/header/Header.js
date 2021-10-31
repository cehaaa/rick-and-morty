import React from "react";

const Header = () => {
  return (
    <>
      <div className="p-5 md:p-10 border-b border-gray-600 flex flex-col md:flex-row md:items-center justify-between">
        <div className="text-3xl font-bold tracking-wide">
          The Rick and Morty
        </div>
        <div>Saved</div>
      </div>
    </>
  );
};

export default Header;
