import { decryptPrivateKey, getEncryptedPrivateKey } from './core.js'
import crypto from 'crypto'

export const encrypt = (value: string, password: string) => {
  const iv = crypto.randomBytes(16)
  return getEncryptedPrivateKey(value, iv, password)
}

export const decrypt = (encryptedValue: string, password: string) => {
  return decryptPrivateKey(encryptedValue, password)
}
