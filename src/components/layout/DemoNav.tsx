import React, { useState } from 'react'
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { C } from '@/constants/theme'
import { REQUESTS, NOTIFS } from '@/data'
import type { Screen, NavigateFunction } from '@/types'

export interface DemoNavProps {
  nav: NavigateFunction
}

export function DemoNav({ nav }: DemoNavProps) {
  const [open, setOpen] = useState(false)
  const screens: { label: string; screen: Screen; params?: Record<string, unknown> }[] = [
    { label: 'Troca recebida',     screen: 'swap-received' },
    { label: 'Revisão de troca',   screen: 'review-swap' },
    { label: 'Troca enviada',      screen: 'swap-sent' },
    { label: 'Novo pernoite',      screen: 'new-overnight' },
    { label: 'Pernoite enviado',   screen: 'overnight-sent' },
    { label: 'Novo atestado',      screen: 'new-medical' },
    { label: 'Atestado enviado',   screen: 'medical-sent' },
    { label: 'Atestado aprovado',  screen: 'medical-approved' },
    { label: 'Atestado recusado',  screen: 'medical-rejected' },
    { label: 'Detalhe solicitação', screen: 'request-detail', params: { req: REQUESTS[0] } },
    { label: 'Detalhe aviso',      screen: 'notification-detail', params: { n: NOTIFS[0] } },
    { label: 'Reserva',            screen: 'reserve-convocation' },
    { label: 'Loading state',      screen: 'state-loading' },
    { label: 'Error state',        screen: 'state-error' },
    { label: 'Empty state',        screen: 'state-empty' },
    { label: 'Sem permissão',      screen: 'state-no-permission' },
  ]

  return (
    <View style={styles.container}>
      {open && (
        <View style={styles.menu}>
          <ScrollView style={styles.menuScroll} showsVerticalScrollIndicator={false}>
            {screens.map(s => (
              <Pressable
                key={s.screen + s.label}
                onPress={() => {
                  nav(s.screen, s.params)
                  setOpen(false)
                }}
                style={({ pressed }) => [
                  styles.menuItem,
                  { opacity: pressed ? 0.6 : 1 },
                ]}
              >
                <Text style={styles.menuItemText}>{s.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      <Pressable
        onPress={() => setOpen(o => !o)}
        style={({ pressed }) => [
          styles.triggerBtn,
          { opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <Text style={styles.triggerText}>{open ? '✕ fechar' : '⊞ telas'}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 90,
    right: 12,
    zIndex: 200,
  },
  menu: {
    position: 'absolute',
    bottom: 36,
    right: 0,
    width: 200,
    maxHeight: 340,
    backgroundColor: C.elevated,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: C.borderMed,
    paddingVertical: 8,
  },
  menuScroll: {
    maxHeight: 320,
  },
  menuItem: {
    paddingVertical: 9,
    paddingHorizontal: 14,
  },
  menuItemText: {
    fontSize: 13,
    color: C.text2,
  },
  triggerBtn: {
    backgroundColor: C.elevated,
    borderWidth: 1,
    borderColor: C.borderMed,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  triggerText: {
    fontSize: 12,
    color: C.text3,
  },
})

export default DemoNav
