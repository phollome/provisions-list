import { Meta, Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import Counter from "../components/Counter";

export default {
  title: "Components/Counter",
  component: Counter,
  argTypes: { defaultValue: { control: { disable: true, type: "number" } } },
} as Meta;

const Template: Story = (args) => (
  <Counter onChange={action("counter value changed")} {...args} />
);

export const Default = Template.bind({});
Default.argTypes = {};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: 5,
};
WithDefaultValue.argTypes = {
  value: { control: { disable: true, type: "number" } },
};
