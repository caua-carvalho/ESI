import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { C } from '@/constants/theme'
import { Icon, Field, PrimaryBtn, SecondaryBtn } from '@/components/ui'

export interface LoginScreenProps {
  onLogin?: () => void
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [rank, setRank]         = useState('')
  const [name, setName]         = useState('')
  const [cls, setCls]           = useState('')
  const [sen, setSen]           = useState('')
  const [pass, setPass]         = useState('')
  const [recovery, setRecovery] = useState(false)

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={styles.logoSection}>
          <View style={styles.logoBox}>
            <Icon name="shield" size={36} color={C.green} />
          </View>
          <Text style={styles.title}>Escala ESI</Text>
          <Text style={styles.subtitle}>Gestão de escala e serviços</Text>
        </View>

        <View style={styles.form}>
          <Field label="Patente" value={rank} onChangeText={setRank} placeholder="Ex: S2" />
          <Field label="Nome de guerra" value={name} onChangeText={setName} placeholder="SILVA" />
          <View style={styles.row}>
            <View style={styles.flex1}>
              <Field label="Turma" value={cls} onChangeText={setCls} placeholder="2024" />
            </View>
            <View style={styles.flex1}>
              <Field label="Antiguidade" value={sen} onChangeText={setSen} placeholder="12" />
            </View>
          </View>
          <Field
            label="Senha"
            value={pass}
            onChangeText={setPass}
            placeholder="••••••••"
            secureTextEntry
          />
          <View style={styles.btnWrap}>
            <PrimaryBtn label="Entrar" onPress={onLogin} />
          </View>
          <Pressable
            onPress={() => setRecovery(true)}
            style={({ pressed }) => [
              styles.recoveryBtn,
              { opacity: pressed ? 0.7 : 1 },
            ]}
          >
            <Text style={styles.recoveryText}>Primeiro acesso / Esqueci a senha</Text>
          </Pressable>
        </View>

        {/* Recovery modal */}
        <Modal
          visible={recovery}
          transparent
          animationType="fade"
          onRequestClose={() => setRecovery(false)}
        >
          <Pressable style={styles.modalOverlay} onPress={() => setRecovery(false)}>
            <Pressable style={styles.sheet} onPress={e => e.stopPropagation()}>
              <View style={styles.dragHandle} />
              <View style={styles.sheetHeader}>
                <Icon name="info" size={22} color={C.amber} />
                <Text style={styles.sheetTitle}>Recuperação de acesso</Text>
              </View>
              <View style={styles.sheetBody}>
                <Text style={styles.sheetDesc}>
                  Para recuperar seu acesso, procure a <Text style={styles.sheetBold}>Seção</Text>.
                </Text>
              </View>
              <View style={styles.sheetAction}>
                <SecondaryBtn label="Entendido" onPress={() => setRecovery(false)} />
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
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 40,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 36,
  },
  logoBox: {
    width: 72,
    height: 72,
    borderRadius: 22,
    backgroundColor: C.surface2,
    borderWidth: 1,
    borderColor: C.borderMed,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: C.text2,
    marginTop: 6,
  },
  form: {
    gap: 14,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  flex1: {
    flex: 1,
  },
  btnWrap: {
    marginTop: 8,
  },
  recoveryBtn: {
    paddingVertical: 8,
    alignItems: 'center',
  },
  recoveryText: {
    color: C.text2,
    fontSize: 14,
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
    marginBottom: 24,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: C.text,
  },
  sheetBody: {
    backgroundColor: C.surface2,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: C.border,
  },
  sheetDesc: {
    fontSize: 14,
    color: C.text2,
    lineHeight: 20,
  },
  sheetBold: {
    color: C.text,
    fontWeight: '600',
  },
  sheetAction: {
    marginTop: 18,
  },
})

export default LoginScreen
