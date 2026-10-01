import React from 'react'
import { C } from '@/constants/theme'

export interface AvatarProps {
  rank: string
  initials: string
  size?: number
}

export function Avatar({ rank, initials, size = 48 }: AvatarProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        background: `linear-gradient(135deg,${C.surface3},${C.elevated})`,
        border: `1px solid ${C.borderMed}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          fontSize: size < 40 ? 9 : 11,
          fontFamily: '"JetBrains Mono",monospace',
          fontWeight: 700,
          color: C.green,
          lineHeight: 1,
        }}
      >
        {rank}
      </div>
      <div
        style={{
          fontSize: size < 40 ? 10 : 13,
          fontWeight: 700,
          color: C.text,
          lineHeight: 1.2,
          marginTop: 1,
        }}
      >
        {initials}
      </div>
    </div>
  )
}
