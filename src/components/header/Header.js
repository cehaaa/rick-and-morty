import React from "react";

import { colors } from "@mui/material";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          p: 5,
          borderBottom: ".5px solid" + colors.grey[600],
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: "white",
          }}
        >
          The Rick and Morty
        </Typography>
      </Box>
    </>
  );
};

export default Header;
