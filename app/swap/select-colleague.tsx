import React from 'react'
import { useAppNavigation } from '@/navigation/navigate'
import { SelectColleagueScreen } from '@/pages/Swap'

export default function SelectColleagueRoute() {
  const { nav, goBack } = useAppNavigation()
  return <SelectColleagueScreen nav={nav} goBack={goBack} />
}
