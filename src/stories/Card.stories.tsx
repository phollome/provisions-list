import { Meta, Story } from "@storybook/react/types-6-0";

import Card, { CardProps } from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    value: { control: { disable: true, type: "number" } },
  },
} as Meta;

const Template: Story = (args) => <Card {...(args as CardProps)} />;
export const Default = Template.bind({});
Default.args = { name: "Item" };
export const InitialValue = Template.bind({});
InitialValue.args = { name: "Item with initial value", value: 5 };
