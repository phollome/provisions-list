import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react/types-6-0";

import Dialog from "../components/Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: { insideDocs: { control: { disable: true } } },
  args: { insideDocs: true },
} as Meta;

const Template: Story = (args) => (
  <div className="w-full min-h-full">
    <Dialog {...args} />
  </div>
);

export const Empty = Template.bind({});
Empty.args = { visible: true };

export const Children = Template.bind({});
Children.args = {
  children: (
    <>
      <h1 className="text-xl font-bold">Headline</h1>
      <p>Paragraph</p>
    </>
  ),
  visible: true,
};
Children.argTypes = {
  important: { control: { disable: true } },
  children: { control: { disable: true } },
};

export const Submit = Template.bind({});
Submit.args = {
  onSubmit: action("submit clicked"),
  visible: true,
};
Submit.argTypes = {
  important: { control: { disable: true } },
  children: { control: { disable: true } },
};

export const Actions = Template.bind({});
Actions.args = {
  actions: [
    { label: "Custom action 1", onClick: action("custom button 1 clicked") },
    { label: "Custom action 2", onClick: action("custom button 2 clicked") },
  ],
  visible: true,
};
Actions.argTypes = {
  important: { control: { disable: true } },
  actions: { control: { disable: true } },
};
