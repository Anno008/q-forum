import styled from "styled-components";

export const RoundButton = styled.button`
  ${({ theme }) => `border: 3px solid ${theme.secondaryTextColor};`}
  ${({ theme }) => `background-color: ${theme.primaryBackgroundColor};`}
  border-radius: 50%;
  padding: 10px;
  transform: scale(0.7);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(0.8);
  }
`;
