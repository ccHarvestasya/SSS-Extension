import React from 'react'

import styled from '@emotion/styled'
import { TransferTransaction } from 'symbol-sdk'
import Typography from '../Typography/index.js'
import Spacer from '../Spacer/index.js'
import TxAddress from '../TransactionInfo/Address/index.js'
import TxMosaic from '../TransactionInfo/Mosaic/index.js'

type Props = {
  transaction: TransferTransaction
}
const TransferCard: React.FC<Props> = ({ transaction }) => {
  return (
    <Wrapper>
      <TxAddress address={transaction.recipientAddress} />
      <Typography text="Message" fontSize={24} />
      <Spacer MLeft="16px">
        <Typography text={transaction.message.payload} fontSize={20} />
      </Spacer>
      <Typography text="Mosaics" fontSize={24} />
      {transaction.mosaics.map((mosaic) => {
        return <TxMosaic mosaic={mosaic} key={mosaic.id.toHex()} />
      })}
    </Wrapper>
  )
}

export default TransferCard

const Wrapper = styled('div')({
  margin: '8px',
  padding: '8px',
})
