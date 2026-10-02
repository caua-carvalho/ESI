import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useAppNavigation } from '@/navigation/navigate'
import { ServiceDetailSheet } from '@/pages/ServiceDetail'
import type { ServiceItem } from '@/types'

export default function ServiceDetailRoute() {
  const { nav, goBack } = useAppNavigation()
  const params = useLocalSearchParams<{ svc?: string }>()
  const svc: ServiceItem = params.svc
    ? JSON.parse(params.svc as string)
    : null

  if (!svc) return null

  return <ServiceDetailSheet svc={svc} nav={nav} goBack={goBack} />
}
