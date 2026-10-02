import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { NewSwapScreen } from '@/pages/Swap'

export default function NewSwapRoute() {
  const { nav, goBack } = useAppNavigation()
  return <NewSwapScreen nav={nav} goBack={goBack} />
}
