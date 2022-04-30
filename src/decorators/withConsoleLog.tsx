import { useConsoleLog } from "~/hooks/useConsoleLog";

// HOC
const withConsoleLog = <T,>(Component: React.FC<T>) => {
  const WrapperComponent: React.FC<T> = props => {
    useConsoleLog(Component.name);
    return <Component {...props}>{props.children}</Component>;
  };
  return WrapperComponent;
};
export default withConsoleLog;
