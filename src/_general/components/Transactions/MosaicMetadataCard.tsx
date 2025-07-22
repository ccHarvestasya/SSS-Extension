import React from 'react'

import styled from '@emotion/styled'
import { Convert, MosaicMetadataTransaction } from 'symbol-sdk'
import Metadata from '../TransactionInfo/Metadata/index.js'
import Typography from '../Typography/index.js'

type Props = {
  transaction: MosaicMetadataTransaction
}
const AccountMetadataCard: React.FC<Props> = ({ transaction }) => {
  return (
    <Wrapper>
      <Typography text={transaction.targetMosaicId.toHex()} fontSize={24} />
      <Wrapper>
        <Metadata
          metadataKey={transaction.scopedMetadataKey.toHex()}
          value={Convert.uint8ToUtf8(transaction.value)}
        />
      </Wrapper>
    </Wrapper>
  )
}

export default AccountMetadataCard

const Wrapper = styled('div')({
  margin: '8px',
  padding: '8px',
})
