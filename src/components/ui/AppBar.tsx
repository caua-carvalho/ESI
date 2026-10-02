import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { C } from '@/constants/theme'
import { Icon } from './Icon'

export interface AppBarProps {
  title: string
  subtitle?: string
  onBack?: () => void
  right?: React.ReactNode
}

export function AppBar({ title, subtitle, onBack, right }: AppBarProps) {
  return (
    <View style={styles.container}>
      {onBack && (
        <Pressable
          onPress={onBack}
          style={({ pressed }) => [
            styles.backBtn,
            { opacity: pressed ? 0.7 : 1 },
          ]}
        >
          <Icon name="arrowL" size={20} color={C.text} />
        </Pressable>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {right}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    gap: 12,
  },
  backBtn: {
    backgroundColor: C.surface3,
    borderRadius: 12,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: C.text,
  },
  subtitle: {
    fontSize: 12,
    color: C.text3,
    marginTop: 2,
  },
})
