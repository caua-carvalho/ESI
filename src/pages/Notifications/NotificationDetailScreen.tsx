import { C } from '@/constants/theme'
import { AppBar, Card, PrimaryBtn } from '@/components/ui'
import { NOTIFS } from '@/data'
import type { NotificationItem, NavigateFunction, GoBackFunction } from '@/types'

export interface NotificationDetailScreenProps {
  goBack: GoBackFunction
  nav: NavigateFunction
  notif?: NotificationItem
}

export function NotificationDetailScreen({ goBack, nav, notif }: NotificationDetailScreenProps) {
  const n = notif ?? NOTIFS[0]

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Aviso" onBack={goBack} />
      <div style={{ padding: '0 20px 36px' }}>
        <div style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 11, color: C.text3, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Hoje · {n.time}
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: C.text, lineHeight: 1.3 }}>{n.title}</div>
        </div>
        <Card style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 15, color: C.text2, lineHeight: 1.6 }}>{n.body}</div>
        </Card>
        <PrimaryBtn label="Ver na escala" onClick={() => nav('schedule')} />
      </div>
    </div>
  )
}
export default NotificationDetailScreen
