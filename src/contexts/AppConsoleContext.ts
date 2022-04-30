import { createContext } from "react";
import { APP_CONSOLE_MESSAGE } from "~/constants/config";

export type ConsoleContextType = {
  message: string;
};
export default createContext<ConsoleContextType>({
  message: APP_CONSOLE_MESSAGE
});
