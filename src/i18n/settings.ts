export const fallbackLng = 'ja'
export const languages = ['ja', 'en'] as const

export const defaultNS = 'common'

export function getOptions (lng = fallbackLng) {
  return {
    // fallbackの言語設定
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
  }
}