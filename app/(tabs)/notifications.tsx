import React from 'react'
import { View } from 'react-native'
import { NotificationsScreen } from '@/pages/Notifications'
import { DemoNav } from '@/components/layout'
import { useAppNavigation } from '@/navigation/navigate'

export default function NotificationsRoute() {
  const { nav } = useAppNavigation()
  return (
    <View style={{ flex: 1 }}>
      <NotificationsScreen nav={nav} />
      <DemoNav nav={nav} />
    </View>
  )
}
