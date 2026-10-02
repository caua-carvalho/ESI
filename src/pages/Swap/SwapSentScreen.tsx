import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { Icon, StatusBadge, Card, Avatar, CodeChip, TimelineStep, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface SwapSentScreenProps {
  nav: NavigateFunction
  goBack?: GoBackFunction
}

export function SwapSentScreen({ nav }: SwapSentScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <Icon name="check" size={36} color={C.green} />
          </View>
          <Text style={styles.title}>Solicitação enviada</Text>
          <StatusBadge status="pending-colleague" />
        </View>

        <Card style={styles.card}>
          {[
            { rank: 'S2', init: 'SIL', name: 'S2 SILVA',    code: 'SSV', label: '28 SET · TARDE' },
            { rank: 'S2', init: 'OLI', name: 'S2 OLIVEIRA', code: 'UCA', label: '30 SET · MANHÃ' },
          ].map((m, i) => (
            <View
              key={m.name}
              style={[
                styles.userRow,
                { borderTopWidth: i > 0 ? 1 : 0 },
              ]}
            >
              <Avatar rank={m.rank} initials={m.init} size={40} />
              <View>
                <Text style={styles.userName}>{m.name}</Text>
                <View style={styles.codeRow}>
                  <CodeChip code={m.code} size="xs" />
                  <Text style={styles.userLabel}>{m.label}</Text>
                </View>
              </View>
            </View>
          ))}
        </Card>

        <View style={styles.timelineSection}>
          <Text style={styles.timelineTitle}>Status da solicitação</Text>
          <TimelineStep label="Você enviou"              time="28/09 · 09:15" status="done" />
          <TimelineStep label="Aguardando colega"                             status="current" />
          <TimelineStep label="Aprovação do sargento"                         status="pending" />
          <TimelineStep label="Concluída"                                     status="pending" />
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
    letterSpacing: -0.3,
  },
  card: {
    marginBottom: 20,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    borderTopColor: C.border,
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: C.text,
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  userLabel: {
    fontSize: 12,
    color: C.text2,
  },
  timelineSection: {
    marginBottom: 30,
  },
  timelineTitle: {
    fontSize: 13,
    color: C.text2,
    fontWeight: '500',
    marginBottom: 14,
  },
})

export default SwapSentScreen
