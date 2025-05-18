'use client'

import { DateTime } from 'luxon'
import { useTranslation } from 'react-i18next'

export default function MapView({ result }: { result: { tokyoTime: DateTime, vancouverTime: DateTime } }) {
  const { t, i18n } = useTranslation('common')
  const locale = i18n.language

  const formattedTokyo = result.tokyoTime.setLocale(locale).toLocaleString(DateTime.DATETIME_MED)
  const formattedVancouver = result.vancouverTime.setLocale(locale).toLocaleString(DateTime.DATETIME_MED)

  return (
    <div className="mt-6 relative w-full max-w-md h-48 bg-blue-50 rounded overflow-hidden">
      <img src="/world-map.png" alt="World Map" className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute left-[14%] top-[40%] text-sm text-blue-900 font-semibold text-center">
        {t('mapVancouver')}<br />
        {formattedVancouver}
      </div>

      <div className="absolute left-[77%] top-[42%] text-sm text-red-900 font-semibold text-center">
        {t('mapTokyo')}<br />
        {formattedTokyo}
      </div>
    </div>
  )
}