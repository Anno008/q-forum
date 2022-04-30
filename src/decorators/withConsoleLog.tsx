import { PropsWithChildren } from "react";
import { useConsoleLog } from "~/hooks/useConsoleLog";

// HOC
const withConsoleLog = <T,>(Component: React.FC<PropsWithChildren<T>>) => {
  const WrapperComponent: React.FC<PropsWithChildren<T>> = props => {
    useConsoleLog(Component.name);
    return <Component {...props}>{props.children}</Component>;
  };
  return WrapperComponent;
};
export default withConsoleLog;
