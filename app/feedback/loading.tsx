import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { LoadingStateScreen } from '@/pages/FeedbackStates'

export default function LoadingRoute() {
  const { goBack } = useAppNavigation()
  return <LoadingStateScreen goBack={goBack} />
}
