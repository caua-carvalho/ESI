import React from 'react'
import { C } from '@/constants/theme'

export interface CardProps {
  children: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
  className?: string
}

export function Card({ children, style, onClick, className = '' }: CardProps) {
  return (
    <div
      className={`${onClick ? 'tap' : ''} ${className}`}
      onClick={onClick}
      style={{
        background: C.surface2,
        borderRadius: 16,
        padding: '16px',
        border: `1px solid ${C.border}`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
