import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { ReviewSwapScreen } from '@/pages/Swap'

export default function ReviewSwapRoute() {
  const { nav, goBack } = useAppNavigation()
  return <ReviewSwapScreen nav={nav} goBack={goBack} />
}
