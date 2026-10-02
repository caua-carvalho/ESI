import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { C } from '@/constants/theme'

export interface TimelineStepProps {
  label: string
  time?: string
  status: 'done' | 'current' | 'pending'
}

export function TimelineStep({ label, time, status }: TimelineStepProps) {
  const dotColor = status === 'done' ? C.green : status === 'current' ? C.blue : C.text3
  const dotBg    = status === 'done' ? C.greenBg : status === 'current' ? C.blueBg : C.surface3

  return (
    <View style={styles.container}>
      <View style={styles.indicatorCol}>
        <View
          style={[
            styles.dot,
            {
              backgroundColor: dotBg,
              borderColor: dotColor,
            },
          ]}
        >
          {(status === 'done' || status === 'current') && (
            <View style={[styles.innerDot, { backgroundColor: dotColor }]} />
          )}
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.contentCol}>
        <Text
          style={[
            styles.label,
            {
              fontWeight: status === 'current' ? '600' : '400',
              color: status === 'pending' ? C.text3 : C.text,
            },
          ]}
        >
          {label}
        </Text>
        {time ? <Text style={styles.time}>{time}</Text> : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  indicatorCol: {
    alignItems: 'center',
    paddingTop: 2,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
  },
  line: {
    width: 1,
    height: 20,
    backgroundColor: C.border,
    marginTop: 3,
  },
  contentCol: {
    paddingBottom: 8,
    flex: 1,
  },
  label: {
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: C.text3,
    marginTop: 2,
  },
})
