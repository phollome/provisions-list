import { Meta, Story } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";

import SearchInput from "../components/SearchInput";

export default {
  title: "Components/SearchInput",
  component: SearchInput,
} as Meta;

const Template: Story = () => (
  <SearchInput onChange={action("search value changed")} />
);
export const Default = Template.bind({});
