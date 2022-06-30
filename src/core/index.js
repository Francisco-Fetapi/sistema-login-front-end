import React from "react";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createTheme";
// import {create} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function index({ children }) {
  const theme = createMuiTheme({});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
