import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { C } from '@/constants/theme'
import { Icon } from '@/components/ui'
import type { Screen } from '@/types'

export const TABS: { id: Screen; label: string; icon: string }[] = [
  { id: 'home',          label: 'Início',       icon: 'home'     },
  { id: 'schedule',      label: 'Escala',       icon: 'calendar' },
  { id: 'requests',      label: 'Solicitações', icon: 'doc'      },
  { id: 'notifications', label: 'Avisos',       icon: 'bell'     },
  { id: 'profile',       label: 'Perfil',       icon: 'person'   },
]

export interface TabBarProps {
  active: Screen
  onSelect: (s: Screen) => void
  badge: number
}

export function TabBar({ active, onSelect, badge }: TabBarProps) {
  return (
    <View style={styles.container}>
      {TABS.map(tab => {
        const isActive = active === tab.id
        return (
          <Pressable
            key={tab.id}
            onPress={() => onSelect(tab.id)}
            style={({ pressed }) => [
              styles.tabBtn,
              { opacity: pressed ? 0.75 : 1 },
            ]}
          >
            <View style={styles.iconWrap}>
              <Icon
                name={tab.icon}
                size={22}
                color={isActive ? C.green : C.text3}
              />
              {tab.id === 'notifications' && badge > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{badge}</Text>
                </View>
              )}
            </View>
            <Text
              style={[
                styles.tabLabel,
                {
                  color: isActive ? C.green : C.text3,
                  fontWeight: isActive ? '600' : '400',
                },
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: C.surface,
    borderTopWidth: 1,
    borderTopColor: C.border,
    paddingBottom: 20,
    paddingTop: 8,
  },
  tabBtn: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
    paddingVertical: 0,
  },
  iconWrap: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -3,
    right: -5,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: C.red,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: C.surface,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#ffffff',
  },
  tabLabel: {
    fontSize: 10,
  },
})

export default TabBar
