import React from "react";
import { Frown } from "react-feather";
import { useTheme } from "styled-components";

import { FlexGrid, Paragraph } from "~/components/atoms";
import MainLayout from "~/components/MainLayout";
import withConsoleLog from "~/decorators/withConsoleLog";

const PageNotFound: React.FC = () => {
  const theme = useTheme();

  return (
    <MainLayout>
      <FlexGrid alignItems="flex-start" justifyContent="center" gap="10px" flex="1">
        <Paragraph>Page not found</Paragraph>
        <Frown color={theme.primaryTextColor} />
      </FlexGrid>
    </MainLayout>
  );
};
export default withConsoleLog(PageNotFound);
