import type { Preview } from '@storybook/react-vite'

// Storybook環境でchrome.runtime.getManifestをモック
if (typeof window !== 'undefined') {
  if (!('chrome' in window)) {
    // @ts-ignore
    window.chrome = {}
  }
  if (!('runtime' in window.chrome)) {
    // @ts-ignore
    window.chrome.runtime = {}
  }
  if (typeof window.chrome.runtime.getManifest !== 'function') {
    // @ts-ignore
    window.chrome.runtime.getManifest = () => ({})
  }
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
