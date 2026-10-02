import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { ErrorStateScreen } from '@/pages/FeedbackStates'

export default function ErrorRoute() {
  const { goBack } = useAppNavigation()
  return <ErrorStateScreen goBack={goBack} />
}
