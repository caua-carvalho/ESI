import React from 'react'
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { C } from '@/constants/theme'

export interface ButtonProps {
  label: string
  onClick?: () => void
  onPress?: () => void
  disabled?: boolean
  style?: ViewStyle
}

export function PrimaryBtn({ label, onClick, onPress, disabled, style }: ButtonProps) {
  const handlePress = onPress ?? onClick
  return (
    <Pressable
      onPress={disabled ? undefined : handlePress}
      style={({ pressed }) => [
        styles.btn,
        {
          backgroundColor: disabled ? C.surface3 : C.green,
          opacity: pressed && !disabled ? 0.85 : 1,
        },
        style,
      ]}
    >
      <Text
        style={[
          styles.primaryText,
          { color: disabled ? C.text3 : '#ffffff' },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export function SecondaryBtn({ label, onClick, onPress, style }: ButtonProps) {
  const handlePress = onPress ?? onClick
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.btn,
        styles.secondaryBtn,
        { opacity: pressed ? 0.8 : 1 },
        style,
      ]}
    >
      <Text style={styles.secondaryText}>{label}</Text>
    </Pressable>
  )
}

export function DestructiveBtn({ label, onClick, onPress, style }: ButtonProps) {
  const handlePress = onPress ?? onClick
  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.btn,
        styles.destructiveBtn,
        { opacity: pressed ? 0.8 : 1 },
        style,
      ]}
    >
      <Text style={styles.destructiveText}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  primaryText: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  secondaryBtn: {
    backgroundColor: C.surface3,
    borderWidth: 1,
    borderColor: C.borderMed,
  },
  secondaryText: {
    color: C.text,
    fontSize: 15,
    fontWeight: '500',
  },
  destructiveBtn: {
    backgroundColor: C.redBg,
    borderWidth: 1,
    borderColor: 'rgba(220,84,84,0.22)',
  },
  destructiveText: {
    color: C.red,
    fontSize: 15,
    fontWeight: '500',
  },
})
