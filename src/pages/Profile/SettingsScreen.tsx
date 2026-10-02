import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { C } from '@/constants/theme'
import { AppBar, SwitchToggle, Icon } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface SettingsScreenProps {
  goBack: GoBackFunction
  onLogout?: () => void
}

export function SettingsScreen({ goBack, onLogout }: SettingsScreenProps) {
  const [sw, setSw] = useState({
    swaps: true,
    schedule: true,
    requests: true,
    reserve: true,
  })
  const toggle = (k: keyof typeof sw) => setSw(prev => ({ ...prev, [k]: !prev[k] }))

  function Row({
    label,
    value,
    onToggle,
    isDestructive,
    rightText,
  }: {
    label: string
    value?: boolean
    onToggle?: () => void
    isDestructive?: boolean
    rightText?: string
  }) {
    return (
      <View style={styles.row}>
        <Text style={[styles.rowLabel, { color: isDestructive ? C.red : C.text }]}>
          {label}
        </Text>
        {onToggle !== undefined && value !== undefined ? (
          <SwitchToggle value={value} onChange={onToggle} />
        ) : rightText ? (
          <Text style={styles.rowRightText}>{rightText}</Text>
        ) : (
          !isDestructive && <Icon name="chevR" size={17} color={C.text3} />
        )}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Configurações" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Conta</Text>
          <View style={styles.cardGroup}>
            <Row label="Alterar senha" />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notificações</Text>
          <View style={styles.cardGroup}>
            <Row
              label="Notificações de troca"
              value={sw.swaps}
              onToggle={() => toggle('swaps')}
            />
            <Row
              label="Notificações de escala"
              value={sw.schedule}
              onToggle={() => toggle('schedule')}
            />
            <Row
              label="Notificações de solicitações"
              value={sw.requests}
              onToggle={() => toggle('requests')}
            />
            <Row
              label="Notificações de reserva"
              value={sw.reserve}
              onToggle={() => toggle('reserve')}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aplicativo</Text>
          <View style={styles.cardGroup}>
            <Row label="Termos de uso" />
            <Row label="Privacidade" />
            <Row label="Sobre o Escala ESI" rightText="v1.0.0" />
          </View>
        </View>

        {onLogout && (
          <Pressable
            onPress={onLogout}
            style={({ pressed }) => [
              styles.logoutBtn,
              { opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Text style={styles.logoutText}>Sair</Text>
          </Pressable>
        )}
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
    paddingBottom: 40,
  },
  section: {
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 11,
    color: C.text3,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 8,
    paddingLeft: 2,
  },
  cardGroup: {
    backgroundColor: C.surface2,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.border,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  rowLabel: {
    fontSize: 15,
  },
  rowRightText: {
    fontSize: 14,
    color: C.text3,
  },
  logoutBtn: {
    backgroundColor: C.redBg,
    borderRadius: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: 'rgba(220,84,84,0.18)',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 15,
    fontWeight: '600',
    color: C.red,
  },
})

export default SettingsScreen
