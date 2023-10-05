import React from "react";
import { Typography, Box } from "@mui/material";

function Projects () {
  return (
    <Box py={5} bgcolor="#fbfde5" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#8dc7f0">
        Projects
      </Typography>
      <Typography>
        These are my projects!
      </Typography>
    </Box>
  );
}

export default Projects;
