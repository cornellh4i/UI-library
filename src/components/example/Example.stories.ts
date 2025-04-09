import { Meta, StoryObj } from "@storybook/react";
import { Example } from "./Example";

const meta = {
    title: "Rating/Example",
    component: Example,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>

export const RatingPrimary: Story = {
    args: {
        title: "Default theme",
        theme: "primary",
        testIdPrefix: "rating",
    }
}

export const RatingSecondary: Story = {
    args: {
        title: "Secondary theme",
        theme: "secondary",
        testIdPrefix: "rating",
    }
}


// const Template: StoryFn<typeof Example> = (args) => <Example {...args} />;

// export const RatingTest = Template.bind({});
// RatingTest.args = {
//     title: "Default theme",
//     theme: "primary",
//     testIdPrefix: "rating",
// };

// export const RatingSecondary = Template.bind({});
// RatingSecondary.args = {
//     title: "Secondary theme",
//     theme: "secondary",
//     testIdPrefix: "rating",
// };