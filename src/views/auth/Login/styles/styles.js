import { darken } from "@mui/material";

export const loginFormStyles = {
    container: {
      minHeight: "100vh",
      justifyContent: "center",
      alignItems: "center",
    },
    formBox: {
      backgroundColor: "#ffffff",
      padding: 4,
      borderRadius: 2,
      boxShadow: 3,
    },
    optionsBox: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 3,
    },
    forgotPassword: {
      textDecoration: "none",
      color: "primary.main",
    },
    submitButton: {
      py: 2,
      "&:hover": {
        backgroundColor: (theme) =>
          darken(theme.palette.primary.main, 0.2),
      },
    },
  };