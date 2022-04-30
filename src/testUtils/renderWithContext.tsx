import React, { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import GlobalStyle from "~/App/globalStyles";
import AppThemeProvider from "~/providers/AppThemeProvider";
import { MemoryRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppConsoleProvider from "~/providers/AppConsoleProvider";

export const renderWithContext = (children: ReactNode): RenderResult => {
  return render(
    <AppThemeProvider>
      <AppConsoleProvider>
        <ToastContainer />
        <GlobalStyle />
        <MemoryRouter>{children}</MemoryRouter>
      </AppConsoleProvider>
    </AppThemeProvider>
  );
};
