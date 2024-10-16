// src/constants/HomeConstants.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme();

export const HOME_CONSTANTS = {
  CONTAINER: {
    maxWidth: "xl",
    sx: {
      height: "100%",
      display: "flex",
      alignItems: "flex-start",
      pt: { xs: 2, sm: 3, md: 4, lg: 5 },
    },
  },
  GRID: {
    CONTAINER: {
      spacing: 2,
      alignItems: "flex-start",
    },
    ITEM: {
      xs: 12,
      md: 10,
      lg: 10,
    },
  },
  CARD: {
    sx: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      borderRadius: { xs: 2, sm: 4, md: 6, lg: 8 },
      minHeight: { xs: "auto", md: "100px" },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      mr: { md: 4, lg: 8 },
      maxWidth: "100%",
    },
  },
  CARD_CONTENT: {
    sx: { p: { xs: 2, sm: 3, md: 4, lg: 5 } },
  },
  TYPOGRAPHY: {
    TITLE: {
      sx: {
        color: "primary.main",
        fontWeight: "bold",
        mb: { xs: 1, sm: 1.5, md: 2, lg: 3 },
        mt: { xs: -1, sm: -1.5, md: -2, lg: -3 },
        fontSize: {
          xs: "1rem",
          sm: "1.125rem",
          md: "1.375rem",
          lg: "1.75rem",
        },
        letterSpacing: { xs: 0.5, sm: 1, md: 1.5 },
      },
    },
    HEADING: {
      sx: {
        mb: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
        fontWeight: 1000,
        textShadow: "1px 0 0 currentColor",
        lineHeight: { xs: 1.1, sm: 1.2, md: 1.1 },
        fontSize: {
          xs: "1.75rem",
          sm: "2.25rem",
          md: "3rem",
          lg: "4.5rem",
        },
        letterSpacing: { xs: -0.5, sm: -1, md: -1.5 },
      },
    },
    BODY: {
      sx: {
        mb: { xs: 2, sm: 3, md: 4, lg: 5 },
        fontSize: {
          xs: "0.875rem",
          sm: "1rem",
          md: "1.125rem",
          lg: "1.375rem",
        },
        maxWidth: "100%",
        lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
      },
    },
  },
  BUTTON: {
    sx: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.25rem",
      },
      py: { xs: 0.75, sm: 1, md: 1.25, lg: 1.5 },
      px: { xs: 1.5, sm: 2, md: 3, lg: 4 },
      minWidth: {
        xs: "120px",
        sm: "140px",
        md: "160px",
        lg: "180px",
      },
    },
  },
};

export const getButtonSize = (theme) => {
  if (theme.breakpoints.only("xs")) return "small";
  if (theme.breakpoints.only("sm")) return "medium";
  return "large";
};
