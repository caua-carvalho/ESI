import React from 'react'
import { View, Pressable, ViewStyle, StyleSheet } from 'react-native'
import { C } from '@/constants/theme'

export interface CardProps {
  children: React.ReactNode
  style?: ViewStyle | ViewStyle[]
  onClick?: () => void
  onPress?: () => void
  className?: string
}

export function Card({ children, style, onClick, onPress, className = '' }: CardProps) {
  const handlePress = onPress ?? onClick

  if (handlePress) {
    return (
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.card,
          { opacity: pressed ? 0.88 : 1 },
          style,
        ]}
        className={className}
      >
        {children}
      </Pressable>
    )
  }

  return (
    <View style={[styles.card, style]} className={className}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: C.surface2,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: C.border,
  },
})
