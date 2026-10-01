import { useState, useCallback } from 'react'
import { C } from '@/constants/theme'
import { TabBar, DemoNav } from '@/components/layout'
import {
  LoginScreen,
  HomeScreen,
  ScheduleScreen,
  ServiceDetailSheet,
  NewSwapScreen,
  SelectColleagueScreen,
  ReviewSwapScreen,
  SwapSentScreen,
  SwapReceivedScreen,
  NewOvernightScreen,
  OvernightSentScreen,
  NewMedicalScreen,
  MedicalSentScreen,
  MedicalApprovedScreen,
  MedicalRejectedScreen,
  RequestsScreen,
  RequestDetailScreen,
  NotificationsScreen,
  NotificationDetailScreen,
  ReserveConvocationScreen,
  ProfileScreen,
  SettingsScreen,
  LoadingStateScreen,
  ErrorStateScreen,
  EmptyStateScreen,
  NoPermissionScreen,
} from '@/pages'
import { SERVICES, REQUESTS, NOTIFS } from '@/data'
import type { Screen, NavEntry, ServiceItem, RequestItem, NotificationItem } from '@/types'

export default function App() {
  const [loggedIn, setLoggedIn]   = useState(false)
  const [activeTab, setActiveTab] = useState<Screen>('home')
  const [stack, setStack]         = useState<NavEntry[]>([])

  const unread = NOTIFS.filter(n => !n.read).length

  const nav = useCallback((screen: Screen, params?: Record<string, unknown>) => {
    const tabScreens: Screen[] = ['home', 'schedule', 'requests', 'notifications', 'profile']
    if (tabScreens.includes(screen)) {
      setActiveTab(screen)
      setStack([])
    } else {
      setStack(prev => [...prev, { screen, params: params ?? {} }])
    }
  }, [])

  const goBack = useCallback(() => {
    setStack(prev => prev.slice(0, -1))
  }, [])

  const top = stack[stack.length - 1]
  const p   = top?.params ?? {}

  const TAB_SCREENS: Record<string, React.ReactNode> = {
    home:          <HomeScreen nav={nav} />,
    schedule:      <ScheduleScreen nav={nav} />,
    requests:      <RequestsScreen nav={nav} />,
    notifications: <NotificationsScreen nav={nav} />,
    profile:       <ProfileScreen nav={nav} />,
  }

  function renderModal(entry: NavEntry): React.ReactNode {
    const mp = entry.params ?? {}
    switch (entry.screen) {
      case 'new-swap':            return <NewSwapScreen nav={nav} goBack={goBack} />
      case 'select-colleague':    return <SelectColleagueScreen nav={nav} goBack={goBack} />
      case 'review-swap':         return <ReviewSwapScreen nav={nav} goBack={goBack} />
      case 'swap-sent':           return <SwapSentScreen nav={nav} goBack={goBack} />
      case 'swap-received':       return <SwapReceivedScreen nav={nav} goBack={goBack} />
      case 'new-overnight':       return <NewOvernightScreen nav={nav} goBack={goBack} />
      case 'overnight-sent':      return <OvernightSentScreen nav={nav} goBack={goBack} />
      case 'new-medical':         return <NewMedicalScreen nav={nav} goBack={goBack} />
      case 'medical-sent':        return <MedicalSentScreen nav={nav} />
      case 'medical-approved':    return <MedicalApprovedScreen nav={nav} />
      case 'medical-rejected':    return <MedicalRejectedScreen goBack={goBack} />
      case 'request-detail':      return <RequestDetailScreen goBack={goBack} req={(mp.req as RequestItem) ?? REQUESTS[0]} />
      case 'notification-detail': return <NotificationDetailScreen goBack={goBack} nav={nav} notif={(mp.n as NotificationItem) ?? NOTIFS[0]} />
      case 'reserve-convocation': return <ReserveConvocationScreen goBack={goBack} nav={nav} />
      case 'settings':            return <SettingsScreen goBack={goBack} onLogout={() => { setLoggedIn(false); setStack([]) }} />
      case 'state-loading':       return <LoadingStateScreen goBack={goBack} />
      case 'state-error':         return <ErrorStateScreen goBack={goBack} />
      case 'state-empty':         return <EmptyStateScreen goBack={goBack} />
      case 'state-no-permission': return <NoPermissionScreen goBack={goBack} />
      default: return null
    }
  }

  const isSheet    = top?.screen === 'service-detail'
  const hasOverlay = stack.length > 0 && !isSheet

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#040609' }}>
      <div
        style={{
          width: '100%',
          maxWidth: 430,
          height: '100vh',
          background: C.bg,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          borderLeft: '1px solid rgba(255,255,255,0.04)',
          borderRight: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        {!loggedIn ? (
          <LoginScreen onLogin={() => setLoggedIn(true)} />
        ) : (
          <>
            {/* Tab content */}
            <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {TAB_SCREENS[activeTab]}
            </div>

            {/* Tab bar (visible when no full-screen overlay) */}
            {!hasOverlay && (
              <TabBar active={activeTab} onSelect={s => { setActiveTab(s); setStack([]) }} badge={unread} />
            )}

            {/* Full-screen overlay screens */}
            {hasOverlay && (
              <div style={{ position: 'absolute', inset: 0, background: C.bg, display: 'flex', flexDirection: 'column', zIndex: 40 }}>
                {renderModal(top!)}
              </div>
            )}

            {/* Service detail bottom sheet */}
            {isSheet && (
              <ServiceDetailSheet
                svc={(p.svc as ServiceItem) ?? SERVICES[0]}
                nav={nav}
                goBack={goBack}
              />
            )}

            {/* Demo navigator */}
            {!hasOverlay && <DemoNav nav={nav} />}
          </>
        )}
      </div>
    </div>
  )
}
