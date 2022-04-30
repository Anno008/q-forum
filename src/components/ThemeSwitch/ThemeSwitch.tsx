import React, { useContext } from "react";

import { Moon, Sun } from "react-feather";
import { useTheme } from "styled-components";

import lightOff from "~/assets/light-off.mp3";
import lightOn from "~/assets/light-on.mp3";
import { FlexGrid, RoundButton } from "~/components/atoms";
import AppThemeContext from "~/contexts/AppThemeContext";
import withConsoleLog from "~/decorators/withConsoleLog";
import locators from "~/testUtils/locators";
import { setTestId } from "~/testUtils/setTestId";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useContext(AppThemeContext);
  const switchSound = new Audio(theme === "light" ? lightOff : lightOn);
  const appTheme = useTheme();

  return (
    <FlexGrid>
      <RoundButton
        {...setTestId(locators.themeSwitchToggleButton)}
        onClick={() => {
          switchSound.play();
          setTheme(theme === "light" ? "dark" : "light");
        }}>
        {theme === "light" ? (
          <Moon
            color={appTheme.primaryTextColor}
            {...setTestId(locators.themeSwitchDarkThemeIcon)}
          />
        ) : (
          <Sun
            color={appTheme.primaryTextColor}
            {...setTestId(locators.themeSwitchLightThemeIcon)}
          />
        )}
      </RoundButton>
    </FlexGrid>
  );
};

export default withConsoleLog(ThemeSwitch);
