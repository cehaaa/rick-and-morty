import React from "react";
import { useEffect, useState } from "react";

import LocalPersistent from "../service/localPersistent";

import Characters from "../components/characters/Characters.js";

function Saved() {
  const lp = new LocalPersistent();

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(lp.getCharacters());
  }, []);

  return (
    <>
      <div className="p-5 md:p-10">
        <div className="mb-5">
          <div>
            <div className="text-2xl font-medium mb-1">Saved Characters</div>
            <div className="text-sm text-gray-400">
              Characters that you find interesting
            </div>
          </div>
        </div>
        <div>
          {characters ? (
            <Characters characters={characters} />
          ) : (
            <div>Empty</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Saved;
