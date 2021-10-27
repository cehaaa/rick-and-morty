import React from "react";

import Header from "./header/Header";
import Home from "./../pages/Home";

import { Box, Container } from "@mui/material";

const App = () => {
  return (
    <>
      <Box
        sx={{
          background: "#202329",
        }}
      >
        <Container
          disableGutters
          maxWidth="lg"
          sx={{
            minHeight: "100vh",
            background: "#24282f",
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
