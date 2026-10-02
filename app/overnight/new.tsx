import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { NewOvernightScreen } from '@/pages/Overnight'

export default function NewOvernightRoute() {
  const { nav, goBack } = useAppNavigation()
  return <NewOvernightScreen nav={nav} goBack={goBack} />
}
