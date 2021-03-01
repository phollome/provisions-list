import { Meta, Story } from "@storybook/react/types-6-0";

import List from "../components/List";

export default {
  title: "Components/List",
  component: List,
  argTypes: {
    data: { control: { disable: true, type: "object" } },
  },
} as Meta;

const Template: Story = (args) => <List {...args} />;

export const Default = Template.bind({});

export const WithData = Template.bind({});
WithData.args = {
  data: [
    { _id: 1, name: "Item 1" },
    { _id: 2, name: "Item 2", value: 3 },
  ],
};
