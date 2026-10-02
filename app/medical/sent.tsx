import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { MedicalSentScreen } from '@/pages/Medical'

export default function MedicalSentRoute() {
  const { nav } = useAppNavigation()
  return <MedicalSentScreen nav={nav} />
}
