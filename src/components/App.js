import React from "react";

import Header from "./header/Header";
import Home from "./../pages/Home";

import { Box, Container, Typography } from "@mui/material";
import { colors } from "@mui/material";

const App = () => {
  return (
    <>
      <Box
        sx={{
          background: colors.grey[200],
        }}
      >
        <Container
          disableGutters
          maxWidth="md"
          sx={{
            minHeight: "100vh",
            background: colors.grey[100],
          }}
        >
          <Header />
          <Home />
        </Container>
      </Box>
    </>
  );
};

export default App;
