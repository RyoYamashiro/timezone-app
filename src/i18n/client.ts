import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './settings'

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) =>
      import(`../locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: 'ja',
    supportedLngs: ['ja', 'en'],
    fallbackLng: 'ja',
    react: { useSuspense: false },
  })

export default i18n