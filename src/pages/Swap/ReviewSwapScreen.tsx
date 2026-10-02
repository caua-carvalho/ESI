import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { AppBar, Card, Avatar, CodeChip, Icon, PrimaryBtn, SecondaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface ReviewSwapScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function ReviewSwapScreen({ nav, goBack }: ReviewSwapScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Revisar troca" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Card style={styles.card}>
          <View>
            <Text style={styles.sectionHeader}>Você</Text>
            <View style={styles.userRow}>
              <Avatar rank="S2" initials="SIL" size={40} />
              <View>
                <Text style={styles.userName}>S2 SILVA</Text>
                <View style={styles.codeRow}>
                  <CodeChip code="SSV" size="xs" />
                  <Text style={styles.userMeta}>28 SET · TARDE · Posto Bravo</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.swapDivider}>
            <View style={styles.line} />
            <View style={styles.swapPill}>
              <Icon name="swap" size={15} color={C.text3} />
              <Text style={styles.swapPillText}>troca com</Text>
            </View>
            <View style={styles.line} />
          </View>

          <View>
            <Text style={styles.sectionHeader}>Colega</Text>
            <View style={styles.userRow}>
              <Avatar rank="S2" initials="OLI" size={40} />
              <View>
                <Text style={styles.userName}>S2 OLIVEIRA</Text>
                <View style={styles.codeRow}>
                  <CodeChip code="UCA" size="xs" />
                  <Text style={styles.userMeta}>30 SET · MANHÃ · Posto Alfa</Text>
                </View>
              </View>
            </View>
          </View>
        </Card>

        <View style={styles.ruleBanner}>
          <View style={styles.ruleHeader}>
            <Icon name="info" size={15} color={C.amber} />
            <Text style={styles.ruleTitle}>Regras da troca</Text>
          </View>
          <Text style={styles.ruleDesc}>
            Esta troca precisará de <Text style={styles.boldText}>aprovação do sargento</Text> após o aceite, pois ocorre em menos de 7 dias.
          </Text>
        </View>

        <View style={styles.actions}>
          <PrimaryBtn label="Enviar solicitação" onPress={() => nav('swap-sent')} />
          <SecondaryBtn label="Cancelar" onPress={goBack} />
        </View>
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
    marginBottom: 14,
  },
  sectionHeader: {
    fontSize: 10,
    color: C.text3,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 9,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
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
    marginTop: 3,
  },
  userMeta: {
    fontSize: 12,
    color: C.text2,
  },
  swapDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: C.border,
  },
  swapPill: {
    backgroundColor: C.surface3,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  swapPillText: {
    fontSize: 12,
    color: C.text3,
  },
  ruleBanner: {
    backgroundColor: C.amberBg,
    borderRadius: 14,
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: 'rgba(224,169,74,0.2)',
    marginBottom: 22,
  },
  ruleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  ruleTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: C.amber,
  },
  ruleDesc: {
    fontSize: 13,
    color: C.text2,
    lineHeight: 18,
  },
  boldText: {
    color: C.text,
    fontWeight: '600',
  },
  actions: {
    gap: 10,
  },
})

export default ReviewSwapScreen
