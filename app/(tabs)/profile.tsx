import React from 'react'
import { View } from 'react-native'
import { ProfileScreen } from '@/pages/Profile'
import { DemoNav } from '@/components/layout'
import { useAppNavigation } from '@/navigation/navigate'

export default function ProfileRoute() {
  const { nav } = useAppNavigation()
  return (
    <View style={{ flex: 1 }}>
      <ProfileScreen nav={nav} />
      <DemoNav nav={nav} />
    </View>
  )
}
