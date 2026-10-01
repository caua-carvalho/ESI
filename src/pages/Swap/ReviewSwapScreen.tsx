import { C } from '@/constants/theme'
import { AppBar, Card, Avatar, CodeChip, Icon, PrimaryBtn, SecondaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface ReviewSwapScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function ReviewSwapScreen({ nav, goBack }: ReviewSwapScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Revisar troca" onBack={goBack} />
      <div style={{ padding: '0 20px 36px' }}>
        <Card style={{ marginBottom: 14 }}>
          <div>
            <div style={{ fontSize: 10, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 9 }}>
              Você
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Avatar rank="S2" initials="SIL" size={40} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>S2 SILVA</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                  <CodeChip code="SSV" size="xs" />
                  <div style={{ fontSize: 12, color: C.text2 }}>28 SET · TARDE · Posto Bravo</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 0' }}>
            <div style={{ flex: 1, height: 1, background: C.border }} />
            <div style={{ background: C.surface3, borderRadius: 20, padding: '5px 12px', display: 'flex', alignItems: 'center', gap: 5 }}>
              <Icon name="swap" size={15} color={C.text3} />
              <div style={{ fontSize: 12, color: C.text3 }}>troca com</div>
            </div>
            <div style={{ flex: 1, height: 1, background: C.border }} />
          </div>
          <div>
            <div style={{ fontSize: 10, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 9 }}>
              Colega
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Avatar rank="S2" initials="OLI" size={40} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>S2 OLIVEIRA</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                  <CodeChip code="UCA" size="xs" />
                  <div style={{ fontSize: 12, color: C.text2 }}>30 SET · MANHÃ · Posto Alfa</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div style={{ background: C.amberBg, borderRadius: 14, padding: '13px 15px', border: `1px solid ${C.amber}20`, marginBottom: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <Icon name="info" size={15} color={C.amber} />
            <div style={{ fontSize: 13, fontWeight: 600, color: C.amber }}>Regras da troca</div>
          </div>
          <div style={{ fontSize: 13, color: C.text2, lineHeight: 1.5 }}>
            Esta troca precisará de <strong style={{ color: C.text }}>aprovação do sargento</strong> após o aceite, pois ocorre em menos de 7 dias.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryBtn label="Enviar solicitação" onClick={() => nav('swap-sent')} />
          <SecondaryBtn label="Cancelar" onClick={goBack} />
        </div>
      </div>
    </div>
  )
}
export default ReviewSwapScreen
