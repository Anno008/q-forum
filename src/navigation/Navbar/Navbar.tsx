import { Activity } from "react-feather";
import { useLocation } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import { postsRoute } from "../routes";
import { FlexGrid, Paragraph, NavLinkWithoutDecoration } from "~/components/atoms";
import ThemeSwitch from "~/components/ThemeSwitch";
import locators from "~/testUtils/locators";
import { setTestId } from "~/testUtils/setTestId";
import withConsoleLog from "~/decorators/withConsoleLog";

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 0 10px;
  height: 60px;
  display: flex;
  ${({ theme }) => `box-shadow: 0 0px 4px 1px ${theme.shadowColor};`}
  transition: 0.2s all linear 0.05s;
  ${({ theme }) => `background-color: ${theme.primaryBackgroundColor};`}
  z-index: 4;
`;

const Navbar = (): JSX.Element => {
  const { pathname } = useLocation();
  const theme = useTheme();

  const getActiveColor = (active: boolean) =>
    active ? theme.primaryTextColor : theme.secondaryTextColor;

  const getActiveParagraphProps = (active: boolean) => ({
    color: getActiveColor(active),
    textAlign: "center",
    useTextShadow: active
  });

  const getIsActiveRoute = (currentRoute: string): boolean => currentRoute === pathname;

  return (
    <NavbarContainer {...setTestId(locators.navbar)}>
      <FlexGrid flex="1" justifyContent="flex-start" gap="10px" alignItems="center">
        <NavLinkWithoutDecoration to={postsRoute} {...setTestId(locators.navbarPosts)}>
          <FlexGrid flexDirection="column" alignItems="center" justifyContent="center">
            <Activity color={getActiveColor(getIsActiveRoute(postsRoute))} />
            <Paragraph
              {...getActiveParagraphProps(getIsActiveRoute(postsRoute))}
              transition="color 0.3s ease-in-out">
              Posts
            </Paragraph>
          </FlexGrid>
        </NavLinkWithoutDecoration>
      </FlexGrid>
      <FlexGrid flexDirection="row" gap="5px" alignItems="center">
        <FlexGrid flexDirection="column" justifyContent="center">
          <ThemeSwitch />
        </FlexGrid>
      </FlexGrid>
    </NavbarContainer>
  );
};

export default withConsoleLog(Navbar);
