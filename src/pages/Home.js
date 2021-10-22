import React from "react";
import { useState, useEffect } from "react";

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
          variant="h5"
          sx={{
            fontWeight: 500,
          }}
        >
          Charactres
        </Typography>
        <Box
          sx={{
            fontFamily: "default",
            fontSize: 15,
            mt: 1,
            mb: 4,
            color: colors.grey[600],
          }}
        >
          List all characters
        </Box>
        <Characters />
      </Box>
    </>
  );
};

export default Home;
