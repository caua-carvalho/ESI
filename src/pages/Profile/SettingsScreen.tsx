import { useState } from 'react'
import { C } from '@/constants/theme'
import { AppBar, SwitchToggle, Icon } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface SettingsScreenProps {
  goBack: GoBackFunction
  onLogout: () => void
}

export function SettingsScreen({ goBack, onLogout }: SettingsScreenProps) {
  const [sw, setSw] = useState({ swaps: true, schedule: true, requests: true, reserve: true })
  const toggle = (k: keyof typeof sw) => setSw(prev => ({ ...prev, [k]: !prev[k] }))

  function Row({
    label,
    value,
    onToggle,
    isDestructive,
  }: {
    label: string
    value?: boolean
    onToggle?: () => void
    isDestructive?: boolean
  }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '13px 16px', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ fontSize: 15, color: isDestructive ? C.red : C.text }}>{label}</div>
        {onToggle !== undefined && value !== undefined ? (
          <SwitchToggle value={value} onChange={onToggle} />
        ) : (
          !isDestructive && <Icon name="chevR" size={17} color={C.text3} />
        )}
      </div>
    )
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Configurações" onBack={goBack} />
      <div style={{ padding: '0 20px 40px' }}>
        {[
          { title: 'Conta', rows: [{ label: 'Alterar senha' }] },
        ].map(s => (
          <div key={s.title} style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 11, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8, paddingLeft: 2 }}>
              {s.title}
            </div>
            <div style={{ background: C.surface2, borderRadius: 14, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
              {s.rows.map(r => <Row key={r.label} label={r.label} />)}
            </div>
          </div>
        ))}

        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8, paddingLeft: 2 }}>
            Notificações
          </div>
          <div style={{ background: C.surface2, borderRadius: 14, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
            <Row label="Notificações de troca"        value={sw.swaps}    onToggle={() => toggle('swaps')}    />
            <Row label="Notificações de escala"       value={sw.schedule} onToggle={() => toggle('schedule')} />
            <Row label="Notificações de solicitações" value={sw.requests} onToggle={() => toggle('requests')} />
            <Row label="Notificações de reserva"      value={sw.reserve}  onToggle={() => toggle('reserve')}  />
          </div>
        </div>

        <div style={{ marginBottom: 22 }}>
          <div style={{ fontSize: 11, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8, paddingLeft: 2 }}>
            Aplicativo
          </div>
          <div style={{ background: C.surface2, borderRadius: 14, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
            <Row label="Termos de uso" />
            <Row label="Privacidade" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '13px 16px' }}>
              <div style={{ fontSize: 15, color: C.text }}>Sobre o Escala ESI</div>
              <div style={{ fontSize: 14, color: C.text3 }}>v1.0.0</div>
            </div>
          </div>
        </div>

        <div
          className="tap"
          onClick={onLogout}
          style={{
            background: C.redBg,
            borderRadius: 14,
            padding: '14px',
            border: `1px solid rgba(220,84,84,0.18)`,
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 600, color: C.red }}>Sair</div>
        </div>
      </div>
    </div>
  )
}
export default SettingsScreen
