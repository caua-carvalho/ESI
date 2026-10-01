import { useState } from 'react'
import { C } from '@/constants/theme'
import { Icon, CodeChip } from '@/components/ui'
import { GLOBAL_SCH } from '@/data'

export function GlobalSched() {
  const [search, setSearch] = useState('')
  const DCOLS = ['SEG M', 'SEG T', 'TER M', 'TER T', 'QUA M', 'SEX M', 'DOM M']
  const filtered = GLOBAL_SCH.filter(m => !search || m.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ padding: '0 20px 10px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: C.surface2,
            borderRadius: 12,
            padding: '10px 14px',
            gap: 8,
            border: `1px solid ${C.border}`,
          }}
        >
          <Icon name="search" size={16} color={C.text3} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar militar"
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              fontSize: 14,
              color: C.text,
            }}
          />
        </div>
      </div>
      <div style={{ padding: '0 20px 8px' }}>
        <div style={{ background: C.surface3, borderRadius: 8, padding: '7px 11px', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Icon name="info" size={13} color={C.text3} />
          <div style={{ fontSize: 12, color: C.text3 }}>Apenas para consulta · Ausências: Indisponível</div>
        </div>
      </div>
      <div style={{ flex: 1, overflowX: 'auto', overflowY: 'auto' }}>
        <div style={{ minWidth: 600 }}>
          {/* Header */}
          <div
            style={{
              display: 'flex',
              padding: '0 20px',
              borderBottom: `1px solid ${C.border}`,
              position: 'sticky',
              top: 0,
              background: C.bg,
              zIndex: 10,
            }}
          >
            <div style={{ width: 110, flexShrink: 0, padding: '9px 0', fontSize: 10, color: C.text3, fontWeight: 700 }}>
              MILITAR
            </div>
            {DCOLS.map(h => (
              <div key={h} style={{ flex: 1, padding: '9px 4px', fontSize: 10, color: C.text3, fontWeight: 700, textAlign: 'center', minWidth: 60 }}>
                {h}
              </div>
            ))}
          </div>
          {filtered.map((m, mi) => (
            <div
              key={m.name}
              style={{
                display: 'flex',
                padding: '0 20px',
                borderBottom: `1px solid ${C.border}`,
                background: mi % 2 === 0 ? 'transparent' : `${C.surface}38`,
              }}
            >
              <div style={{ width: 110, flexShrink: 0, padding: '10px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    background: C.surface3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div style={{ fontSize: 9, fontFamily: '"JetBrains Mono",monospace', fontWeight: 700, color: C.green }}>
                    {m.rank}
                  </div>
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: C.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {m.name.split(' ')[1]}
                </div>
              </div>
              {m.svc.map((code, ci) => (
                <div key={ci} style={{ flex: 1, padding: '10px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 60 }}>
                  {code ? <CodeChip code={code} size="xs" /> : <div style={{ width: 5, height: 5, borderRadius: 3, background: C.surface3 }} />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
