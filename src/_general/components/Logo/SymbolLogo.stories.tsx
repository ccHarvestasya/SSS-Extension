import type { Meta, StoryObj } from '@storybook/react'
import Component, { Props } from './SymbolLogo.js'

const meta: Meta<Props> = {
  title: 'UI/Logo',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<Props>

export default meta
type Story = StoryObj<Props>

export const Symbol: Story = {
  args: {
    onClick: () => console.log('click'),
  },
}
