import React from "react";
import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box py={5} bgcolor="#fbfde5" borderRadius={3} boxShadow={3} mt={4} px={3}>
      <Typography variant="h6" gutterBottom color="#8dc7f0">
        Attributes
      </Typography>
      <Typography>
        Flower Icon: "https://www.flaticon.com/free-icons/flower" created by kornkun - Flaticon
      </Typography>
    </Box>
  );
}

export default Footer;
