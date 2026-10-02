import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { OvernightSentScreen } from '@/pages/Overnight'

export default function OvernightSentRoute() {
  const { nav, goBack } = useAppNavigation()
  return <OvernightSentScreen nav={nav} goBack={goBack} />
}
