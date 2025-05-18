'use client'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
    target: 'Vancouver' | 'Tokyo'
    setTarget: (value: 'Vancouver' | 'Tokyo') => void
    date: string
    setDate: (value: string) => void
    time: string
    setTime: (value: string) => void
    handleConvert: () => void
}

export default function TimezoneForm({ target, setTarget, date, setDate, time, setTime, handleConvert }: Props) {
    const { t } = useTranslation('common')

    useEffect(() => {
        const now = new Date()
        const dateStr = now.toISOString().split('T')[0]
      
        const timeStr = now
          .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          .padStart(5, '0') // 例: '09:05'
      
        setDate(dateStr)
        setTime(timeStr)
    }, [])
    
    const handleNowClick = () => {
        const now = new Date()
      
        const dateStr = now.toISOString().split('T')[0]
      
        const timeStr = now
          .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          .padStart(5, '0') // 例: '09:05'
      
        setDate(dateStr)
        setTime(timeStr)
    }

    return (
        <div className="w-full max-w-md bg-white rounded-lg shadow p-6 space-y-4">
        <div>
            <label className="block mb-1 text-left">
                { t('selectLabel') }
            </label>
            <select
            className="w-full border rounded px-3 py-2"
            value={target}
            onChange={(e) => setTarget(e.target.value as 'Vancouver' | 'Tokyo')}
            >
            <option value="Vancouver">
                { t('optionVancouver') }
            </option>
            <option value="Tokyo">
                { t('optionJapan') }
            </option>
            </select>
        </div>

        <div>
            <label className="block mb-1">
                { t('labelDate') }
            </label>
            <input
            type="date"
            className="w-full border rounded px-3 py-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
        </div>

        <div>
            <label className="block mb-1">
                { t('labelTime') }
            </label>
            <input
                type="time"
                className="w-full border rounded px-3 py-2"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <div className="text-right mt-1">
                <button
                type="button"
                onClick={handleNowClick}
                className="text-sm text-blue-600 hover:underline"
                >
                { t('currentTime') }
                </button>
            </div>
        </div>
        

        <button
            onClick={handleConvert}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded"
        >
            {t('convert')}
        </button>
        </div>
    )
}
  