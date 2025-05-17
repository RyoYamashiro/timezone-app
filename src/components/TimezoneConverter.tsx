"use client"
import TimezoneForm from './TimezoneForm'
import ConversionResult from './ConversionResult'
import MapView from './MapView'
import { useState } from 'react'
import { DateTime } from 'luxon'

export default function TimezoneConverter() {
  const [target, setTarget] = useState<'Vancouver' | 'Tokyo'>('Vancouver')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [result, setResult] = useState<null | {
    tokyoTime: DateTime
    vancouverTime: DateTime
    diff: number
  }>(null)

  const handleConvert = () => {
    if (!date || !time) return

    const fromZone = target === 'Vancouver' ? 'Asia/Tokyo' : 'America/Vancouver'
    const toZone = target === 'Vancouver' ? 'America/Vancouver' : 'Asia/Tokyo'

    const inputDateTime = DateTime.fromISO(`${date}T${time}`, {
      zone: fromZone,
    })

    const tokyoTime = inputDateTime.setZone('Asia/Tokyo')
    const vancouverTime = inputDateTime.setZone('America/Vancouver')
    const diff = (tokyoTime.offset - vancouverTime.offset) / 60

    setResult({ tokyoTime, vancouverTime, diff })
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">今、バンクーバー何時？</h1>
      <TimezoneForm {...{ target, setTarget, date, setDate, time, setTime, handleConvert }} />
      {result && (
        <>
          <ConversionResult {...{ result }} />
          <MapView {...{ result }} />
        </>
      )}
    </div>
  )
}
