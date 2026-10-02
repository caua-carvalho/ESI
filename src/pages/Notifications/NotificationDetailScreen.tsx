import React from 'react'
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { C } from '@/constants/theme'
import { AppBar, Card, PrimaryBtn } from '@/components/ui'
import { NOTIFS } from '@/data'
import type { NotificationItem, NavigateFunction, GoBackFunction } from '@/types'

export interface NotificationDetailScreenProps {
  goBack: GoBackFunction
  nav: NavigateFunction
  notif?: NotificationItem
}

export function NotificationDetailScreen({
  goBack,
  nav,
  notif,
}: NotificationDetailScreenProps) {
  const n = notif ?? NOTIFS[0]

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppBar title="Aviso" onBack={goBack} />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.timeTag}>Hoje · {n.time}</Text>
          <Text style={styles.title}>{n.title}</Text>
        </View>
        <Card style={styles.card}>
          <Text style={styles.body}>{n.body}</Text>
        </Card>
        <PrimaryBtn label="Ver na escala" onPress={() => nav('schedule')} />
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
  header: {
    marginBottom: 18,
  },
  timeTag: {
    fontSize: 11,
    color: C.text3,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: C.text,
    lineHeight: 26,
  },
  card: {
    marginBottom: 24,
  },
  body: {
    fontSize: 15,
    color: C.text2,
    lineHeight: 22,
  },
})

export default NotificationDetailScreen
