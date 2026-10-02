import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { AppBar, Card, StatusBadge, TimelineStep } from '@/components/ui'
import { REQUESTS } from '@/data'
import type { RequestItem, GoBackFunction } from '@/types'

export interface RequestDetailScreenProps {
  goBack: GoBackFunction
  req?: RequestItem
}

export function RequestDetailScreen({ goBack, req }: RequestDetailScreenProps) {
  const r = req ?? REQUESTS[0]
  const isDone = ['approved', 'rejected', 'completed'].includes(r.status)

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Detalhes" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.metaLabel}>Tipo</Text>
              <Text style={styles.reqTitle}>{r.title}</Text>
            </View>
            <StatusBadge status={r.status} />
          </View>
          {[
            { l: 'Criado em',    v: '28/09 · 08:30' },
            { l: 'Atualizado em', v: '28/09 · 09:02' },
          ].map(it => (
            <View key={it.l} style={styles.metaRow}>
              <Text style={styles.metaLabel}>{it.l}</Text>
              <Text style={styles.metaVal}>{it.v}</Text>
            </View>
          ))}
        </Card>

        <Text style={styles.historyTitle}>Histórico</Text>
        <TimelineStep label="Solicitado"         time="28/09 · 08:30" status="done" />
        <TimelineStep label="Aguardando colega"  time="28/09 · 08:31" status="done" />
        <TimelineStep label="Aceito pelo colega" time="28/09 · 09:02" status={isDone ? 'done' : 'current'} />
        <TimelineStep label="Concluído"                               status={isDone ? 'done' : 'pending'} />

        {r.status === 'rejected' && (
          <View style={styles.rejectNotice}>
            <Text style={styles.rejectHeader}>Motivo da recusa</Text>
            <Text style={styles.rejectDesc}>Serviços conflitantes na escala.</Text>
          </View>
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
    paddingBottom: 36,
  },
  card: {
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  metaLabel: {
    fontSize: 10,
    color: C.text3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  reqTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: C.text,
  },
  metaRow: {
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  metaVal: {
    fontSize: 13,
    color: C.text,
  },
  historyTitle: {
    fontSize: 13,
    color: C.text2,
    fontWeight: '500',
    marginBottom: 14,
  },
  rejectNotice: {
    backgroundColor: C.redBg,
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginTop: 8,
  },
  rejectHeader: {
    fontSize: 11,
    color: C.text3,
    marginBottom: 4,
  },
  rejectDesc: {
    fontSize: 13,
    color: C.text2,
  },
})

export default RequestDetailScreen
