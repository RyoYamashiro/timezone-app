'use client'

import { useTranslation } from 'react-i18next'
import clsx from 'clsx'


export default function LanguageSwitcher() {
    const { i18n } = useTranslation()

    return (
        <div className="fixed top-4 right-4 z-50 bg-white/80 px-3 py-1 rounded-full shadow">
        <button
            onClick={() => i18n.changeLanguage('ja')}
            className={clsx(
                'mx-1 transition',
                i18n.language === 'ja' ? 'font-bold underline' : 'text-gray-500'
            )}
        >
            日本語
        </button>
        <span>/</span>
        <button
            onClick={() => i18n.changeLanguage('en')}
            className={clsx(
                'mx-1 transition',
                i18n.language === 'en' ? 'font-bold underline' : 'text-gray-500'
            )}
        >
            EN
        </button>
        </div>
    )
}