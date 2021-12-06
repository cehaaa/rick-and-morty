import React from "react";
import { useEffect, useState } from "react";

import LocalPersistent from "../../service/localPersistent";

const Characters = ({ saved }) => {
  const lp = new LocalPersistent();
  const getCharactersStatusClassName = (status) => {
    if (status === "Alive") {
      return "bg-green-500";
    } else if (status === "Dead") {
      return "bg-red-500";
    } else return "bg-gray-500";
  };

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(lp.getCharacters());
  }, []);

  const remove = (index) => {
    setCharacters(lp.delete(index));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {characters.map((character, index) => {
          return (
            <div
              className="flex flex-col md:flex-row overflow-hidden rounded-md bg-gray-600 shadow-sm relative group"
              key={character.id}
            >
              {/* delete button */}
              {saved ? (
                <button
                  className="absolute top-0 -right-12 group-hover:right-0 p-2 rounded-full bg-gray-500 hover:bg-gray-400 m-3 duration-200 focus:outline-none"
                  onClick={() => remove(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              ) : (
                false
              )}

              <div className="overflow-hidden">
                <img
                  alt={character.name}
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