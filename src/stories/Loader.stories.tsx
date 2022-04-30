import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "~/components/Loader";

export default {
  title: "components/Loader",
  component: Loader
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;

export const LoaderStory = Template.bind({});
LoaderStory.storyName = "Default loader";

export const LoaderStoryWithSmallSize = Template.bind({});
LoaderStoryWithSmallSize.storyName = "Small loader";
LoaderStoryWithSmallSize.args = {
  size: "small"
};
