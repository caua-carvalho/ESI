import React from 'react'
import { C } from '@/constants/theme'

export interface ButtonProps {
  label: string
  onClick?: () => void
  disabled?: boolean
}

export function PrimaryBtn({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={disabled ? '' : 'tap'}
      style={{
        background: disabled ? C.surface3 : C.green,
        color: disabled ? C.text3 : '#fff',
        border: 'none',
        borderRadius: 14,
        padding: '15px 24px',
        fontSize: 15,
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: '100%',
        letterSpacing: '0.01em',
        transition: 'background 0.15s',
      }}
    >
      {label}
    </button>
  )
}

export function SecondaryBtn({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="tap"
      style={{
        background: C.surface3,
        color: C.text,
        border: `1px solid ${C.borderMed}`,
        borderRadius: 14,
        padding: '14px 24px',
        fontSize: 15,
        fontWeight: 500,
        cursor: 'pointer',
        width: '100%',
      }}
    >
      {label}
    </button>
  )
}

export function DestructiveBtn({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="tap"
      style={{
        background: C.redBg,
        color: C.red,
        border: '1px solid rgba(220,84,84,0.22)',
        borderRadius: 14,
        padding: '14px 24px',
        fontSize: 15,
        fontWeight: 500,
        cursor: 'pointer',
        width: '100%',
      }}
    >
      {label}
    </button>
  )
}
