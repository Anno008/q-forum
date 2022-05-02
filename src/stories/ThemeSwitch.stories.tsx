import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeSwitch from "~/components/ThemeSwitch";
import AppThemeProvider from "~/providers/AppThemeProvider";

export default {
  title: "components/ThemeSwitch",
  component: ThemeSwitch
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = args => (
  <AppThemeProvider>
    <ThemeSwitch {...args} />
  </AppThemeProvider>
);
export const ThemeSwitchStory = Template.bind({});
ThemeSwitchStory.storyName = "ThemeSwitch";
