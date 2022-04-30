import { BrowserRouter } from "react-router-dom";
import withConsoleLog from "~/decorators/withConsoleLog";

import AppRoutes from "~/navigation/AppRoutes";
import Navbar from "~/navigation/Navbar";

const AppNavigation = (): JSX.Element => (
  <BrowserRouter>
    <Navbar />
    <AppRoutes />
  </BrowserRouter>
);

export default withConsoleLog(AppNavigation);
