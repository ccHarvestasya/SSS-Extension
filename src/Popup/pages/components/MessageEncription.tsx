import React from 'react'
import styled from '@emotion/styled'
import Typography from '../../../_general/components/Typography/index.js'
import { Divider } from '@mui/material'
import Color from '../../../_general/utils/Color.js'

export type Props = {
  message: string
}

const Component: React.FC<Props> = ({ message }) => {
  return (
    <Wrapper>
      <Header>
        <Typography text="MessageEncryption" fontSize={20} />
        <SDivider />
      </Header>
      <Content>
        <Message text={message} fontSize={20} />
      </Content>
    </Wrapper>
  )
}

export default Component

const Wrapper = styled('div')({
  margin: '8px',
  height: 'calc(100% - 16px)',
})
const Message = styled(Typography)({
  fontFamily: 'Roboto',
})

const Header = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '> *': {
    margin: '16px',
  },
})

const SDivider = styled(Divider)({
  width: 'calc(100% - 64px)',
  background: Color.sky,
  color: Color.sky,
})

const Content = styled('div')({
  margin: '16px 32px',
})
