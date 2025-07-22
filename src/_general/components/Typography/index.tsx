import React from 'react'

import styled from '@emotion/styled'
import Color from '../../utils/Color.js'

export interface Props {
  color?: string
  fontSize?: number
  text: string
}

const Component: React.FC<Props> = ({
  color = Color.default,
  fontSize = 16,
  text,
  ...rest
}) => {
  return (
    <STypography {...rest} color={color} fontSize={fontSize}>
      {text}
    </STypography>
  )
}

const STypography = styled('div')<{ color: string; fontSize: number }>`
  color: ${(p) => p.color};
  font-size: ${(p) => p.fontSize}px;
  word-break: break-all;
  font-family: 'Roboto', 'Noto Sans JP', 'Times New Roman', sans-serif;
`

export default Component