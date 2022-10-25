import { ComponentMeta, ComponentStory } from '@storybook/react'
import UserAvatar from './UserAvatar'

export default {
  title: 'UserAvatar',
  component: UserAvatar,
  argTypes: {
    user: {
      description: '用户基本信息',
    },
  },
} as ComponentMeta<typeof UserAvatar>
const Template: ComponentStory<typeof UserAvatar> = (args) => (
  <UserAvatar {...args} />
)

export const Primary = Template.bind({})
