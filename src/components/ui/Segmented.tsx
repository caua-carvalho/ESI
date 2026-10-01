import React from 'react'
import { C } from '@/constants/theme'

export interface SegmentedProps {
  options: string[]
  value: string
  onChange: (v: string) => void
}

export function Segmented({ options, value, onChange }: SegmentedProps) {
  return (
    <div style={{ display: 'flex', background: C.surface3, borderRadius: 12, padding: 4, gap: 2 }}>
      {options.map(opt => {
        const active = value === opt
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="tap"
            style={{
              flex: 1,
              background: active ? C.surface : 'transparent',
              color: active ? C.text : C.text2,
              border: active ? `1px solid ${C.borderMed}` : '1px solid transparent',
              borderRadius: 9,
              padding: '8px 4px',
              fontSize: 14,
              fontWeight: active ? 600 : 400,
              cursor: 'pointer',
              transition: 'all 0.15s',
            }}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}
