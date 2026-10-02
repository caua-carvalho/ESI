import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { C } from '@/constants/theme'

export interface SegmentedProps {
  options: string[]
  value: string
  onChange: (v: string) => void
}

export function Segmented({ options, value, onChange }: SegmentedProps) {
  return (
    <View style={styles.container}>
      {options.map(opt => {
        const active = value === opt
        return (
          <Pressable
            key={opt}
            onPress={() => onChange(opt)}
            style={({ pressed }) => [
              styles.option,
              {
                backgroundColor: active ? C.surface : 'transparent',
                borderColor: active ? C.borderMed : 'transparent',
                opacity: pressed ? 0.75 : 1,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                {
                  color: active ? C.text : C.text2,
                  fontWeight: active ? '600' : '400',
                },
              ]}
            >
              {opt}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: C.surface3,
    borderRadius: 12,
    padding: 4,
    gap: 2,
  },
  option: {
    flex: 1,
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  },
})
