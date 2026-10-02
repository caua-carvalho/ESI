import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { Icon, StatusBadge, Card, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction } from '@/types'

export interface MedicalApprovedScreenProps {
  nav: NavigateFunction
}

export function MedicalApprovedScreen({ nav }: MedicalApprovedScreenProps) {
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
          <Text style={styles.title}>Atestado aprovado</Text>
          <StatusBadge status="approved" />
        </View>

        <Card style={styles.card}>
          {[
            { l: 'Período',          v: '28/09 a 30/09' },
            { l: 'Tipo de dispensa', v: 'Somente serviço' },
            { l: 'Aprovado em',      v: '28/09 · 14:30' },
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

        <View style={styles.successBox}>
          <Icon name="check" size={15} color={C.green} />
          <Text style={styles.successText}>
            Os serviços afetados foram atualizados automaticamente.
          </Text>
        </View>

        <PrimaryBtn label="Ver minha escala" onPress={() => nav('schedule')} />
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
    marginBottom: 14,
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
  successBox: {
    backgroundColor: C.greenBg,
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 14,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginBottom: 22,
  },
  successText: {
    fontSize: 13,
    color: C.text2,
    flex: 1,
  },
})

export default MedicalApprovedScreen
