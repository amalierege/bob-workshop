import React from "react";
import { Typography, Box } from "@mui/material";

function Description() {
  return (
    <Box py={5} bgcolor="#fbfde5" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#8dc7f0">
        About Me
      </Typography>
      <Typography>
        Hei, mitt navn er Amalie.
      </Typography>
    </Box>
  );
}

export default Description;
