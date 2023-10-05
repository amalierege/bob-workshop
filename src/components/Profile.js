import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#f5f5f5"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <Avatar
        src="/amalie.jpg"
        alt="Photo of me"
        sx={{
          width: 200,
          height: 200,
          margin: "auto",
          border: "4px solid #8dc7f0",
        }}
      />
      <Typography variant="h4" gutterBottom color="#8dc7f0">
        Amalie Rege
      </Typography>
    </Stack>
  );
}

export default Profile;
