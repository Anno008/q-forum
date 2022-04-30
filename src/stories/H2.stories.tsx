import { ComponentStory, ComponentMeta } from "@storybook/react";
import { H2 } from "~/components/atoms";

export default {
  title: "components/atoms/Typography/H2",
  component: H2
} as ComponentMeta<typeof H2>;

const Template: ComponentStory<typeof H2> = args => <H2 {...args}>Heading</H2>;

export const H2WithMargin = Template.bind({});
H2WithMargin.storyName = "H2 with margin";
H2WithMargin.args = {
  margin: "40px"
};

export const RedH2 = Template.bind({});
RedH2.storyName = "H2 with red color";
RedH2.args = {
  color: "red"
};
