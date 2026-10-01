import { C } from '@/constants/theme'
import { Icon, StatusBadge, Card, Avatar, CodeChip, TimelineStep, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface SwapSentScreenProps {
  nav: NavigateFunction
  goBack?: GoBackFunction
}

export function SwapSentScreen({ nav }: SwapSentScreenProps) {
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
        <div style={{ fontSize: 22, fontWeight: 700, color: C.text, marginBottom: 10, letterSpacing: '-0.01em' }}>
          Solicitação enviada
        </div>
        <StatusBadge status="pending-colleague" />
      </div>
      <Card style={{ marginBottom: 20 }}>
        {[
          { rank: 'S2', init: 'SIL', name: 'S2 SILVA',    code: 'SSV', label: '28 SET · TARDE' },
          { rank: 'S2', init: 'OLI', name: 'S2 OLIVEIRA', code: 'UCA', label: '30 SET · MANHÃ' },
        ].map((m, i) => (
          <div
            key={m.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderTop: i > 0 ? `1px solid ${C.border}` : 'none',
            }}
          >
            <Avatar rank={m.rank} initials={m.init} size={40} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{m.name}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                <CodeChip code={m.code} size="xs" />
                <div style={{ fontSize: 12, color: C.text2 }}>{m.label}</div>
              </div>
            </div>
          </div>
        ))}
      </Card>
      <div style={{ marginBottom: 30 }}>
        <div style={{ fontSize: 13, color: C.text2, fontWeight: 500, marginBottom: 14 }}>Status da solicitação</div>
        <TimelineStep label="Você enviou"              time="28/09 · 09:15" status="done"    />
        <TimelineStep label="Aguardando colega"                             status="current" />
        <TimelineStep label="Aprovação do sargento"                         status="pending" />
        <TimelineStep label="Concluída"                                     status="pending" />
      </div>
      <PrimaryBtn label="Voltar para solicitações" onClick={() => nav('requests')} />
    </div>
  )
}
export default SwapSentScreen
