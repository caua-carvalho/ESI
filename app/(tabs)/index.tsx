import React from 'react'
import { View } from 'react-native'
import { HomeScreen } from '@/pages/Home'
import { DemoNav } from '@/components/layout'
import { useAppNavigation } from '@/navigation/navigate'

export default function HomeRoute() {
  const { nav } = useAppNavigation()
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen nav={nav} />
      <DemoNav nav={nav} />
    </View>
  )
}
