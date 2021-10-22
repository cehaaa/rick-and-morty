import React from "react";

import { colors } from "@mui/material";
import { Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          p: 3,
          borderBottom: ".5px solid" + colors.grey[300],
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
          }}
        >
          The Rick and Morty
        </Typography>
      </Box>
    </>
  );
};

export default Header;
