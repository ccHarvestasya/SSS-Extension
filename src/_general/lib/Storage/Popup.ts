import { getStorage, setStorage } from './index.js'

export const getPopup = (): Promise<number> => {
  return new Promise((resolve) => {
    getStorage('popup').then((popup) => {
      resolve(popup as number)
    })
  })
}

export const setPopup = (popup: number) => {
  setStorage({ popup })
}

export const removePopup = () => {
  setStorage({
    popup: null,
  })
}
