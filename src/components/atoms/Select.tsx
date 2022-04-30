import styled from "styled-components";

export const Select = styled.select`
  padding: 8px;
  min-width: 150px;
  ${({ theme }) => `background-color: ${theme.secondaryBackgroundColor};`}
  ${({ theme }) => `color: ${theme.primaryTextColor};`}
  ${({ theme }) => `border: 1px solid ${theme.primaryTextColor};`}
  border-radius: 4px;
  transition: 0.3s background-color ease-in-out;

  &:hover {
    cursor: pointer;
    ${({ theme }) => `background-color: ${theme.primaryBackgroundColor};`}
  }
`;
