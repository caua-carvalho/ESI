import React from 'react'
import { View } from 'react-native'
import { RequestsScreen } from '@/pages/Requests'
import { DemoNav } from '@/components/layout'
import { useAppNavigation } from '@/navigation/navigate'

export default function RequestsRoute() {
  const { nav } = useAppNavigation()
  return (
    <View style={{ flex: 1 }}>
      <RequestsScreen nav={nav} />
      <DemoNav nav={nav} />
    </View>
  )
}
