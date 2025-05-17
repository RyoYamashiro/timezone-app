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
    return (
        <div className="w-full max-w-md bg-white rounded-lg shadow p-6 space-y-4">
        <div>
            <label className="block mb-1">どちらの時間を知りたい？</label>
            <select
            className="w-full border rounded px-3 py-2"
            value={target}
            onChange={(e) => setTarget(e.target.value as 'Vancouver' | 'Tokyo')}
            >
            <option value="Vancouver">バンクーバー（＝変換元：日本）</option>
            <option value="Tokyo">日本（＝変換元：バンクーバー）</option>
            </select>
        </div>

        <div>
            <label className="block mb-1">日付</label>
            <input
            type="date"
            className="w-full border rounded px-3 py-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
        </div>

        <div>
            <label className="block mb-1">時刻</label>
            <input
            type="time"
            className="w-full border rounded px-3 py-2"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            />
        </div>

        <button
            onClick={handleConvert}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded"
        >
            変換
        </button>
        </div>
    )
}
  