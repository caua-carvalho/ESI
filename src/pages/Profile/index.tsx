import { C } from '@/constants/theme'
import { Card, Icon } from '@/components/ui'
import { USER } from '@/data'
import type { Screen, NavigateFunction } from '@/types'

export interface ProfileScreenProps {
  nav: NavigateFunction
}

export function ProfileScreen({ nav }: ProfileScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <div style={{ padding: '52px 20px 22px' }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: C.text, letterSpacing: '-0.02em', marginBottom: 22 }}>Perfil</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 36,
              background: `linear-gradient(135deg,${C.surface3},${C.elevated})`,
              border: `2px solid ${C.borderMed}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ fontSize: 12, fontFamily: '"JetBrains Mono",monospace', fontWeight: 700, color: C.green }}>{USER.rank}</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.text }}>{USER.warName.slice(0, 3)}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: C.text3, fontFamily: '"JetBrains Mono",monospace', letterSpacing: '0.07em' }}>{USER.rank}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: C.text, letterSpacing: '-0.01em' }}>{USER.warName}</div>
            <div style={{ fontSize: 14, color: C.text2 }}>{USER.company}</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 20px 36px' }}>
        <Card style={{ marginBottom: 14 }}>
          <div style={{ fontSize: 11, color: C.text3, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
            Dados pessoais
          </div>
          {[
            ['Patente',       USER.rank],
            ['Nome de guerra', USER.warName],
            ['Turma',         USER.classYear],
            ['Antiguidade',   String(USER.seniority)],
            ['Companhia',     USER.company],
            ['Esquadrilha',   USER.squadron],
          ].map(([l, v], i) => (
            <div
              key={l}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
                borderTop: i > 0 ? `1px solid ${C.border}` : 'none',
              }}
            >
              <div style={{ fontSize: 14, color: C.text2 }}>{l}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: C.text }}>{v}</div>
            </div>
          ))}
        </Card>
        {[
          { label: 'Configurações',         icon: 'settings', screen: 'settings' },
        ].map(item => (
          <div
            key={item.label}
            className="tap"
            onClick={() => nav(item.screen as Screen)}
            style={{
              background: C.surface2,
              borderRadius: 14,
              padding: '13px 16px',
              border: `1px solid ${C.border}`,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 10,
              cursor: 'pointer',
            }}
          >
            <div style={{ width: 36, height: 36, borderRadius: 10, background: C.surface3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={item.icon} size={18} color={C.text2} />
            </div>
            <div style={{ flex: 1, fontSize: 15, color: C.text }}>{item.label}</div>
            <Icon name="chevR" size={18} color={C.text3} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProfileScreen
export * from './SettingsScreen'
