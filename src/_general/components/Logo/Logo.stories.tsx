import type { Meta, StoryObj } from '@storybook/react'
import Component, { Props } from './index.js'

const meta: Meta<Props> = {
  title: 'UI/Logo',
  component: Component,
}

export default meta
type Story = StoryObj<Props>

export const Default: Story = {
  args: {
    onClick: () => console.log('click'),
  },
}
