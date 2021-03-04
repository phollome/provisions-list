import { Meta, Story } from "@storybook/react/types-6-0";

import Dialog from "../components/Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
} as Meta;

const Template: Story = (args) => <Dialog {...args} />;

export const Default = Template.bind({});
Default.args = { visible: true };

export const WithChildren = Template.bind({});
WithChildren.args = {
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
WithChildren.argTypes = {
  important: { control: { disable: true } },
  children: { control: { disable: true } },
};
