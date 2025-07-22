import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'jotai'

import TransactionHistory, { Props } from './index.js'
import { Address } from 'symbol-sdk'

const meta: Meta<Props> = {
  title: 'Option/TransactionHistory',
  component: TransactionHistory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
} satisfies Meta<Props>

export default meta
type Story = StoryObj<Props>

export const Main: Story = {
  args: {
    address: Address.createFromRawAddress(
      'NAW7L44MVKCVBM6IGEBXLF2K7JYKEP6R5XMCEZA',
    ),
  },
}

export const Test: Story = {
  args: {
    address: Address.createFromRawAddress(
      'TD55KXAFNATAHOPEDST2V4MLOL43DGCELZS6PGA',
    ),
  },
}
