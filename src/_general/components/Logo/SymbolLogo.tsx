import React from 'react'
import styled from '@emotion/styled'
import SVG from './symbol.svg?react'

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

const Wrapper = styled('span')({
  cursor: 'pointer',
  '& > svg': {
    width: '48px',
  },
})
