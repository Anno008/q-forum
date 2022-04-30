import React from "react";
import withConsoleLog from "~/decorators/withConsoleLog";
import { FlexGrid, H2, Paragraph } from "../atoms";
import { Card } from "../atoms/Card";

type Props = {
  title: string;
  body: string;
  renderWrapper: (content: React.ReactNode) => JSX.Element;
  renderUser: () => JSX.Element;
  renderAdditionalContent?: () => JSX.Element;
};

const ResponseCard: React.FC<Props> = ({
  title,
  body,
  renderUser,
  renderAdditionalContent,
  renderWrapper
}) => {
  return (
    <FlexGrid flexDirection="column">
      {renderWrapper(
        <Card>
          <FlexGrid flexDirection="column" gap="20px" justifyContent="flex-start">
            <FlexGrid alignItems="center" justifyContent="space-between" flexWrap="wrap" gap="5px">
              <H2 margin="0">{title}</H2>
              {renderUser()}
            </FlexGrid>
            <Paragraph>{body}</Paragraph>
          </FlexGrid>
        </Card>
      )}
      {renderAdditionalContent && renderAdditionalContent()}
    </FlexGrid>
  );
};

export default withConsoleLog(ResponseCard);
