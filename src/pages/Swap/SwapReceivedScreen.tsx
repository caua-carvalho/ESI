import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Modal,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { C } from '@/constants/theme'
import {
  AppBar,
  Card,
  Avatar,
  CodeChip,
  PrimaryBtn,
  DestructiveBtn,
  SecondaryBtn,
  Textarea,
} from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface SwapReceivedScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function SwapReceivedScreen({ nav, goBack }: SwapReceivedScreenProps) {
  const [showRefusal, setShowRefusal] = useState(false)
  const [reason, setReason] = useState('')

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Solicitação de troca" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.desc}>
          <Text style={styles.boldText}>S2 OLIVEIRA</Text> deseja trocar um serviço com você.
        </Text>

        <Card style={styles.card}>
          <Text style={styles.cardHeader}>Serviço dele</Text>
          <View style={styles.userRow}>
            <Avatar rank="S2" initials="OLI" size={40} />
            <View>
              <Text style={styles.userName}>S2 OLIVEIRA</Text>
              <View style={styles.codeRow}>
                <CodeChip code="UCA" />
                <Text style={styles.dateLabel}>30 SET · MANHÃ</Text>
              </View>
              <Text style={styles.postMeta}>Posto Alfa · 06:00 — 12:00</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.cardLarge}>
          <Text style={styles.cardHeader}>Seu serviço</Text>
          <View style={styles.userRow}>
            <Avatar rank="S2" initials="SIL" size={40} />
            <View>
              <Text style={styles.userName}>S2 SILVA</Text>
              <View style={styles.codeRow}>
                <CodeChip code="SSV" />
                <Text style={styles.dateLabel}>28 SET · TARDE</Text>
              </View>
              <Text style={styles.postMeta}>Posto Bravo · 14:00 — 18:00</Text>
            </View>
          </View>
        </Card>

        <View style={styles.actions}>
          <PrimaryBtn label="Aceitar troca" onPress={() => nav('swap-sent')} />
          <DestructiveBtn label="Recusar" onPress={() => setShowRefusal(true)} />
        </View>

        {/* Refusal modal */}
        <Modal
          visible={showRefusal}
          transparent
          animationType="fade"
          onRequestClose={() => setShowRefusal(false)}
        >
          <Pressable style={styles.modalOverlay} onPress={() => setShowRefusal(false)}>
            <Pressable style={styles.sheet} onPress={e => e.stopPropagation()}>
              <View style={styles.dragHandle} />
              <Text style={styles.modalTitle}>Recusar troca?</Text>
              <View style={styles.textareaWrap}>
                <Textarea
                  label="Motivo"
                  value={reason}
                  onChangeText={setReason}
                  placeholder="Explique o motivo..."
                />
              </View>
              <View style={styles.actions}>
                <DestructiveBtn
                  label="Confirmar recusa"
                  onPress={() => {
                    setShowRefusal(false)
                    goBack()
                  }}
                />
                <SecondaryBtn label="Cancelar" onPress={() => setShowRefusal(false)} />
              </View>
            </Pressable>
          </Pressable>
        </Modal>
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
  desc: {
    fontSize: 14,
    color: C.text2,
    marginBottom: 20,
    lineHeight: 20,
  },
  boldText: {
    color: C.text,
    fontWeight: '600',
  },
  card: {
    marginBottom: 10,
  },
  cardLarge: {
    marginBottom: 24,
  },
  cardHeader: {
    fontSize: 10,
    color: C.text3,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 10,
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
  dateLabel: {
    fontSize: 13,
    color: C.text2,
  },
  postMeta: {
    fontSize: 12,
    color: C.text3,
    marginTop: 2,
  },
  actions: {
    gap: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.72)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: C.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 48,
    borderWidth: 1,
    borderColor: C.border,
  },
  dragHandle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: C.border,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: C.text,
    marginBottom: 16,
  },
  textareaWrap: {
    marginBottom: 20,
  },
})

export default SwapReceivedScreen
