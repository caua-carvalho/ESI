import { C } from '@/constants/theme'
import { Icon, StatusBadge, Card, SecondaryBtn } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface MedicalRejectedScreenProps {
  goBack: GoBackFunction
}

export function MedicalRejectedScreen({ goBack }: MedicalRejectedScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 40px' }}>
      <div style={{ paddingTop: 60, display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
            background: C.redBg,
            border: `2px solid ${C.red}28`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <Icon name="x" size={36} color={C.red} />
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 10 }}>Atestado recusado</div>
        <StatusBadge status="rejected" />
      </div>
      <Card style={{ marginBottom: 20 }}>
        <div style={{ padding: '0 0 12px', borderBottom: `1px solid ${C.border}`, marginBottom: 12 }}>
          <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
            Motivo da recusa
          </div>
          <div style={{ fontSize: 14, color: C.text2, lineHeight: 1.5 }}>
            O documento apresentado não possui assinatura e carimbo do médico responsável. Reenvie o atestado com as informações completas.
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 3 }}>
            Data da decisão
          </div>
          <div style={{ fontSize: 14, color: C.text }}>28/09 · 14:30</div>
        </div>
      </Card>
      <SecondaryBtn label="Voltar" onClick={goBack} />
    </div>
  )
}
export default MedicalRejectedScreen
