import React from 'react'
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { C } from '@/constants/theme'
import { Icon } from '@/components/ui'
import { NOTIFS } from '@/data'
import type { Screen, NavigateFunction, NotificationItem } from '@/types'

export interface NotificationsScreenProps {
  nav?: NavigateFunction
  onNavigate?: (screen: Screen, params?: Record<string, unknown>) => void
}

export function NotificationsScreen({ nav, onNavigate }: NotificationsScreenProps) {
  const navigate: NavigateFunction = nav ?? onNavigate ?? (() => {})
  const groups: Record<string, NotificationItem[]> = {
    'Hoje':       NOTIFS.filter(n => n.day === 'today'),
    'Ontem':      NOTIFS.filter(n => n.day === 'yesterday'),
    'Anteriores': NOTIFS.filter(n => n.day === 'earlier'),
  }

  const notifIcon: Record<string, string> = {
    'swap-received':      'swap',
    'overnight-approved': 'moon',
    'swap-approved':      'check',
    'medical-approved':   'medical',
    'reserve':            'warning',
    'schedule-update':    'calendar',
  }

  const notifColor: Record<string, string> = {
    'swap-received':      C.blue,
    'overnight-approved': C.green,
    'swap-approved':      C.green,
    'medical-approved':   C.green,
    'reserve':            C.amber,
    'schedule-update':    C.text2,
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Avisos</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {Object.entries(groups).map(([title, items]) =>
          items.length === 0 ? null : (
            <View key={title} style={styles.group}>
              <Text style={styles.groupTitle}>{title}</Text>
              <View style={styles.groupList}>
                {items.map(n => (
                  <Pressable
                    key={n.id}
                    onPress={() =>
                      n.type === 'reserve'
                        ? navigate('reserve-convocation')
                        : navigate('notification-detail', { n })
                    }
                    style={({ pressed }) => [
                      styles.item,
                      {
                        borderColor: n.read ? C.border : C.borderMed,
                        opacity: pressed ? 0.75 : 1,
                      },
                    ]}
                  >
                    {!n.read && <View style={styles.unreadDot} />}
                    <View
                      style={[
                        styles.iconBox,
                        { marginLeft: n.read ? 0 : 8 },
                      ]}
                    >
                      <Icon
                        name={notifIcon[n.type] ?? 'bell'}
                        size={17}
                        color={notifColor[n.type] ?? C.text2}
                      />
                    </View>
                    <View style={styles.itemInfo}>
                      <View style={styles.itemTopRow}>
                        <Text
                          style={[
                            styles.itemTitle,
                            { fontWeight: n.read ? '400' : '600' },
                          ]}
                          numberOfLines={1}
                        >
                          {n.title}
                        </Text>
                        <Text style={styles.itemTime}>{n.time}</Text>
                      </View>
                      <Text style={styles.itemBody} numberOfLines={1}>
                        {n.body}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </View>
          )
        )}
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
    paddingBottom: 14,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.5,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 36,
  },
  group: {
    marginBottom: 20,
  },
  groupTitle: {
    fontSize: 11,
    color: C.text3,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 8,
    paddingLeft: 2,
  },
  groupList: {
    gap: 4,
  },
  item: {
    backgroundColor: C.surface2,
    borderRadius: 14,
    paddingVertical: 11,
    paddingHorizontal: 13,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 11,
  },
  unreadDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: C.blue,
    alignSelf: 'center',
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 11,
    backgroundColor: C.surface3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemInfo: {
    flex: 1,
  },
  itemTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  itemTitle: {
    fontSize: 14,
    color: C.text,
    flex: 1,
  },
  itemTime: {
    fontSize: 11,
    color: C.text3,
    marginLeft: 8,
  },
  itemBody: {
    fontSize: 13,
    color: C.text3,
    lineHeight: 18,
  },
})

export default NotificationsScreen
export * from './NotificationDetailScreen'
export * from './ReserveConvocationScreen'
