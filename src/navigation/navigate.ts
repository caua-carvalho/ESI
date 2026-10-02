import { useRouter } from 'expo-router'
import { useCallback } from 'react'
import type { Screen, NavigateFunction } from '@/types'

export function useAppNavigation(): { nav: NavigateFunction; goBack: () => void } {
  const router = useRouter()

  const nav: NavigateFunction = useCallback((screen: Screen, params?: Record<string, unknown>) => {
    switch (screen) {
      case 'home':
        router.navigate('/(tabs)' as any)
        break
      case 'schedule':
        router.navigate('/(tabs)/schedule' as any)
        break
      case 'requests':
        router.navigate('/(tabs)/requests' as any)
        break
      case 'notifications':
        router.navigate('/(tabs)/notifications' as any)
        break
      case 'profile':
        router.navigate('/(tabs)/profile' as any)
        break
      case 'service-detail':
        router.push({
          pathname: '/service-detail' as any,
          params: params?.svc ? { svc: JSON.stringify(params.svc) } : undefined,
        })
        break
      case 'new-swap':
        router.push('/swap/new' as any)
        break
      case 'select-colleague':
        router.push('/swap/select-colleague' as any)
        break
      case 'review-swap':
        router.push('/swap/review' as any)
        break
      case 'swap-sent':
        router.push('/swap/sent' as any)
        break
      case 'swap-received':
        router.push('/swap/received' as any)
        break
      case 'new-overnight':
        router.push('/overnight/new' as any)
        break
      case 'overnight-sent':
        router.push('/overnight/sent' as any)
        break
      case 'new-medical':
        router.push('/medical/new' as any)
        break
      case 'medical-sent':
        router.push('/medical/sent' as any)
        break
      case 'medical-approved':
        router.push('/medical/approved' as any)
        break
      case 'medical-rejected':
        router.push('/medical/rejected' as any)
        break
      case 'request-detail':
        router.push({
          pathname: '/request-detail' as any,
          params: params?.req ? { req: JSON.stringify(params.req) } : undefined,
        })
        break
      case 'notification-detail':
        router.push({
          pathname: '/notification-detail' as any,
          params: params?.n ? { notif: JSON.stringify(params.n) } : undefined,
        })
        break
      case 'reserve-convocation':
        router.push('/reserve-convocation' as any)
        break
      case 'settings':
        router.push('/settings' as any)
        break
      case 'login':
        router.push('/login' as any)
        break
      case 'state-loading':
        router.push('/feedback/loading' as any)
        break
      case 'state-error':
        router.push('/feedback/error' as any)
        break
      case 'state-empty':
        router.push('/feedback/empty' as any)
        break
      case 'state-no-permission':
        router.push('/feedback/no-permission' as any)
        break
      default:
        break
    }
  }, [router])

  const goBack = useCallback(() => {
    if (router.canGoBack()) {
      router.back()
    } else {
      router.replace('/(tabs)' as any)
    }
  }, [router])

  return { nav, goBack }
}
