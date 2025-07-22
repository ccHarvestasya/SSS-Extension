import React from 'react'

import styled from '@emotion/styled'
import {
  AccountMetadataTransaction,
  AggregateTransaction,
  MosaicDefinitionTransaction,
  MosaicMetadataTransaction,
  MosaicSupplyChangeTransaction,
  MosaicSupplyRevocationTransaction,
  NamespaceMetadataTransaction,
  Transaction,
  TransactionType,
  TransferTransaction,
} from 'symbol-sdk'
import Typography from '../../../_general/components/Typography/index.js'

import TransferCard from '../../../_general/components/Transactions/TransferCard.js'
import AggregateComplateTransactionCard from '../../../_general/components/Transactions/AggregatTransactionCard.js'
import AccountMetadataCard from '../../../_general/components/Transactions/AccountMetadataCard.js'
import MosaicMetadataCard from '../../../_general/components/Transactions/MosaicMetadataCard.js'
import NamespaceMetadataCard from '../../../_general/components/Transactions/NamespaceMetadataCard.js'
import MosaicDefinitionCard from '../../../_general/components/Transactions/MosaicDefinitionCard.js'
import MosaicSupplyChangeCard from '../../../_general/components/Transactions/MosaicSupplyChangeCard.js'
import MosaicRevocationCard from '../../../_general/components/Transactions/MosaicRevocationCard.js'

export type Props = {
  transaction: Transaction
}

const TransactionCard: React.FC<Props> = ({ transaction }) => {
  if (transaction.type === TransactionType.TRANSFER) {
    return <TransferCard transaction={transaction as TransferTransaction} />
  }

  if (transaction.type === TransactionType.AGGREGATE_COMPLETE) {
    return (
      <AggregateComplateTransactionCard
        transaction={transaction as AggregateTransaction}
      />
    )
  }
  if (transaction.type === TransactionType.AGGREGATE_BONDED) {
    return (
      <AggregateComplateTransactionCard
        transaction={transaction as AggregateTransaction}
      />
    )
  }

  if (transaction.type === TransactionType.ACCOUNT_METADATA) {
    return (
      <AccountMetadataCard
        transaction={transaction as AccountMetadataTransaction}
      />
    )
  }

  if (transaction.type === TransactionType.MOSAIC_METADATA) {
    return (
      <MosaicMetadataCard
        transaction={transaction as MosaicMetadataTransaction}
      />
    )
  }

  if (transaction.type === TransactionType.NAMESPACE_METADATA) {
    return (
      <NamespaceMetadataCard
        transaction={transaction as NamespaceMetadataTransaction}
      />
    )
  }

  if (transaction.type === TransactionType.MOSAIC_DEFINITION) {
    return (
      <MosaicDefinitionCard
        transaction={transaction as MosaicDefinitionTransaction}
      />
    )
  }

  if (transaction.type === TransactionType.MOSAIC_SUPPLY_CHANGE) {
    return (
      <MosaicSupplyChangeCard
        transaction={transaction as MosaicSupplyChangeTransaction}
      />
    )
  }

  if (transaction.type === TransactionType.MOSAIC_SUPPLY_REVOCATION) {
    return (
      <MosaicRevocationCard
        transaction={transaction as MosaicSupplyRevocationTransaction}
      />
    )
  }

  return (
    <Center>
      <Typography text="Can not preview this Transaction." fontSize={20} />
    </Center>
  )
}

export default TransactionCard

const Center = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})
