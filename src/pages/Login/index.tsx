import { useState } from 'react'
import { C } from '@/constants/theme'
import { Icon, Field, PrimaryBtn, SecondaryBtn } from '@/components/ui'

export interface LoginScreenProps {
  onLogin: () => void
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [rank, setRank]         = useState('')
  const [name, setName]         = useState('')
  const [cls, setCls]           = useState('')
  const [sen, setSen]           = useState('')
  const [pass, setPass]         = useState('')
  const [recovery, setRecovery] = useState(false)

  return (
    <div style={{ flex: 1, overflowY: 'auto', background: C.bg, padding: '60px 24px 40px', display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 48 }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 22,
            background: `linear-gradient(145deg,${C.surface2},${C.surface3})`,
            border: `1px solid ${C.borderMed}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            boxShadow: '0 8px 40px rgba(0,0,0,0.45)',
          }}
        >
          <Icon name="shield" size={36} color={C.green} />
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, color: C.text, letterSpacing: '-0.02em' }}>
          Escala ESI
        </div>
        <div style={{ fontSize: 14, color: C.text2, marginTop: 6 }}>
          Gestão de escala e serviços
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Field label="Patente" value={rank} onChange={setRank} placeholder="Ex: S2" />
        <Field label="Nome de guerra" value={name} onChange={setName} placeholder="SILVA" />
        <div style={{ display: 'flex', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <Field label="Turma" value={cls} onChange={setCls} placeholder="2024" />
          </div>
          <div style={{ flex: 1 }}>
            <Field label="Antiguidade" value={sen} onChange={setSen} placeholder="12" />
          </div>
        </div>
        <Field label="Senha" value={pass} onChange={setPass} type="password" placeholder="••••••••" />
        <div style={{ marginTop: 8 }}>
          <PrimaryBtn label="Entrar" onClick={onLogin} />
        </div>
        <button
          onClick={() => setRecovery(true)}
          className="tap"
          style={{
            background: 'none',
            border: 'none',
            color: C.text2,
            fontSize: 14,
            cursor: 'pointer',
            textAlign: 'center',
            padding: '8px 0',
          }}
        >
          Primeiro acesso / Esqueci a senha
        </button>
      </div>

      {/* Recovery bottom sheet */}
      {recovery && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.72)',
            display: 'flex',
            alignItems: 'flex-end',
            zIndex: 100,
          }}
          onClick={() => setRecovery(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: C.surface,
              borderRadius: '24px 24px 0 0',
              padding: '24px 24px 48px',
              width: '100%',
              border: `1px solid ${C.border}`,
            }}
          >
            <div style={{ width: 36, height: 4, borderRadius: 2, background: C.border, margin: '0 auto 24px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <Icon name="info" size={22} color={C.amber} />
              <div style={{ fontSize: 16, fontWeight: 600, color: C.text }}>
                Recuperação de acesso
              </div>
            </div>
            <div
              style={{
                background: C.surface2,
                borderRadius: 12,
                padding: '14px 16px',
                border: `1px solid ${C.border}`,
              }}
            >
              <div style={{ fontSize: 14, color: C.text2, lineHeight: 1.6 }}>
                Para recuperar seu acesso, procure a <strong style={{ color: C.text }}>Seção</strong>.
              </div>
            </div>
            <div style={{ marginTop: 18 }}>
              <SecondaryBtn label="Entendido" onClick={() => setRecovery(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default LoginScreen
