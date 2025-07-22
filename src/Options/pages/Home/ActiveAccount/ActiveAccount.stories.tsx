import type { Meta, StoryObj } from '@storybook/react'
import { RecoilRoot } from 'recoil'

import ActiveAccount, { Props } from './index.js'
import { Address } from 'symbol-sdk'

const meta: Meta<Props> = {
  title: 'Option/ActiveAccount',
  component: ActiveAccount,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
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
    name: 'inatatsu test wallet',
  },
}
