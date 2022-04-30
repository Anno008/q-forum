import { ComponentStory, ComponentMeta } from "@storybook/react";
import ResponseCard from "~/components/ResponseCard";

export default {
  title: "components/ResponseCard",
  component: ResponseCard
} as ComponentMeta<typeof ResponseCard>;

const Template: ComponentStory<typeof ResponseCard> = args => <ResponseCard {...args} />;

export const ResponseCardStory = Template.bind({});
ResponseCardStory.storyName = "ResponseCard";
ResponseCardStory.args = {
  renderUser: () => <div>Render user props</div>,
  renderWrapper: content => <>{content}</>,
  body: "Body content",
  title: "Title"
};

export const ResponseCardWithDivWrapperStory = Template.bind({});
ResponseCardWithDivWrapperStory.storyName = "ResponseCard with div wrapper";
ResponseCardWithDivWrapperStory.args = {
  renderUser: () => <div>Render user props</div>,
  renderWrapper: content => <div>{content}</div>,
  body: "Body content",
  title: "Title"
};

export const ResponseCardWithAdditionalContentStory = Template.bind({});
ResponseCardWithAdditionalContentStory.storyName = "ResponseCard with additional content";
ResponseCardWithAdditionalContentStory.args = {
  renderUser: () => <div>Render user props</div>,
  renderWrapper: content => <>{content}</>,
  body: "Body content",
  title: "Title",
  renderAdditionalContent: () => <div>Additional content</div>
};
