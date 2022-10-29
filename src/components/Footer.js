import React from "react";
import Grid from "@mui/material/Grid";
import Logo from "./Logo.js";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import InstIcon from "./icons/InstIcon.js";
import VkIcon from "./icons/VkIcon.js";
import FbIcon from "./icons/FbIcon.js";
import TgIcon from "./icons/TelegramIcon.js";
import IconButton from "@mui/material/IconButton";

function Footer() {
  return (
    <Grid
      columnSpacing={3}
      rowSpacing={3}
      columns={{ xs: 1, sm: 2, md: 3, lg: 8, xl: 10 }}
      justifyContent="space-between"
      paddingBottom={6.9}
      container
    >
      <Grid xs={1} sm={2} md="auto" lg={3} xl={3} item>
        <Logo />
      </Grid>
      <Grid xs={1} sm="auto" md="auto" lg={3} xl={3} item>
        <Stack spacing={3}>
          <Link underline="hover">Политика конфиденциальности</Link>
          <Link underline="hover">Публичная оферта</Link>
          <Link underline="hover">+7 912 123-45-67</Link>
          <Link underline="hover">about@microsoftforum.com</Link>
        </Stack>
      </Grid>
      <Grid xs={1} sm="auto" md="auto" lg={2} xl={2} item>
        <Stack spacing={3}>
          <Link underline="hover" variant="linkCapitalize">
            о мероприятии
          </Link>
          <Link underline="hover" variant="linkCapitalize">
            темы
          </Link>
          <Link underline="hover" variant="linkCapitalize">
            расписание
          </Link>
          <Link underline="hover" variant="linkCapitalize">
            спикеры
          </Link>
          <Link underline="hover" variant="linkCapitalize">
            контакты
          </Link>
        </Stack>
      </Grid>
      <Grid xs={1} sm={2} md="auto" lg={2} xl={2} item>
        <Stack direction={"row"} spacing={1.2}>
          <IconButton>
            <VkIcon />
          </IconButton>
          <IconButton>
            <FbIcon />
          </IconButton>
          <IconButton>
            <InstIcon />
          </IconButton>
          <IconButton>
            <TgIcon />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Footer;
