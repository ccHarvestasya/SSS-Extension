import React from 'react'
import { StoryFn, Meta } from '@storybook/react-vite'

import Header, { Props } from './index.js'
import { NetworkType } from 'symbol-sdk'
import {Setting} from '../../../_general/lib/Storage/index.js'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

const Template: StoryFn<Props> = (args) => <Header {...args} />

const dummySetting = {
  networkType: NetworkType.TEST_NET,
  lang: 'en',
} as Setting

export const HOME = Template.bind({})
HOME.args = {
  page: 'HOME',
  setting: dummySetting,
}

export const ACCOUNTS = Template.bind({})
ACCOUNTS.args = {
  page: 'ACCOUNTS',
  setting: dummySetting,
}

export const SETTING = Template.bind({})
SETTING.args = {
  page: 'SETTING',
  setting: dummySetting,
}

export const ALLOW = Template.bind({})
ALLOW.args = {
  page: 'ALLOW',
  setting: dummySetting,
}

export const HISTORY = Template.bind({})
HISTORY.args = {
  page: 'HISTORY',
  setting: dummySetting,
}
