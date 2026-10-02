import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { Icon, StatusBadge, TimelineStep, Card, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction } from '@/types'

export interface MedicalSentScreenProps {
  nav: NavigateFunction
}

export function MedicalSentScreen({ nav }: MedicalSentScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <Icon name="medical" size={34} color={C.blue} />
          </View>
          <Text style={styles.title}>Atestado enviado</Text>
          <StatusBadge status="pending-section" />
        </View>

        <View style={styles.timelineSection}>
          <Text style={styles.timelineTitle}>Status</Text>
          <TimelineStep label="Rascunho"         time="28/09"        status="done" />
          <TimelineStep label="Enviado"           time="28/09 · 09:25" status="done" />
          <TimelineStep label="Aguardando Seção"                      status="current" />
          <TimelineStep label="Análise concluída"                     status="pending" />
        </View>

        <Card style={styles.card}>
          {[
            { l: 'Período',           v: '28/09 a 30/09' },
            { l: 'Serviços afetados', v: '3 serviços' },
            { l: 'Data de envio',     v: '28/09 · 09:25' },
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
    backgroundColor: C.surface3,
    borderWidth: 2,
    borderColor: C.borderMed,
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
  timelineSection: {
    marginBottom: 24,
  },
  timelineTitle: {
    fontSize: 13,
    color: C.text2,
    fontWeight: '500',
    marginBottom: 14,
  },
  card: {
    marginBottom: 24,
  },
  metaRow: {
    paddingVertical: 9,
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
})

export default MedicalSentScreen
