import styled from "styled-components";

export const Input = styled.input`
  height: 40px;
  ${({ theme }) => `border: 1px solid ${theme.shadowColor};`}
  ${({ theme }) => `color: ${theme.primaryTextColor};`}
  ${({ theme }) => `background-color: ${theme.secondaryBackgroundColor};`}
  border-radius: 10px;
  padding: 5px 10px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;
