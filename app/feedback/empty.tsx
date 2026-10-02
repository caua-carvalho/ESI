import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { EmptyStateScreen } from '@/pages/FeedbackStates'

export default function EmptyRoute() {
  const { goBack } = useAppNavigation()
  return <EmptyStateScreen goBack={goBack} />
}
