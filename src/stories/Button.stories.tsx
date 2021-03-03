import { Meta, Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { label: { control: { type: "string" } } },
} as Meta;

const Template: Story = (args) => (
  <Button onClick={action("button clicked")} {...(args as { label: string })} />
);
export const Default = Template.bind({});
Default.args = {
  label: "Click me!",
};
