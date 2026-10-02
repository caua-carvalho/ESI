import React from 'react'
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { AppBar, Skeleton } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface LoadingStateScreenProps {
  goBack: GoBackFunction
}

export function LoadingStateScreen({ goBack }: LoadingStateScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Solicitações" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {[1, 2, 3].map(i => (
          <View key={i} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.iconPlaceholder} />
              <View style={styles.contentPlaceholder}>
                <Skeleton w="60%" h={13} />
                <Skeleton w="40%" h={11} />
              </View>
              <Skeleton w={80} h={20} r={10} />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.bg,
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 36,
    gap: 10,
  },
  card: {
    backgroundColor: C.surface2,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: C.border,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: C.surface3,
  },
  contentPlaceholder: {
    flex: 1,
    gap: 8,
  },
})

export default LoadingStateScreen
