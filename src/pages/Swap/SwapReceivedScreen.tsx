import { useState } from 'react'
import { C } from '@/constants/theme'
import { AppBar, Card, Avatar, CodeChip, PrimaryBtn, DestructiveBtn, SecondaryBtn, Textarea } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface SwapReceivedScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function SwapReceivedScreen({ nav, goBack }: SwapReceivedScreenProps) {
  const [showRefusal, setShowRefusal] = useState(false)
  const [reason, setReason] = useState('')

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Solicitação de troca" onBack={goBack} />
      <div style={{ padding: '0 20px 36px' }}>
        <div style={{ fontSize: 14, color: C.text2, marginBottom: 20, lineHeight: 1.5 }}>
          <strong style={{ color: C.text }}>S2 OLIVEIRA</strong> deseja trocar um serviço com você.
        </div>
        <Card style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 10, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>
            Serviço dele
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar rank="S2" initials="OLI" size={40} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>S2 OLIVEIRA</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                <CodeChip code="UCA" />
                <div style={{ fontSize: 13, color: C.text2 }}>30 SET · MANHÃ</div>
              </div>
              <div style={{ fontSize: 12, color: C.text3, marginTop: 2 }}>Posto Alfa · 06:00 — 12:00</div>
            </div>
          </div>
        </Card>
        <Card style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 10, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>
            Seu serviço
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Avatar rank="S2" initials="SIL" size={40} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>S2 SILVA</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                <CodeChip code="SSV" />
                <div style={{ fontSize: 13, color: C.text2 }}>28 SET · TARDE</div>
              </div>
              <div style={{ fontSize: 12, color: C.text3, marginTop: 2 }}>Posto Bravo · 14:00 — 18:00</div>
            </div>
          </div>
        </Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <PrimaryBtn label="Aceitar troca" onClick={() => nav('swap-sent')} />
          <DestructiveBtn label="Recusar" onClick={() => setShowRefusal(true)} />
        </div>
      </div>
      {showRefusal && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.72)',
            display: 'flex',
            alignItems: 'flex-end',
            zIndex: 100,
          }}
          onClick={() => setShowRefusal(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: C.surface,
              borderRadius: '24px 24px 0 0',
              padding: '24px 24px 48px',
              width: '100%',
              border: `1px solid ${C.border}`,
            }}
          >
            <div style={{ width: 36, height: 4, borderRadius: 2, background: C.border, margin: '0 auto 20px' }} />
            <div style={{ fontSize: 17, fontWeight: 600, color: C.text, marginBottom: 16 }}>Recusar troca?</div>
            <div style={{ marginBottom: 20 }}>
              <Textarea label="Motivo" value={reason} onChange={setReason} placeholder="Explique o motivo..." />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <DestructiveBtn
                label="Confirmar recusa"
                onClick={() => {
                  setShowRefusal(false)
                  goBack()
                }}
              />
              <SecondaryBtn label="Cancelar" onClick={() => setShowRefusal(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default SwapReceivedScreen
