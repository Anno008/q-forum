import { useContext, useEffect } from "react";
import AppConsoleContext from "~/contexts/AppConsoleContext";

export const useConsoleLog = (componentName: string) => {
  const { message } = useContext(AppConsoleContext);

  useEffect(() => {
    console.log(`${message}-${componentName}`);
  }, [componentName, message]);
};
