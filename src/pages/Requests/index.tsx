import { useState } from 'react'
import { C } from '@/constants/theme'
import { Segmented, Icon } from '@/components/ui'
import { REQUESTS } from '@/data'
import type { Screen, NavigateFunction } from '@/types'

export interface RequestsScreenProps {
  nav: NavigateFunction
}

export function RequestsScreen({ nav }: RequestsScreenProps) {
  const [filter, setFilter] = useState('Todas')
  const pending = ['pending-colleague', 'pending-sergeant', 'pending-section']
  const done    = ['approved', 'rejected', 'completed']

  const filtered = REQUESTS.filter(r =>
    filter === 'Todas' ? true : filter === 'Pendentes' ? pending.includes(r.status) : done.includes(r.status)
  )

  const icons: Record<string, string> = { swap: 'swap', overnight: 'moon', medical: 'medical' }
  const statusLabel: Record<string, string> = {
    'pending-colleague': 'Aguardando colega',
    'pending-sergeant':  'Aguardando sargento',
    'pending-section':   'Aguardando Seção',
    'approved':          'Aprovado',
    'rejected':          'Recusado',
    'completed':         'Concluído',
  }
  const statusColor: Record<string, string> = {
    'pending-colleague': C.amber,
    'pending-sergeant':  C.amber,
    'pending-section':   C.amber,
    'approved':          C.green,
    'rejected':          C.red,
    'completed':         C.green,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <div style={{ padding: '52px 20px 0' }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: C.text, letterSpacing: '-0.02em', marginBottom: 16 }}>
          Solicitações
        </div>
        <div style={{ marginBottom: 14 }}>
          <Segmented options={['Todas', 'Pendentes', 'Concluídas']} value={filter} onChange={setFilter} />
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 20px 32px' }}>
        {filtered.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '56px 24px', gap: 12 }}>
            <Icon name="doc" size={44} color={C.text3} />
            <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>Nenhuma solicitação</div>
            <div style={{ fontSize: 14, color: C.text3, textAlign: 'center', lineHeight: 1.5 }}>
              Você não possui solicitações nesta categoria.
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {filtered.map(req => (
              <div
                key={req.id}
                className="tap"
                onClick={() => nav('request-detail', { req })}
                style={{
                  background: C.surface2,
                  borderRadius: 14,
                  padding: '14px 16px',
                  border: `1px solid ${C.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  cursor: 'pointer',
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 12, background: C.surface3, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={icons[req.type]} size={19} color={C.text2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 2 }}>{req.title}</div>
                  <div style={{ fontSize: 12, color: C.text3 }}>{req.date}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: 3, background: statusColor[req.status] ?? C.gray, flexShrink: 0 }} />
                  <div style={{ fontSize: 12, color: C.text3, textAlign: 'right', maxWidth: 110 }}>
                    {statusLabel[req.status] ?? req.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Quick actions */}
        <div>
          <div style={{ fontSize: 11, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 10 }}>
            Nova solicitação
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { label: 'Trocar serviço', icon: 'swap',    screen: 'new-swap' },
              { label: 'Pernoite',       icon: 'moon',    screen: 'new-overnight' },
              { label: 'Atestado',       icon: 'medical', screen: 'new-medical' },
            ].map(a => (
              <button
                key={a.label}
                className="tap"
                onClick={() => nav(a.screen as Screen)}
                style={{
                  flex: 1,
                  background: C.surface2,
                  border: `1px solid ${C.border}`,
                  borderRadius: 12,
                  padding: '12px 6px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                }}
              >
                <Icon name={a.icon} size={20} color={C.green} />
                <div style={{ fontSize: 11, color: C.text2, textAlign: 'center' }}>{a.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default RequestsScreen
export * from './RequestDetailScreen'
