import React from 'react'
import { C } from '@/constants/theme'

export interface TimelineStepProps {
  label: string
  time?: string
  status: 'done' | 'current' | 'pending'
}

export function TimelineStep({ label, time, status }: TimelineStepProps) {
  const dotColor = status === 'done' ? C.green : status === 'current' ? C.blue : C.text3
  const dotBg    = status === 'done' ? C.greenBg : status === 'current' ? C.blueBg : C.surface3

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 2 }}>
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            background: dotBg,
            border: `2px solid ${dotColor}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {(status === 'done' || status === 'current') && (
            <div style={{ width: 7, height: 7, borderRadius: 4, background: dotColor }} />
          )}
        </div>
        <div style={{ width: 1, height: 20, background: C.border, marginTop: 3 }} />
      </div>
      <div style={{ paddingBottom: 8 }}>
        <div
          style={{
            fontSize: 14,
            fontWeight: status === 'current' ? 600 : 400,
            color: status === 'pending' ? C.text3 : C.text,
          }}
        >
          {label}
        </div>
        {time && <div style={{ fontSize: 12, color: C.text3, marginTop: 2 }}>{time}</div>}
      </div>
    </div>
  )
}
