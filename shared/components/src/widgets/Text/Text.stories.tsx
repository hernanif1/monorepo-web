import { Story, Meta } from '@storybook/react';
import { Text } from "./Text"

export default {
  title: 'Form/Text',
  component: Text,
} as Meta;

const Template: Story<{}> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};