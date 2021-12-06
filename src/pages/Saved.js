import React from "react";

import SavedCharacters from "../components/characters/SavedCharacters";

function Saved() {
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
          <SavedCharacters saved />
        </div>
      </div>
    </>
  );
}

export default Saved;
