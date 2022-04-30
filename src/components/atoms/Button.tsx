import styled from "styled-components";

export const Button = styled.button`
  padding: 8px;
  ${({ theme }) => `background-color: ${theme.secondaryBackgroundColor};`}
  ${({ theme }) => `color: ${theme.primaryTextColor};`}
  ${({ theme }) => `border: 1px solid ${theme.primaryTextColor};`}
  ${({ theme }) => `box-shadow: 0 0px 4px 1px ${theme.shadowColor};`}
  border-radius: 4px;
  transition: 0.3s background-color ease-in-out;

  &:hover {
    cursor: pointer;
    ${({ theme }) => `background-color: ${theme.primaryBackgroundColor};`}
  }
  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    ${({ theme }) => `background-color: ${theme.secondaryBackgroundColor};`}
    cursor: not-allowed;
  }
`;
