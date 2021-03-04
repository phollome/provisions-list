import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react/types-6-0";

import Dialog from "../components/Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta;

const Template: Story = (args) => <Dialog {...args} />;

export const Empty = Template.bind({});
Empty.args = { visible: true };

export const Children = Template.bind({});
Children.args = {
  children: (
    <>
      <h1 className="text-xl font-bold" data-testid="test-headline">
        Headline
      </h1>
      <p data-testid="test-paragraph">Paragraph</p>
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
