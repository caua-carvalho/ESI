import { C } from '@/constants/theme'
import { Card, Icon, CodeChip } from '@/components/ui'
import { USER, SERVICES } from '@/data'
import type { Screen, NavigateFunction } from '@/types'

export interface HomeScreenProps {
  nav: NavigateFunction
}

export function HomeScreen({ nav }: HomeScreenProps) {
  const today = SERVICES.filter(s => s.date === '28/09')
  const next  = SERVICES.find(s => s.date === '29/09')

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      {/* Header */}
      <div style={{ padding: '52px 20px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 12, color: C.text3, fontFamily: '"JetBrains Mono",monospace', letterSpacing: '0.08em', marginBottom: 4 }}>
            {USER.rank} · {USER.warName}
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: C.text, letterSpacing: '-0.02em' }}>
            Bom dia
          </div>
          <div style={{ fontSize: 13, color: C.text2, marginTop: 2 }}>{USER.company}</div>
        </div>
        <button
          className="tap"
          onClick={() => nav('notifications')}
          style={{
            background: C.surface2,
            border: `1px solid ${C.border}`,
            borderRadius: 12,
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <Icon name="bell" size={20} color={C.text2} />
          <div
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              width: 7,
              height: 7,
              borderRadius: 4,
              background: C.red,
              border: `2px solid ${C.surface2}`,
            }}
          />
        </button>
      </div>

      <div style={{ padding: '0 20px 6px' }}>
        <div style={{ fontSize: 12, color: C.text3, fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Hoje · Segunda, 28 set
        </div>
      </div>

      {/* Today's schedule */}
      <div style={{ padding: '10px 20px', marginBottom: 4 }}>
        <Card>
          <div style={{ fontSize: 12, color: C.text2, fontWeight: 500, marginBottom: 12 }}>Minha escala hoje</div>
          {today.map((svc, i) => (
            <div
              key={svc.id}
              className="tap"
              onClick={() => nav('service-detail', { svc })}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderTop: i > 0 ? `1px solid ${C.border}` : 'none',
              }}
            >
              <div>
                <div style={{ fontSize: 10, color: C.text3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  {svc.period}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <CodeChip code={svc.code} size="xs" />
                  <div style={{ fontSize: 13, color: C.text2 }}>{svc.post}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.text, fontFamily: '"JetBrains Mono",monospace' }}>
                  {svc.start}
                </div>
                <div style={{ fontSize: 12, color: C.text3 }}>— {svc.end}</div>
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Phase + Next service */}
      <div style={{ padding: '0 20px', display: 'flex', gap: 10, marginBottom: 10 }}>
        <Card style={{ flex: 1 }}>
          <div style={{ fontSize: 10, color: C.text3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
            Fase
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: C.purple, flexShrink: 0 }} />
            <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>Missão</div>
          </div>
          <div style={{ fontSize: 11, color: C.text3, marginTop: 3 }}>2ª Companhia</div>
        </Card>
        <Card style={{ flex: 2 }} onClick={() => next && nav('service-detail', { svc: next })}>
          <div style={{ fontSize: 10, color: C.text3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>
            Próximo serviço
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
            <CodeChip code="DCTA" size="xs" />
            <div style={{ fontSize: 12, color: C.text2 }}>Posto Bravo</div>
          </div>
          <div style={{ fontSize: 12, color: C.text3 }}>Terça, 29 set · 06:00</div>
          <div style={{ marginTop: 6, fontSize: 11, color: C.amber, background: C.amberBg, borderRadius: 5, padding: '2px 7px', display: 'inline-block' }}>
            em 1 dia
          </div>
        </Card>
      </div>

      {/* Pendências */}
      <div style={{ padding: '0 20px', marginBottom: 10 }}>
        <Card onClick={() => nav('requests')}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ fontSize: 12, color: C.text2, fontWeight: 500 }}>Pendências</div>
            <Icon name="chevR" size={16} color={C.text3} />
          </div>
          {[
            { type: 'Troca',   status: 'Aguardando colega' },
            { type: 'Pernoite', status: 'Aguardando sargento' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 0', borderTop: i > 0 ? `1px solid ${C.border}` : 'none' }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: C.amber, flexShrink: 0 }} />
              <div style={{ fontSize: 14, color: C.text, fontWeight: 500 }}>{item.type}</div>
              <div style={{ fontSize: 14, color: C.text3 }}>· {item.status}</div>
            </div>
          ))}
        </Card>
      </div>

      {/* Quick actions */}
      <div style={{ padding: '0 20px', marginBottom: 36 }}>
        <div style={{ fontSize: 11, color: C.text3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>
          Ações rápidas
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {[
            { label: 'Trocar serviço',    icon: 'swap',    screen: 'new-swap' },
            { label: 'Solicitar pernoite', icon: 'moon',    screen: 'new-overnight' },
            { label: 'Enviar atestado',   icon: 'medical', screen: 'new-medical' },
          ].map(a => (
            <button
              key={a.label}
              className="tap"
              onClick={() => nav(a.screen as Screen)}
              style={{
                flex: 1,
                background: C.surface2,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
                padding: '14px 6px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 7,
                cursor: 'pointer',
              }}
            >
              <Icon name={a.icon} size={22} color={C.green} />
              <div style={{ fontSize: 11, color: C.text2, fontWeight: 500, textAlign: 'center', lineHeight: 1.3 }}>
                {a.label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default HomeScreen
