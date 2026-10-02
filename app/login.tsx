import React from 'react'
import { useRouter } from 'expo-router'
import { LoginScreen } from '@/pages/Login'

export default function LoginRoute() {
  const router = useRouter()
  return (
    <LoginScreen
      onLogin={() => router.replace('/(tabs)' as any)}
    />
  )
}
