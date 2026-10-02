import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { Icon, Segmented } from '@/components/ui'
import { PersonalSched } from './components/PersonalSched'
import { GlobalSched } from './components/GlobalSched'
import type { NavigateFunction } from '@/types'

export interface ScheduleScreenProps {
  nav?: NavigateFunction
  onNavigate?: (screen: string, params?: Record<string, unknown>) => void
}

export function ScheduleScreen({ nav, onNavigate }: ScheduleScreenProps) {
  const navigate: NavigateFunction = nav ?? onNavigate ?? (() => {})
  const [mode, setMode] = useState('Pessoal')
  const [, setWeek] = useState(0)

  const days = [
    { label: 'SEG · 28 SET', date: '28/09', today: true },
    { label: 'TER · 29 SET', date: '29/09', today: false },
    { label: 'QUA · 30 SET', date: '30/09', today: false },
    { label: 'QUI · 01 OUT', date: '01/10', today: false },
    { label: 'SEX · 02 OUT', date: '02/10', today: false },
    { label: 'SAB · 03 OUT', date: '03/10', today: false },
    { label: 'DOM · 04 OUT', date: '04/10', today: false },
  ]

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Escala</Text>

        {/* Week selector */}
        <View style={styles.weekSelector}>
          <Pressable
            onPress={() => setWeek(w => w - 1)}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1, padding: 4 }]}
          >
            <Icon name="chevL" size={20} color={C.text2} />
          </Pressable>
          <View style={styles.weekInfo}>
            <Text style={styles.weekDates}>28 set — 04 out</Text>
            <Text style={styles.weekSub}>Semana atual</Text>
          </View>
          <Pressable
            onPress={() => setWeek(w => w + 1)}
            style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1, padding: 4 }]}
          >
            <Icon name="chevR" size={20} color={C.text2} />
          </Pressable>
        </View>

        <View style={styles.segmentWrap}>
          <Segmented options={['Pessoal', 'Global']} value={mode} onChange={setMode} />
        </View>
      </View>

      {mode === 'Pessoal' ? (
        <PersonalSched days={days} nav={navigate} />
      ) : (
        <GlobalSched />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.bg,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
  weekSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: C.surface2,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: C.border,
    marginBottom: 14,
  },
  weekInfo: {
    alignItems: 'center',
  },
  weekDates: {
    fontSize: 14,
    fontWeight: '600',
    color: C.text,
  },
  weekSub: {
    fontSize: 11,
    color: C.text3,
  },
  segmentWrap: {
    marginBottom: 14,
  },
})

export default ScheduleScreen
export * from './components/PersonalSched'
export * from './components/GlobalSched'
