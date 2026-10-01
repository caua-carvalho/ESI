import { useState } from 'react'
import { C } from '@/constants/theme'
import { AppBar, Icon, Avatar, CodeChip, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface SelectColleagueScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function SelectColleagueScreen({ nav, goBack }: SelectColleagueScreenProps) {
  const [search, setSearch] = useState('')
  const [sel, setSel] = useState<string | null>(null)

  const colleagues = [
    { id: 'oliveira', rank: 'S2', name: 'OLIVEIRA', code: 'UCA',  dateLabel: '30 SET · MANHÃ' },
    { id: 'costa',    rank: 'S2', name: 'COSTA',    code: 'IEAV', dateLabel: '01 OUT · TARDE' },
    { id: 'martins',  rank: 'S1', name: 'MARTINS',  code: 'PP',   dateLabel: '29 SET · TARDE' },
    { id: 'almeida',  rank: 'S2', name: 'ALMEIDA',  code: 'TACF', dateLabel: '02 OUT · MANHÃ' },
  ]

  const filtered = colleagues.filter(c => !search || c.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Escolher colega" onBack={goBack} />
      <div style={{ padding: '0 20px 36px' }}>
        <div style={{ fontSize: 11, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
          2 · Selecione o colega
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            background: C.surface2,
            borderRadius: 12,
            padding: '10px 14px',
            gap: 8,
            border: `1px solid ${C.border}`,
            marginBottom: 12,
          }}
        >
          <Icon name="search" size={16} color={C.text3} />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar militar"
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', fontSize: 14, color: C.text }}
          />
        </div>
        <div
          style={{
            background: C.surface3,
            borderRadius: 8,
            padding: '7px 11px',
            display: 'flex',
            gap: 6,
            alignItems: 'center',
            marginBottom: 14,
          }}
        >
          <Icon name="info" size={13} color={C.text3} />
          <div style={{ fontSize: 12, color: C.text3 }}>Trocas realizadas dentro da mesma companhia.</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
          {filtered.map(c => {
            const active = sel === c.id
            return (
              <div
                key={c.id}
                className="tap"
                onClick={() => setSel(c.id)}
                style={{
                  background: active ? C.greenBg : C.surface2,
                  borderRadius: 14,
                  padding: '14px 16px',
                  border: `1px solid ${active ? C.green + '40' : C.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  cursor: 'pointer',
                }}
              >
                <Avatar rank={c.rank} initials={c.name.slice(0, 3)} size={44} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 2 }}>
                    {c.rank} {c.name}
                  </div>
                  <div style={{ fontSize: 12, color: C.text2 }}>2ª Companhia</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                    <CodeChip code={c.code} size="xs" />
                    <div style={{ fontSize: 11, color: C.text3 }}>{c.dateLabel}</div>
                  </div>
                </div>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: 11,
                    border: `2px solid ${active ? C.green : C.border}`,
                    background: active ? C.green : 'transparent',
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
        <PrimaryBtn label="Revisar troca →" onClick={() => nav('review-swap', { colleagueId: sel })} disabled={!sel} />
      </div>
    </div>
  )
}
export default SelectColleagueScreen
