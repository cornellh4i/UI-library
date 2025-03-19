import { StoryFn, Meta } from "@storybook/react";
import Example from "./Example";

export default {
    title: "ReactComponentLibrary/Example",
    component: Example,
} as Meta<typeof Example>;

const Template: StoryFn<typeof Example> = (args) => <Example {...args} />;

export const RatingTest = Template.bind({});
RatingTest.args = {
    title: "Default theme",
    theme: "primary",
    testIdPrefix: "rating",
};

export const RatingSecondary = Template.bind({});
RatingSecondary.args = {
    title: "Secondary theme",
    theme: "secondary",
    testIdPrefix: "rating",
};