import React from "react";
import Typography from "@mui/material/Typography";
import RegistrationButton from "./RegistrationButton";

function Title() {
  return (
    <div>
      <Typography id="about" variant="h1" mb={2}>
        Форум Microsoft
      </Typography>

      <Typography
        variant="h1"
        mb={{
          xs: 2,
          sm: 4,
          lg: 5,
          xl: 8,
        }}
        maxWidth="740px"
      >
        «Finance industry trust in AI and IT-Security»
      </Typography>

      <Typography
        variant="h3"
        mb={{
          xs: 2,
          lg: 2.4,
        }}
        maxWidth="955px"
      >
        Масштабная кибератака и устаревшее оборудование может привести к потере
        клиентов, ухудшить отношения с партнёрами и учредителями, а невыполнение
        требований законодательства может привести к существенным штрафам и даже
        к блокировке ресурсов
      </Typography>

      <Typography
        variant="body1"
        mb={{
          xs: 2,
          sm: 5,
          md: 8,
          lg: 10,
          xl: 15,
        }}
      >
        Узнайте как этого избежать, регистрируйтесь на наш форум
      </Typography>

      <RegistrationButton />
    </div>
  );
}

export default Title;
