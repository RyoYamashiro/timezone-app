'use client'

import { useTranslation } from 'react-i18next'

export default function PageContent() {
  const { t, i18n } = useTranslation('common')

  return (
    <main className="p-6 text-center" key={i18n.language}>
      <h1 className="text-3xl font-bold mb-6">
        {t('title')}
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        {t('description')}
      </p>
    </main>
  )
}