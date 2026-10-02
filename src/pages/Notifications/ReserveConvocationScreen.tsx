import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { AppBar, Icon, Card, CodeChip, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface ReserveConvocationScreenProps {
  goBack: GoBackFunction
  nav: NavigateFunction
}

export function ReserveConvocationScreen({
  goBack,
  nav,
}: ReserveConvocationScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Convocação como reserva" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.alertBanner}>
          <Icon name="warning" size={20} color={C.amber} />
          <Text style={styles.alertText}>Você foi convocado como reserva.</Text>
        </View>

        <Card style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.dateTitle}>30 de setembro</Text>
            <Text style={styles.postSubtitle}>Posto Alfa</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.metaRow}>
            <View>
              <Text style={styles.metaLabel}>Horário</Text>
              <Text style={styles.timeValue}>06:00 — 12:00</Text>
            </View>
            <View>
              <Text style={styles.metaLabel}>Código</Text>
              <CodeChip code="UCA" size="md" />
            </View>
          </View>
        </Card>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Este serviço foi atribuído a você após a necessidade de substituição de um titular.
          </Text>
        </View>

        <PrimaryBtn label="Ver escala atualizada" onPress={() => nav('schedule')} />
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
  alertBanner: {
    backgroundColor: C.amberBg,
    borderRadius: 14,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(224,169,74,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 22,
  },
  alertText: {
    fontSize: 14,
    fontWeight: '600',
    color: C.amber,
  },
  card: {
    marginBottom: 14,
  },
  cardTop: {
    marginBottom: 14,
  },
  dateTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: C.text,
    marginBottom: 3,
  },
  postSubtitle: {
    fontSize: 15,
    color: C.text2,
  },
  divider: {
    height: 1,
    backgroundColor: C.border,
    marginBottom: 14,
  },
  metaRow: {
    flexDirection: 'row',
    gap: 24,
  },
  metaLabel: {
    fontSize: 10,
    color: C.text3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  timeValue: {
    fontSize: 16,
    fontWeight: '700',
    color: C.text,
  },
  infoBox: {
    backgroundColor: C.surface3,
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginBottom: 22,
  },
  infoText: {
    fontSize: 13,
    color: C.text3,
    lineHeight: 18,
  },
})

export default ReserveConvocationScreen
