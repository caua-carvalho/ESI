import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { MedicalRejectedScreen } from '@/pages/Medical'

export default function MedicalRejectedRoute() {
  const { goBack } = useAppNavigation()
  return <MedicalRejectedScreen goBack={goBack} />
}
