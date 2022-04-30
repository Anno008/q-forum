import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RoundButton } from "~/components/atoms/RoundButton";

export default {
  title: "components/atoms/RoundButton",
  component: RoundButton
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = () => <RoundButton>Round</RoundButton>;

export const RoundButtonStory = Template.bind({});
RoundButtonStory.storyName = "RoundButton";
