import * as React from "react";
import * as ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import { Box, ThemeProvider, createTheme } from "@mui/material";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

const theme = createTheme();

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box sx={{ backgroundColor: "#ecf0f1", minHeight: "100vh", }} >
      <App />
    </Box>
  </ThemeProvider>
);
