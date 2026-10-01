import { C } from '@/constants/theme'
import { Icon, SecondaryBtn } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface NoPermissionScreenProps {
  goBack: GoBackFunction
}

export function NoPermissionScreen({ goBack }: NoPermissionScreenProps) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 40px' }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          background: C.surface3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        <Icon name="lock" size={30} color={C.text3} />
      </div>
      <div style={{ fontSize: 18, fontWeight: 600, color: C.text, marginBottom: 8, textAlign: 'center' }}>
        Sem permissão
      </div>
      <div style={{ fontSize: 14, color: C.text3, marginBottom: 32, textAlign: 'center', lineHeight: 1.5 }}>
        Você não possui permissão para visualizar este conteúdo.
      </div>
      <SecondaryBtn label="Voltar" onClick={goBack} />
    </div>
  )
}
export default NoPermissionScreen
