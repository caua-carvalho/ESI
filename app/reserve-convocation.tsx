import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { ReserveConvocationScreen } from '@/pages/Notifications'

export default function ReserveConvocationRoute() {
  const { nav, goBack } = useAppNavigation()
  return <ReserveConvocationScreen goBack={goBack} nav={nav} />
}
