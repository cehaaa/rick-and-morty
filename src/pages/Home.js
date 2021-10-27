import React from "react";

import { Box, Typography, colors } from "@mui/material";

import Characters from "../components/characters/Characters";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            color: "white",
          }}
        >
          Charactres
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          component="div"
          sx={{
            mt: 1,
            mb: 4,
            color: colors.grey[600],
          }}
        >
          List all characters
        </Typography>
        <Characters />
      </Box>
    </>
  );
};

export default Home;
