import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'jotai'
import Component, { Props } from './index.js'
import { Address } from 'symbol-sdk'

const meta: Meta<Props> = {
  title: 'TransactionInfo/Address',
  component: Component,
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

export const Default: Story = {
  args: {
    address: Address.createFromRawAddress(
      'TBNXEEHPLX37CHYORRQRD6LJBQ4JI7EKFNTOH5Y',
    ),
  },
}
