import { Meta, Story } from "@storybook/react/types-6-0";

import Card from "../components/Card";
import { CardProps } from "../types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    value: { control: { disable: true, type: "number" } },
  },
} as Meta;

const Template: Story = (args) => <Card {...(args as CardProps)} />;

export const Default = Template.bind({});
Default.args = { _id: 1, name: "Item" };

export const WithInitialValue = Template.bind({});
WithInitialValue.args = { _id: 1, name: "Item with initial value", value: 5 };
