import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { C } from '@/constants/theme'
import { Segmented, Icon } from '@/components/ui'
import { REQUESTS } from '@/data'
import type { Screen, NavigateFunction } from '@/types'

export interface RequestsScreenProps {
  nav?: NavigateFunction
  onNavigate?: (screen: Screen, params?: Record<string, unknown>) => void
}

export function RequestsScreen({ nav, onNavigate }: RequestsScreenProps) {
  const navigate: NavigateFunction = nav ?? onNavigate ?? (() => {})
  const [filter, setFilter] = useState('Todas')
  const pending = ['pending-colleague', 'pending-sergeant', 'pending-section']
  const done    = ['approved', 'rejected', 'completed']

  const filtered = REQUESTS.filter(r =>
    filter === 'Todas'
      ? true
      : filter === 'Pendentes'
      ? pending.includes(r.status)
      : done.includes(r.status)
  )

  const icons: Record<string, string> = {
    swap: 'swap',
    overnight: 'moon',
    medical: 'medical',
  }
  const statusLabel: Record<string, string> = {
    'pending-colleague': 'Aguardando colega',
    'pending-sergeant':  'Aguardando sargento',
    'pending-section':   'Aguardando Seção',
    'approved':          'Aprovado',
    'rejected':          'Recusado',
    'completed':         'Concluído',
  }
  const statusColor: Record<string, string> = {
    'pending-colleague': C.amber,
    'pending-sergeant':  C.amber,
    'pending-section':   C.amber,
    'approved':          C.green,
    'rejected':          C.red,
    'completed':         C.green,
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Solicitações</Text>
        <View style={styles.filterWrap}>
          <Segmented
            options={['Todas', 'Pendentes', 'Concluídas']}
            value={filter}
            onChange={setFilter}
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {filtered.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Icon name="doc" size={44} color={C.text3} />
            <Text style={styles.emptyTitle}>Nenhuma solicitação</Text>
            <Text style={styles.emptySubtitle}>
              Você não possui solicitações nesta categoria.
            </Text>
          </View>
        ) : (
          <View style={styles.list}>
            {filtered.map(req => (
              <Pressable
                key={req.id}
                onPress={() => navigate('request-detail', { req })}
                style={({ pressed }) => [
                  styles.item,
                  { opacity: pressed ? 0.75 : 1 },
                ]}
              >
                <View style={styles.iconBox}>
                  <Icon name={icons[req.type] || 'doc'} size={19} color={C.text2} />
                </View>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemTitle}>{req.title}</Text>
                  <Text style={styles.itemDate}>{req.date}</Text>
                </View>
                <View style={styles.statusCol}>
                  <View
                    style={[
                      styles.statusDot,
                      { backgroundColor: statusColor[req.status] ?? C.gray },
                    ]}
                  />
                  <Text style={styles.statusText} numberOfLines={2}>
                    {statusLabel[req.status] ?? req.status}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        )}

        {/* Quick actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.actionsTitle}>Nova solicitação</Text>
          <View style={styles.actionsRow}>
            {[
              { label: 'Trocar serviço', icon: 'swap',    screen: 'new-swap' as Screen },
              { label: 'Pernoite',       icon: 'moon',    screen: 'new-overnight' as Screen },
              { label: 'Atestado',       icon: 'medical', screen: 'new-medical' as Screen },
            ].map(a => (
              <Pressable
                key={a.label}
                onPress={() => navigate(a.screen)}
                style={({ pressed }) => [
                  styles.actionBtn,
                  { opacity: pressed ? 0.75 : 1 },
                ]}
              >
                <Icon name={a.icon} size={20} color={C.green} />
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.5,
    marginBottom: 16,
  },
  filterWrap: {
    marginBottom: 14,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 56,
    paddingHorizontal: 24,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: C.text,
  },
  emptySubtitle: {
    fontSize: 14,
    color: C.text3,
    textAlign: 'center',
    lineHeight: 20,
  },
  list: {
    gap: 8,
    marginBottom: 20,
  },
  item: {
    backgroundColor: C.surface2,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: C.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: C.surface3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: C.text,
    marginBottom: 2,
  },
  itemDate: {
    fontSize: 12,
    color: C.text3,
  },
  statusCol: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    maxWidth: 120,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 12,
    color: C.text3,
    textAlign: 'right',
  },
  actionsSection: {
    marginTop: 10,
  },
  actionsTitle: {
    fontSize: 11,
    color: C.text3,
    fontWeight: '700',
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
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 6,
    alignItems: 'center',
    gap: 6,
  },
  actionLabel: {
    fontSize: 11,
    color: C.text2,
    textAlign: 'center',
  },
})

export default RequestsScreen
export * from './RequestDetailScreen'
