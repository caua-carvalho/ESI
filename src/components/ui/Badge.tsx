import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { C, codeColor } from '@/constants/theme'

export interface CodeChipProps {
  code: string
  size?: 'xs' | 'sm' | 'md'
}

export function CodeChip({ code, size = 'sm' }: CodeChipProps) {
  const cl = codeColor(code)
  const s = {
    xs: { fs: 9, py: 2, px: 5, r: 4 },
    sm: { fs: 11, py: 3, px: 7, r: 5 },
    md: { fs: 13, py: 5, px: 10, r: 7 },
  }[size]

  return (
    <View
      style={{
        backgroundColor: cl.bg,
        borderRadius: s.r,
        paddingVertical: s.py,
        paddingHorizontal: s.px,
        alignSelf: 'flex-start',
      }}
    >
      <Text
        style={{
          fontSize: s.fs,
          fontWeight: '600',
          letterSpacing: 0.5,
          color: cl.fg,
        }}
      >
        {code}
      </Text>
    </View>
  )
}

export interface StatusBadgeProps {
  status: string
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const cfg: Record<string, { label: string; color: string; bg: string }> = {
    'pending-colleague': { label: 'Aguardando colega', color: C.amber, bg: C.amberBg },
    'pending-sergeant':  { label: 'Aguardando sargento', color: C.amber, bg: C.amberBg },
    'pending-section':   { label: 'Aguardando Seção', color: C.amber, bg: C.amberBg },
    'approved':          { label: 'Aprovado', color: C.green, bg: C.greenBg },
    'rejected':          { label: 'Recusado', color: C.red, bg: C.redBg },
    'completed':         { label: 'Concluído', color: C.green, bg: C.greenBg },
    'Escalado':          { label: 'Escalado', color: C.blue, bg: C.blueBg },
  }

  const c = cfg[status] ?? { label: status, color: C.gray, bg: C.grayBg }

  return (
    <View
      style={{
        backgroundColor: c.bg,
        paddingVertical: 3,
        paddingHorizontal: 9,
        borderRadius: 20,
        alignSelf: 'flex-start',
      }}
    >
      <Text
        style={{
          fontSize: 11,
          fontWeight: '500',
          color: c.color,
        }}
      >
        {c.label}
      </Text>
    </View>
  )
}
