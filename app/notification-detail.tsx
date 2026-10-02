import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useAppNavigation } from '@/navigation/navigate'
import { NotificationDetailScreen } from '@/pages/Notifications'
import type { NotificationItem } from '@/types'

export default function NotificationDetailRoute() {
  const { nav, goBack } = useAppNavigation()
  const params = useLocalSearchParams<{ notif?: string }>()
  const notif: NotificationItem | undefined = params.notif
    ? JSON.parse(params.notif as string)
    : undefined

  return <NotificationDetailScreen goBack={goBack} nav={nav} notif={notif} />
}
