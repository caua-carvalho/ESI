import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { NewMedicalScreen } from '@/pages/Medical'

export default function NewMedicalRoute() {
  const { nav, goBack } = useAppNavigation()
  return <NewMedicalScreen nav={nav} goBack={goBack} />
}
