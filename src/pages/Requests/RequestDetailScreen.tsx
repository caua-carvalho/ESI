import { C } from '@/constants/theme'
import { AppBar, Card, StatusBadge, TimelineStep } from '@/components/ui'
import { REQUESTS } from '@/data'
import type { RequestItem, GoBackFunction } from '@/types'

export interface RequestDetailScreenProps {
  goBack: GoBackFunction
  req?: RequestItem
}

export function RequestDetailScreen({ goBack, req }: RequestDetailScreenProps) {
  const r = req ?? REQUESTS[0]
  const isDone = ['approved', 'rejected', 'completed'].includes(r.status)

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Detalhes" onBack={goBack} />
      <div style={{ padding: '0 20px 36px' }}>
        <Card style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Tipo</div>
              <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>{r.title}</div>
            </div>
            <StatusBadge status={r.status} />
          </div>
          {[
            { l: 'Criado em',    v: '28/09 · 08:30' },
            { l: 'Atualizado em', v: '28/09 · 09:02' },
          ].map(it => (
            <div key={it.l} style={{ padding: '8px 0', borderTop: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 10, color: C.text3, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>{it.l}</div>
              <div style={{ fontSize: 13, color: C.text }}>{it.v}</div>
            </div>
          ))}
        </Card>
        <div style={{ fontSize: 13, color: C.text2, fontWeight: 500, marginBottom: 14 }}>Histórico</div>
        <TimelineStep label="Solicitado"         time="28/09 · 08:30" status="done"                         />
        <TimelineStep label="Aguardando colega"  time="28/09 · 08:31" status="done"                         />
        <TimelineStep label="Aceito pelo colega" time="28/09 · 09:02" status={isDone ? 'done' : 'current'}  />
        <TimelineStep label="Concluído"                               status={isDone ? 'done' : 'pending'}  />
        {r.status === 'rejected' && (
          <div style={{ background: C.redBg, borderRadius: 12, padding: '11px 14px', marginTop: 8 }}>
            <div style={{ fontSize: 11, color: C.text3, marginBottom: 4 }}>Motivo da recusa</div>
            <div style={{ fontSize: 13, color: C.text2 }}>Serviços conflitantes na escala.</div>
          </div>
        )}
      </div>
    </div>
  )
}
export default RequestDetailScreen
