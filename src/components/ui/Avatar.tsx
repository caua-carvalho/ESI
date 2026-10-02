import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { C } from '@/constants/theme'

export interface AvatarProps {
  rank: string
  initials: string
  size?: number
}

export function Avatar({ rank, initials, size = 48 }: AvatarProps) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}
    >
      <Text
        style={[
          styles.rank,
          { fontSize: size < 40 ? 9 : 11 },
        ]}
      >
        {rank}
      </Text>
      <Text
        style={[
          styles.initials,
          { fontSize: size < 40 ? 10 : 13 },
        ]}
      >
        {initials}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: C.surface3,
    borderWidth: 1,
    borderColor: C.borderMed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rank: {
    fontWeight: '700',
    color: C.green,
    lineHeight: 12,
  },
  initials: {
    fontWeight: '700',
    color: C.text,
    lineHeight: 14,
    marginTop: 1,
  },
})
