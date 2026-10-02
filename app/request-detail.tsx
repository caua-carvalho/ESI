import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useAppNavigation } from '@/navigation/navigate'
import { RequestDetailScreen } from '@/pages/Requests'
import type { RequestItem } from '@/types'

export default function RequestDetailRoute() {
  const { goBack } = useAppNavigation()
  const params = useLocalSearchParams<{ req?: string }>()
  const req: RequestItem | undefined = params.req
    ? JSON.parse(params.req as string)
    : undefined

  return <RequestDetailScreen goBack={goBack} req={req} />
}
