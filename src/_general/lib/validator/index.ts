import { RefObject } from 'react'

import { decrypt } from '../Crypto/index.js'
import { Account, NetworkType } from 'symbol-sdk'

const ADDRESS_PATTERN = /[A-Z0-9]{39}/
const PRIKEY_PATTERN = /[A-F0-9]{64}/

export const validateRef = (
  ref: RefObject<HTMLInputElement>,
  f?: (s: string) => string,
): string => {
  if (ref === null || ref.current === null) return ''
  if (f === undefined) return ref.current.value
  return f(ref.current.value)
}

export const validateAddress = (address: string): string => {
  if (
    address.trim().toUpperCase().replace(/-/g, '').length === 39 &&
    ADDRESS_PATTERN.test(address.trim().toUpperCase().replace(/-/g, ''))
  ) {
    return address
  }
  return ''
}

export const validatePrivateKey = (priKey: string): string => {
  if (priKey.length === 64 && PRIKEY_PATTERN.test(priKey.toUpperCase())) {
    return priKey
  }
  return ''
}

export const checkPassword = (
  encryptedPrivateKey: string,
  pass: string,
  address: string,
): boolean => {
  try {
    const priKey = decrypt(encryptedPrivateKey, pass)
    const netType =
      address.charAt(0) === 'T' ? NetworkType.TEST_NET : NetworkType.MAIN_NET

    const addr = Account.createFromPrivateKey(priKey, netType).address.plain()

    return addr === address
  } catch (e) {
    console.error(e)
    return false
  }
}
