import React, { PropsWithChildren } from "react";

import styled from "styled-components";

import { FlexGrid } from "~/components/atoms/Grids";
import withConsoleLog from "~/decorators/withConsoleLog";
import locators from "~/testUtils/locators";
import { setTestId } from "~/testUtils/setTestId";

export const MainContainer = styled(FlexGrid)`
  transition: 0.2s all linear 0.05s;
  ${({ theme }) => `background-color: ${theme.secondaryBackgroundColor};`}
  flex-direction: column;
  min-height: calc(100vh - 60px);
  overflow: hidden;
`;

export const ContentContainer = styled(FlexGrid)`
  width: 60vw;
  flex: 1;
  margin: auto auto;
  ${({ theme }) => `box-shadow: 0 0px 4px 1px ${theme.shadowColor};`}
  ${({ theme }) => `background-color: ${theme.primaryBackgroundColor};`}
  padding: 30px;
  transition: width 0.2s ease-in;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

type Props = {
  flexDirection?: "row" | "column";
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  contentContainerTestId?: string;
};

const MainLayout: React.FC<PropsWithChildren<Props>> = ({
  children,
  contentContainerTestId,
  ...rest
}): JSX.Element => (
  <MainContainer {...setTestId(locators.mainLayout)}>
    <ContentContainer {...rest} {...setTestId(contentContainerTestId)}>
      {children}
    </ContentContainer>
  </MainContainer>
);

export default withConsoleLog(MainLayout);
