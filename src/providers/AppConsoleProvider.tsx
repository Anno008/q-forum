import React, { useContext } from "react";

import "react-toastify/dist/ReactToastify.css";
import AppConsoleContext from "~/contexts/AppConsoleContext";

const AppConsoleProvider: React.FC = ({ children }) => {
  const { message } = useContext(AppConsoleContext);

  return (
    <AppConsoleContext.Provider
      value={{
        message
      }}>
      {children}
    </AppConsoleContext.Provider>
  );
};

export default AppConsoleProvider;
