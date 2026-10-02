import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { SwapReceivedScreen } from '@/pages/Swap'

export default function SwapReceivedRoute() {
  const { nav, goBack } = useAppNavigation()
  return <SwapReceivedScreen nav={nav} goBack={goBack} />
}
