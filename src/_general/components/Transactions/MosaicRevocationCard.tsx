import React from 'react'

import styled from '@emotion/styled'
import { MosaicSupplyRevocationTransaction } from 'symbol-sdk'
import TxMosaic from '../TransactionInfo/Mosaic/index.js'
import TxAddress from '../TransactionInfo/Address/index.js'
type Props = {
  transaction: MosaicSupplyRevocationTransaction
}
const MosaicRevocationCard: React.FC<Props> = ({ transaction }) => {
  return (
    <Wrapper>
      <TxAddress address={transaction.sourceAddress} />
      <TxMosaic mosaic={transaction.mosaic} />
    </Wrapper>
  )
}

export default MosaicRevocationCard

const Wrapper = styled('div')({
  margin: '8px',
  padding: '8px',
})
