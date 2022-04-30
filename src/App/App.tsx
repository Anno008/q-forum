import React from "react";

import GlobalStyle from "./globalStyles";
import AppNavigation from "~/navigation/AppNavigation";
import AppThemeProvider from "~/providers/AppThemeProvider";
import "react-toastify/dist/ReactToastify.css";
import AppToastProvider from "~/providers/AppToastProvider";

const App = (): JSX.Element => (
  <AppThemeProvider>
    <AppToastProvider />
    <GlobalStyle />
    <AppNavigation />
  </AppThemeProvider>
);

export default App;
