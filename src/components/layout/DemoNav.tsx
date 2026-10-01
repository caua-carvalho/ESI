import { useState } from 'react'
import { C } from '@/constants/theme'
import { REQUESTS, NOTIFS } from '@/data'
import type { Screen, NavigateFunction } from '@/types'

export interface DemoNavProps {
  nav: NavigateFunction
}

export function DemoNav({ nav }: DemoNavProps) {
  const [open, setOpen] = useState(false)
  const screens: { label: string; screen: Screen; params?: Record<string, unknown> }[] = [
    { label: 'Troca recebida',     screen: 'swap-received' },
    { label: 'Revisão de troca',   screen: 'review-swap' },
    { label: 'Troca enviada',      screen: 'swap-sent' },
    { label: 'Novo pernoite',      screen: 'new-overnight' },
    { label: 'Pernoite enviado',   screen: 'overnight-sent' },
    { label: 'Novo atestado',      screen: 'new-medical' },
    { label: 'Atestado enviado',   screen: 'medical-sent' },
    { label: 'Atestado aprovado',  screen: 'medical-approved' },
    { label: 'Atestado recusado',  screen: 'medical-rejected' },
    { label: 'Detalhe solicitação', screen: 'request-detail', params: { req: REQUESTS[0] } },
    { label: 'Detalhe aviso',      screen: 'notification-detail', params: { n: NOTIFS[0] } },
    { label: 'Reserva',            screen: 'reserve-convocation' },
    { label: 'Loading state',      screen: 'state-loading' },
    { label: 'Error state',        screen: 'state-error' },
    { label: 'Empty state',        screen: 'state-empty' },
    { label: 'Sem permissão',      screen: 'state-no-permission' },
  ]

  return (
    <div style={{ position: 'absolute', bottom: 90, right: 12, zIndex: 200 }}>
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            right: 0,
            width: 200,
            background: C.elevated,
            borderRadius: 14,
            border: `1px solid ${C.borderMed}`,
            padding: '8px 0',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            maxHeight: 340,
            overflowY: 'auto',
          }}
        >
          {screens.map(s => (
            <button
              key={s.screen + s.label}
              onClick={() => {
                nav(s.screen, s.params)
                setOpen(false)
              }}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '9px 14px',
                textAlign: 'left',
                fontSize: 13,
                color: C.text2,
                cursor: 'pointer',
              }}
              className="tap"
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        className="tap"
        style={{
          background: C.elevated,
          border: `1px solid ${C.borderMed}`,
          borderRadius: 20,
          padding: '6px 12px',
          fontSize: 12,
          color: C.text3,
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
        }}
      >
        {open ? '✕ fechar' : '⊞ telas'}
      </button>
    </div>
  )
}
