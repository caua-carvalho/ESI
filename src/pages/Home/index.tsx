import React from 'react'
import { View, Text, ScrollView, Pressable, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { Card, Icon, CodeChip } from '@/components/ui'
import { USER, SERVICES } from '@/data'
import type { Screen, NavigateFunction, ServiceItem } from '@/types'

export interface HomeScreenProps {
  nav?: NavigateFunction
  onNavigate?: (screen: Screen, params?: Record<string, unknown>) => void
}

export function HomeScreen({ nav, onNavigate }: HomeScreenProps) {
  const navigate: NavigateFunction = nav ?? onNavigate ?? (() => {})
  const today = SERVICES.filter(s => s.date === '28/09')
  const next  = SERVICES.find(s => s.date === '29/09')

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTag}>
              {USER.rank} · {USER.warName}
            </Text>
            <Text style={styles.headerTitle}>Bom dia</Text>
            <Text style={styles.headerSubtitle}>{USER.company}</Text>
          </View>
          <Pressable
            onPress={() => navigate('notifications')}
            style={({ pressed }) => [
              styles.bellBtn,
              { opacity: pressed ? 0.75 : 1 },
            ]}
          >
            <Icon name="bell" size={20} color={C.text2} />
            <View style={styles.bellBadge} />
          </Pressable>
        </View>

        <View style={styles.dateHeader}>
          <Text style={styles.dateText}>Hoje · Segunda, 28 set</Text>
        </View>

        {/* Today's schedule */}
        <View style={styles.section}>
          <Card>
            <Text style={styles.sectionTitle}>Minha escala hoje</Text>
            {today.map((svc, i) => (
              <Pressable
                key={svc.id}
                onPress={() => navigate('service-detail', { svc })}
                style={({ pressed }) => [
                  styles.serviceRow,
                  {
                    borderTopWidth: i > 0 ? 1 : 0,
                    opacity: pressed ? 0.75 : 1,
                  },
                ]}
              >
                <View>
                  <Text style={styles.periodText}>{svc.period}</Text>
                  <View style={styles.codeRow}>
                    <CodeChip code={svc.code} size="xs" />
                    <Text style={styles.postText}>{svc.post}</Text>
                  </View>
                </View>
                <View style={styles.alignRight}>
                  <Text style={styles.timeStart}>{svc.start}</Text>
                  <Text style={styles.timeEnd}>— {svc.end}</Text>
                </View>
              </Pressable>
            ))}
          </Card>
        </View>

        {/* Phase + Next service */}
        <View style={styles.rowSection}>
          <Card style={styles.phaseCard}>
            <Text style={styles.cardHeaderSmall}>Fase</Text>
            <View style={styles.phaseRow}>
              <View style={styles.phaseDot} />
              <Text style={styles.phaseName}>Missão</Text>
            </View>
            <Text style={styles.phaseSub}>2ª Companhia</Text>
          </Card>

          <Card
            style={styles.nextCard}
            onPress={() => next && navigate('service-detail', { svc: next })}
          >
            <Text style={styles.cardHeaderSmall}>Próximo serviço</Text>
            <View style={styles.nextBadgeRow}>
              <CodeChip code="DCTA" size="xs" />
              <Text style={styles.nextPost}>Posto Bravo</Text>
            </View>
            <Text style={styles.nextDate}>Terça, 29 set · 06:00</Text>
            <View style={styles.inDaysBadge}>
              <Text style={styles.inDaysText}>em 1 dia</Text>
            </View>
          </Card>
        </View>

        {/* Pendências */}
        <View style={styles.section}>
          <Card onPress={() => navigate('requests')}>
            <View style={styles.pendHeader}>
              <Text style={styles.sectionTitle}>Pendências</Text>
              <Icon name="chevR" size={16} color={C.text3} />
            </View>
            {[
              { type: 'Troca',   status: 'Aguardando colega' },
              { type: 'Pernoite', status: 'Aguardando sargento' },
            ].map((item, i) => (
              <View
                key={i}
                style={[
                  styles.pendRow,
                  { borderTopWidth: i > 0 ? 1 : 0 },
                ]}
              >
                <View style={styles.amberDot} />
                <Text style={styles.pendType}>{item.type}</Text>
                <Text style={styles.pendStatus}>· {item.status}</Text>
              </View>
            ))}
          </Card>
        </View>

        {/* Quick actions */}
        <View style={styles.section}>
          <Text style={styles.actionsTitle}>Ações rápidas</Text>
          <View style={styles.actionsRow}>
            {[
              { label: 'Trocar serviço',    icon: 'swap',    screen: 'new-swap' as Screen },
              { label: 'Solicitar pernoite', icon: 'moon',    screen: 'new-overnight' as Screen },
              { label: 'Enviar atestado',   icon: 'medical', screen: 'new-medical' as Screen },
            ].map(a => (
              <Pressable
                key={a.label}
                onPress={() => navigate(a.screen)}
                style={({ pressed }) => [
                  styles.actionBtn,
                  { opacity: pressed ? 0.75 : 1 },
                ]}
              >
                <Icon name={a.icon} size={22} color={C.green} />
                <Text style={styles.actionLabel}>{a.label}</Text>
              </Pressable>
            ))}
          </View>
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
    paddingBottom: 36,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerTag: {
    fontSize: 12,
    color: C.text3,
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.3,
  },
  headerSubtitle: {
    fontSize: 13,
    color: C.text2,
    marginTop: 2,
  },
  bellBtn: {
    backgroundColor: C.surface2,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 12,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bellBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: C.red,
    borderWidth: 1.5,
    borderColor: C.surface2,
  },
  dateHeader: {
    paddingHorizontal: 20,
    paddingBottom: 6,
  },
  dateText: {
    fontSize: 12,
    color: C.text3,
    fontWeight: '500',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    color: C.text2,
    fontWeight: '500',
    marginBottom: 12,
  },
  serviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderTopColor: C.border,
  },
  periodText: {
    fontSize: 10,
    color: C.text3,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  postText: {
    fontSize: 13,
    color: C.text2,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  timeStart: {
    fontSize: 14,
    fontWeight: '600',
    color: C.text,
  },
  timeEnd: {
    fontSize: 12,
    color: C.text3,
  },
  rowSection: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  phaseCard: {
    flex: 1,
  },
  cardHeaderSmall: {
    fontSize: 10,
    color: C.text3,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  phaseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  phaseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.purple,
  },
  phaseName: {
    fontSize: 14,
    fontWeight: '600',
    color: C.text,
  },
  phaseSub: {
    fontSize: 11,
    color: C.text3,
    marginTop: 3,
  },
  nextCard: {
    flex: 2,
  },
  nextBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 3,
  },
  nextPost: {
    fontSize: 12,
    color: C.text2,
  },
  nextDate: {
    fontSize: 12,
    color: C.text3,
  },
  inDaysBadge: {
    marginTop: 6,
    backgroundColor: C.amberBg,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 7,
    alignSelf: 'flex-start',
  },
  inDaysText: {
    fontSize: 11,
    color: C.amber,
  },
  pendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  pendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingVertical: 8,
    borderTopColor: C.border,
  },
  amberDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.amber,
  },
  pendType: {
    fontSize: 14,
    color: C.text,
    fontWeight: '500',
  },
  pendStatus: {
    fontSize: 14,
    color: C.text3,
  },
  actionsTitle: {
    fontSize: 11,
    color: C.text3,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  actionBtn: {
    flex: 1,
    backgroundColor: C.surface2,
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 6,
    alignItems: 'center',
    gap: 7,
  },
  actionLabel: {
    fontSize: 11,
    color: C.text2,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 14,
  },
})

export default HomeScreen
