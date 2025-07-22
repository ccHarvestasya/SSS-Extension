import React from 'react'

import styled from '@emotion/styled'
import { AccountMetadataTransaction, Convert } from 'symbol-sdk'
import TxAddress from '../TransactionInfo/Address/index.js'
import Metadata from '../TransactionInfo/Metadata/index.js'

type Props = {
  transaction: AccountMetadataTransaction
}
const AccountMetadataCard: React.FC<Props> = ({ transaction }) => {
  return (
    <Wrapper>
      <TxAddress address={transaction.targetAddress} />
      <Metadata
        metadataKey={transaction.scopedMetadataKey.toHex()}
        value={Convert.uint8ToUtf8(transaction.value)}
      />
    </Wrapper>
  )
}

export default AccountMetadataCard

const Wrapper = styled('div')({
  margin: '8px',
  padding: '8px',
})
