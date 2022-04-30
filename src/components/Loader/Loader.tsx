import React from "react";

import styled from "styled-components";
import withConsoleLog from "~/decorators/withConsoleLog";

import { ShakeUpDown } from "../atoms/Animations";

type Props = {
  size?: "small";
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  > div {
    animation: ${ShakeUpDown.animation} 2s ${ShakeUpDown.timingFunction} infinite;
    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }
`;

const Dot = styled.div<Props>`
  ${({ size }) => `width: ${size === "small" ? "5px" : "15px"};`}
  ${({ size }) => `height: ${size === "small" ? "5px" : "15px"};`}
  opacity: 0.8;
  ${({ theme }) => `background-color: ${theme.secondaryBackgroundColor};`}
  ${({ theme }) => `box-shadow: 0 0px 4px 1px ${theme.shadowColor};`}
  ${({ theme }) => `border: 1px solid ${theme.primaryTextColor};`}
  border-radius: 50%;
`;

const Loader: React.FC<Props> = ({ size }) => (
  <Container>
    <Dot size={size} />
    <Dot size={size} />
    <Dot size={size} />
  </Container>
);

export default withConsoleLog(Loader);
