import { C } from '@/constants/theme'
import { Icon, SecondaryBtn } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface EmptyStateScreenProps {
  goBack: GoBackFunction
}

export function EmptyStateScreen({ goBack }: EmptyStateScreenProps) {
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
        <Icon name="doc" size={32} color={C.text3} />
      </div>
      <div style={{ fontSize: 18, fontWeight: 600, color: C.text, marginBottom: 8, textAlign: 'center' }}>
        Nenhuma solicitação
      </div>
      <div style={{ fontSize: 14, color: C.text3, marginBottom: 32, textAlign: 'center', lineHeight: 1.5 }}>
        Você não possui solicitações no momento.
      </div>
      <SecondaryBtn label="Voltar" onClick={goBack} />
    </div>
  )
}
export default EmptyStateScreen
