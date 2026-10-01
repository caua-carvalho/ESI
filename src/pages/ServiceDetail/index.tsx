import { C, codeColor } from '@/constants/theme'
import { StatusBadge, PrimaryBtn, SecondaryBtn } from '@/components/ui'
import type { ServiceItem, NavigateFunction, GoBackFunction } from '@/types'

export interface ServiceDetailSheetProps {
  svc: ServiceItem
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function ServiceDetailSheet({ svc, nav, goBack }: ServiceDetailSheetProps) {
  const cl = codeColor(svc.code)

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(0,0,0,0.72)',
        display: 'flex',
        alignItems: 'flex-end',
        zIndex: 50,
      }}
      onClick={goBack}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: C.surface,
          borderRadius: '24px 24px 0 0',
          width: '100%',
          paddingBottom: 40,
          border: `1px solid ${C.border}`,
          maxHeight: '85%',
          overflowY: 'auto',
        }}
      >
        <div style={{ width: 36, height: 4, borderRadius: 2, background: C.border, margin: '12px auto 20px' }} />
        <div style={{ padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: C.text2 }}>Serviço</div>
            <StatusBadge status={svc.status} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: cl.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${cl.fg}28`,
              }}
            >
              <span style={{ fontFamily: '"JetBrains Mono",monospace', fontSize: 16, fontWeight: 700, color: cl.fg }}>
                {svc.code}
              </span>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: C.text }}>{svc.post}</div>
              <div style={{ fontSize: 14, color: C.text2 }}>{svc.period}</div>
            </div>
          </div>
          <div style={{ height: 1, background: C.border, marginBottom: 18 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            {[
              { l: 'Data',    v: '28 de setembro' },
              { l: 'Período', v: svc.period },
              { l: 'Horário', v: `${svc.start} — ${svc.end}` },
              { l: 'Posto',   v: svc.post },
            ].map(item => (
              <div key={item.l}>
                <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                  {item.l}
                </div>
                <div style={{ fontSize: 15, fontWeight: 500, color: C.text }}>{item.v}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <PrimaryBtn label="Solicitar troca" onClick={() => { goBack(); nav('new-swap') }} />
            <SecondaryBtn label="Fechar" onClick={goBack} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServiceDetailSheet
