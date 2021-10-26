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
      <Grid container spacing={2}>
        {characters.map((character) => {
          return (
            <Grid item xs={6} key={character.id}>
              <Card
                sx={{
                  display: "flex",
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
                      width: 160,
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
                      variant="h6"
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
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          height: "10px",
                          width: "10px",
                          borderRadius: "50%",
                          background:
                            character.status === "Dead" ? "#d63d2e" : "#55cc44",
                          mr: 1,
                        }}
                      ></Box>
                      <Box sx={{ fontFamily: "default", fontSize: "16px" }}>
                        {character.status}
                      </Box>
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
