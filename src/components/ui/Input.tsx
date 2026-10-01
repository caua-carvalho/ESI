import React from 'react'
import { C } from '@/constants/theme'

export interface FieldProps {
  label: string
  value: string
  onChange?: (v: string) => void
  type?: string
  placeholder?: string
  readOnly?: boolean
}

export function Field({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  readOnly,
}: FieldProps) {
  return (
    <div>
      <div style={{ fontSize: 12, color: C.text2, marginBottom: 6, fontWeight: 500 }}>
        {label}
      </div>
      <input
        type={type}
        value={value}
        onChange={e => onChange?.(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        style={{
          width: '100%',
          background: C.surface3,
          border: `1px solid ${C.borderMed}`,
          borderRadius: 12,
          padding: '13px 16px',
          fontSize: 15,
          color: readOnly ? C.text2 : C.text,
          outline: 'none',
        }}
      />
    </div>
  )
}

export interface TextareaProps {
  label: string
  value: string
  onChange?: (v: string) => void
  placeholder?: string
  rows?: number
}

export function Textarea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
}: TextareaProps) {
  return (
    <div>
      <div style={{ fontSize: 12, color: C.text2, marginBottom: 6, fontWeight: 500 }}>
        {label}
      </div>
      <textarea
        value={value}
        onChange={e => onChange?.(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        style={{
          width: '100%',
          background: C.surface3,
          border: `1px solid ${C.borderMed}`,
          borderRadius: 12,
          padding: '13px 16px',
          fontSize: 15,
          color: C.text,
          outline: 'none',
          resize: 'none',
          lineHeight: 1.5,
        }}
      />
    </div>
  )
}
