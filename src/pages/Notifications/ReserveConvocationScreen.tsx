import { C } from '@/constants/theme'
import { AppBar, Icon, Card, CodeChip, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface ReserveConvocationScreenProps {
  goBack: GoBackFunction
  nav: NavigateFunction
}

export function ReserveConvocationScreen({ goBack, nav }: ReserveConvocationScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Convocação como reserva" onBack={goBack} />
      <div style={{ padding: '0 20px 36px' }}>
        <div
          style={{
            background: C.amberBg,
            borderRadius: 14,
            padding: '13px 15px',
            border: `1px solid ${C.amber}20`,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 22,
          }}
        >
          <Icon name="warning" size={20} color={C.amber} />
          <div style={{ fontSize: 14, fontWeight: 600, color: C.amber }}>Você foi convocado como reserva.</div>
        </div>
        <Card style={{ marginBottom: 14 }}>
          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 24, fontWeight: 700, color: C.text, marginBottom: 3 }}>30 de setembro</div>
            <div style={{ fontSize: 15, color: C.text2 }}>Posto Alfa</div>
          </div>
          <div style={{ height: 1, background: C.border, marginBottom: 14 }} />
          <div style={{ display: 'flex', gap: 24 }}>
            <div>
              <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Horário</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.text, fontFamily: '"JetBrains Mono",monospace' }}>06:00 — 12:00</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 5 }}>Código</div>
              <CodeChip code="UCA" size="md" />
            </div>
          </div>
        </Card>
        <div style={{ background: C.surface3, borderRadius: 12, padding: '11px 14px', marginBottom: 22 }}>
          <div style={{ fontSize: 13, color: C.text3, lineHeight: 1.5 }}>
            Este serviço foi atribuído a você após a necessidade de substituição de um titular.
          </div>
        </div>
        <PrimaryBtn label="Ver escala atualizada" onClick={() => nav('schedule')} />
      </div>
    </div>
  )
}
export default ReserveConvocationScreen
