import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import Component, { Props } from './index.js'

const meta: Meta<Props> = {
  title: 'Elements/TextField',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<Props>

export default meta
type Story = StoryObj<Props>

export const Default: Story = {
  render: (args) => {
    const [, setText] = useState('')
    return <Component {...args} setText={setText} />
  },
  args: {
    label: 'TextField',
    variant: 'outlined',
  },
}

export const Filled: Story = {
  render: (args) => {
    const [, setText] = useState('')
    return <Component {...args} setText={setText} />
  },
  args: {
    label: 'TextField',
    variant: 'filled',
  },
}

export const Text: Story = {
  render: (args) => {
    const [, setText] = useState('')
    return <Component {...args} setText={setText} />
  },
  args: {
    label: 'TextField',
    variant: 'text',
  },
}