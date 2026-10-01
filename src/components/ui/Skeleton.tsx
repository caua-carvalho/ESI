import React from 'react'
import { C } from '@/constants/theme'

export interface SkeletonProps {
  w?: string | number
  h?: number
  r?: number
}

export function Skeleton({ w = '100%', h = 14, r = 6 }: SkeletonProps) {
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: r,
        background: `linear-gradient(90deg,${C.surface3} 25%,${C.elevated} 50%,${C.surface3} 75%)`,
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.4s infinite',
      }}
    />
  )
}
