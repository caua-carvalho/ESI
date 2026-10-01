import React from 'react'
import { C } from '@/constants/theme'

export interface SwitchToggleProps {
  value: boolean
  onChange: (v: boolean) => void
}

export function SwitchToggle({ value, onChange }: SwitchToggleProps) {
  return (
    <div
      onClick={() => onChange(!value)}
      className="tap"
      style={{
        width: 51,
        height: 31,
        borderRadius: 20,
        background: value ? C.green : C.surface3,
        position: 'relative',
        cursor: 'pointer',
        transition: 'background 0.2s',
        border: `1px solid ${value ? 'transparent' : C.borderMed}`,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 2,
          left: value ? 21 : 2,
          width: 25,
          height: 25,
          borderRadius: 12.5,
          background: '#fff',
          transition: 'left 0.2s',
          boxShadow: '0 1px 4px rgba(0,0,0,0.35)',
        }}
      />
    </div>
  )
}
