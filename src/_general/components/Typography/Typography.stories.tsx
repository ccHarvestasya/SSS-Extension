import type { Meta, StoryObj } from '@storybook/react'

import Component, { Props } from './index.js'
import Color from '../../utils/Color.js'

const meta: Meta<Props> = {
  title: 'Elements/Typography',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<Props>

export default meta
type Story = StoryObj<Props>

export const Default: Story = {
  args: {
    text: 'Typography',
  },
}

export const Gray: Story = {
  args: {
    text: 'Typography',
    color: Color.grayscale,
  },
}

export const Large: Story = {
  args: {
    text: 'Typography',
    fontSize: 24,
  },
}

export const Small: Story = {
  args: {
    text: 'Typography',
    fontSize: 12,
  },
}

export const CustomColor: Story = {
  args: {
    text: 'Typography',
    color: '#ff6b6b',
  },
}

export const LongText: Story = {
  args: {
    text: 'これは非常に長いテキストの例です。ワードブレイクの動作を確認するために使用されます。長いテキストがどのように表示されるかを確認できます。',
  },
}