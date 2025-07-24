import type { Meta, StoryObj } from '@storybook/react'
import { Provider, createStore } from 'jotai'
import { networkAtom } from '../../../../_general/utils/Atom.js'

import TransactionHistory, { Props } from './index.js'
import { Address } from 'symbol-sdk'

const mainDecorator = (Story: any) => {
  const store = createStore()
  store.set(networkAtom, 'https://sym-main-01.opening-line.jp:3001') // Main用URL
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  )
}

const testDecorator = (Story: any) => {
  const store = createStore()
  store.set(networkAtom, 'https://sym-test-01.opening-line.jp:3001') // Test用URL
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  )
}

const meta: Meta<Props> = {
  title: 'Option/TransactionHistory',
  component: TransactionHistory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<Props>

export default meta
type Story = StoryObj<Props>

export const Main: Story = {
  args: {
    address: Address.createFromRawAddress(
      'NAW7L44MVKCVBM6IGEBXLF2K7JYKEP6R5XMCEZA',
    ),
  },
  decorators: [mainDecorator],
}

export const Test: Story = {
  args: {
    address: Address.createFromRawAddress(
      'TBZN46UIU5BFLJI46VB4JTHHCE5EN2RFLR7NX3A',
    ),
  },
  decorators: [testDecorator],
}
