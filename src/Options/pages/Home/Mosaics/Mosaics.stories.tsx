import { StoryFn, Meta } from '@storybook/react-vite'
import { RecoilRoot } from 'recoil'

import Mosaics, { Props } from './index.js'
import { Address } from 'symbol-sdk'

export default {
  title: 'Option/Mosaics',
  component: Mosaics,
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta

const Template: StoryFn<Props> = (args) => <Mosaics {...args} />

export const Main = Template.bind({})
Main.args = {
  address: Address.createFromRawAddress(
    'TBNXEEHPLX37CHYORRQRD6LJBQ4JI7EKFNTOH5Y',
  ),
}
