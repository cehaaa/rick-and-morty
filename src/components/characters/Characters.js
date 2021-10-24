import React from "react";
import { useState, useEffect } from "react";

import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import { getCharacters } from "../../service/characters";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const res = await getCharacters();
    setCharacters(res.data.results);
  };

  return (
    <>
      <Grid container spacing={2}>
        {characters.map((character) => {
          return (
            <Grid item xs={6} key={character.id}>
              <Card>
                <CardMedia
                  component="img"
                  image={character.image}
                  height="300"
                ></CardMedia>
                <CardContent>
                  <Typography> {character.name} </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Characters;
