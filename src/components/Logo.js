import Typography from "@mui/material/Typography";
import React from "react";
import LogoIcon from "./icons/LogoIcon";
import Stack from "@mui/material/Stack";

function Logo() {
  return (
    <Stack direction={"row"} spacing={1.5} alignItems="center">
      <LogoIcon
        sx={{
          width: 50,
          height: 62,
        }}
      />
      <div>
        <Typography variant="h4">Security</Typography>
        <Typography variant="h5">Forum</Typography>
      </div>
    </Stack>
  );
}

export default Logo;
