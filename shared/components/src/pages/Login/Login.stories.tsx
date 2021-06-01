import { Story, Meta } from '@storybook/react'
import { Login } from './Login'

export default {
  title: 'Form/Login',
  component: Login
} as Meta

const Template: Story = args => <Login {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary'
}
