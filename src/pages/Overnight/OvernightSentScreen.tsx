import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { Icon, StatusBadge, Card, TimelineStep, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface OvernightSentScreenProps {
  nav: NavigateFunction
  goBack?: GoBackFunction
}

export function OvernightSentScreen({ nav }: OvernightSentScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <Icon name="moon" size={34} color={C.green} />
          </View>
          <Text style={styles.title}>Pedido de pernoite</Text>
          <StatusBadge status="pending-sergeant" />
        </View>

        <Card style={styles.card}>
          {[
            { l: 'Data',       v: '30 de setembro' },
            { l: 'Motivo',     v: 'Compromisso pessoal' },
            { l: 'Enviado em', v: '28/09 · 09:20' },
          ].map((it, i) => (
            <View
              key={it.l}
              style={[
                styles.metaRow,
                { borderTopWidth: i > 0 ? 1 : 0 },
              ]}
            >
              <Text style={styles.metaLabel}>{it.l}</Text>
              <Text style={styles.metaValue}>{it.v}</Text>
            </View>
          ))}
        </Card>

        <View style={styles.timelineSection}>
          <Text style={styles.timelineTitle}>Status</Text>
          <TimelineStep label="Pedido enviado"      time="28/09 · 09:20" status="done" />
          <TimelineStep label="Aguardando sargento"                      status="current" />
          <TimelineStep label="Decisão"                                  status="pending" />
        </View>

        <PrimaryBtn
          label="Voltar para solicitações"
          onPress={() => nav('requests')}
        />
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
  header: {
    paddingTop: 40,
    alignItems: 'center',
    marginBottom: 32,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: C.greenBg,
    borderWidth: 2,
    borderColor: 'rgba(120,175,105,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: C.text,
    marginBottom: 10,
  },
  card: {
    marginBottom: 24,
  },
  metaRow: {
    paddingVertical: 10,
    borderTopColor: C.border,
  },
  metaLabel: {
    fontSize: 10,
    color: C.text3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  metaValue: {
    fontSize: 14,
    color: C.text,
  },
  timelineSection: {
    marginBottom: 32,
  },
  timelineTitle: {
    fontSize: 13,
    color: C.text2,
    fontWeight: '500',
    marginBottom: 14,
  },
})

export default OvernightSentScreen
