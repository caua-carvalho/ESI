import React from 'react'
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { C, codeColor } from '@/constants/theme'
import { StatusBadge, PrimaryBtn, SecondaryBtn } from '@/components/ui'
import type { ServiceItem, NavigateFunction, GoBackFunction } from '@/types'

export interface ServiceDetailSheetProps {
  svc: ServiceItem
  nav: NavigateFunction
  goBack: GoBackFunction
}

export function ServiceDetailSheet({
  svc,
  nav,
  goBack,
}: ServiceDetailSheetProps) {
  const cl = codeColor(svc.code)

  return (
    <Pressable style={styles.overlay} onPress={goBack}>
      <Pressable style={styles.sheet} onPress={e => e.stopPropagation()}>
        <View style={styles.dragHandle} />
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.headerLabel}>Serviço</Text>
            <StatusBadge status={svc.status} />
          </View>

          <View style={styles.mainInfo}>
            <View
              style={[
                styles.codeBox,
                { backgroundColor: cl.bg, borderColor: `${cl.fg}28` },
              ]}
            >
              <Text style={[styles.codeText, { color: cl.fg }]}>{svc.code}</Text>
            </View>
            <View>
              <Text style={styles.postTitle}>{svc.post}</Text>
              <Text style={styles.periodSubtitle}>{svc.period}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.grid}>
            {[
              { l: 'Data',    v: '28 de setembro' },
              { l: 'Período', v: svc.period },
              { l: 'Horário', v: `${svc.start} — ${svc.end}` },
              { l: 'Posto',   v: svc.post },
            ].map(item => (
              <View key={item.l} style={styles.gridItem}>
                <Text style={styles.gridLabel}>{item.l}</Text>
                <Text style={styles.gridValue}>{item.v}</Text>
              </View>
            ))}
          </View>

          <View style={styles.actions}>
            <PrimaryBtn
              label="Solicitar troca"
              onPress={() => {
                goBack()
                nav('new-swap')
              }}
            />
            <SecondaryBtn label="Fechar" onPress={goBack} />
          </View>
        </ScrollView>
      </Pressable>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.72)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: C.surface,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 1,
    borderColor: C.border,
    maxHeight: '85%',
  },
  dragHandle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    backgroundColor: C.border,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerLabel: {
    fontSize: 12,
    color: C.text2,
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 20,
  },
  codeBox: {
    width: 56,
    height: 56,
    borderRadius: 18,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeText: {
    fontSize: 16,
    fontWeight: '700',
  },
  postTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: C.text,
  },
  periodSubtitle: {
    fontSize: 14,
    color: C.text2,
  },
  divider: {
    height: 1,
    backgroundColor: C.border,
    marginBottom: 18,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 24,
  },
  gridItem: {
    width: '45%',
  },
  gridLabel: {
    fontSize: 10,
    color: C.text3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  gridValue: {
    fontSize: 15,
    fontWeight: '500',
    color: C.text,
  },
  actions: {
    gap: 10,
  },
})

export default ServiceDetailSheet
