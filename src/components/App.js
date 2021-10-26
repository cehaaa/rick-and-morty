import React from "react";

import Header from "./header/Header";
import Home from "./../pages/Home";

import { colors } from "@mui/material";
import { Box, Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
  return (
    <>
      {/* <ThemeProvider> */}
      <Box
        sx={{
          // background: colors.grey[200],
          background: "#202329",
        }}
      >
        <Container
          disableGutters
          maxWidth="md"
          sx={{
            minHeight: "100vh",
            // background: colors.grey[100],
            background: "#24282f",
          }}
        >
          <Header />
          <Home />
        </Container>
      </Box>
      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
