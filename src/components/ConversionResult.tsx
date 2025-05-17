import { DateTime } from 'luxon';

export default function ConversionResult({ result }: { result: { tokyoTime: DateTime, vancouverTime: DateTime, diff: number } }) {
  const { tokyoTime, vancouverTime, diff } = result

  return (
    <div className="mt-8 w-full max-w-md text-center">
      <p className="text-base mb-2 font-medium">日本：{tokyoTime.toFormat('yyyy年M月d日 HH:mm')}</p>
      <p className="text-base mb-2 font-medium">バンクーバー：{vancouverTime.toFormat('yyyy年M月d日 HH:mm')}</p>
      <p className="text-lg font-bold mt-2">時差：{Math.abs(diff)} 時間（{diff > 0 ? '日本が進んでる' : 'バンクーバーが進んでる'}）</p>
    </div>
  )
}