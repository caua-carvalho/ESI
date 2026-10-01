import { C } from '@/constants/theme'
import { Icon } from '@/components/ui'
import { NOTIFS } from '@/data'
import type { NavigateFunction } from '@/types'

export interface NotificationsScreenProps {
  nav: NavigateFunction
}

export function NotificationsScreen({ nav }: NotificationsScreenProps) {
  const groups = {
    'Hoje':       NOTIFS.filter(n => n.day === 'today'),
    'Ontem':      NOTIFS.filter(n => n.day === 'yesterday'),
    'Anteriores': NOTIFS.filter(n => n.day === 'earlier'),
  }

  const notifIcon: Record<string, string> = {
    'swap-received':      'swap',
    'overnight-approved': 'moon',
    'swap-approved':      'check',
    'medical-approved':   'medical',
    'reserve':            'warning',
    'schedule-update':    'calendar',
  }

  const notifColor: Record<string, string> = {
    'swap-received':      C.blue,
    'overnight-approved': C.green,
    'swap-approved':      C.green,
    'medical-approved':   C.green,
    'reserve':            C.amber,
    'schedule-update':    C.text2,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <div style={{ padding: '52px 20px 14px' }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: C.text, letterSpacing: '-0.02em' }}>Avisos</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 36px' }}>
        {Object.entries(groups).map(([title, items]) =>
          items.length === 0 ? null : (
            <div key={title} style={{ marginBottom: 20 }}>
              <div
                style={{
                  fontSize: 11,
                  color: C.text3,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: 8,
                  paddingLeft: 2,
                }}
              >
                {title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {items.map(n => (
                  <div
                    key={n.id}
                    className="tap"
                    onClick={() => (n.type === 'reserve' ? nav('reserve-convocation') : nav('notification-detail', { n }))}
                    style={{
                      background: C.surface2,
                      borderRadius: 14,
                      padding: '11px 13px',
                      border: `1px solid ${n.read ? C.border : C.borderMed}`,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 11,
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                  >
                    {!n.read && (
                      <div
                        style={{
                          position: 'absolute',
                          left: 8,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: 5,
                          height: 5,
                          borderRadius: 3,
                          background: C.blue,
                        }}
                      />
                    )}
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 11,
                        background: C.surface3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginLeft: n.read ? 0 : 8,
                      }}
                    >
                      <Icon name={notifIcon[n.type] ?? 'bell'} size={17} color={notifColor[n.type] ?? C.text2} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 }}>
                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: n.read ? 400 : 600,
                            color: C.text,
                            flex: 1,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {n.title}
                        </div>
                        <div style={{ fontSize: 11, color: C.text3, flexShrink: 0, marginLeft: 8 }}>{n.time}</div>
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: C.text3,
                          lineHeight: 1.4,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {n.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}
export default NotificationsScreen
export * from './NotificationDetailScreen'
export * from './ReserveConvocationScreen'
