import { C, codeColor } from '@/constants/theme'
import { Card, Icon, CodeChip } from '@/components/ui'
import { SERVICES } from '@/data'
import type { NavigateFunction } from '@/types'

export interface PersonalSchedProps {
  days: { label: string; date: string; today: boolean }[]
  nav: NavigateFunction
}

export function PersonalSched({ days, nav }: PersonalSchedProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 36px' }}>
      {days.map(day => {
        const svcs = SERVICES.filter(s => s.date === day.date)
        return (
          <div key={day.date} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7, paddingLeft: 2 }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: day.today ? C.green : C.text3,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontFamily: '"JetBrains Mono",monospace',
                }}
              >
                {day.label}
              </div>
              {day.today && (
                <div style={{ fontSize: 9, color: C.green, background: C.greenBg, borderRadius: 4, padding: '2px 6px', fontWeight: 700 }}>
                  HOJE
                </div>
              )}
            </div>
            <Card style={{ padding: 0, overflow: 'hidden' }}>
              {svcs.length === 0 ? (
                <div style={{ padding: '13px 16px' }}>
                  <div style={{ fontSize: 13, color: C.text3 }}>Sem serviço</div>
                </div>
              ) : (
                svcs.map((svc, si) => (
                  <div
                    key={svc.id}
                    className="tap"
                    onClick={() => nav('service-detail', { svc })}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      borderTop: si > 0 ? `1px solid ${C.border}` : 'none',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 3, height: 32, borderRadius: 2, background: codeColor(svc.code).fg, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>
                          {svc.period}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <CodeChip code={svc.code} size="xs" />
                          <div style={{ fontSize: 13, color: C.text2 }}>{svc.post}</div>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: C.text, fontFamily: '"JetBrains Mono",monospace' }}>
                        {svc.start} — {svc.end}
                      </div>
                      <Icon name="chevR" size={16} color={C.text3} />
                    </div>
                  </div>
                ))
              )}
            </Card>
          </div>
        )
      })}
    </div>
  )
}
