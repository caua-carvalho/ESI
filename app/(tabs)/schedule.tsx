import React from 'react'
import { View } from 'react-native'
import { ScheduleScreen } from '@/pages/Schedule'
import { DemoNav } from '@/components/layout'
import { useAppNavigation } from '@/navigation/navigate'

export default function ScheduleRoute() {
  const { nav } = useAppNavigation()
  return (
    <View style={{ flex: 1 }}>
      <ScheduleScreen nav={nav} />
      <DemoNav nav={nav} />
    </View>
  )
}
