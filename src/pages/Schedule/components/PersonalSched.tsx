import React from 'react'
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native'
import { C, codeColor } from '@/constants/theme'
import { Card, Icon, CodeChip } from '@/components/ui'
import { SERVICES } from '@/data'
import type { NavigateFunction } from '@/types'

export interface PersonalSchedProps {
  days: { label: string; date: string; today: boolean }[]
  nav: NavigateFunction
}

export function PersonalSched({ days, nav }: PersonalSchedProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {days.map(day => {
        const svcs = SERVICES.filter(s => s.date === day.date)
        return (
          <View key={day.date} style={styles.dayGroup}>
            <View style={styles.dayHeader}>
              <Text
                style={[
                  styles.dayLabel,
                  { color: day.today ? C.green : C.text3 },
                ]}
              >
                {day.label}
              </Text>
              {day.today && (
                <View style={styles.todayBadge}>
                  <Text style={styles.todayText}>HOJE</Text>
                </View>
              )}
            </View>
            <Card style={styles.card}>
              {svcs.length === 0 ? (
                <View style={styles.emptyWrap}>
                  <Text style={styles.emptyText}>Sem serviço</Text>
                </View>
              ) : (
                svcs.map((svc, si) => (
                  <Pressable
                    key={svc.id}
                    onPress={() => nav('service-detail', { svc })}
                    style={({ pressed }) => [
                      styles.serviceItem,
                      {
                        borderTopWidth: si > 0 ? 1 : 0,
                        opacity: pressed ? 0.75 : 1,
                      },
                    ]}
                  >
                    <View style={styles.serviceLeft}>
                      <View
                        style={[
                          styles.colorBar,
                          { backgroundColor: codeColor(svc.code).fg },
                        ]}
                      />
                      <View>
                        <Text style={styles.periodText}>{svc.period}</Text>
                        <View style={styles.codeRow}>
                          <CodeChip code={svc.code} size="xs" />
                          <Text style={styles.postText}>{svc.post}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.serviceRight}>
                      <Text style={styles.timeText}>
                        {svc.start} — {svc.end}
                      </Text>
                      <Icon name="chevR" size={16} color={C.text3} />
                    </View>
                  </Pressable>
                ))
              )}
            </Card>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  dayGroup: {
    marginBottom: 10,
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginBottom: 7,
    paddingLeft: 2,
  },
  dayLabel: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  todayBadge: {
    backgroundColor: C.greenBg,
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  todayText: {
    fontSize: 9,
    color: C.green,
    fontWeight: '700',
  },
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  emptyWrap: {
    paddingVertical: 13,
    paddingHorizontal: 16,
  },
  emptyText: {
    fontSize: 13,
    color: C.text3,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopColor: C.border,
  },
  serviceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  colorBar: {
    width: 3,
    height: 32,
    borderRadius: 2,
  },
  periodText: {
    fontSize: 10,
    color: C.text3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 3,
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  postText: {
    fontSize: 13,
    color: C.text2,
  },
  serviceRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '600',
    color: C.text,
  },
})
