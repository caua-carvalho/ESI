import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { SwapSentScreen } from '@/pages/Swap'

export default function SwapSentRoute() {
  const { nav, goBack } = useAppNavigation()
  return <SwapSentScreen nav={nav} goBack={goBack} />
}
