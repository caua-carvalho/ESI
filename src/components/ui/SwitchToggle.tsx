import React from 'react'
import { Pressable, View, StyleSheet } from 'react-native'
import { C } from '@/constants/theme'

export interface SwitchToggleProps {
  value: boolean
  onChange: (v: boolean) => void
}

export function SwitchToggle({ value, onChange }: SwitchToggleProps) {
  return (
    <Pressable
      onPress={() => onChange(!value)}
      style={[
        styles.track,
        {
          backgroundColor: value ? C.green : C.surface3,
          borderColor: value ? 'transparent' : C.borderMed,
        },
      ]}
    >
      <View
        style={[
          styles.thumb,
          {
            left: value ? 22 : 2,
          },
        ]}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  track: {
    width: 51,
    height: 31,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
  },
  thumb: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#ffffff',
    position: 'absolute',
    boxShadowColor: '#000',
    boxShadowOffset: { width: 0, height: 1 },
    boxShadowOpacity: 0.35,
    boxShadowRadius: 2,
    elevation: 3,
  },
})
