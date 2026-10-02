import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { C } from '@/constants/theme'
import { AppBar, Icon, Avatar, CodeChip, PrimaryBtn } from '@/components/ui'
import type { NavigateFunction, GoBackFunction } from '@/types'

export interface SelectColleagueScreenProps {
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function SelectColleagueScreen({ nav, goBack }: SelectColleagueScreenProps) {
  const [search, setSearch] = useState('')
  const [sel, setSel] = useState<string | null>(null)

  const colleagues = [
    { id: 'oliveira', rank: 'S2', name: 'OLIVEIRA', code: 'UCA',  dateLabel: '30 SET · MANHÃ' },
    { id: 'costa',    rank: 'S2', name: 'COSTA',    code: 'IEAV', dateLabel: '01 OUT · TARDE' },
    { id: 'martins',  rank: 'S1', name: 'MARTINS',  code: 'PP',   dateLabel: '29 SET · TARDE' },
    { id: 'almeida',  rank: 'S2', name: 'ALMEIDA',  code: 'TACF', dateLabel: '02 OUT · MANHÃ' },
  ]

  const filtered = colleagues.filter(
    c => !search || c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Escolher colega" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.stepTitle}>2 · Selecione o colega</Text>

        <View style={styles.searchBox}>
          <Icon name="search" size={16} color={C.text3} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar militar"
            placeholderTextColor={C.text3}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.infoBox}>
          <Icon name="info" size={13} color={C.text3} />
          <Text style={styles.infoText}>
            Trocas realizadas dentro da mesma companhia.
          </Text>
        </View>

        <View style={styles.list}>
          {filtered.map(c => {
            const active = sel === c.id
            return (
              <Pressable
                key={c.id}
                onPress={() => setSel(c.id)}
                style={({ pressed }) => [
                  styles.item,
                  {
                    backgroundColor: active ? C.greenBg : C.surface2,
                    borderColor: active ? `${C.green}60` : C.border,
                    opacity: pressed ? 0.75 : 1,
                  },
                ]}
              >
                <Avatar rank={c.rank} initials={c.name.slice(0, 3)} size={44} />
                <View style={styles.itemInfo}>
                  <Text style={styles.itemName}>
                    {c.rank} {c.name}
                  </Text>
                  <Text style={styles.itemCompany}>2ª Companhia</Text>
                  <View style={styles.itemCodeRow}>
                    <CodeChip code={c.code} size="xs" />
                    <Text style={styles.itemDateLabel}>{c.dateLabel}</Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.radio,
                    {
                      borderColor: active ? C.green : C.border,
                      backgroundColor: active ? C.green : 'transparent',
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
          label="Revisar troca →"
          onPress={() => nav('review-swap', { colleagueId: sel })}
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
  stepTitle: {
    fontSize: 11,
    color: C.text3,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.surface2,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 8,
    borderWidth: 1,
    borderColor: C.border,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: C.text,
    padding: 0,
  },
  infoBox: {
    backgroundColor: C.surface3,
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 11,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 14,
  },
  infoText: {
    fontSize: 12,
    color: C.text3,
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
    gap: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: C.text,
    marginBottom: 2,
  },
  itemCompany: {
    fontSize: 12,
    color: C.text2,
  },
  itemCodeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  itemDateLabel: {
    fontSize: 11,
    color: C.text3,
  },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
})

export default SelectColleagueScreen
