import { fireEvent } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";

import { getCharacters } from "../../service/characters";
import { getEpisode, getEpisodeName } from "../../service/episodes";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const res = await getCharacters();
    res.data && mapCharacters(res.data.results);
  };

  const mapCharacters = async (characters) => {
    characters.forEach(() => {});

    let mapedCharacters = [];

    characters.map((character) => {
      let mock = {
        ...character,
        firstEpisode: character.episode[0],
      };
      mapedCharacters.push(mock);
    });

    setCharacters(mapedCharacters);
  };

  const getCharactersStatusClassName = (status) => {
    if (status === "Alive") {
      return "bg-green-500";
    } else if (status === "Dead") {
      return "bg-red-500";
    } else return "bg-gray-500";
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {characters.map((character) => {
          return (
            <div
              className="flex overflow-hidden rounded-md bg-gray-600 shadow-sm"
              key={character.id}
            >
              <div>
                <img
                  src={character.image}
                  className="w-44 h-full object-cover object-center"
                />
              </div>
              <div className="p-3 flex-1">
                <div className="text-xl font-bold">{character.name}</div>
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
                    Last known location:
                  </div>
                  <div className=" text-base">{character.location.name}</div>
                </div>
                <div className="mt-5">
                  <div className="text-sm font-bold text-gray-300 tracking-wide">
                    First seen in:
                  </div>
                  <div className=" text-base">{character.location.name}</div>
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
