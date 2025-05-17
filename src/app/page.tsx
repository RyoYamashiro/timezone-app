'use client'
import Head from 'next/head'
import TimezoneConverter from '@/components/TimezoneConverter';
import { useTranslation } from 'react-i18next'
import PageContent from '@/components/PageContent';

export default function HomePage() {
  const { t } = useTranslation('common')

  return (
    <main className="min-h-screen bg-[#fefaf6] px-4 pt-6 pb-16 text-gray-800">
      <TimezoneConverter />
    </main>
  )
}
