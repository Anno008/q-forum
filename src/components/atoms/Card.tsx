import styled from "styled-components";
import SlideInRight from "./Animations/SlideInRight";

export const Card = styled.div`
  padding: 16px;
  ${({ theme }) => `background-color: ${theme.secondaryBackgroundColor};`}
  ${({ theme }) => `border: 1px solid ${theme.primaryTextColor};`}
  animation: ${SlideInRight.animation} 0.35s ${SlideInRight.timingFunction};
  border-radius: 4px;
  transition: 0.3s background-color ease-in-out;

  &:hover {
    ${({ theme }) => `background-color: ${theme.primaryBackgroundColor};`}
  }
`;
