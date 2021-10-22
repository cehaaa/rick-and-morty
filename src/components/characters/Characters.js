import React from "react";
import { useState, useEffect } from "react";

import { Box, Grid, Card } from "@mui/material";

import { getCharacters } from "../../service/characters";

const Characters = () => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const res = await getCharacters();
    setCharacters(res.data);
  };

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {JSON.stringify(characters.resluts)}
        </Grid>
      </Box>
    </>
  );
};

export default Characters;
