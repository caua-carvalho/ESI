import { C } from '@/constants/theme'
import { Icon, StatusBadge, TimelineStep, Card, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction } from '@/types'

export interface MedicalSentScreenProps {
  nav: NavigateFunction
}

export function MedicalSentScreen({ nav }: MedicalSentScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 40px' }}>
      <div style={{ paddingTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
            background: C.surface3,
            border: `2px solid ${C.borderMed}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Icon name="medical" size={34} color={C.blue} />
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 10 }}>Atestado enviado</div>
        <StatusBadge status="pending-section" />
      </div>
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 13, color: C.text2, fontWeight: 500, marginBottom: 14 }}>Status</div>
        <TimelineStep label="Rascunho"         time="28/09"        status="done"    />
        <TimelineStep label="Enviado"           time="28/09 · 09:25" status="done"  />
        <TimelineStep label="Aguardando Seção"                      status="current" />
        <TimelineStep label="Análise concluída"                     status="pending" />
      </div>
      <Card style={{ marginBottom: 24 }}>
        {[
          { l: 'Período',           v: '28/09 a 30/09' },
          { l: 'Serviços afetados', v: '3 serviços' },
          { l: 'Data de envio',     v: '28/09 · 09:25' },
        ].map((it, i) => (
          <div key={it.l} style={{ padding: '9px 0', borderTop: i > 0 ? `1px solid ${C.border}` : 'none' }}>
            <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>{it.l}</div>
            <div style={{ fontSize: 14, color: C.text }}>{it.v}</div>
          </div>
        ))}
      </Card>
      <PrimaryBtn label="Voltar para solicitações" onClick={() => nav('requests')} />
    </div>
  )
}
export default MedicalSentScreen
