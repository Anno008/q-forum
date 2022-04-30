import React, { useContext } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppThemeContext from "~/contexts/AppThemeContext";

const AppToastProvider = (): JSX.Element => {
  const { theme } = useContext(AppThemeContext);

  return (
    <ToastContainer theme={theme} position="top-right" style={{ top: "70px" }} autoClose={5000} />
  );
};

export default AppToastProvider;
