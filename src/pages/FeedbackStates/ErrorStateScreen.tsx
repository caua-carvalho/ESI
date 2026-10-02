import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { Icon, PrimaryBtn } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface ErrorStateScreenProps {
  goBack: GoBackFunction
}

export function ErrorStateScreen({ goBack }: ErrorStateScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.iconCircle}>
          <Icon name="warning" size={30} color={C.red} />
        </View>
        <Text style={styles.title}>Não foi possível carregar</Text>
        <Text style={styles.desc}>
          Não foi possível carregar suas solicitações. Verifique sua conexão.
        </Text>
        <PrimaryBtn label="Tentar novamente" onPress={goBack} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: C.bg,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: C.redBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: C.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    color: C.text3,
    marginBottom: 32,
    textAlign: 'center',
    lineHeight: 20,
  },
})

export default ErrorStateScreen
