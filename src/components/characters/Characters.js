import React from "react";

import LocalPersistent from "../../service/localPersistent";

const Characters = ({ characters }) => {
  const getCharactersStatusClassName = (status) => {
    if (status === "Alive") {
      return "bg-green-500";
    } else if (status === "Dead") {
      return "bg-red-500";
    } else return "bg-gray-500";
  };

  const lp = new LocalPersistent();
  const save = (data) => {
    lp.save(data);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {characters.map((character) => {
          return (
            <div
              className="flex flex-col md:flex-row overflow-hidden rounded-md bg-gray-600 shadow-sm relative group"
              key={character.id}
            >
              <button
                className="absolute top-0 -right-12 group-hover:right-0 p-2 rounded-full bg-gray-500 hover:bg-gray-400 m-3 duration-200 focus:outline-none"
                onClick={() => save(character)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>

              <div className="overflow-hidden">
                <img
                  src={character.image}
                  className="w-full md:w-44 h-full object-cover object-center transform group-hover:scale-125 group-hover:rotate-6 duration-200"
                />
              </div>
              <div className="p-3 flex-1">
                <div className="text-xl font-bold hover:text-yellow-500 duration-200 cursor-pointer">
                  {character.name}
                </div>
                <div className=" flex items-center space-x-2 mt-0.5">
                  <div
                    className={`w-2 h-2 rounded-full ${getCharactersStatusClassName(
                      character.status
                    )}`}
                  ></div>
                  <div className=" font-medium text-sm">
                    {character.status} - {character.species}
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-sm font-bold text-gray-300 tracking-wide">
                    Gender
                  </div>
                  <div className="text-base hover:text-yellow-500 duration-200 cursor-pointer">
                    {character.gender}
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-sm font-bold text-gray-300 tracking-wide">
                    Last known location:
                  </div>
                  <div className="text-base hover:text-yellow-500 duration-200 cursor-pointer">
                    {character.location.name}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Characters;
