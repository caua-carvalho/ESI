import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native'
import { C } from '@/constants/theme'
import { Icon, CodeChip } from '@/components/ui'
import { GLOBAL_SCH } from '@/data'

export function GlobalSched() {
  const [search, setSearch] = useState('')
  const DCOLS = ['SEG M', 'SEG T', 'TER M', 'TER T', 'QUA M', 'SEX M', 'DOM M']
  const filtered = GLOBAL_SCH.filter(
    m => !search || m.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View style={styles.searchSection}>
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
      </View>

      {/* Info notice */}
      <View style={styles.infoSection}>
        <View style={styles.infoBox}>
          <Icon name="info" size={13} color={C.text3} />
          <Text style={styles.infoText}>
            Apenas para consulta · Ausências: Indisponível
          </Text>
        </View>
      </View>

      {/* Matrix Table */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.tableBody}>
          <View style={styles.tableInner}>
            {/* Header row */}
            <View style={styles.headerRow}>
              <View style={styles.colMilitar}>
                <Text style={styles.headerColText}>MILITAR</Text>
              </View>
              {DCOLS.map(h => (
                <View key={h} style={styles.colDay}>
                  <Text style={styles.headerColText}>{h}</Text>
                </View>
              ))}
            </View>

            {/* Content rows */}
            {filtered.map((m, mi) => (
              <View
                key={m.name}
                style={[
                  styles.dataRow,
                  { backgroundColor: mi % 2 === 0 ? 'transparent' : 'rgba(16,20,32,0.5)' },
                ]}
              >
                <View style={styles.colMilitarData}>
                  <View style={styles.rankBadge}>
                    <Text style={styles.rankText}>{m.rank}</Text>
                  </View>
                  <Text style={styles.militarName} numberOfLines={1}>
                    {m.name.split(' ')[1] || m.name}
                  </Text>
                </View>
                {m.svc.map((code, ci) => (
                  <View key={ci} style={styles.colDayData}>
                    {code ? (
                      <CodeChip code={code} size="xs" />
                    ) : (
                      <View style={styles.emptyDot} />
                    )}
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingBottom: 10,
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
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: C.text,
    padding: 0,
  },
  infoSection: {
    paddingHorizontal: 20,
    paddingBottom: 8,
  },
  infoBox: {
    backgroundColor: C.surface3,
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 11,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontSize: 12,
    color: C.text3,
  },
  tableBody: {
    paddingBottom: 36,
  },
  tableInner: {
    minWidth: 560,
  },
  headerRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    backgroundColor: C.bg,
  },
  colMilitar: {
    width: 110,
    paddingVertical: 9,
  },
  headerColText: {
    fontSize: 10,
    color: C.text3,
    fontWeight: '700',
    textAlign: 'center',
  },
  colDay: {
    width: 65,
    paddingVertical: 9,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  colMilitarData: {
    width: 110,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rankBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: C.surface3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankText: {
    fontSize: 9,
    fontWeight: '700',
    color: C.green,
  },
  militarName: {
    fontSize: 12,
    fontWeight: '600',
    color: C.text,
    flex: 1,
  },
  colDayData: {
    width: 65,
    paddingVertical: 10,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: C.surface3,
  },
})
