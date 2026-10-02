import React from 'react'
import { useRouter } from 'expo-router'
import { useAppNavigation } from '@/navigation/navigate'
import { SettingsScreen } from '@/pages/Profile'

export default function SettingsRoute() {
  const { goBack } = useAppNavigation()
  const router = useRouter()
  return (
    <SettingsScreen
      goBack={goBack}
      onLogout={() => router.replace('/login' as any)}
    />
  )
}
