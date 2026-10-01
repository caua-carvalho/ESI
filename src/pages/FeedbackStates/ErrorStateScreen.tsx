import { C } from '@/constants/theme'
import { Icon, PrimaryBtn } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface ErrorStateScreenProps {
  goBack: GoBackFunction
}

export function ErrorStateScreen({ goBack }: ErrorStateScreenProps) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 40px' }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 32,
          background: C.redBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        <Icon name="warning" size={30} color={C.red} />
      </div>
      <div style={{ fontSize: 18, fontWeight: 600, color: C.text, marginBottom: 8, textAlign: 'center' }}>
        Não foi possível carregar
      </div>
      <div style={{ fontSize: 14, color: C.text3, marginBottom: 32, textAlign: 'center', lineHeight: 1.5 }}>
        Não foi possível carregar suas solicitações. Verifique sua conexão.
      </div>
      <PrimaryBtn label="Tentar novamente" onClick={goBack} />
    </div>
  )
}
export default ErrorStateScreen
