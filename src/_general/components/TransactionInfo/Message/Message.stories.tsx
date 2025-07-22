import type { Meta, StoryObj } from '@storybook/react'

import Component, { Props } from './index.js'
import { PlainMessage } from 'symbol-sdk'

const meta: Meta<Props> = {
  title: 'TransactionInfo/Message',
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
    message: PlainMessage.create('message'),
  },
}

export const LongMessage: Story = {
  args: {
    message: PlainMessage.create(
      'これは非常に長いメッセージの例です。トランザクションに含まれるメッセージが長い場合の表示を確認できます。',
    ),
  },
}

export const EmptyMessage: Story = {
  args: {
    message: PlainMessage.create(''),
  },
}
