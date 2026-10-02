import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { Icon, StatusBadge, Card, SecondaryBtn } from '@/components/ui'
import type { GoBackFunction } from '@/types'

export interface MedicalRejectedScreenProps {
  goBack: GoBackFunction
}

export function MedicalRejectedScreen({ goBack }: MedicalRejectedScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <Icon name="x" size={36} color={C.red} />
          </View>
          <Text style={styles.title}>Atestado recusado</Text>
          <StatusBadge status="rejected" />
        </View>

        <Card style={styles.card}>
          <View style={styles.reasonBlock}>
            <Text style={styles.metaLabel}>Motivo da recusa</Text>
            <Text style={styles.reasonText}>
              O documento apresentado não possui assinatura e carimbo do médico responsável. Reenvie o atestado com as informações completas.
            </Text>
          </View>
          <View>
            <Text style={styles.metaLabel}>Data da decisão</Text>
            <Text style={styles.metaValue}>28/09 · 14:30</Text>
          </View>
        </Card>

        <SecondaryBtn label="Voltar" onPress={goBack} />
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
    backgroundColor: C.redBg,
    borderWidth: 2,
    borderColor: 'rgba(220,84,84,0.28)',
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
    marginBottom: 20,
  },
  reasonBlock: {
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    marginBottom: 12,
  },
  metaLabel: {
    fontSize: 10,
    color: C.text3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  reasonText: {
    fontSize: 14,
    color: C.text2,
    lineHeight: 20,
  },
  metaValue: {
    fontSize: 14,
    color: C.text,
  },
})

export default MedicalRejectedScreen
