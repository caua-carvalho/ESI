import { C } from '@/constants/theme'
import { Icon, StatusBadge, Card, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction } from '@/types'

export interface MedicalApprovedScreenProps {
  nav: NavigateFunction
}

export function MedicalApprovedScreen({ nav }: MedicalApprovedScreenProps) {
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
          <Icon name="check" size={36} color={C.green} />
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 10 }}>Atestado aprovado</div>
        <StatusBadge status="approved" />
      </div>
      <Card style={{ marginBottom: 14 }}>
        {[
          { l: 'Período',          v: '28/09 a 30/09' },
          { l: 'Tipo de dispensa', v: 'Somente serviço' },
          { l: 'Aprovado em',      v: '28/09 · 14:30' },
        ].map((it, i) => (
          <div key={it.l} style={{ padding: '9px 0', borderTop: i > 0 ? `1px solid ${C.border}` : 'none' }}>
            <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>{it.l}</div>
            <div style={{ fontSize: 14, color: C.text }}>{it.v}</div>
          </div>
        ))}
      </Card>
      <div style={{ background: C.greenBg, borderRadius: 12, padding: '11px 14px', display: 'flex', gap: 8, alignItems: 'center', marginBottom: 22 }}>
        <Icon name="check" size={15} color={C.green} />
        <div style={{ fontSize: 13, color: C.text2 }}>Os serviços afetados foram atualizados automaticamente.</div>
      </div>
      <PrimaryBtn label="Ver minha escala" onClick={() => nav('schedule')} />
    </div>
  )
}
export default MedicalApprovedScreen
