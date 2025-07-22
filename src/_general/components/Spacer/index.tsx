import * as React from 'react'
import styled from '@emotion/styled'

export interface SpaceProps {
  margin?: string | null
  padding?: string | null
  MTop?: string
  MRight?: string
  MLeft?: string
  MBottom?: string
  PTop?: string
  PRight?: string
  PLeft?: string
  PBottom?: string
  children?: React.ReactNode
}

const Spacer: React.FC<SpaceProps> = ({
  margin = null,
  padding = null,
  MTop = '0',
  MRight = '0',
  MBottom = '0',
  MLeft = '0',
  PTop = '0',
  PRight = '0',
  PBottom = '0',
  PLeft = '0',
  children,
}) => {
  const finalMargin = margin ?? `${MTop} ${MRight} ${MBottom} ${MLeft}`
  const finalPadding = padding ?? `${PTop} ${PRight} ${PBottom} ${PLeft}`

  return (
    <Style margin={finalMargin} padding={finalPadding}>
      {children}
    </Style>
  )
}

const Style = styled('div')<{
  margin: string
  padding: string
}>`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`

export default Spacer
