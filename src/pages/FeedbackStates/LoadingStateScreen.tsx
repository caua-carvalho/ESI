import { C } from '@/constants/theme'
import { AppBar, Skeleton } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface LoadingStateScreenProps {
  goBack: GoBackFunction
}

export function LoadingStateScreen({ goBack }: LoadingStateScreenProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto' }}>
      <AppBar title="Solicitações" onBack={goBack} />
      <div style={{ padding: '0 20px 36px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ background: C.surface2, borderRadius: 14, padding: '14px 16px', border: `1px solid ${C.border}` }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: C.surface3 }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Skeleton w="60%" h={13} />
                <Skeleton w="40%" h={11} />
              </div>
              <Skeleton w={80} h={20} r={10} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default LoadingStateScreen
