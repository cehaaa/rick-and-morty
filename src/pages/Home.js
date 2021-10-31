import React from "react";
import { useState, useEffect } from "react";

import Spinner from "../components/spinner/Spinner";
import Characters from "../components/characters/Characters";

import { getCharacters } from "../service/characters";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    setIsLoading(true);
    const res = await getCharacters();
    setIsLoading(false);
    setCharacters(res.data.results);
  };

  return (
    <>
      <div className="p-5 md:p-10">
        <div className="mb-5 flex justify-between items-center">
          <div>
            <div className="text-2xl font-medium mb-1">Characters</div>
            <div className="text-sm text-gray-400">Find your fav char here</div>
          </div>
          <div>
            <button
              className="px-4 py-3 bg-gray-600 hover:bg-gray-500 duration-200 rounded-md font-medium flex items-center justify-between"
              onClick={() => fetchCharacters()}
            >
              Random
              {isLoading && <Spinner />}
            </button>
          </div>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-80">
            <Spinner lg />
          </div>
        ) : (
          <Characters characters={characters} />
        )}
      </div>
    </>
  );
};

export default Home;
