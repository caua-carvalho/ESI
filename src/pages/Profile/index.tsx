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
import { Card, Icon } from '@/components/ui'
import { USER } from '@/data'
import type { Screen, NavigateFunction } from '@/types'

export interface ProfileScreenProps {
  nav?: NavigateFunction
  onNavigate?: (screen: Screen, params?: Record<string, unknown>) => void
}

export function ProfileScreen({ nav, onNavigate }: ProfileScreenProps) {
  const navigate: NavigateFunction = nav ?? onNavigate ?? (() => {})

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Perfil</Text>
          <View style={styles.userRow}>
            <View style={styles.avatarBox}>
              <Text style={styles.avatarRank}>{USER.rank}</Text>
              <Text style={styles.avatarInitials}>{USER.warName.slice(0, 3)}</Text>
            </View>
            <View>
              <Text style={styles.userRank}>{USER.rank}</Text>
              <Text style={styles.userName}>{USER.warName}</Text>
              <Text style={styles.userCompany}>{USER.company}</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <Card style={styles.infoCard}>
            <Text style={styles.cardHeader}>Dados pessoais</Text>
            {[
              ['Patente',       USER.rank],
              ['Nome de guerra', USER.warName],
              ['Turma',         USER.classYear],
              ['Antiguidade',   String(USER.seniority)],
              ['Companhia',     USER.company],
              ['Esquadrilha',   USER.squadron],
            ].map(([l, v], i) => (
              <View
                key={l}
                style={[
                  styles.dataRow,
                  { borderTopWidth: i > 0 ? 1 : 0 },
                ]}
              >
                <Text style={styles.dataLabel}>{l}</Text>
                <Text style={styles.dataValue}>{v}</Text>
              </View>
            ))}
          </Card>

          {[
            { label: 'Configurações', icon: 'settings', screen: 'settings' as Screen },
          ].map(item => (
            <Pressable
              key={item.label}
              onPress={() => navigate(item.screen)}
              style={({ pressed }) => [
                styles.menuItem,
                { opacity: pressed ? 0.75 : 1 },
              ]}
            >
              <View style={styles.menuIconBox}>
                <Icon name={item.icon} size={18} color={C.text2} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Icon name="chevR" size={18} color={C.text3} />
            </Pressable>
          ))}
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
    paddingBottom: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.5,
    marginBottom: 22,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarBox: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: C.surface3,
    borderWidth: 2,
    borderColor: C.borderMed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarRank: {
    fontSize: 12,
    fontWeight: '700',
    color: C.green,
  },
  avatarInitials: {
    fontSize: 16,
    fontWeight: '700',
    color: C.text,
  },
  userRank: {
    fontSize: 11,
    color: C.text3,
    letterSpacing: 0.7,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: C.text,
    letterSpacing: -0.3,
  },
  userCompany: {
    fontSize: 14,
    color: C.text2,
  },
  body: {
    paddingHorizontal: 20,
  },
  infoCard: {
    marginBottom: 14,
  },
  cardHeader: {
    fontSize: 11,
    color: C.text3,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 12,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopColor: C.border,
  },
  dataLabel: {
    fontSize: 14,
    color: C.text2,
  },
  dataValue: {
    fontSize: 14,
    fontWeight: '500',
    color: C.text,
  },
  menuItem: {
    backgroundColor: C.surface2,
    borderRadius: 14,
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: C.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  menuIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: C.surface3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    color: C.text,
  },
})

export default ProfileScreen
export * from './SettingsScreen'
