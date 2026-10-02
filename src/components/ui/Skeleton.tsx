import React from 'react'
import { View, StyleSheet, DimensionValue } from 'react-native'
import { C } from '@/constants/theme'

export interface SkeletonProps {
  w?: DimensionValue
  h?: number
  r?: number
}

export function Skeleton({ w = '100%', h = 14, r = 6 }: SkeletonProps) {
  return (
    <View
      style={[
        styles.skeleton,
        {
          width: w,
          height: h,
          borderRadius: r,
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: C.surface3,
    opacity: 0.6,
  },
})
