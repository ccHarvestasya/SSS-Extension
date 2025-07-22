import React from 'react'

import styled from '@emotion/styled'
import { MosaicSupplyChangeTransaction } from 'symbol-sdk'
import Typography from '../Typography/index.js'

type Props = {
  transaction: MosaicSupplyChangeTransaction
}
const MosaicSupplyChangeCard: React.FC<Props> = ({ transaction }) => {
  return (
    <Wrapper>
      <Typography
        text={`MosaicID: ${transaction.mosaicId.toHex()}`}
        fontSize={20}
      />
      <Typography
        text={`Supply: ${transaction.delta.compact()}`}
        fontSize={20}
      />
    </Wrapper>
  )
}

export default MosaicSupplyChangeCard

const Wrapper = styled('div')({
  margin: '8px',
  padding: '8px',
})
