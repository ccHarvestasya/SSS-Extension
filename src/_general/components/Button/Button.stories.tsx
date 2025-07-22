import type { Meta, StoryObj } from '@storybook/react'

import Button, { Props } from './index.js'

const meta: Meta<Props> = {
  title: 'Elements/Button',
  component: Button,
}

export default meta
type Story = StoryObj<Props>

export const Default: Story = {
  args: {
    text: 'BUTTON',
    onClick: () => console.log('clicked'),
  },
}