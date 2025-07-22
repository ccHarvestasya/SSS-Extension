import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { Address } from 'symbol-sdk'

import { getActiveAccountV2, Setting } from '../../../_general/lib/Storage/index.js'
import { ExtensionAccount } from '../../../_general/model/ExtensionAccount.js'
import TransactionHistory from './TransactionHistory/index.js'
interface Props {
  reload: () => void
  update: Date
  setting: Setting
}

const Options: React.FC<Props> = ({ setting }) => {
  const [activeAccount, setActiveAccount] =
    useState<ExtensionAccount | null>(null)
  useEffect(() => {
    getActiveAccountV2(setting.networkType).then((acc) => {
      const account = ExtensionAccount.createExtensionAccount(acc)
      setActiveAccount(account)
    })
  }, [setting.networkType])

  if (activeAccount === null) {
    return <></>
  }

  return (
    <Root>
      <TransactionHistory
        address={Address.createFromRawAddress(
          activeAccount.address
        )}></TransactionHistory>
    </Root>
  )
}

export default Options

const Root = styled('div')({
  minWidth: '60vw',
  width: '1400px',
  marginTop: '48px',
  marginBottom: '32px',
  marginLeft: '8px',
})
