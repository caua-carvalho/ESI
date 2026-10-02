import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { C } from '@/constants/theme'
import { AppBar, Segmented, Field, Textarea, Icon, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface NewOvernightScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function NewOvernightScreen({ nav, goBack }: NewOvernightScreenProps) {
  const [mode, setMode]     = useState('Uma data')
  const [date, setDate]     = useState('2026-09-30')
  const [reason, setReason] = useState('')

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Solicitar pernoite" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.desc}>
          Informe quando você precisa permanecer no alojamento.
        </Text>

        <View style={styles.segmentWrap}>
          <Segmented
            options={['Uma data', 'Período']}
            value={mode}
            onChange={setMode}
          />
        </View>

        <View style={styles.form}>
          <Field
            label={mode === 'Uma data' ? 'Data' : 'Início'}
            value={date}
            onChangeText={setDate}
            placeholder="DD/MM/AAAA"
          />
          {mode === 'Período' && (
            <Field
              label="Fim"
              value="2026-10-02"
              onChangeText={() => {}}
              placeholder="DD/MM/AAAA"
            />
          )}
          <Textarea
            label="Motivo"
            value={reason}
            onChangeText={setReason}
            placeholder="Descreva o motivo do pernoite..."
          />
        </View>

        <View style={styles.infoBox}>
          <Icon name="info" size={14} color={C.text3} />
          <Text style={styles.infoText}>
            Seu pedido será enviado ao sargento responsável pela sua companhia.
          </Text>
        </View>

        <PrimaryBtn
          label="Enviar pedido"
          onPress={() => nav('overnight-sent')}
          disabled={!reason}
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
    paddingBottom: 36,
  },
  desc: {
    fontSize: 14,
    color: C.text2,
    lineHeight: 20,
    marginBottom: 18,
  },
  segmentWrap: {
    marginBottom: 16,
  },
  form: {
    gap: 14,
    marginBottom: 18,
  },
  infoBox: {
    backgroundColor: C.surface3,
    borderRadius: 12,
    paddingVertical: 11,
    paddingHorizontal: 14,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
    marginBottom: 22,
  },
  infoText: {
    fontSize: 13,
    color: C.text3,
    lineHeight: 18,
    flex: 1,
  },
})

export default NewOvernightScreen
