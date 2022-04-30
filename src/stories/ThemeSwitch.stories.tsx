import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeSwitch from "~/components/ThemeSwitch";

export default {
  title: "components/ThemeSwitch",
  component: ThemeSwitch
} as ComponentMeta<typeof ThemeSwitch>;

const Template: ComponentStory<typeof ThemeSwitch> = args => <ThemeSwitch {...args} />;
export const ThemeSwitchStory = Template.bind({});
ThemeSwitchStory.storyName = "ThemeSwitch";
