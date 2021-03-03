import { Meta, Story } from "@storybook/react/types-6-0";

import Dialog from "../components/Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta;

const Template: Story = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = { visible: true };
Default.argTypes = {
  visible: {
    control: { type: "boolean" },
    important: { control: { type: "boolean" } },
  },
};
