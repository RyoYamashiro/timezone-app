import { DateTime } from 'luxon'
import { useTranslation } from 'react-i18next'

export default function ConversionResult({ result }: { result: { tokyoTime: DateTime, vancouverTime: DateTime, diff: number } }) {
  const { t, i18n } = useTranslation('common')
  const locale = i18n.language
  const { tokyoTime, vancouverTime, diff } = result

  return (
    <div className="mt-8 w-full max-w-md text-center">
      <p className="text-base mb-2 font-medium">
        {t('mapTokyo')}：{tokyoTime.setLocale(locale).toLocaleString(DateTime.DATETIME_MED)}
      </p>
      <p className="text-base mb-2 font-medium">
        {t('mapVancouver')}：{vancouverTime.setLocale(locale).toLocaleString(DateTime.DATETIME_MED)}
      </p>
      <p className="text-lg font-bold mt-2">
        {t('diff')}：{Math.abs(diff)} {t('hours')}（{diff > 0 ? t('japanAhead') : t('vancouverAhead')}）
      </p>
    </div>
  )
}