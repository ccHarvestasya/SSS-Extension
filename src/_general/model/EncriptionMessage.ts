export interface IEncryptionMessage {
  message: string
  pubkey: string
}

export class EncryptionMessage implements IEncryptionMessage {
  constructor(
    public message: string,
    public pubkey: string,
  ) {}

  public getEncryptionMessage(): IEncryptionMessage {
    return {
      message: this.message,
      pubkey: this.pubkey,
    }
  }
}