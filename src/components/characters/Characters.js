import React from "react";
import { useState, useEffect } from "react";

import { getCharacters } from "../../service/characters";
import { getEpisode } from "../../service/episodes";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [firstSeen, setFirstSeen] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const res = await getCharacters();
    setCharacters(res.data.results);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {characters.map((character) => {
          return (
            <div
              className="flex overflow-hidden rounded-md bg-gray-600"
              key={character.id}
            >
              <div>
                <img
                  src={character.image}
                  alt=""
                  className="w-44 h-full object-cover object-center"
                />
              </div>
              <div className="p-3 flex-1">
                <div className="text-xl font-bold">{character.name}</div>
                <div className=" flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
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
