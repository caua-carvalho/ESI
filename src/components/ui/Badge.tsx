import React from 'react'
import { C, codeColor } from '@/constants/theme'

export interface CodeChipProps {
  code: string
  size?: 'xs' | 'sm' | 'md'
}

export function CodeChip({ code, size = 'sm' }: CodeChipProps) {
  const cl = codeColor(code)
  const s = {
    xs: { fs: 9, p: '2px 5px', r: 4 },
    sm: { fs: 11, p: '3px 7px', r: 5 },
    md: { fs: 13, p: '5px 10px', r: 7 },
  }[size]

  return (
    <span
      style={{
        fontFamily: '"JetBrains Mono",monospace',
        fontSize: s.fs,
        fontWeight: 600,
        letterSpacing: '0.05em',
        padding: s.p,
        borderRadius: s.r,
        color: cl.fg,
        background: cl.bg,
        display: 'inline-block',
        lineHeight: 1.4,
      }}
    >
      {code}
    </span>
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
    <span
      style={{
        fontSize: 11,
        fontWeight: 500,
        padding: '3px 9px',
        borderRadius: 20,
        color: c.color,
        background: c.bg,
        display: 'inline-block',
        lineHeight: 1.5,
      }}
    >
      {c.label}
    </span>
  )
}
