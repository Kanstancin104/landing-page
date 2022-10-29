import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 420,
      md: 750,
      lg: 855,
      xl: 1110,
    },
  },

  palette: {
    mode: "dark",
  },

  spacing: 10,

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: () => ({
          border: "3px solid #534878",
          borderRadius: 0,
          width: 36,
          height: 36,
          padding: 3,
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "outlined" &&
            ownerState.color === "secondary" && {
              borderWidth: 3,
              borderColor: "#FFFFFF",
              ":hover": {
                borderWidth: 3,
                borderColor: "#FFFFFF",
              },
            }),
        }),
      },
    },
  },
});

theme.palette.background.default = "transparent";
theme.palette.primary.main = "#C2BCD2";
theme.palette.text.primary = "#C2BCD2";
theme.palette.text.secondary = "#FFFFFF";
theme.palette.secondary.main = "#FFFFFF";

theme.shape.borderRadius = 0;

theme.typography.h1 = {
  fontSize: 53,
  fontWeight: 400,
  fontFamily: "ibm-plex-mono, sans-serif",
  lineHeight: 1.3,
};

theme.typography.h2 = {
  fontSize: 37,
  fontWeight: 400,
  fontFamily: "JetBrains Mono",
  lineHeight: 1.32,
};

theme.typography.h3 = {
  fontSize: 20,
  fontWeight: 300,
  fontFamily: "JetBrains Mono",
  lineHeight: 1.32,
};

theme.typography.h4 = {
  fontSize: 26,
  fontWeight: 400,
  fontFamily: "ibm-plex-mono",
  lineHeight: 1.3,
};

theme.typography.h5 = {
  fontSize: 16,
  fontWeight: 400,
  fontFamily: "ibm-plex-mono",
  lineHeight: 1.3,
};

theme.typography.link = {
  fontSize: 16,
  fontWeight: 200,
  fontFamily: "JetBrains Mono",
  lineHeight: 1.32,
};

theme.typography.linkCapitalize = {
  fontSize: 16,
  fontWeight: 200,
  fontFamily: "JetBrains Mono",
  lineHeight: 1.32,
  textTransform: "uppercase",
};

theme.typography.body1 = {
  fontSize: 16,
  fontWeight: 200,
  fontFamily: "JetBrains Mono",
  lineHeight: 1.32,
};

theme.typography.button = {
  fontSize: 16,
  fontWeight: 500,
  fontFamily: "JetBrains Mono",
  lineHeight: 1.32,
};

export default theme;
