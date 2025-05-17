import { DateTime } from 'luxon'

export default function MapView({ result }: { result: { tokyoTime: DateTime, vancouverTime: DateTime } }) {
  const { tokyoTime, vancouverTime } = result

  return (
    <div className="mt-6 relative w-full max-w-md h-48 bg-blue-50 rounded overflow-hidden">
      <img src="/world-map.png" alt="World Map" className="absolute inset-0 w-full h-full object-cover" />

      <div className="absolute left-[14%] top-[40%] text-sm text-blue-900 font-semibold text-center">
        バンクーバー<br />
        {vancouverTime.toFormat('M月d日 HH:mm')}
      </div>

      <div className="absolute left-[77%] top-[42%] text-sm text-red-900 font-semibold text-center">
        東京<br />
        {tokyoTime.toFormat('M月d日 HH:mm')}
      </div>
    </div>
  )
}
