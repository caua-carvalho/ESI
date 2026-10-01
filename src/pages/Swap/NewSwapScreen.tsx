import { useState } from 'react'
import { C, codeColor } from '@/constants/theme'
import { AppBar, CodeChip, PrimaryBtn } from '@/components/ui'
import { SERVICES } from '@/data'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface NewSwapScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function NewSwapScreen({ nav, goBack }: NewSwapScreenProps) {
  const [sel, setSel] = useState<string | null>(null)
  const eligible = SERVICES.filter(s => ['29/09', '30/09', '01/10'].includes(s.date))

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Trocar serviço" onBack={goBack} />
      <div style={{ padding: '0 20px 36px' }}>
        <div style={{ fontSize: 14, color: C.text2, marginBottom: 18, lineHeight: 1.5 }}>
          Escolha um serviço futuro para solicitar a troca.
        </div>
        <div style={{ fontSize: 11, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
          1 · Meu serviço
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {eligible.map(svc => {
            const active = sel === svc.id
            const cl = codeColor(svc.code)
            return (
              <div
                key={svc.id}
                className="tap"
                onClick={() => setSel(svc.id)}
                style={{
                  background: active ? cl.bg : C.surface2,
                  borderRadius: 14,
                  padding: '14px 16px',
                  border: `1px solid ${active ? cl.fg + '40' : C.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <div>
                  <div style={{ fontSize: 11, color: C.text3, marginBottom: 4, fontFamily: '"JetBrains Mono",monospace' }}>
                    {svc.full} · {svc.period.toUpperCase()}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CodeChip code={svc.code} />
                    <div style={{ fontSize: 13, color: C.text2 }}>{svc.post}</div>
                  </div>
                </div>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 11,
                    border: `2px solid ${active ? cl.fg : C.border}`,
                    background: active ? cl.fg : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {active && <div style={{ width: 8, height: 8, borderRadius: 4, background: '#fff' }} />}
                </div>
              </div>
            )
          })}
        </div>
        <PrimaryBtn label="Escolher colega →" onClick={() => nav('select-colleague', { svcId: sel })} disabled={!sel} />
      </div>
    </div>
  )
}
export default NewSwapScreen
