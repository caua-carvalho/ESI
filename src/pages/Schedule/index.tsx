import { useState } from 'react'
import { C } from '@/constants/theme'
import { Icon, Segmented } from '@/components/ui'
import { PersonalSched } from './components/PersonalSched'
import { GlobalSched } from './components/GlobalSched'
import type { NavigateFunction } from '@/types'

export interface ScheduleScreenProps {
  nav: NavigateFunction
}

export function ScheduleScreen({ nav }: ScheduleScreenProps) {
  const [mode, setMode] = useState('Pessoal')
  const [, setWeek] = useState(0)

  const days = [
    { label: 'SEG · 28 SET', date: '28/09', today: true },
    { label: 'TER · 29 SET', date: '29/09', today: false },
    { label: 'QUA · 30 SET', date: '30/09', today: false },
    { label: 'QUI · 01 OUT', date: '01/10', today: false },
    { label: 'SEX · 02 OUT', date: '02/10', today: false },
    { label: 'SAB · 03 OUT', date: '03/10', today: false },
    { label: 'DOM · 04 OUT', date: '04/10', today: false },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <div style={{ padding: '52px 20px 0' }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: C.text, letterSpacing: '-0.02em', marginBottom: 16 }}>
          Escala
        </div>
        {/* Week selector */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: C.surface2,
            borderRadius: 14,
            padding: '10px 16px',
            border: `1px solid ${C.border}`,
            marginBottom: 14,
          }}
        >
          <button className="tap" onClick={() => setWeek(w => w - 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <Icon name="chevL" size={20} color={C.text2} />
          </button>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>28 set — 04 out</div>
            <div style={{ fontSize: 11, color: C.text3 }}>Semana atual</div>
          </div>
          <button className="tap" onClick={() => setWeek(w => w + 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <Icon name="chevR" size={20} color={C.text2} />
          </button>
        </div>
        <div style={{ marginBottom: 14 }}>
          <Segmented options={['Pessoal', 'Global']} value={mode} onChange={setMode} />
        </div>
      </div>
      {mode === 'Pessoal' ? (
        <PersonalSched days={days} nav={nav} />
      ) : (
        <GlobalSched />
      )}
    </div>
  )
}
export default ScheduleScreen
export * from './components/PersonalSched'
export * from './components/GlobalSched'
