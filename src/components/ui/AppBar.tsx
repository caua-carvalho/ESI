import React from 'react'
import { C } from '@/constants/theme'
import { Icon } from './Icon'

export interface AppBarProps {
  title: string
  subtitle?: string
  onBack?: () => void
  right?: React.ReactNode
}

export function AppBar({ title, subtitle, onBack, right }: AppBarProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '16px 20px 12px', gap: 12 }}>
      {onBack && (
        <button
          onClick={onBack}
          className="tap"
          style={{
            background: C.surface3,
            border: 'none',
            borderRadius: 12,
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <Icon name="arrowL" size={20} color={C.text} />
        </button>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: C.text, lineHeight: 1.2 }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 12, color: C.text3, marginTop: 2 }}>
            {subtitle}
          </div>
        )}
      </div>
      {right}
    </div>
  )
}
