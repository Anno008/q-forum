import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "~/components/atoms/Select";

export default {
  title: "components/atoms/Select",
  component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => (
  <Select>
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </Select>
);

export const SelectStory = Template.bind({});
SelectStory.storyName = "Select";
