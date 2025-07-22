import React from 'react'
import styled from '@emotion/styled'

import SVG from './logo.svg?react'
import SSVG from './squarelogo.svg?react'

export interface Props {
  onClick: () => void
}

const Component: React.FC<Props> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <SVG />
    </Wrapper>
  )
}

export default Component

export const SquareLogo: React.FC<Props> = ({ onClick }) => {
  return (
    <SWrapper onClick={onClick}>
      <SSVG />
    </SWrapper>
  )
}

const Wrapper = styled('span')({
  cursor: 'pointer',
  '& > svg': {
    height: '80px',
  },
})
const SWrapper = styled('span')({
  cursor: 'pointer',
  '& > svg': {
    height: '64px',
  },
})
