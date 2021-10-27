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
import { colors } from "@mui/material";

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
      <Grid
        container
        spacing={5}
        sx={{
          display: "flex",
        }}
      >
        {characters.map((character) => {
          return (
            <Grid item sm={12} lg={3} key={character.id}>
              <Card
                sx={{
                  height: "100%",
                  background: "#3c3e44",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      backgroundSize: "cover",
                      transition: "200ms",
                      "&:hover": {
                        transform: "scale(1.3)",
                      },
                    }}
                    image={character.image}
                  />
                </Box>
                <Box>
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        cursor: "pointer",
                        transition: "200ms",
                        fontWeight: 600,
                        color: "#f5f5f5",
                        "&:hover": { color: colors.orange[500] },
                      }}
                    >
                      {character.name}
                    </Typography>
                    <Box>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mt: 1 }}
                      >
                        Last known location:
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Characters;
