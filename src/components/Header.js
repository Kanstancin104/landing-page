import React from "react";
import RegistrationButton from "./RegistrationButton";
import Grid from "@mui/material/Grid";
import Logo from "./Logo";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

function Header() {
  return (
    <Grid
      rowSpacing={2}
      container
      columns={{ xs: 1, sm: 2, md: 3 }}
      justifyContent={{
        xs: "center",
        sm: "space-between",
        md: "space-between",
      }}
      alignItems="center"
      mt={{ xs: 3, sm: 5, md: 11 }}
      mb={{ xs: 3, sm: 5, md: 19 }}
    >
      <Grid item xs="auto" sm="auto" md="auto">
        <Logo />
      </Grid>
      <Grid
        item
        xs="auto"
        sm="auto"
        md="auto"
        display={{ xs: "none", sm: "block", md: "none" }}
      >
        <RegistrationButton />
      </Grid>
      <Grid item xs="auto" sm={2} md="auto">
        <Stack direction={"row"} spacing={4} justifyContent="center">
          <Link underline="hover" href="#about" color="inherit" variant="link">
            О МЕРОПРИЯТИИ
          </Link>
          <Link
            underline="hover"
            href="#speakers"
            color="inherit"
            variant="link"
          >
            СПИКЕРЫ
          </Link>
        </Stack>
      </Grid>
      <Grid
        item
        xs="auto"
        sm="auto"
        md="auto"
        display={{ xs: "block", sm: "none", md: "block" }}
      >
        <RegistrationButton />
      </Grid>
    </Grid>
  );
}

export default Header;
