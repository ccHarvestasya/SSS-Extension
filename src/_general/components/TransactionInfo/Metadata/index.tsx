import React from 'react'

import styled from '@emotion/styled'
import Typography from '../../Typography/index.js'

export type Props = {
  metadataKey: string
  value: string
}

const TxMetadata: React.FC<Props> = ({ metadataKey, value }) => {
  return (
    <Wrapper>
      <Typography text="Metadata" fontSize={24} />
      <Center>
        <Typography text={metadataKey} fontSize={20} />
        <Typography text={value} fontSize={18} />
      </Center>
    </Wrapper>
  )
}

export default TxMetadata

const Wrapper = styled('div')({
  margin: '8px',
})

const Center = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
})
