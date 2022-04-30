import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "~/components/atoms/Button";

export default {
  title: "components/atoms/Button",
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Button</Button>;

export const ButtonStory = Template.bind({});
ButtonStory.storyName = "Button";
