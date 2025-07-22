import type { Meta, StoryObj } from '@storybook/react'

import { Snackbar, SnackbarProps, SnackbarType } from './index.js'

const meta: Meta<SnackbarProps> = {
  title: 'Elements/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<SnackbarProps>

export default meta
type Story = StoryObj<SnackbarProps>

export const Close: Story = {
  args: {
    isOpen: false,
  },
}

export const Default: Story = {
  args: {
    isOpen: true,
    snackbarMessage: 'Snackbarを表示します',
    snackbarStatus: SnackbarType.DEFAULT,
  },
}

export const Success: Story = {
  args: {
    isOpen: true,
    snackbarMessage: 'Snackbarを表示します',
    snackbarStatus: SnackbarType.SUCCESS,
  },
}

export const Error: Story = {
  args: {
    isOpen: true,
    snackbarMessage: 'Snackbarを表示します',
    snackbarStatus: SnackbarType.ERROR,
  },
}

export const Warning: Story = {
  args: {
    isOpen: true,
    snackbarMessage: 'Snackbarを表示します',
    snackbarStatus: SnackbarType.WARN,
  },
}

export const Info: Story = {
  args: {
    isOpen: true,
    snackbarMessage: 'Snackbarを表示します',
    snackbarStatus: SnackbarType.INFO,
  },
}

export const ShortText: Story = {
  args: {
    isOpen: true,
    snackbarMessage: 'Short Text',
    snackbarStatus: SnackbarType.INFO,
  },
}

export const LongText: Story = {
  args: {
    isOpen: true,
    snackbarMessage:
      'テスト用のプログラムでスナックバーに表示されるとても長いテキストです',
    snackbarStatus: SnackbarType.INFO,
  },
}
