import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { NoPermissionScreen } from '@/pages/FeedbackStates'

export default function NoPermissionRoute() {
  const { goBack } = useAppNavigation()
  return <NoPermissionScreen goBack={goBack} />
}
