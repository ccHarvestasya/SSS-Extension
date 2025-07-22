import React, { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import Typography from '../../Typography/index.js'
import {
  NamespaceId,
  NamespaceService,
  RepositoryFactoryHttp,
  UnresolvedAddress,
} from 'symbol-sdk'

import { useAtom } from 'jotai'
import { networkAtom } from '../../../utils/Atom.js'

export type Props = {
  address: UnresolvedAddress
}

const TxAddress: React.FC<Props> = ({ address }) => {
  const [network] = useAtom(networkAtom)
  const [addr, setAddr] = useState('')
  useEffect(() => {
    if (address instanceof NamespaceId) {
      const url = network
      if (!url) {
        setAddr('Network URL Not Set')
        return
      }
      try {
        const rep = new RepositoryFactoryHttp(url)
        const nsRep = rep.createNamespaceRepository()
        const nsService = new NamespaceService(nsRep)
        const nsId = NamespaceId.createFromEncoded(address.toHex())
        nsService.namespace(nsId).subscribe(
          (x) => {
            setAddr(x.name)
          },
          () => {
            setAddr('NameSpace Not Found')
          }
        )
      } catch {
        setAddr('Invalid Network URL')
      }
    } else {
      setAddr(address.plain())
    }
  }, [address, network])
  return (
    <Wrapper>
      <Typography
        text={address instanceof NamespaceId ? 'NameSpace' : 'Address'}
        fontSize={24}
      />
      <Center>
        <Typography text={addr} fontSize={20} />
      </Center>
    </Wrapper>
  )
}

export default TxAddress

const Wrapper = styled('div')({})

const Center = styled('div')({
  display: 'flex',
  justifyContent: 'center',
})
