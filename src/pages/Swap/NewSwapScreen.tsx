import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { C, codeColor } from '@/constants/theme'
import { AppBar, CodeChip, PrimaryBtn } from '@/components/ui'
import { SERVICES } from '@/data'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface NewSwapScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function NewSwapScreen({ nav, goBack }: NewSwapScreenProps) {
  const [sel, setSel] = useState<string | null>(null)
  const eligible = SERVICES.filter(s => ['29/09', '30/09', '01/10'].includes(s.date))

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Trocar serviço" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.desc}>
          Escolha um serviço futuro para solicitar a troca.
        </Text>
        <Text style={styles.stepTitle}>1 · Meu serviço</Text>

        <View style={styles.list}>
          {eligible.map(svc => {
            const active = sel === svc.id
            const cl = codeColor(svc.code)
            return (
              <Pressable
                key={svc.id}
                onPress={() => setSel(svc.id)}
                style={({ pressed }) => [
                  styles.item,
                  {
                    backgroundColor: active ? cl.bg : C.surface2,
                    borderColor: active ? `${cl.fg}60` : C.border,
                    opacity: pressed ? 0.75 : 1,
                  },
                ]}
              >
                <View style={styles.itemContent}>
                  <Text style={styles.itemMeta}>
                    {svc.full} · {svc.period.toUpperCase()}
                  </Text>
                  <View style={styles.itemCodeRow}>
                    <CodeChip code={svc.code} />
                    <Text style={styles.itemPost}>{svc.post}</Text>
                  </View>
                </View>

                <View
                  style={[
                    styles.radio,
                    {
                      borderColor: active ? cl.fg : C.border,
                      backgroundColor: active ? cl.fg : 'transparent',
                    },
                  ]}
                >
                  {active && <View style={styles.radioInner} />}
                </View>
              </Pressable>
            )
          })}
        </View>

        <PrimaryBtn
          label="Escolher colega →"
          onPress={() => nav('select-colleague', { svcId: sel })}
          disabled={!sel}
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
    marginBottom: 18,
    lineHeight: 20,
  },
  stepTitle: {
    fontSize: 11,
    color: C.text3,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 10,
  },
  list: {
    gap: 8,
    marginBottom: 24,
  },
  item: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemContent: {
    flex: 1,
  },
  itemMeta: {
    fontSize: 11,
    color: C.text3,
    marginBottom: 4,
  },
  itemCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemPost: {
    fontSize: 13,
    color: C.text2,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
})

export default NewSwapScreen
