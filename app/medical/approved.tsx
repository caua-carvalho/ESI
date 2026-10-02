import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { MedicalApprovedScreen } from '@/pages/Medical'

export default function MedicalApprovedRoute() {
  const { nav } = useAppNavigation()
  return <MedicalApprovedScreen nav={nav} />
}
