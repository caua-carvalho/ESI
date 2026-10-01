import { C } from '@/constants/theme'
import { Icon, StatusBadge, Card, TimelineStep, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface OvernightSentScreenProps {
  nav: NavigateFunction
  goBack?: GoBackFunction
}

export function OvernightSentScreen({ nav }: OvernightSentScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 40px' }}>
      <div style={{ paddingTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
            background: C.greenBg,
            border: `2px solid ${C.green}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Icon name="moon" size={34} color={C.green} />
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 10 }}>Pedido de pernoite</div>
        <StatusBadge status="pending-sergeant" />
      </div>
      <Card style={{ marginBottom: 24 }}>
        {[
          { l: 'Data',       v: '30 de setembro' },
          { l: 'Motivo',     v: 'Compromisso pessoal' },
          { l: 'Enviado em', v: '28/09 · 09:20' },
        ].map((it, i) => (
          <div key={it.l} style={{ padding: '10px 0', borderTop: i > 0 ? `1px solid ${C.border}` : 'none' }}>
            <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>{it.l}</div>
            <div style={{ fontSize: 14, color: C.text }}>{it.v}</div>
          </div>
        ))}
      </Card>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 13, color: C.text2, fontWeight: 500, marginBottom: 14 }}>Status</div>
        <TimelineStep label="Pedido enviado"      time="28/09 · 09:20" status="done"    />
        <TimelineStep label="Aguardando sargento"                      status="current" />
        <TimelineStep label="Decisão"                                  status="pending" />
      </div>
      <PrimaryBtn label="Voltar para solicitações" onClick={() => nav('requests')} />
    </div>
  )
}
export default OvernightSentScreen
