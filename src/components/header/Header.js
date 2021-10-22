import React from "react";
import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    // <div className="navbar">
    //   <div className="navbar-title">Bored Mate</div>
    //   <div className="navbar-text">What will you do today?</div>
    // </div>
    <>
      <Box className="navbar">
        <Typography xs={{ color: "red" }}>Bored App</Typography>
      </Box>
    </>
  );
};

export default Header;
